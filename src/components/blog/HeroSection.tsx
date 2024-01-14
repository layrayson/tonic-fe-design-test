import Image from "next/image";
import Button from "../custom/Button";
import NavBar from "../shared/NavBar";

const HeroSection = () => {
  return (
    <div className="">
      <section className="h-screen max-w-1400px mx-auto px-100px pt-14  flex flex-col justify-between">
        <NavBar dark={true} />
        <div className="py-12 grow flex flex-col justify-center border-1 border-b border-dark-blue">
          <div>
            <div className="mb-68px">
              <p className="text-dark-blue text-xl mb-3 text-center">Blog</p>
              <h1 className="text-dark-blue text-6.5xl leading-84 text-center">
                Thoughts and words
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-5/12">
                <Image
                  src={"/assets/images/pitch_sheet.svg"}
                  width={550}
                  height={386}
                  alt="hero image"
                />
              </div>
              <div className="w-5/12">
                <div className="flex gap-x-3 mb-3">
                  <p className="text-dark-blue text-bold leading-7">Category</p>
                  <p className="text-gray leading-7">November 22, 2021</p>
                </div>
                <div className="mb-5 ">
                  <h5 className="text-5xl leading-72">
                    Pitch termsheet backing validation focus release.
                  </h5>
                </div>
                <div className="flex gap-x-3">
                  <Image
                    src="/assets/images/blog_avatar_one.svg"
                    className="round-full"
                    width={32}
                    height={32}
                    alt="cooler"
                  />
                  <p className="text-base">Chandler Bing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
