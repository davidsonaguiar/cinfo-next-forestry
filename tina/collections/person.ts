import { Collection } from "tinacms";

export const PersonCollection: Collection = {
    name: "person",
    label: "Pessoas",
    path: "content/person",
    format: "mdx",
    fields: [
        {
            label: "Nome",
            name: "name",
            type: "string",
            required: true,
            isTitle: true,
            searchable: true,
        },
        {
            label: "Email",
            name: "email",
            type: "string",
            required: true,
        },
        {
            label: "Foto",
            name: "photo",
            type: "image",
            required: true,
        },
        {
            label: "Currículo Latter",
            name: "latter",
            type: "string",
        },
        {
            label: "Site Pessoal",
            name: "personal_page",
            type: "string",
        },
        {
            label: "Bio",
            name: "bio",
            type: "rich-text",
            isBody: true,
            required: true,
        }
    ],
    ui: {
        router: (params) => `/pessoas/${params.document._sys.relativePath.replace(".mdx", "") || ""}`,
    }  
}
