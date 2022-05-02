import axios from "axios";

export default async function GetCoordinates(arr) {
  const token = process.env.REACT_APP_COORDINATES;
  const fixedName = arr.replace(/\s/g, "+");
  try {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${fixedName}.json?access_token=${token}`;
    let coordinates;
    await axios.get(url).then(function (response) {
      const data = response.data["features"][0].geometry.coordinates.reverse();
      coordinates = data;
    });
    return coordinates;
  } catch (e) {
    console.log("Theere was an error with the API");
  }
}
