import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGooglePlusG,
  FaHome,
} from "react-icons/fa";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";

function Footer() {
  return (
    <div>
      <footer className="page-footer font-small unique-color-dark">
        <div style={{ backgroundColor: "#ff4d99" }}>
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 style={{ color: "white" }} className="mb-0">
                  Get connected with us on social networks!
                </h6>
              </div>
              <div className="col-md-6 col-lg-7 text-center text-md-right">
                <a style={{ paddingRight: "1rem" }} href="/">
                  <FaFacebook size="25" color="white" />
                </a>
                <a style={{ paddingRight: "1rem" }} href="/" className="tw-ic">
                  <FaTwitter size="25" color="white" />
                </a>
                <a
                  style={{ paddingRight: "1rem" }}
                  href="/"
                  className="gplus-ic"
                >
                  <FaGooglePlusG size="25" color="white" />
                </a>
                <a style={{ paddingRight: "1rem" }} href="/" className="li-ic">
                  <FaLinkedin size="25" color="white" />
                </a>
                <a style={{ paddingRight: "1rem" }} href="/" className="ins-ic">
                  <FaInstagram size="25" color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Rani Printers</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                Our Offset printing website gives the best outcome to each and
                every customer. We are one of the leading and most trusted
                printing experts in this field
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Products</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="/category/printproducts">Calender</a>
              </p>
              <p>
                <a href="/category/invitation">Wedding card</a>
              </p>
              <p>
                <a href="/category/visitingcard">Visiting Card</a>
              </p>
              <p>
                <a href="/category/diary"> Diary</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="/login">Login</a>
              </p>
              <p>
                <a href="/Cart">Cart</a>
              </p>
              <p>
                <a href="/contact">Contact Us</a>
              </p>
              <p>
                <a href="/about">About Us</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <FaHome size="15" color="#ff4d99" /> Somewhere in , Ramnad
              </p>
              <p>
                <IoIosMail size="15" color="#ff4d99" /> offsetprint@gmail.com
              </p>
              <p>
                <IoIosCall size="15" color="#ff4d99" /> +91 8056755365
              </p>
              <p>
                <MdPhoneIphone size="15" color="#ff4d99" /> 0431-11-22-33{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: "right",
            paddingBottom: "20px",
            paddingRight: "30px",
          }}
        >
          Designed By <b style={{ color: "#ff4d99" }}>Veera Harish</b>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
