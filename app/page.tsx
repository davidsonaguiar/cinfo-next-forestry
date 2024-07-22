import client from "@/tina/__generated__/client";
import NoticeCardView from "./components/notice-card-view";
import Title from "./components/title";
import Image from "next/image";
import Link from "next/link";
import LogoCINFO from "@/app/assets/logo02.png";
import LogoIFAL from "@/app/assets/logo-ifal.png";

export default async function Home() {
  const { data } = await client.queries?.noticeConnection();

  const noticeCards = data?.noticeConnection?.edges?.map((notice) => (
    <NoticeCardView
      title={notice?.node?.title!}
      cover={notice?.node?.cover!}
      description={notice?.node?.summary!}
      link={notice?.node?._sys?.filename!}
    />
  ));
  
  return (
    <>
      <section>
        <div className="my-6 text-center">
          <Title>Coordenação de Informática - IFAL</Title>
        </div>
        <p className="py-4 text-justify leading-7">
          Nostrud ipsum cupidatat dolor in sit dolor. Dolor aute nulla Lorem occaecat nisi eu eu duis. Irure exercitation voluptate minim aliqua occaecat ea officia. Reprehenderit incididunt duis laboris fugiat tempor reprehenderit laborum aliquip velit dolore quis ex enim. Amet ut elit occaecat adipisicing nulla aliquip ut non.
          Fugiat commodo et et dolor laboris. Lorem nulla ex consequat proident nostrud sint qui. Et sit anim pariatur ut veniam non adipisicing culpa ut voluptate. Dolor duis ut elit officia dolor Lorem ipsum aliqua est aute duis voluptate nulla.
          Pariatur deserunt et qui eiusmod nisi cupidatat. 
        </p>
      </section>
      <section className="py-16 mb-5 flex justify-center items-center gap-12">
        <Image src={LogoCINFO} width={250} height={250} alt="logo da CINFO" className="w-48" />
        <Link href="https://www2.ifal.edu.br/">
          <Image src={LogoIFAL} width={250} height={250} alt="logo do IFAL" className="w-64" />
        </Link>
      </section>
      <section>
        <h2 className="pl-5 mb-5 text-2xl font-semibold text-sky-900">Últimas Notícias</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          { noticeCards }
        </div>
      </section>
    </>
  );
}
