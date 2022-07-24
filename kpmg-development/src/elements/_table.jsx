import { useState, useEffect } from 'react';

export default function Table(props) {

    const [companyDropdownOptions, setCompanyDropdownOptions] = useState(createCompanyOptions);
    const [filteredData, setFilteredData] = useState();
    const [sectorFilter, setSectorFilter] = useState(false);
    const [sortFilter, setSortFilter] = useState(false);

    function createCompanyOptions(filter) {
        var filterData = [];

        filterData = props.data.map((item) => {
            if (!filterData.includes(item.sector)) {
                return item.sector;
            }
        });

        const filteredArray = filterData.filter(function (ele, pos) {
            return filterData.indexOf(ele) == pos;
        })
        return filteredArray;
    }

    function onChangeCompanyFilter(event) {
        const filter = event.target.value;

        if (filter !== null && filter !== "" && typeof filter !== "undefined") {
            var array = props.data.filter(category => category.sector === filter);
            setSectorFilter(true);
            setFilteredData(array);
        }
    }

    function onChangeFeeSort(event) {
        const filter = event.target.value;
        var dataSource;

        if (filter !== null && filter !== "" && typeof filter !== "undefined") {
            if (sectorFilter) {
                dataSource = filteredData;
            } else {
                dataSource = props.data;
            }

            if (filter === "HighToLow") {
                var array = [...dataSource].sort((a, b) => b['fees'].amount - a['fees'].amount);
                setSortFilter(true);
                setFilteredData(array);

            } else if (filter === "LowToHigh") {
                var array = [...dataSource].sort((a, b) => a['fees'].amount - b['fees'].amount);
                setSortFilter(true);
                setFilteredData(array);
            }
        }
    }

    useEffect(() => {

    }, [filteredData]);


    return (
        <>
            <select onChange={onChangeCompanyFilter}>
                <option selected>Filter by Sector</option>
                {companyDropdownOptions && companyDropdownOptions.map((item, i) => (
                    <>
                        <option key={i} value={item}>{item}</option>
                    </>
                ))}
            </select>

            <select onChange={onChangeFeeSort}>
                <option selected>Sort by Fee</option>
                <option key="0" value="HighToLow">High to Low</option>
                <option key="1" value="LowToHigh">Low to High</option>
            </select>

            <table>
                <thead>
                <tr>
                    {props.data[0] && Object.entries(props.data[0]).map((key, index) => {
                        return (
                            <th key={index}>
                                {key[0]}
                            </th>
                        );
                    })}
                </tr>
                </thead>
                <tbody>
                        {props.data && !filteredData && props.data.map((item, i) => (
                            <tr key={i}> {
                                item && Object.entries(item).map((property, i) => (
                                    <td key={i}>
                                        {property[1] && typeof property[1] === 'object' ? (
                                            <>
                                                {property[1].amount ? property[1].amount : (
                                                <>
                                                    {
                                                        property[1] && Object.entries(property[1]).map((additionalProperty, i) => (
                                                                additionalProperty && additionalProperty.map((prop, i) => (
                                                                    <p key={i}>
                                                                        {prop}
                                                                    </p>
                                                                ))
                                                        ))
                                                        }
                                                </>
                                                )}
                                            </>
                                        ): property[1]}
                                    </td>
                                ))
                            } </tr>
                        ))}

                        {props.data && filteredData && filteredData.map((item, i) => (
                            <tr key={i}> {
                                item && Object.entries(item).map((property, i) => (
                                    <td key={i}>
                                        {property[1] && typeof property[1] === 'object' ? (
                                            <>
                                                {property[1].amount ? property[1].amount : (
                                                    <>
                                                        {
                                                            property[1] && Object.entries(property[1]).map((additionalProperty, i) => (
                                                                additionalProperty && additionalProperty.map((prop, i) => (
                                                                    <p key={i}>
                                                                        {prop}
                                                                    </p>
                                                                ))
                                                            ))
                                                        }
                                                    </>
                                                )}
                                            </>
                                        ) : property[1]}
                                    </td>
                                ))
                            } </tr>
                        ))}
                </tbody>
            </table>
        </>

    );
}