import Image from "next/image";
import Button from "../custom/Button";

const ConnectOurCustomersOne = () => {
  return (
    <div className="mt-185px px-50px">
      <div className="grid grid-cols-2 gap-x-20 items-center">
        <div>
          <Image
            src="/assets/images/we_connect.svg"
            className="w-full"
            width={493}
            height={253}
            alt="hero_graph_one"
          />
        </div>
        <div>
          <div className="mb-10">
            <h3 className="text-4xl leading-56 font-normal">
              We connect our customers with the best, and help them keep up and
              stay open.
            </h3>
          </div>
          <div className="flex flex-col gap-y-6 mb-14">
            <div className="flex gap-x-8">
              <Image
                src={"/assets/icons/check_solid_circle.svg"}
                width={24}
                height={24}
                alt="check_solid_circle"
              />
              <p className="text-xl">We connect our customers with the best.</p>
            </div>
            <div className="flex gap-x-8">
              <Image
                src={"/assets/icons/check_solid_circle.svg"}
                width={24}
                height={24}
                alt="check_solid_circle"
              />
              <p className="text-xl">Advisor success customer launch party.</p>
            </div>
            <div className="flex gap-x-8">
              <Image
                src={"/assets/icons/check_solid_circle.svg"}
                width={24}
                height={24}
                alt="check_solid_circle"
              />
              <p className="text-xl">Business-to-consumer long tail.</p>
            </div>
          </div>
          <div>
            <Button className="h-60px w-210px bg-dark-blue text-xl text-white font-bold rounded-full">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectOurCustomersOne;
