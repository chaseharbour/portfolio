import ProjectContainer from "./ProjectContainer";
import About from "./About";
import Contact from "./Contact";
import ContactLinks from "./ContactLinks";
import axios from "axios";

export default function Home({ repos }) {
  return (
    <>
      <ProjectContainer repos={repos} />
      <About></About>
      <Contact />
      <ContactLinks />
    </>
  );
}

export async function getStaticProps() {
  const data = await axios.get(
    "https://api.github.com/users/chaseharbour/repos"
  );
  const repos = data.data;

  return {
    props: { repos },
  };
}
