import axios from 'axios';


export default async function GetCoordinates(arr) {
    const crudentials = require("../config.json")
    const token = crudentials.SearchToken
    const fixedName = arr.replace(/\s/g, '+')
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${fixedName}.json?access_token=${token}`
    let coordinates
    await axios.get(url)
        .then(function(response) {
        const data = (response.data['features'][0].geometry.coordinates.reverse());
        coordinates = data
    })
    return coordinates
    /*return (response.data['features'][0].geometry.coordinates);*/
}