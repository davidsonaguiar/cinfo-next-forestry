import { defineConfig } from "tinacms";
import { PersonCollection } from "./collections/person";
import { TeacherCollection } from "./collections/teacher";
import { NoticeCollection } from "./collections/notice";
import { CourseCollection } from "./collections/course";
import { DisciplineCollection } from "./collections/discipline";

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
      PersonCollection,
      TeacherCollection,
      NoticeCollection,
      CourseCollection,
      DisciplineCollection,
    ],
  },
});
