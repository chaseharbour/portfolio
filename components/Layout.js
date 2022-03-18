import Header from "../pages/Header";
import Head from "next/head";

const Layout = (props) => (
  <>
    <Head>
      <title>Chase Harbour</title>
    </Head>
    <Header></Header>
    <main>{props.children}</main>
  </>
);

export default Layout;
