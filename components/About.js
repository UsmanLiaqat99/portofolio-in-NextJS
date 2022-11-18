import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="container w-4/5 mx-auto">
      <h1 className="text-5xl font-bold text-center uppercase pt-20">
        About <span className="text-yellow-400">Me</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
        <div>
          <h1 className="text-3xl uppercase font-bold">Personal Info</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-lg">
              <p className="text-gray-400 my-4">
                First Name: <span className="text-white">Usman</span>
              </p>
              <p className="text-gray-400 my-4">
                Age: <span className="text-white">18 Years</span>
              </p>
              <p className="text-gray-400 my-4">
                Freelance: <span className="text-white">Available</span>
              </p>
              <p className="text-gray-400 my-4">
                Instagram: <span className="text-white">@usman_liaqat_444</span>
              </p>
              {/* <p className="text-gray-400 my-4">
                YouTube: <span className="text-white">YouTube</span>
              </p> */}
            </div>
            <div className="text-lg">
              <p className="text-gray-400 my-4">
                Last Name: <span className="text-white">Liaqat</span>
              </p>
              <p className="text-gray-400 my-4">
                Nationality: <span className="text-white">Pakistani</span>
              </p>
              <p className="text-gray-400 my-4">
                Email:{" "}
                <span className="text-white">usmanliaqatweb@gmail.com</span>
              </p>
              {/* <p className="text-gray-400 my-4">
                Twitter: <span className="text-white">Twitter</span>
              </p> */}
              <p className="text-gray-400 my-4">
                Languages: <span className="text-white">English, Urdu</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-80 h-96 bg-center bg-cover ">
            <Image
              src={`/images/profile-vector.png`}
              width={400}
              height={550}
              alt="Piyush Profile"
            />
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center uppercase font-bold mt-20">
        My Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10 pb-20">
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={80}
            text={`80%`}
            styles={buildStyles({
              pathColor: `#facc15`,
              textColor: `#facc15`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">HTML</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={90}
            text={`90%`}
            styles={buildStyles({
              pathColor: `#facc15`,
              textColor: `#facc15`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">CSS</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={80}
            text={`80%`}
            styles={buildStyles({
              pathColor: `#facc15`,
              textColor: `#facc15`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">JavaScript</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={60}
            text={`60%`}
            styles={buildStyles({
              pathColor: `#facc15`,
              textColor: `#facc15`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">NextJS</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={50}
            text={`50%`}
            styles={buildStyles({
              pathColor: `#facc15`,
              textColor: `#facc15`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">MongoDB</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={60}
            text={`60%`}
            styles={buildStyles({
              pathColor: `#facc15`,
              textColor: `#facc15`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">Express JS</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={85}
            text={`85%`}
            styles={buildStyles({
              pathColor: `#facc15`,
              textColor: `#facc15`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">React</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={70}
            text={`70%`}
            styles={buildStyles({
              pathColor: `#facc15`,
              textColor: `#facc15`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">Nodejs</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
textColor: `yellow`;
