import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full py-8 px-8">
      <Image src="/logo.svg" alt="logo" width={32} height={32} />
    </div>
  )
};

export default Navbar;