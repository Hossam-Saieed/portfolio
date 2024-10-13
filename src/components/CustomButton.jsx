import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({
  to,
  text, 
  className = '', 
  title = '', 
  onClick = () => {}, 
  icon = null, 
  iconPosition = 'left', 
  type = 'button', 
  disabled = false, 
  ...rest
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      title={title}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      <Link to={to}>
       {icon && iconPosition === 'left' && <span>{icon}</span>}
        {text && <span>{text}</span>}
        {icon && iconPosition === 'right' && <span>{icon}</span>}
        </Link>
    </button>
  );
};

export default CustomButton;
