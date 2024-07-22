import { Collection } from "tinacms";

export const TeacherCollection: Collection = {
    name: "teacher",
    label: "Docentes",
    path: "content/teacher",
    format: "mdx",
    fields: [
        {
            label: "Pessoa",
            name: "person",
            type: "reference",
            collections: ["person"],
            required: true,
            searchable: true,
        },
        {
            label: "Areas de atuação",
            name: "workAreas",
            type: "string",
            list: true,
        },
        {
            label: "Ativo",
            name: "active",
            type: "boolean",
            required: true,
            searchable: true,
        },
    ]
}

