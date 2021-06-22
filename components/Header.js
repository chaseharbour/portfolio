import headerStyles from "../styles/_header.module.scss";

const Header = () => (
  <section className={headerStyles.container}>
    <h1 className={headerStyles.firstname}>Chase</h1>
    <div className={headerStyles.imgContainer}>
      <div className={headerStyles.imgLeft}></div>
      <div className={headerStyles.imgRight}></div>
    </div>
    <h1 className={headerStyles.lastname}>Harbour</h1>
  </section>
);

export default Header;
