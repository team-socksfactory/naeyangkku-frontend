import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset}
* {
    margin: 0;
    padding: 0;
    font-family: 'PretendardMedium' !important;
  }

  a {
      text-decoration: none;
    }
`;
export default globalStyles;
