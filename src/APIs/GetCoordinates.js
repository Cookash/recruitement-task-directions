import axios from 'axios';


export default async function GetCoordinates(arr) {
    const token = process.env.REACT_APP_COORDINATES;
    const fixedName = arr.replace(/\s/g, '+')
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${fixedName}.json?access_token=${token}`
    let coordinates
    try {
        await axios.get(url)
        .then(function(response) {
        const data = (response.data['features'][0].geometry.coordinates.reverse());
        coordinates = data
    })
    } catch (e) {
        console.log('There was an error with API, please try again')
        return 'error'
    }
    return coordinates
    /*return (response.data['features'][0].geometry.coordinates);*/
}