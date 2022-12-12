import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  style: string
}

const Button = ({ children, style }: TitleProps) => {
  return (
    <div className={`button ${ style }` }>
      <a href="#" className="lg:text-2xl text-lg">{children}</a>
    </div>
  );
};

export default Button;
