import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  const classDefault = "w-full max-w-6xl mx-auto px-6" + (className ? ` ${className}` : "");

  return (
    <>
      <div className={classDefault}>
        {children}
      </div>
    </>
  );
}