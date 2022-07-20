import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { headerLinks } from "@/common/local-data";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

// 其它业务逻辑
function showSelectItem(item, index) {
  if (index < 3) {
    return (
      <NavLink to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    );
  } else {
    return <a href={item.link}>{item.title}</a>;
  }
}

const LXAppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="content w1100">
        <HeaderLeft>
          <a href="/#" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创造者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default LXAppHeader;
