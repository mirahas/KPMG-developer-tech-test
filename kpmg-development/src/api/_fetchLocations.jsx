
export async function fetchLocations() {
    const url = 'https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13';
    var data;

    return fetch(url, {
        method: 'GET',
        content: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(json => data = json)
        .catch(errors => console.log(errors));

    return data;

}
