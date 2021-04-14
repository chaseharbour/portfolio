import Header from "./Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import CardContainer from "./CardContainer";
import About from "./About";
import ContactLinks from "./ContactLinks";

const PhysicsCanvas = dynamic(() => import("./PhysicsCanvas"), { ssr: false });

import canvasStyles from "../styles/_canvas.module.scss";

const Layout = (props) => (
  <>
    <Head>
      <title>Chase Harbour</title>
    </Head>

    <Header></Header>

    <div>{props.children}</div>

    <About></About>
    <CardContainer />
    <ContactLinks />
    {/* <PhysicsCanvas
      background="#383F51"
      name={canvasStyles.ptsTest}
      play={true}
    /> */}
  </>
);

export default Layout;
