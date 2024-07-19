import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "notice",
        label: "Noticias",
        path: "content/notices",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descrição",
            required: true,
          },
          {
            type: "image",
            name: "cover",
            label: "Capa",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data",
            required: true,
          },
          {
            type: "reference",
            name: "author",
            label: "Autor",
            collections: ["author"],
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            parser: {
              type: "markdown",
            }
          },
        ],
        ui: {
          router: ({ document }) => `/noticias/${document._sys.filename}`,
        },
      },
      {
        name: "author",
        label: "Autores",
        path: "content/authors",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nome",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Bio",
          },
        ],
      }
    ],
  },
});
