import GetCoordinates from "./GetCoordinates";

export default async function GetRouteDetails(arr1, arr2) {
  let start = await GetCoordinates(arr1);
  let finish = await GetCoordinates(arr2);
  const google = window.google;
  var service = new google.maps.DistanceMatrixService();
  try {
    let data = await service.getDistanceMatrix({
      origins: [
        {
          lat: start[0],
          lng: start[1],
        },
        arr1,
      ],
      destinations: [
        arr2,
        {
          lat: finish[0],
          lng: finish[1],
        },
      ],
      travelMode: "DRIVING",
      unitSystem: 0,
      avoidHighways: false,
      avoidTolls: false,
    });
    const detailsList = {
      adress: data.originAddresses[0],
      destination: data.destinationAddresses[0],
      distance: data.rows[0].elements[0].distance["value"],
      duration: data.rows[0].elements[0].duration["text"],
    };
    return detailsList;
  } catch (e) {
    console.log("Theere was an error with the API");
  }
}
