import { defineConfig } from "tinacms";
import { PersonCollection } from "./collections/person";
import { TeacherCollection } from "./collections/teacher";
import { NoticeCollection } from "./collections/notice";
import { CourseCollection } from "./collections/course";
import { DisciplineCollection } from "./collections/discipline";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
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
