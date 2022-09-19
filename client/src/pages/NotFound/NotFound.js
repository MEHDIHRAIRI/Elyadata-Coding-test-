import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
function NotFound() {
  return (
    <div style={style}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, page not found."
        extra={
          <Link className="btn-item auction-btn mr-2" to={`/`}>
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
}

export default NotFound;
