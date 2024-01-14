import Image from "next/image";

const OurTeam = () => {
  return (
    <div className="px-150px mt-124px">
      <div className="max-w-800px mx-auto mb-14">
        <div className="mb-4">
          <p className="text-gray text-xl leading-8">Our team</p>
        </div>
        <div className="mb-8">
          <h1 className=" text-5xl leading-72">The people behind the work </h1>
        </div>
        <div>
          <p className="text-gray text-xl leading-8">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-72px">
        <div>
          <div className="mb-6">
            <Image
              src={"/assets/images/michael_scott.svg"}
              className="w-full"
              height={250}
              width={250}
              alt="scott"
            />
          </div>
          <div className="mb-3">
            <h5 className="text-2.5xl leading-48">Michael Scott</h5>
          </div>
          <div>
            <p className="text-xl leading-8 text-gray">General Manager</p>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <Image
              src={"/assets/images/michael_scott.svg"}
              className="w-full"
              height={250}
              width={250}
              alt="scott"
            />
          </div>
          <div className="mb-3">
            <h5 className="text-2.5xl leading-48">Michael Scott</h5>
          </div>
          <div>
            <p className="text-xl leading-8 text-gray">General Manager</p>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <Image
              src={"/assets/images/michael_scott.svg"}
              className="w-full"
              height={250}
              width={250}
              alt="scott"
            />
          </div>
          <div className="mb-3">
            <h5 className="text-2.5xl leading-48">Michael Scott</h5>
          </div>
          <div>
            <p className="text-xl leading-8 text-gray">General Manager</p>
          </div>
        </div>
      </div>
      <div className="mt-110px">
        <div className="grid grid-cols-2 gap-x-101px gap-y-46px">
          <div>
            <div className="flex gap-x-6 items-center">
              <div>
                <Image
                  src={"/assets/images/dwight.svg"}
                  className="w-full"
                  height={120}
                  width={120}
                  alt="scott"
                />
              </div>
              <div>
                <div className="mb-3">
                  <h5 className="text-2.5xl leading-48">Michael Scott</h5>
                </div>
                <div>
                  <p className="text-xl leading-8 text-gray">General Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-x-6 items-center">
              <div>
                <Image
                  src={"/assets/images/pam.svg"}
                  className="w-full"
                  height={120}
                  width={120}
                  alt="scott"
                />
              </div>
              <div>
                <div className="mb-3">
                  <h5 className="text-2.5xl leading-48">Michael Scott</h5>
                </div>
                <div>
                  <p className="text-xl leading-8 text-gray">General Manager</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="flex gap-x-6 items-center">
              <div>
                <Image
                  src={"/assets/images/pam.svg"}
                  className="w-full"
                  height={120}
                  width={120}
                  alt="scott"
                />
              </div>
              <div>
                <div className="mb-3">
                  <h5 className="text-2.5xl leading-48">Michael Scott</h5>
                </div>
                <div>
                  <p className="text-xl leading-8 text-gray">General Manager</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="flex gap-x-6 items-center">
              <div>
                <Image
                  src={"/assets/images/pam.svg"}
                  className="w-full"
                  height={120}
                  width={120}
                  alt="scott"
                />
              </div>
              <div>
                <div className="mb-3">
                  <h5 className="text-2.5xl leading-48">Michael Scott</h5>
                </div>
                <div>
                  <p className="text-xl leading-8 text-gray">General Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
