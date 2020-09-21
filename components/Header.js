import headerStyles from "../styles/_header.module.scss";

const Header = () => (
  <header className={headerStyles.container}>
    <svg
      width="124"
      height="124"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={headerStyles.logoSvg}
    >
      <path
        d="M62.0378 3.33739C46.3943 3.33739 31.3914 9.55178 20.3297 20.6135C9.26801 31.6751 3.05362 46.678 3.05362 62.3216C3.05362 77.9652 9.26801 92.968 20.3297 104.03C31.3914 115.091 46.3943 121.306 62.0378 121.306C77.6814 121.306 92.6843 115.091 103.746 104.03C114.808 92.968 121.022 77.9652 121.022 62.3216C121.022 46.678 114.808 31.6751 103.746 20.6135C92.6843 9.55178 77.6814 3.33739 62.0378 3.33739ZM61.7971 8.30136C76.0926 8.30136 89.8026 13.9802 99.911 24.0886C110.019 34.1971 115.698 47.907 115.698 62.2025C115.698 76.498 110.019 90.208 99.911 100.316C89.8026 110.425 76.0926 116.104 61.7971 116.104C47.5016 116.104 33.7917 110.425 23.6832 100.316C13.5748 90.208 7.89596 76.498 7.89596 62.2025C7.89596 47.907 13.5748 34.1971 23.6832 24.0886C33.7917 13.9802 47.5016 8.30136 61.7971 8.30136Z"
        fill="#DCDADA"
      />
      <path
        d="M55.9337 54.8365C55.474 52.3612 54.1833 50.2129 52.0616 48.3917C49.9399 46.5706 47.3406 45.66 44.2638 45.66C41.1874 45.66 38.3231 46.8093 35.6711 49.1078C32.3471 51.9899 30.6763 56.2952 30.6586 62.0237C30.6763 67.7699 32.3118 72.0928 35.5651 74.9926C38.2172 77.3265 41.1347 78.4934 44.3174 78.4934C47.5 78.4934 50.1169 77.5563 52.1681 75.6821C54.2193 73.8079 55.4304 71.5802 55.8015 68.9989L59.4084 69.5294C58.8779 73.0302 57.269 76.0182 54.5815 78.4934C51.894 80.9687 48.4905 82.1976 44.371 82.1799C40.2515 82.1799 36.521 80.7566 33.1795 77.91C30.6688 75.7706 28.883 72.765 27.8221 68.893C27.274 66.895 27 64.6053 27 62.0237C27.0177 57.2677 27.9636 53.3867 29.8378 50.3808C31.712 47.375 33.9929 45.2179 36.6805 43.9095C39.368 42.6365 41.9849 42 44.5312 42C48.3858 42 51.7099 43.2288 54.5035 45.6865C57.2971 48.1442 58.9767 50.9819 59.5425 54.1998L55.9337 54.8365Z"
        fill="#DCDADA"
      />
      <path
        d="M92.3967 62.8432H70.8617V81.5141H67.2017V42.6598H70.8617V59.1826H92.3967V42.6598H96.0567V81.5141H92.3967V62.8432Z"
        fill="#DCDADA"
      />
    </svg>

    <div className={headerStyles.headerContainer}>
      <h1 className={headerStyles.headerText}>Designer, Developer, Dumpster</h1>
    </div>
    {/* Make this a button for accessibility */}
    <svg
      width="25"
      height="15"
      viewBox="0 0 25 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={headerStyles.arrowSvg}
    >
      <path d="M2 2L12.5 12L23 2" stroke="#DCDADA" strokeWidth="3" />
    </svg>
  </header>
);

export default Header;
