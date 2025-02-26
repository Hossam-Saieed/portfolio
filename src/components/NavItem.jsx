import { Link } from 'react-router-dom';
import { body, email, emailTemplateSubject } from '../constants';

const NavItem = ({ to, children, classname, isActive, onClick }) => {

  const handlePortfolioPdfRequest = () => {
    console.log("Requesting PDF Portfolio");
    const encodedSubject = encodeURIComponent(emailTemplateSubject);
    const encodedBody = encodeURIComponent(body);
    const mailToLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.open(mailToLink, '_blank');
  };


  return (
    <li className="inline-block" >
      <Link
        to={to}
        className={`block border border-gray-600 font-custom font-medium rounded-full uppercase px-[16px] pt-[12px] pb-[10px] no-underline transition-all duration-250 ease-in-out ${classname ? classname : "text-black  hover:border-black hover:bg-black hover:text-white hover:pl-[20px] hover:pr-[20px]"} ${isActive ? "bg-black text-white" : ""}`}
        onClick={children == "REQUEST PDF PORTFOLIO" ? () => handlePortfolioPdfRequest() : onClick}
      >
        {children}
      </Link>
    </li >
  );
};
export default NavItem;
