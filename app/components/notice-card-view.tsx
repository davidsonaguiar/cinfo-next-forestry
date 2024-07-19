import Image from "next/image";
import Link from "next/link";

export type NoticeCardViewProps = {
  title: string;
  cover: string;
  description: string;
  link: string;
};

export default function NoticeCardView(props: NoticeCardViewProps) {
  return (
    <div className="w-full  bg-white grid grid-rows-[200px_200px_40px]">
      <div className="w-full h-full bg-zinc-300">
        <Image 
          src={props.cover} 
          alt="cover image" 
          width={500} 
          height={500} 
          className="block w-full h-full object-cover"
        />
      </div>
      <div className="p-3 border border-border flex flex-col">
        <h3 className="mb-2 text-primary font-semibold">{props.title}</h3>
        <p className="text-foreground">{props.description}</p>
      </div>
      <Link href={props.link} className="h-full text-primary font-medium grid place-content-center uppercase">
        Ler mais
      </Link>
    </div>
  );
}