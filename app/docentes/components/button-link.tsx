interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}

export default function ButtonLink({ disabled, ...props }: Props) {
  const style = disabled 
    ? "w-9 h-9 p-1 rounded text-gray-400 pointer-events-none bg-gray-100"
    : "w-9 h-9 p-1 rounded text-sky-600 cursor-pointer hover:bg-zinc-100 block";
  return <a {...props} className={style}>{props.children}</a>;
}
