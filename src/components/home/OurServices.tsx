import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="mt-84px px-50px">
      <div className="mb-3">
        <p className="text-gray text-xl text-center">Our Services</p>
      </div>
      <div>
        <h1 className="text-5xl leading-72 text-center mb-20">
          Handshake infographic mass market <br /> crowdfunding iteration.
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-x-100px">
        <div>
          <div className="mb-6">
            <Image
              src="/assets/images/cool_feature_title.svg"
              className="w-full"
              width={493}
              height={253}
              alt="cooler"
            />
          </div>
          <div className="mb-3">
            <h5 className=" text-2xl">Cool feature title</h5>
          </div>
          <div className="mb-7">
            <p className="text-xl text-gray">
              Learning curve network effects return on investment.
            </p>
          </div>
          <Link href={"#"} className="w-fit ">
            <div className="h-9 flex items-center gap-x-3 border-b w-fit text-xl font-bold text-dark-blue">
              Explore page{" "}
              <Image
                src="/assets/icons/arrow_right.svg"
                width={24}
                height={24}
                alt="arrow_right"
              />
            </div>
          </Link>
        </div>
        <div>
          <div className="mb-6">
            <Image
              src="/assets/images/even_cooler_feature.svg"
              className="w-full"
              width={493}
              height={253}
              alt="cooler"
            />
          </div>
          <div className="mb-3">
            <h5 className=" text-2xl">Even cooler feature </h5>
          </div>
          <div className="mb-7">
            <p className="text-xl text-gray">
              Learning curve network effects return on investment.
            </p>
          </div>
          <Link href={"#"} className="w-fit ">
            <div className="h-9 flex items-center gap-x-3 border-b w-fit text-xl font-bold text-dark-blue">
              Explore page{" "}
              <Image
                src="/assets/icons/arrow_right.svg"
                width={24}
                height={24}
                alt="arrow_right"
              />
            </div>
          </Link>
        </div>
        <div>
          <div className="mb-6">
            <Image
              src="/assets/images/cool_feature_title_two.svg"
              className="w-full"
              width={493}
              height={253}
              alt="cool"
            />
          </div>
          <div className="mb-3">
            <h5 className=" text-2xl">Cool feature title</h5>
          </div>
          <div className="mb-7">
            <p className="text-xl text-gray">
              Learning curve network effects return on investment.
            </p>
          </div>
          <Link href={"#"} className="w-fit ">
            <div className="h-9 flex items-center gap-x-3 border-b w-fit text-xl font-bold text-dark-blue">
              Explore page{" "}
              <Image
                src="/assets/icons/arrow_right.svg"
                width={24}
                height={24}
                alt="arrow_right"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
