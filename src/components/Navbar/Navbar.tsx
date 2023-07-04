import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <a className="text-white font-bold text-xl">Kiki's</a>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="ml-4">
              <Link href="/cart">
                <a className="text-white hover:text-gray-200">Cart</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
