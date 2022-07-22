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
            </table>
        </>

    );
}