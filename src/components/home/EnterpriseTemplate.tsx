import Image from "next/image";

const EnterpriseTemplate = () => {
  return (
    <div className="bg-dark-blue mt-120px">
      <section className="max-w-1400px mx-auto px-150px py-24  flex flex-col justify-between">
        <div className="flex justify-between items-end mb-72px">
          <div>
            <h1 className="text-5xl leading-72 text-white mb-6">
              An enterprise template to ramp <br /> up your company website{" "}
            </h1>
          </div>
          <div className="flex gap-x-7 translate-x-6 translate-y-6">
            <button className="flex items-center justify-center w-72px h-72px bg-white flex-none rounded-full">
              <Image
                src="/assets/icons/arrow_left.svg"
                width={36}
                height={39}
                alt="arrow left"
              />
            </button>
            <button className="flex items-center justify-center w-72px h-72px bg-white flex-none rounded-full">
              <Image
                src="/assets/icons/arrow_right.svg"
                width={36}
                height={39}
                alt="arrow right"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-22px">
          <div className="p-10 bg-white rounded-xl h-fit">
            <div className="flex flex-col gap-y-10">
              <div>
                <p className="text-2xl leading-9">
                  “Buyer buzz partner network disruptive non-disclosure
                  agreement business”
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <Image
                  src="/assets/images/enterprise_avatar_one.svg"
                  className="rounded-full"
                  width={58}
                  height={58}
                  alt="star"
                />
                <div>
                  <p className="font-bold text-base mb-6px">Albus Dumbledore</p>
                  <p className="font-normal text-xs">Manager @ Howarts</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-10 bg-white rounded-xl h-fit">
            <div className="flex flex-col gap-y-10">
              <div>
                <p className="text-2xl leading-9">
                  “Learning curve infrastructure value proposition advisor
                  strategy user experience hypotheses investor.”
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <Image
                  src="/assets/images/enterprise_avatar_two.svg"
                  className="rounded-full"
                  width={58}
                  height={58}
                  alt="star"
                />
                <div>
                  <p className="font-bold text-base mb-6px">Severus Snape</p>
                  <p className="font-normal text-xs">Manager @ Slytherin</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-10 bg-white rounded-xl h-fit">
            <div className="flex flex-col gap-y-10">
              <div>
                <p className="text-2xl leading-9">
                  “Release facebook responsive web design business model canvas
                  seed money monetization.”
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <Image
                  src="/assets/images/enterprise_avatar_three.svg"
                  className="rounded-full"
                  width={58}
                  height={58}
                  alt="star"
                />
                <div>
                  <p className="font-bold text-base mb-6px">Harry Potter</p>
                  <p className="font-normal text-xs">
                    Team Leader @ Gryffindor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseTemplate;
