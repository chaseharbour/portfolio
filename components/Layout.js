import Header from "./Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import About from "./About";
import ContactLinks from "./ContactLinks";
import Contact from "./Contact";
import ProjectContainer from "./ProjectContainer";

const PhysicsCanvas = dynamic(() => import("./PhysicsCanvas"), { ssr: false });

const Layout = (props) => (
  <>
    <Head>
      <title>Chase Harbour</title>
    </Head>
    <Header></Header>
    <div>{props.children}</div>
    <ProjectContainer />
    <About></About>
    <Contact />
    <ContactLinks />
    {/* <PhysicsCanvas
      background="#383F51"
      name={canvasStyles.ptsTest}
      play={true}
    /> */}
  </>
);

export default Layout;
