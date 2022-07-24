import { useState, useEffect } from 'react';

export default function Filters(props) {

    const [companyOptions, setCompanyOptions] = useState(createCompanyOptions);
    const [filteredCompanyOptions, setCompanyFilters] = useState();

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

        console.log("company options", filteredArray);

        return filteredArray;
    }

    function onChangeCompanyFilter(event) {

        console.log("props.data", props.data);


        const filter = event.target.value;
        console.log(filter);

        if (filter !== null && filter !== "") {
            var array = props.data.filter(category => category.sector === filter )
            console.log("after filtered by option", array);


            setCompanyFilters(array);
        }
    }

    useEffect(() => {
        var mount = true;
       

        return () => { mount = false; }

    }, [filteredCompanyOptions]);

    return (
        <>
            <select onChange={onChangeCompanyFilter}>

                {companyOptions && !filteredCompanyOptions && companyOptions.map((item, i) => (
                    <>
                        <option key={i} value={item}>{item}</option>
                    </>
                ))}

                {companyOptions && filteredCompanyOptions && filteredCompanyOptions.map((item, i) => (
                    <>
                        <option key={i} value={item}>{item}</option>
                    </>
                ))}
            </select>

           
        </>

    );
}