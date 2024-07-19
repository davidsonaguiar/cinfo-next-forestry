import client from "@/tina/__generated__/client";
import NoticeCardView from "./components/notice-card-view";
import Title from "./components/title";
import Image from "next/image";
import Link from "next/link";
import LogoCINFO from "@/app/assets/logo02.png";
import LogoIFAL from "@/app/assets/logo-ifal.png";

export default async function Home() {
  const { data } = await client.queries.noticeConnection();

  const noticeCards = data?.noticeConnection?.edges?.map((notice) => (
    <NoticeCardView
      title={notice?.node?.title!}
      cover={notice?.node?.cover!}
      description={notice?.node?.description!}
      link={`/noticias/${notice?.node?._sys?.filename}`}
    />
  ));
  
  return (
    <>
      <div className="my-3 text-center">
        <Title>Coordenação de Informática - IFAL</Title>
      </div>
      <p className="mx-auto py-4 text-center">
        Nostrud ipsum cupidatat dolor in sit dolor. Dolor aute nulla Lorem occaecat nisi eu eu duis. Irure exercitation voluptate minim aliqua occaecat ea officia. Reprehenderit incididunt duis laboris fugiat tempor reprehenderit laborum aliquip velit dolore quis ex enim. Amet ut elit occaecat adipisicing nulla aliquip ut non.
        Fugiat commodo et et dolor laboris. Lorem nulla ex consequat proident nostrud sint qui. Et sit anim pariatur ut veniam non adipisicing culpa ut voluptate. Dolor duis ut elit officia dolor Lorem ipsum aliqua est aute duis voluptate nulla.
        Pariatur deserunt et qui eiusmod nisi cupidatat. Quis in aliqua eu id pariatur non id ex est sit. Culpa aliqua excepteur consectetur ad. Eiusmod dolor aliqua minim veniam aliquip deserunt excepteur consectetur id aute id.
        Minim sit voluptate amet est tempor eu.
      </p>
      <div className="py-6 flex justify-center items-center gap-12">
        <Image src={LogoCINFO} width={250} height={250} alt="logo da CINFO" className="w-48" />
        <Link href="https://www2.ifal.edu.br/">
          <Image src={LogoIFAL} width={250} height={250} alt="logo do IFAL" className="w-64" />
        </Link>
      </div>
      <div className="w-full p-6 bg-slate-900 border border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        { noticeCards }
      </div>
    </>
  );
}
