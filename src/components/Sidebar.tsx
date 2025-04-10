import { NavLink } from "react-router-dom";

interface SidebarProps {
  drawerId: string;
}

const Sidebar = ({ drawerId }: SidebarProps) => {
  return (
    <div className="drawer-side">
      <label htmlFor={drawerId} aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        <li>
            <NavLink to="/trips">Trips</NavLink>
          </li>
          <li>
           <NavLink to="/checklist">Checklist</NavLink>
          </li>
      </ul>
    </div>
  );
};

export default Sidebar; 