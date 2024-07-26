import { Collection } from "tinacms";

export const PageCollection: Collection = {
    name: "page",
    label: "Página",
    path: "content/page",
    format: "json",
    fields: [
        {
            label: "Título",
            name: "title",
            type: "string",
            required: true,
            isTitle: true,
            searchable: true,
        },
    ],
}
