import Image from "next/image";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-row justify-between items-center w-full py-8 px-8 z-10 bg-white backdrop-blur-2xl bg-opacity-60 border-b-[1px] border-neutral-200">
      <Image src="/logo.svg" alt="logo" width={32} height={32} />
    </div>
  );
};

export default Navbar;