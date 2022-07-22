import { useState } from 'react';

export default function Table(props) {

    const [data, setData] = useState(props.data);


    return (
        <>
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
                    <tr>
                        {data && data.map((item) => (
                            item && Object.entries(item).map((property, index) => (
                                <td key={index}>
                                    {property[1] && typeof property[1] === 'object' ? property[1][1] : property[1]}
                                </td>
                            ))
                        ))}
                    </tr>
                </tbody>
            </table>
        </>

    );
}