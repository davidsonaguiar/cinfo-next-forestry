import Image from "next/image";
import Title from "../../components/title";
import client from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Link from "next/link";

interface NoticePage {
  params: {
    filename: string;
  };
}

export async function generateStaticParams() {
  const pages = await client.queries.noticeConnection();
  const paths = pages.data?.noticeConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.filename,
  }));

  return paths || [];
}

export default async function NoticePage(props: NoticePage) {
  const { data } = await client.queries.notice({ relativePath: props.params?.filename + ".mdx" });

  const date = new Date(data.notice.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article className="max-w-6xl prose mx-auto prose-a:text-sky-600 hover:prose-a:text-sky-800">
        <div>
          <Title>{data.notice.title}</Title>
          <p>{data.notice.summary}</p>
          <Image
            src={data.notice.cover!}
            alt="Imagem de apresentação da notícia"
            width={1200}
            height={500}
            className="w-full max-w-3xl mx-auto border border-zinc-300 rounded-lg"
          />
          <div className="w-fit p-3 pl-6 ml-auto bg-white rounded-lg border border-zinc-300 shadow-md flex gap-3 items-center justify-end">
            <p className="mb-4 text-right text-sm flex flex-col">
              Publicado em {date} por 
              <Link href={"/pessoas/" + data.notice.author._sys.filename} className="text-sky-600 font-semibold hover:underline">
                {data.notice.author.name}
              </Link>
            </p>
            <Image 
              src={data.notice.author.photo!} 
              alt="Foto do autor" 
              width={60} 
              height={60} 
              className="m-0 rounded-full"
            />
          </div>
        </div>
        <div>
          <TinaMarkdown content={data.notice.content} />
        </div>
      </article>
    </>
  );
}
