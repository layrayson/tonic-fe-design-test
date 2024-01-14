import Image from "next/image";
import Link from "next/link";

const OurNumbers = () => {
  return (
    <div className="mt-24 px-50px">
      <div className="mb-3">
        <p className="text-gray text-xl text-center">Our Numbers</p>
      </div>
      <div className="mb-82px">
        <h1 className="text-5xl leading-72 text-center ">
          Handshake infographic mass market <br /> crowdfunding iteration.
        </h1>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="mb-8 text-dark-blue text-8xl">120m</h1>
          <p className="text-2xl text-dark-blue">Cool feature title</p>
        </div>{" "}
        <div>
          <h1 className="mb-8 text-dark-blue text-8xl">10.000</h1>
          <p className="text-2xl text-dark-blue">Cool feature title</p>
        </div>{" "}
        <div>
          <h1 className="mb-8 text-dark-blue text-8xl">240</h1>
          <p className="text-2xl text-dark-blue">Cool feature title</p>
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
