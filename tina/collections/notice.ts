import { Collection } from "tinacms";

export const NoticeCollection: Collection = {
    name: "notice",
    label: "Notícias",
    path: "content/notice",
    format: "mdx",
    fields: [
        {
            label: "Título",
            name: "title",
            type: "string",
            required: true,
            isTitle: true,
        },
        {
            label: "Resumo",
            name: "summary",
            type: "string",
            required: true,
        },
        {
            label: "Categoria",
            name: "category",
            type: "string",
            list: true,
            required: true,
        },
        {
            label: "Data de Publicação",
            name: "date",
            type: "datetime",
            required: true,
            searchable: true,
        },
        {
            label: "Autor",
            name: "author",
            type: "reference",
            collections: ["person"],
            required: true,
        },
        {
            label: "Imagem de Capa",
            name: "cover",
            type: "image",
            required: true,
        },
        {
            label: "Conteúdo",
            name: "content",
            type: "rich-text",
            isBody: true,
            required: true,
        },
    ],
}