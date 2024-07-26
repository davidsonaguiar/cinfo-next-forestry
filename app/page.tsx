import Home from "./pages/home";
import client from "../tina/__generated__/client";

export default async function HomePage() {
  const notices = await client.queries?.noticeConnection();
  const page = await client?.queries?.page({ relativePath: "home.json" });

  return <Home 
    noticesData={notices?.data} 
    pageData={page.data}
    pageQuery={page.query}
    pageVariables={page.variables}
  />;
}