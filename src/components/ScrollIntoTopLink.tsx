import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const ScrollToTopLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;