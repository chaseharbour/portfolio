import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import ContactLinks from "./ContactLinks";
import { LayoutGroup } from "framer-motion";
import axios from "axios";

export default function Home({ repos }) {
  return (
    <>
      <Work repos={repos} />
      <About />

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
