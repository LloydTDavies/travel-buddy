import { NavLink } from "react-router-dom";

interface NavbarProps {
  drawerId: string;
}

const Navbar = ({ drawerId }: NavbarProps) => {
  return (
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none lg:hidden">
        {/* Label to toggle the drawer specified by drawerId */}
        <label
          htmlFor={drawerId}
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2">Travel Buddy</div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li>
            <NavLink to="/trips">Trips</NavLink>
          </li>
          <li>
            <a>Navbar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
