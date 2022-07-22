import { useState, useEffect } from 'react';

export default function Filters(props) {

    const [companyFilter, setCompanyFilter] = useState();
    const [filter, setFilter] = useState();

    function onChangeCompanyFilter(event) {
        console.log(event.target.value);
        setFilter(event.target.value);
    }

    useEffect(() => {
        var mount = true;
        var filterData = [];

        filterData = props.data.map((item) => {
            if (!filterData.includes(item.sector)) {
                return item.sector;
            }
        });

        const filteredArray = filterData.filter(function (ele, pos) {
            return filterData.indexOf(ele) == pos;
        })

        if (filter) {
            const array = filteredArray.filter(category => category === filter)
            setCompanyFilter(array);
        } else {
            setCompanyFilter(filteredArray);
        }

        return () => { mount = false; }

    }, [filter]);

    return (
        <>
            <select onChange={onChangeCompanyFilter}>

                {companyFilter && companyFilter.map((item, i) => (
                    <>
                        <option key={i} value={item}>{item}</option>
                    </>
                ))}
          
            </select>

           
        </>

    );
}