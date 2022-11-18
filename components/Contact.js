import { FaMap, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container w-4/5 mx-auto">
      <h1 className="text-5xl font-bold text-center uppercase pt-20">
        Contact <span className="text-yellow-400">Me</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 pb-28">
        <div className="container">
          <h1 className="text-3xl uppercase font-bold">Get in Touch</h1>
          <p className="my-5">
            {`Contact me if you have any doubt related my work or any else. Also I'm always open to talk about cretive ideas, innovations, thoughts.`}
          </p>
          <div>
            <div className="my-5 flex items-center">
              <h1 className="text-4xl text-yellow-400 mr-5">
                <FaMap />
              </h1>
              <p className="flex flex-col">
                <span className="uppercase text-gray-500">Address : </span>
                <span className="font-bold">Multan, Punjab, Pakistan</span>
              </p>
            </div>
            <div className="my-5 flex items-center">
              <h1 className="text-4xl text-yellow-400 mr-5">
                <FaPhoneAlt />
              </h1>
              <p className="flex flex-col">
                <span className="uppercase text-gray-500">Phone : </span>
                <span className="font-bold">+92 312 6537041</span>
              </p>
            </div>
            <div className="my-5 flex items-center">
              <h1 className="text-4xl text-yellow-400 mr-5">
                <FaEnvelope />
              </h1>
              <p className="flex flex-col">
                <span className="uppercase text-gray-500">Email</span>
                <span className="font-bold">usmanliaqatweb@gmail</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2">
          <div className="flex flex-wrap md:flex-nowrap">
            <input
              type="text"
              className="placeholder:uppercase bg-stone-800 my-2  rounded-full py-3 pl-4 w-full md:w-1/2 md:mr-4"
              placeholder="Your name"
            />
            <input
              type="email"
              className="placeholder:uppercase bg-stone-800  my-2 rounded-full py-3 pl-4 w-full md:w-1/2"
              placeholder="Your email"
            />
          </div>
          <input
            type="text"
            className="placeholder:uppercase bg-stone-800 rounded-full py-3 my-6 pl-4 w-full"
            placeholder="Your subject"
          />
          <textarea
            className="placeholder:uppercase bg-stone-800 rounded-3xl py-3 pl-4 w-full h-48"
            placeholder="Your message"
          ></textarea>
          <button className="h-14 w-56 mt-5 flex items-center justify-center uppercase border-2 border-yellow-400 rounded-full hover:bg-yellow-500 duration-300">
            <span className="mr-2 font-bold tracking-wide">Send Message</span>{" "}
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
