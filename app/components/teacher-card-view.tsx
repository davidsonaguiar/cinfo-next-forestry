interface Props {
    name: string;
    avatar: string;
    email: string;
    lattes: string;
    personalPage: string;
    workArea: (string | null)[];
    link: string;
}

import Image from 'next/image';
import Link from 'next/link';

export default function TeacherCardView(props: Props) {
  return (
    <div className="w-fit sm:w-full p-2 sm:p-3 bg-white border border-border rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-[200px,auto] gap-3 relative">
      <Image
        src={props.avatar}
        alt={"Foto do docente " + props.name}
        width={200}
        height={230}
        className="w-[200px] h-[230px] mx-auto rounded sm:mx-0 object-cover"
      />
      <div className="w-full">
        <h3 className="mb-1 sm:text-2xl text-sky-600 font-semibold text-lg text-center sm:text-left hover:underline">
          <Link href={"/pessoas/" + props.link}>
            {props.name}
          </Link>
        </h3>
        <p className="font-semibold text-center text-sm sm:text-base sm:text-left">
          <span>E-mail: </span>
          <a
            href={`mailto:${props.email}`}
            className="text-sky-600 font-normal hover:underline"
          >
            {props.email}
          </a>
        </p>
        <p className="text-sm sm:text-base mx-auto sm:mx-0 text-center sm:text-left w-[200px] sm:w-auto">
          <span className="font-semibold">Áreas de Atuação: </span>
          {props.workArea.join(", ")}
        </p>
        <div className="w-fit  h-fit bg-white sm:bg-none rounded-br sm:rounded-none p-1 flex sm:gap-2 absolute top-0 left-0 sm:top-auto sm:left-auto     sm:bottom-3 sm:right-3">
          <a
            href={props.personalPage}
            className="w-9 h-9 p-1 rounded text-sky-600 block cursor-pointer hover:bg-zinc-100"
            title={"Ir para o site pessoal do " + props.name}
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
          </a>
          <a
            href={props.lattes}
            className="w-9 h-9 p-1 rounded text-sky-600 block cursor-pointer hover:bg-zinc-100"
            title={"Ir para o currículo Lattes do " + props.name}
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
          </a>
        </div>
      </div>
    </div>
  );
}
