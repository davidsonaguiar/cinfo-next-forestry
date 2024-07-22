import { Collection as CollectionCollection } from "tinacms";

export const CourseCollection: CollectionCollection = {
    name: "course",
    label: "Cursos",
    path: "content/course",
    format: "mdx",
    fields: [
        {
            label: "Nome",
            name: "name",
            type: "string",
            required: true,
            isTitle: true,
        },
        {
            label: "Descrição",
            name: "description",
            type: "string",
            isBody: true,
        },
        {
            label: "Carga Horária Mínima",
            name: "workload_min",
            type: "number",
            required: true,
        },
    ],
}
