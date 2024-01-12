import Image from "next/image";
import Button from "../custom/Button";

const ConnectOurCustomersTwo = () => {
  return (
    <div className="mt-120px px-50px">
      <div className="grid grid-cols-2 gap-x-20 items-center">
        <div>
          <div className="mb-10">
            <h3 className="text-4xl leading-56px font-normal">
              We connect our customers with the best, and help them keep up and
              stay open.
            </h3>
          </div>
          <div className="flex flex-col gap-y-6 mb-14">
            <div className="flex gap-x-3 bg-dark-blue p-22px rounded shadow-mini">
              <Image
                src={"/assets/icons/feather.svg"}
                width={24}
                height={24}
                alt="feather"
              />
              <p className="text-base text-white">
                We connect our customers with the best.
              </p>
            </div>
            <div className="flex gap-x-3 white p-22px rounded shadow-mini">
              <Image
                src={"/assets/icons/eye.svg"}
                width={24}
                height={24}
                alt="eye"
              />
              <p className="text-base ">
                Advisor success customer launch party.{" "}
              </p>
            </div>{" "}
            <div className="flex gap-x-3 bg-white p-22px rounded shadow-mini">
              <Image
                src={"/assets/icons/sun.svg"}
                width={24}
                height={24}
                alt="sun"
              />
              <p className="text-base">Business-to-consumer long tail. </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/we_connect_two.svg"
            className="w-full"
            width={493}
            height={253}
            alt="hero_graph_one"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectOurCustomersTwo;
