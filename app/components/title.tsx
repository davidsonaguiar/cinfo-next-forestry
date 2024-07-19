interface TitleProps {
    children: string;
  }
  
  export default function Title({ children }: TitleProps) {
    return (
      <h1 className="text-sky-900 text-3xl font-bold">
        {children}
      </h1>
    );
  }