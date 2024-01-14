import Image from "next/image";
import Link from "next/link";
import Button from "../custom/Button";

const LatestNews = () => {
  return (
    <div className="mt-24 px-50px">
      <div className="mb-8">
        <h5 className="text-3xl leading-72">Latest news</h5>
      </div>
      <div className="grid grid-cols-3 gap-x-50px gap-y-20 mb-84px">
        <div className="flex flex-col">
          <div className="mb-6">
            <Image
              src="/assets/images/blog_one.svg"
              className="w-full"
              width={493}
              height={253}
              alt="cooler"
            />
          </div>
          <div className="mb-3">
            <div className="flex gap-x-3">
              {" "}
              <p className="font-bold">Category</p>
              <p className="text-gray">November 22, 2021</p>
            </div>
          </div>
          <div className="grow mb-5">
            <p className="text-xl">
              Pitch termsheet backing validation focus release.
            </p>
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
        <div className="flex flex-col">
          <div className="mb-6">
            <Image
              src="/assets/images/blog_two.svg"
              className="w-full"
              width={493}
              height={253}
              alt="cooler"
            />
          </div>
          <div className="mb-3">
            <div className="flex gap-x-3">
              {" "}
              <p className="font-bold">Category</p>
              <p className="text-gray">November 22, 2021</p>
            </div>
          </div>
          <div className="grow mb-5">
            <p className="text-xl">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.{" "}
            </p>
          </div>
          <div className="flex gap-x-3">
            <Image
              src="/assets/images/blog_avatar_two.svg"
              className="round-full"
              width={32}
              height={32}
              alt="cooler"
            />
            <p className="text-base">Rachel Green</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">
            <Image
              src="/assets/images/blog_three.svg"
              className="w-full"
              width={493}
              height={253}
              alt="cool"
            />
          </div>
          <div className="mb-3">
            <div className="flex gap-x-3">
              {" "}
              <p className="font-bold">Category</p>
              <p className="text-gray">November 22, 2021</p>
            </div>
          </div>
          <div className="grow mb-5">
            <p className="text-xl">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition.{" "}
            </p>
          </div>
          <div className="flex gap-x-3">
            <Image
              src="/assets/images/blog_avatar_three.svg"
              className="round-full"
              width={32}
              height={32}
              alt="cooler"
            />
            <p className="text-base">Monica Geller</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">
            <Image
              src="/assets/images/blog_four.svg"
              className="w-full"
              width={493}
              height={253}
              alt="cooler"
            />
          </div>
          <div className="mb-3">
            <div className="flex gap-x-3">
              {" "}
              <p className="font-bold">Category</p>
              <p className="text-gray">November 22, 2021</p>
            </div>
          </div>
          <div className="grow mb-5">
            <p className="text-xl">
              Pitch termsheet backing validation focus release.
            </p>
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
        <div className="flex flex-col">
          <div className="mb-6">
            <Image
              src="/assets/images/blog_five.svg"
              className="w-full"
              width={493}
              height={253}
              alt="cooler"
            />
          </div>
          <div className="mb-3">
            <div className="flex gap-x-3">
              {" "}
              <p className="font-bold">Category</p>
              <p className="text-gray">November 22, 2021</p>
            </div>
          </div>
          <div className="grow mb-5">
            <p className="text-xl">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.{" "}
            </p>
          </div>
          <div className="flex gap-x-3">
            <Image
              src="/assets/images/blog_avatar_two.svg"
              className="round-full"
              width={32}
              height={32}
              alt="cooler"
            />
            <p className="text-base">Rachel Green</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">
            <Image
              src="/assets/images/blog_six.svg"
              className="w-full"
              width={493}
              height={253}
              alt="cool"
            />
          </div>
          <div className="mb-3">
            <div className="flex gap-x-3">
              {" "}
              <p className="font-bold">Category</p>
              <p className="text-gray">November 22, 2021</p>
            </div>
          </div>
          <div className="grow mb-5">
            <p className="text-xl">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition.{" "}
            </p>
          </div>
          <div className="flex gap-x-3">
            <Image
              src="/assets/images/blog_avatar_three.svg"
              className="round-full"
              width={32}
              height={32}
              alt="cooler"
            />
            <p className="text-base">Monica Geller</p>
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto">
        <Button className="bg-white h-60px  w-219px border-2 border-dark-blue text-xl font-bold rounded-full">
          Load more
        </Button>
      </div>
    </div>
  );
};

export default LatestNews;