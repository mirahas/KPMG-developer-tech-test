import { useState } from 'react';
import Filters from './_filters.jsx';

export default function Table(props) {

    const [data, setData] = useState(props.data);


    return (
        <>
            <Filters data={props.data}/>
            <table>
                <thead>
                <tr>
                    {data[0] && Object.entries(data[0]).map((key, index) => {
                        return (
                            <th key={index}>
                                {key[0]}
                            </th>
                        );
                    })}
                </tr>
                </thead>
                <tbody>
                        {data && data.map((item, i) => (
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
                </tbody>
            </table>
        </>

    );
}