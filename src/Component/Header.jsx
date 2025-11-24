import logo from "../assets/images/mv.png";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Header = () => {
  return (
    <>
      <section id="navbar">
        <div className="container-fluid px-5 py-3 shadow">
          <div className="row align-items-center">
            <div className="col d-flex align-items-center flex-row">
              <Link to="">
                <img
                  src={logo}
                  alt=""
                  width={50}
                  className="rounded-2 shadow"
                />
              </Link>
              <ul className="d-flex list-unstyled mx-4">
                <li><a href="/" className="text-dark text-capitalize text-decoration-none">home</a></li>
              </ul>
            </div>
            <div className="col text-end">
              <Link to='/addProduct'>
                <button className="btn btn-outline-primary text-capitalize">
                  add <b>+</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;