import NoticeCardView from "@/app/components/notice-card-view";
import Title from "@/app/components/title";
import ButtonLink from "@/app/docentes/components/button-link";
import client from "@/tina/__generated__/client";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface Props {
  params: {
    filename: string;
  };
}

export async function generateStaticParams() {
  const allAuthors = await client.queries.personConnection();
  const paths = allAuthors.data.personConnection.edges?.map((edge) => ({
    filename: edge?.node?._sys.filename,
  }));

  return paths || [];
}

export default async function AuthorPage(props: Props) {
  const filename = props.params?.filename;

  const { data } = await client.queries.person({
    relativePath: filename + ".mdx",
  });

  const notices = await client.queries.noticeConnection({
    filter: {
      author: {
        person: {
          email: {
            eq: data.person.email,
          },
        },
      },
    },
  });

  const noticesCard = notices.data.noticeConnection.edges?.map((notice) => (
    <div className="mb-5">
      <div className="max-w-max w-full aspect-video">
        <Image
          src={notice?.node?.cover!}
          alt="Foto da notícia"
          width={500}
          height={500}
          className="w-full h-full border border-zinc-300 rounded block object-cover"
        />
      </div>
      <h3 className="line-clamp-3">
        <a
          href={`/noticias/${notice?.node?._sys.filename}`}
          className="mb-2 text-sky-600 text-sm font-semibold hover:underline"
        >
          {notice?.node?.title}
        </a>
      </h3>
    </div>
  )) || [];

  const isTeacher = await client.queries.teacherConnection({
    filter: {
      person: {
        person: {
          email: {
            eq: data.person.email,
          },
        },
      },
    },
  });

  const classDefault = "py-4 mx-auto mb-10 grid "
  const relatedNotices = noticesCard.length > 0 ? "sm:grid-cols-1 md:grid-cols-[3fr_minmax(200px,1fr)] gap-3" : ""

  return (
    <div className={classDefault + relatedNotices}>
      <div className="w-full pr-4">
        <div className="mx-auto prose">
          <div className="text-center">
            <div className="mx-auto my-5 w-52 h-52">
              <Image
                src={data.person.photo!}
                alt="Foto do docente"
                width={200}
                height={200}
                className="w-full h-full rounded-full object-cover block"
              />
            </div>
            <div className="my-5">
              <Title>{data.person.name}</Title>
            </div>
            <div className="w-fit mx-auto flex gap-3 ">
              <ButtonLink
                href={data.person.personal_page!}
                title={"Ir para o site pessoal do " + data.person.name}
                target="_blank"
                role="button"
                arial-disabled={!data.person.personal_page}
                disabled={!data.person.personal_page}
              >
                <span className="sr-only">Site Pessoal</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                  <path
                    d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                  <path
                    d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M256 48v416M464 256H48"
                  />
                </svg>
              </ButtonLink>
              <ButtonLink
                href={data.person.latter!}
                title={"Ir para o currículo Lattes do " + data.person.name}
                target="_blank"
                role="button"
                arial-disabled={!data.person.latter}
                disabled={!data.person.latter}
              >
                <span className="sr-only">Currículo Lattes</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              </ButtonLink>
              <ButtonLink
                href="href={`mailto:${props.email}`}"
                title={"Enviar email para " + data.person.email}
                role="button"
                arial-disabled={!data.person.email}
                disabled={!data.person.email}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <rect
                    x="48"
                    y="96"
                    width="416"
                    height="320"
                    rx="40"
                    ry="40"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M112 160l144 112 144-112"
                  />
                </svg>
              </ButtonLink>
            </div>
          </div>
          {isTeacher?.data?.teacherConnection?.edges?.length! > 0 && (
            <div className="text-left">
              <h3 className="text-xl font-semibold text-sky-900">
                Área de Atuação
              </h3>
              <ul>
                {isTeacher?.data?.teacherConnection?.edges?.[0]?.node?.workAreas?.map(
                  (workArea) => (
                    <li key={workArea}>{workArea}</li>
                  )
                )}
              </ul>
            </div>
          )}
          <div className="my-6 text-justify">
            <h3 className="mb-5 text-xl font-semibold text-sky-900">
              Biografia
            </h3>
            <TinaMarkdown content={data.person.bio} />
          </div>
        </div>
      </div>
      { 
        noticesCard.length > 0 &&
        <div>
          <h2 className="mb-5 text-2xl font-semibold text-sky-900">
            Relacionados
          </h2>
          <div className="w-full flex gap-4 md:flex-col">{noticesCard}</div>
        </div>
      }
    </div>
  );
}
