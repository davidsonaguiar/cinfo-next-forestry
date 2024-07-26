import client from "../../tina/__generated__/client";
import Title from "../components/title";
import TeacherCardView from "../components/teacher-card-view";

export default async function TeachersPage() {
  const allTeachers = await client.queries.teacherConnection();

  const teachers = allTeachers.data?.teacherConnection?.edges?.map(
    (teacher) => (
      <TeacherCardView
        name={teacher?.node?.person.name!}
        avatar={teacher?.node?.person.photo!}
        email={teacher?.node?.person.email!}
        lattes={teacher?.node?.person.latter!}
        personalPage={teacher?.node?.person.personal_page!}
        workArea={teacher?.node?.workAreas!}
        link={teacher?.node?.person?._sys?.filename!}
      />
    )
  );

  return (
    <>
      <div className="my-5">
        <Title>Docentes</Title>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2">
        {teachers}
      </div>
    </>
  );
}
