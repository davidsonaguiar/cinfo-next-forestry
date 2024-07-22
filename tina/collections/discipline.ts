import { Collection } from "tinacms";

export const DisciplineCollection: Collection = {
    name: "discipline",
    label: "Disciplinas",
    path: "content/discipline",
    format: "mdx",
    fields: [
        {
            label: "Nome",
            name: "name",
            type: "string",
            required: true,
        },
        {
            label: "Descrição",
            name: "description",
            type: "rich-text",
            isBody: true,
            required: true,
        },
        {
            label: "Carga Horária",
            name: "workload",
            type: "number",
            required: true,
        },
        {
            label: "Professor",
            name: "teacher",
            type: "reference",
            collections: ["teacher"],
        },
        {
            label: "Curso",
            name: "course",
            type: "reference",
            collections: ["course"],
            required: true,
        }
    ],
}
