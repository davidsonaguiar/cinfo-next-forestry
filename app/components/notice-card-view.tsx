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
    <div className="w-full p-3 bg-white border border-zinc-300 rounded-lg shadow-md grid grid-rows-[200px_180px]">
      <div className="w-full h-full">
        <img 
          src={props.cover} 
          alt="cover image" 
          width={500} 
          height={500} 
          className="w-full h-full border border-zinc-300 rounded block object-cover"
        />
      </div>
      <div className="py-3 flex flex-col">
        <h3 className="mb-2 text-sky-600 font-semibold hover:underline line-clamp-3">
          <Link href={"/noticias/" + props.link}>
            {props.title}
          </Link>
        </h3>
        <p className="text-zinc-800 text-sm line-clamp-4">
          {props.description}
        </p>
      </div>
    </div>
  );
}