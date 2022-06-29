import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm the Doctor. Well, they call me the Doctor. I don't know why. I
            call me the Doctor too. I still don't know why. All I've got to do
            is pass as an ordinary human being. Simple. What could possibly go
            wrong?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="Job-hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
