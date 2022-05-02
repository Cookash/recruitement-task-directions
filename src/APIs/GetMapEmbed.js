import { React } from "react";

export default function GetMapEmbed(props) {
  let start = props.origin;
  let finish = props.destination;
  const token = process.env.REACT_APP_GOOGLEMAPS;
  const url = `https://www.google.com/maps/embed/v1/directions?key=${token}&mode=driving&origin=${start}&destination=${finish}`;
  return (
    <iframe
      title="destination-ui"
      width="1200"
      height="400"
      frameBorder="0"
      referrerPolicy="no-referrer-when-downgrade"
      src={url}
      allowFullScreen
    ></iframe>
  );
}
