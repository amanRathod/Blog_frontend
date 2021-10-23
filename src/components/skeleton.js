import ContentLoader from 'react-content-loader';

const theme = localStorage.getItem('color-theme');

export const MyLoader = () => (
  <ContentLoader
    speed={4}
    width={296}
    height={524}
    viewBox="0 0 176 324"
    backgroundColor={theme === 'dark' ? '#272727' : '#f3f3f3'}
    foregroundColor={theme === 'dark' ? '#424242' : '#bdbdbd'}
  >
    <circle cx="21" cy="21" r="21" />
    <rect x="6" y="108" rx="0" ry="0" width="193" height="96" />
    <rect x="65" y="86" rx="0" ry="0" width="33" height="4" />
    <rect x="76" y="65" rx="0" ry="0" width="1" height="1" />
    <rect x="8" y="85" rx="0" ry="0" width="45" height="5" />
    <rect x="5" y="65" rx="0" ry="0" width="197" height="12" />
    <rect x="64" y="12" rx="0" ry="0" width="57" height="9" />
    <rect x="63" y="27" rx="0" ry="0" width="93" height="8" />
    <rect x="7" y="212" rx="0" ry="0" width="162" height="7" />
    <rect x="5" y="240" rx="0" ry="0" width="80" height="9" />
    <rect x="5" y="253" rx="0" ry="0" width="149" height="8" />
    <rect x="6" y="226" rx="0" ry="0" width="182" height="9" />
    <rect x="109" y="86" rx="0" ry="0" width="60" height="5" />
    <rect x="2" y="273" rx="0" ry="0" width="36" height="26" />
    <rect x="50" y="272" rx="0" ry="0" width="36" height="25" />
    <rect x="125" y="270" rx="0" ry="0" width="72" height="27" />
  </ContentLoader>
);

export const EditProfileSkeleton = () => (
  <ContentLoader
    speed={2}
    width={976}
    height={525}
    viewBox="0 0 976 525"
    backgroundColor={theme === 'dark' ? '#272727' : '#f3f3f3'}
    foregroundColor={theme === 'dark' ? '#424242' : '#bdbdbd'}
  >
    <rect x="26" y="17" rx="0" ry="0" width="1" height="0" />
    <rect x="9" y="8" rx="0" ry="0" width="1088" height="8" />
    <rect x="6" y="9" rx="0" ry="0" width="6" height="415" />
    <rect x="11" y="420" rx="0" ry="0" width="1088" height="7" />
    <rect x="970" y="11" rx="0" ry="0" width="6" height="413" />
    <rect x="576" y="514" rx="0" ry="0" width="11" height="0" />
    <rect x="40" y="61" rx="0" ry="0" width="109" height="10" />
    <rect x="43" y="33" rx="0" ry="0" width="1" height="0" />
    <rect x="39" y="34" rx="0" ry="0" width="76" height="16" />
    <rect x="39" y="90" rx="0" ry="0" width="513" height="36" />
    <rect x="41" y="153" rx="0" ry="0" width="106" height="11" />
    <rect x="42" y="175" rx="0" ry="0" width="509" height="37" />
    <circle cx="110" cy="313" r="67" />
    <rect x="197" y="304" rx="0" ry="0" width="103" height="25" />
    <rect x="42" y="229" rx="0" ry="0" width="80" height="12" />
  </ContentLoader>
);

export const EditProfileSkeletons = () => (
  <ContentLoader
    speed={2}
    width={976}
    height={525}
    viewBox="0 0 976 525"
    backgroundColor={theme === 'dark' ? '#272727' : '#f3f3f3'}
    foregroundColor={theme === 'dark' ? '#424242' : '#bdbdbd'}
  >
    <rect x="26" y="17" rx="0" ry="0" width="1" height="0" />
    <rect x="9" y="8" rx="0" ry="0" width="1088" height="8" />
    <rect x="6" y="9" rx="0" ry="0" width="6" height="320" />
    <rect x="11" y="320" rx="0" ry="0" width="1088" height="7" />
    <rect x="970" y="11" rx="0" ry="0" width="6" height="320" />
    <rect x="276" y="214" rx="0" ry="0" width="11" height="0" />
    <rect x="40" y="61" rx="0" ry="0" width="109" height="10" />
    <rect x="43" y="33" rx="0" ry="0" width="1" height="0" />
    <rect x="39" y="34" rx="0" ry="0" width="76" height="16" />
    <rect x="39" y="90" rx="0" ry="0" width="513" height="36" />
    <rect x="41" y="153" rx="0" ry="0" width="106" height="11" />
    <rect x="42" y="175" rx="0" ry="0" width="509" height="37" />
  </ContentLoader>
);

export const ProfileSKeleton = () => (
  <ContentLoader
    speed={2}
    width={676}
    height={505}
    viewBox="0 0 576 425"
    backgroundColor={theme === 'dark' ? '#272727' : '#f3f3f3'}
    foregroundColor={theme === 'dark' ? '#424242' : '#bdbdbd'}
  >
    <rect x="26" y="17" rx="0" ry="0" width="1" height="0" />
    <rect x="576" y="514" rx="0" ry="0" width="11" height="0" />
    <rect x="43" y="33" rx="0" ry="0" width="1" height="0" />
    <circle cx="204" cy="89" r="63" />
    <rect x="142" y="163" rx="0" ry="0" width="129" height="22" />
    <rect x="6" y="11" rx="0" ry="0" width="8" height="339" />
    <rect x="12" y="342" rx="0" ry="0" width="399" height="9" />
    <rect x="410" y="9" rx="0" ry="0" width="10" height="340" />
    <rect x="9" y="7" rx="0" ry="0" width="409" height="8" />
    <rect x="42" y="224" rx="0" ry="0" width="337" height="18" />
    <rect x="64" y="268" rx="0" ry="0" width="28" height="26" />
    <rect x="186" y="266" rx="0" ry="0" width="28" height="26" />
    <rect x="310" y="264" rx="0" ry="0" width="28" height="25" />
    <rect x="45" y="306" rx="0" ry="0" width="70" height="10" />
    <rect x="160" y="301" rx="0" ry="0" width="76" height="11" />
    <rect x="287" y="298" rx="0" ry="0" width="72" height="12" />
    <rect x="416" y="62" rx="0" ry="0" width="3" height="4" />
    <rect x="370" y="41" rx="0" ry="0" width="7" height="40" />
  </ContentLoader>
);

export const UserBlogsSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1076}
    height={525}
    viewBox="0 0 1076 510"
    backgroundColor={theme === 'dark' ? '#272727' : '#f3f3f3'}
    foregroundColor={theme === 'dark' ? '#424242' : '#bdbdbd'}
  >
    <rect x="26" y="17" rx="0" ry="0" width="1" height="0" />
    <rect x="576" y="514" rx="0" ry="0" width="11" height="0" />
    <rect x="43" y="33" rx="0" ry="0" width="1" height="0" />
    <rect x="6" y="11" rx="0" ry="0" width="6" height="258" />
    <rect x="6" y="259" rx="0" ry="0" width="966" height="7" />
    <rect x="969" y="8" rx="0" ry="0" width="7" height="252" />
    <rect x="9" y="7" rx="0" ry="0" width="966" height="7" />
    <rect x="416" y="62" rx="0" ry="0" width="3" height="4" />
    <rect x="21" y="40" rx="0" ry="0" width="265" height="190" />
    <rect x="324" y="39" rx="0" ry="0" width="606" height="26" />
    <rect x="324" y="203" rx="0" ry="0" width="42" height="26" />
    <rect x="394" y="203" rx="0" ry="0" width="44" height="26" />
    <rect x="827" y="202" rx="0" ry="0" width="80" height="28" />
    <rect x="324" y="86" rx="0" ry="0" width="465" height="12" />
    <rect x="324" y="114" rx="0" ry="0" width="542" height="7" />
    <rect x="324" y="131" rx="0" ry="0" width="414" height="5" />
    <rect x="324" y="145" rx="0" ry="0" width="480" height="7" />
    <rect x="324" y="147" rx="0" ry="0" width="0" height="1" />
    <rect x="324" y="163" rx="0" ry="0" width="249" height="15" />
  </ContentLoader>
);
