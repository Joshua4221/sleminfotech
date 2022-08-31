import { InputF, InputDiv, SearchfieldDiv } from "./searchfield.style";
import { FaSearch } from "react-icons/fa";
import { withTheme } from "styled-components";

const SearchField = ({ theme, addon, placeholder, width }) => {
  return (
    <SearchfieldDiv Color={theme}>
      <InputDiv Color={theme} view={addon}>
        <FaSearch className={"searchicons"} />
        <InputF
          // width={width}
          Color={theme}
          view={addon}
          placeholder={placeholder}
        />
      </InputDiv>
    </SearchfieldDiv>
  );
};

export default withTheme(SearchField);
