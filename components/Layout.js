import Header from "../pages/Header";
import Head from "next/head";

const Layout = (props) => (
  <>
    <Head>
      <title>Chase Harbour</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&family=Numans&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌱</text></svg>"
      />
    </Head>
    <Header></Header>
    <main>{props.children}</main>
  </>
);

export default Layout;
