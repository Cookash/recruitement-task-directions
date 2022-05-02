import { Component, React } from "react";
import GetRouteDetails from "../APIs/GetRouteDetails";
import RouteCalculation from "./RouteCalculation";

export default class ShowRouteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: "loading...",
      destination: "loading...",
      distance: "loading...",
      duration: "loading...",
    };
  }
  componentDidMount() {
    GetRouteDetails(this.props.start, this.props.finish).then((response) => {
      this.setState({ adress: response["adress"] });
      this.setState({ destination: response["destination"] });
      this.setState({ distance: response["distance"] });
      this.setState({ duration: response["duration"] });
    });
  }
  render() {
    return (
      <>
        <h1>Details</h1>
        <p>Origin Adress: {this.state.adress}</p>
        <p>Destination Adress: {this.state.destination} km</p>
        <p>Distance: {(this.state.distance / 1000).toFixed(1)}</p>
        <p>Duration: {this.state.duration}</p>
        <RouteCalculation distance={this.state.distance} />
      </>
    );
  }
}
