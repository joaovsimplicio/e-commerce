import Link from "next/link";

function NavBar() {
  return (
    <nav className="sticky top-0 flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      <Link href="/" className="uppercase font-bold text-md h-12 flex items-center">
        Next Store
      </Link>
    </nav>
  );
}

export default NavBar;