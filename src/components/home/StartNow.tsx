import Button from "../custom/Button";

const StartNow = () => {
  return (
    <div className="mt-124px bg-dark-blue bg-start-now-arc bg-no-repeat bg-right-top rounded-xl">
      <div className="py-72px">
        <div className="mb-50px">
          <h1 className="text-5xl leading-72 text-center text-white mb-20">
            Value proposition accelerator product <br /> management venture{" "}
          </h1>
        </div>
        <div className="flex gap-x-6 justify-center">
          <input
            type="text"
            placeholder="Your email address"
            className="rounded-full w-370px h-60px px-8"
          />
          <Button className="bg-green text-dark-blue font-bold text-xl w-210px h-60px rounded-full">
            Start Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartNow;
