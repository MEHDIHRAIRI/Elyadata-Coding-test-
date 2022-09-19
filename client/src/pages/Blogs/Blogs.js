import React from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import { BackTop } from "antd";
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#28666e",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};
function Blogs() {
  return (
    <>
      <Banner />
      <Cards />
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </>
  );
}

export default Blogs;
