import React, { memo } from "react";

import { footerImages, footerLinks } from "@/common/local-data";
import { FooterWrapper, FooterLeft, FooterRight } from "./style";

const LXAppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content w980">
        <FooterLeft>
          <ul>
            {footerLinks.map((item, index) => {
              return (
                <li key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  {index < 7 ? <span className="line">|</span> : null}
                </li>
              );
            })}
          </ul>
          <p>
            <span>网易公司版权所有©1997-2022</span>
            &nbsp;&nbsp;&nbsp;
            <span>杭州乐读科技有限公司运营：</span>
            <a
              href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              浙网文[2021] 1186-054号
            </a>
          </p>
          <p>
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noopener noreferrer"
            >
              粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
            </a>
            <a
              className="police-link"
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="logo"></span>
              <span>浙公网安备 33010902002564号</span>
            </a>
          </p>
          <p>互联网宗教信息服务许可证：浙（2022）0000120</p>
        </FooterLeft>
        <FooterRight>
          {footerImages.map((item) => {
            return (
              <li className="footer-icon" key={item.link}>
                <a
                  className="image-link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {null}
                </a>
                <span className="title"></span>
              </li>
            );
          })}
        </FooterRight>
      </div>
    </FooterWrapper>
  );
});

export default LXAppFooter;
