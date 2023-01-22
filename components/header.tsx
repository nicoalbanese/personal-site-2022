import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  let justLogo = false;
  if (router.pathname !== "/") {
    justLogo = true;
  }

  return (
    <div className="flex flex-col items-start">
      <div className="grid items-center mb-2 grid-cols-auto grid-rows-auto justify-items-center ">
        <Link className="z-10 col-1 row-1 hover:opacity-60" href="/">
          <Image src={"/memoji.png"} width={80} height={80} alt={"memoji"} />
        </Link>
      </div>
      <div className={justLogo ? "hidden" : ""}>
        <h2 className="">Nico Albanese</h2>
        <p className="text-tertiary text-md font-medium dark:text-darkTertiary">VC & Maker</p>
      </div>
    </div>
  );
};

export default Header;
