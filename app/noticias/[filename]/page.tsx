import Image from "next/image";
import Title from "../../components/title";
import client from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

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
  const { data } = await client.queries.notice({ relativePath: props.params?.filename + ".md" });

  const date = new Date(data.notice.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article className="max-w-3xl prose-xl mx-auto">
        <div className="my-4">
          <Title>{data.notice.title}</Title>
          <p>{data.notice.description}</p>
          <p className="mb-4 text-right text-sm">{date}</p>
          <p>{data.notice.author.name}</p>
          <Image
            src={data.notice.cover!}
            alt="Imagem de apresentação da notícia"
            width={1200}
            height={500}
            className="w-full"
          />
        </div>
        <div>
          <TinaMarkdown content={data.notice.body}/>
        </div>
      </article>
    </>
  );
}
