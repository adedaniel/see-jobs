import React from "react"
import { Link } from "gatsby"
import Image from "./image"
import { colors } from "./styles/styles"
import Typed from "react-typed"

import { DefaultButton } from "./button"

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row vh100">
          <div className="col-md-6 captionParent h90">
            <div className="captionArea responsiveCenter">
              <h1 className="bigText">Need a Job? Relax</h1>

              <h2 className="mb-5">
                Let us handle the <span className="break"></span>
                <span className="hoverEffect smallerText">
                  <Typed
                    strings={[
                      "search",
                      "analysis",
                      "personalization",
                      "job^3000",
                    ]}
                    typeSpeed={40}
                    backSpeed={40}
                    backDelay={2000}
                    smartBackspace={true}
                    loop={true}
                  />
                </span>
              </h2>
              <Link to="/signup">
                <DefaultButton
                  color="primary"
                  padding="13px 15px"
                  width="75%"
                  font="larger"
                >
                  Get Started
                  <span className="mdi mdi-chevron-right"></span>
                </DefaultButton>
              </Link>
            </div>
          </div>
          <div className="col-md-6 "></div>
          <div className="text-center w-100">
            <div className="animated infinite bounce slow">
              <i className="fa fa-angle-down angles" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bgLight">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 captionParent h-100">
              <div className="captionArea">
                <h1 className="colorPrimary">Okay, We Know...</h1>
                <h5>
                  You need a Job.
                  <br />
                  Or maybe you need a job with a better pay... Or you're not
                  really enjoying working at your present place... Or there's
                  this really nice company you wanna work at...or...
                  <br />
                  <br />
                  You get the point; We all want what's best for ourselves
                  because we deserve it. But sometimes, we don't always seem to
                  find the right places when we need them...
                  <br />
                  <strong> And that's why we're here!</strong>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 bgLight">
        <div className="container">
          <div className="row">
            <div className="col-md-6 captionParent h-100">
              <div className="captionArea">
                <h1 className="colorPrimary">We're looking out for you</h1>
                <h5>
                  Our job is to save you lots of productive time spent on job
                  seeking. In other words,
                  <br />
                  <br />
                  We'll do the <span className="hoverEffect">searching</span>,
                  you'll do the <span className="hoverEffect">choosing</span>
                </h5>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="py-5 ">
        <div className="container text-center">
          <h1 className="hoverEffect d-inline ">What We Do</h1>
          <div className="row mt-5">
            <div className="col-sm-2">
              <p> Get your preference list</p>
            </div>
            <div className="col-sm-1 p-0">
              <div className="line"></div>
            </div>

            <div className="col-sm-2">
              <p>Spread out</p>
            </div>
            <div className="col-sm-1 p-0">
              <div className="line"></div>
            </div>

            <div className="col-sm-2">Cook the findings to your taste</div>
            <div className="col-sm-1 p-0">
              <div className="line"></div>
            </div>
            <div className="col-sm-2">Dish out exactly what you need</div>
          </div>
        </div>
      </div>
      <div className="py-5 bgPrimary text-white text-center">
        <div className="container">
          <h1>We're everywhere, everytime...</h1>
          <div className="row">
            <div className="col-md-4 my-3">
              <h4>Relevant</h4>
              <p>Always see jobs perfect for you</p>
            </div>
            <div className="col-md-4 my-3">
              <h4>Timely</h4>
              <p>
                Real-time job updates so you can grab every opportunity on the
                spot
              </p>
            </div>
            <div className="col-md-4 my-3">
              <h4>Informing</h4>
              <p>So you're the first person to get there</p>
            </div>
            <div className="col-md-4 my-3">
              <h4>Accessible</h4>
              <p>So you can use it anywhere and anytime</p>
            </div>
            <div className="col-md-4 my-3">
              <h4>Present</h4>
              <p>We're watching everywhere so you don't miss a thing</p>
            </div>
            <div className="col-md-4 my-3">
              <h4>Detailed</h4>
              <p>Designed from spacebar to spacebar, with you in mind</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 captionParent h-100">
              <div className="captionArea">
                <h1 className="colorPrimary">See?</h1>
                <h5>
                  So why don't you sit back, sip some coffee, go on that date or
                  play that guitar while we dish the best job offers to your
                  table!
                </h5>
              </div>
            </div>
          </div>
          <div className="text-center my-5">
            <h2>
              We <span className="hoverEffect"> See Jobs</span>
            </h2>
            <p className="mt-3">
              and you should have clicked that button by now... 😉
            </p>
            <Link to="/signup">
              <DefaultButton
                color="primary"
                padding="8px 15px"
                width="50%"
                font="larger"
              >
                Get Started
              </DefaultButton>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bigText {
          font-weight: 600;
          font-size: -webkit-xxx-large;
        }

        .line {
          width: 100%;
          height: 5px;
          margin: 30px 0;
          border-radius: 5px;
          background: #70c185;
        }
        .bgLight {
          background-color: ${colors.offWhite};
        }
        .colorPrimary {
          color: ${colors.primary};
        }
        .bgPrimary {
          background-color: ${colors.primary};
        }
        .h50 {
          height: ;
        }

        .h90 {
          height: 93%;
        }
        .vh100 {
          height: calc(100vh - 60px);
        }
        .smallerText {
          font-weight: 600;
        }
        .angles {
          color: ${colors.primary};
          font-size: 40px;
        }
        .captionParent {
          display: table;
        }
        .captionArea {
          display: table-cell;
          vertical-align: middle;
        }
        .hoverEffect {
          background: linear-gradient(
            to bottom,
            ${colors.primary} 0%,
            ${colors.primary} 100%
          );
          background-position: 0 95%;
          background-repeat: repeat-x;
          background-size: 9px 9px;
          color: #000;
          text-decoration: none;
          transition: all 0.5s;
        }
        .hoverEffect:hover {
          background-size: 9px 50px;
          color: #fff;
        }
        @media (max-width: 576px) {
          .responsiveCenter {
            text-align: center;
          }
          .line {
            -ms-transform: rotate(90deg);
            transform: rotate(90deg);
            width: 55px;
            margin: 30px auto;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .break {
            display: block;
          }
        }
        @media (max-width: 539px) {
          .break {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}