import { Link } from 'react-router-dom';

const NavItem = ({ to, children, classname, isActive, onClick }) => (
  <li className="inline-block">
    <Link
      to={to}
      className={`block border border-gray-600 font-custom font-medium rounded-full uppercase px-[16px] pt-[12px] pb-[10px] no-underline transition-all duration-250 ease-in-out ${classname ? classname : "text-black  hover:border-black hover:bg-black hover:text-white hover:pl-[20px] hover:pr-[20px]"} ${isActive ? "bg-black text-white" : ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

export default NavItem;
