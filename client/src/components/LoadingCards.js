import React from "react";
import { Card } from "antd";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const LoadingCards = () => {
  return (
    <div style={{ display: "flex", marginTop: "7%" }}>
      <Card style={gridStyle} loading={true}></Card>
      <Card style={gridStyle} loading={true}></Card>
      <Card style={gridStyle} loading={true}></Card>
      <Card style={gridStyle} loading={true}></Card>
    </div>
  );
};

export default LoadingCards;
