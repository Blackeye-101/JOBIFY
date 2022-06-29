import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found"></img>
        <h3>Oops! something went bananas</h3>
        <p>Sorry, can't find the page you requested for</p>
        <Link to="/">Retrace your steps</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
