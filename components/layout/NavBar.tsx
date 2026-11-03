import Link from "next/link";

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-slate-800 px-8 py-2 text-gray-300">
      <Link
        href="/"
        className="text-md flex h-12 items-center font-bold uppercase"
      >
        Next Store
      </Link>
    </nav>
  );
}

export default NavBar;
