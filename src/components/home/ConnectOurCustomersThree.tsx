import Image from "next/image";

const ConnectOurCustomersThree = () => {
  return (
    <div className="mt-124px px-50px">
      <div className="mb-14">
        <Image
          src="/assets/images/we_connect_hero_image.svg"
          className="w-full"
          width={1100}
          height={403}
          alt="hero_graph_three"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-20">
        <div>
          <h3 className="text-4xl leading-56px font-normal">
            We connect our customers with the best, and help them keep up and
            stay open.
          </h3>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="flex justify-between border-b-2 border-light-grey justify-between pb-4">
            <p className="text-xl"> We connect our customers with the best?</p>
            <Image
              src="/assets/icons/chevron_down_solid_circle.svg"
              width={24}
              height={24}
              alt="hero_graph_three"
            />
          </div>
          <div className="flex justify-between border-b-2 border-light-grey justify-between pb-4">
            <p className="text-xl">
              {" "}
              Android research & development rockstar?{" "}
            </p>
            <Image
              src="/assets/icons/chevron_down_solid_circle.svg"
              width={24}
              height={24}
              alt="hero_graph_three"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectOurCustomersThree;
