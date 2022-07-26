import React, { memo } from "react";
import PropTypes from "prop-types";

import { ThemeHeaderWrapper, ThemeHeaderLeft, ThemeHeaderRight } from "./style";

const LXThemeHeaderRcmd = memo((props) => {
  const { title, keywords } = props;
  return (
    <ThemeHeaderWrapper>
      <ThemeHeaderLeft>
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item, index) => {
            return (
              <div key={item}>
                <a href="/">{item}</a>
                <span className="divide">|</span>
              </div>
            );
          })}
        </div>
      </ThemeHeaderLeft>
      <ThemeHeaderRight>
        <a href="/">更多</a>
        <i className="icon"></i>
      </ThemeHeaderRight>
    </ThemeHeaderWrapper>
  );
});
LXThemeHeaderRcmd.propTypes = {
  tittle: PropTypes.string,
  keywords: PropTypes.array,
};
LXThemeHeaderRcmd.defaultProps = {
  name: "",
  keywords: [],
};

export default LXThemeHeaderRcmd;
