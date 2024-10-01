import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <nav className="w-full h-[5rem] mx-auto px-5 shadow-xl z-50 relative hidden lg:block">
        <ul className="flex items-center justify-between h-full px-24">
          {/* WisePenny on the left */}
          <Link to="/">
            <li className="text-4xl font-extrabold text-green-600 pb-1">
              WisePenny
            </li>
          </Link>

          {/* UserRound icon on the right */}
          <li className="ml-auto">
            <div className="bg-green-600 p-2 rounded-full text-white flex items-center justify-center">
              <UserRound />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
