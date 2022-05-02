import { Link } from "react-router-dom";

export default function GoBackButton(props) {
  return (
    <Link to={props.where}>
      <button>{props.description}</button>
    </Link>
  );
}
