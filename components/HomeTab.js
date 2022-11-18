import Image from "next/image";

const HomeTab = () => {
  return (
    <div className="container w-4/5 mx-auto py-10 pb-20 md:py-48">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="col-span-3 md:col-span-1 flex items-center justify-center">
          <div className="w-80 h-96 bg-center bg-cover ">
            <Image
              src={`/images/profile-vector.png`}
              width={400}
              height={550}
              alt="Piyush Profile"
            />
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 px-2 md:px-5 text-center md:text-left w-full md:w-4/5">
          <p className="uppercase text-gray-300">Welcome to tech world</p>
          <h1 className="text-4xl md:text-5xl uppercase font-bold text-yellow-400 my-2">
            {`I'm`} Usman Liaqat.
          </h1>
          <h1 className="text-xl md:text-3xl uppercase font-bold mb-4">
            Full Stack MERN Developer
          </h1>
          <p className="text-md lg:text-xl">
            {`I'm a Pakistan Based Web Developer. A Full Stack MERN Developer focused on developing an amazing, secure and scalable backend. I am passionate about building excellent softwares that makes life easier.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
