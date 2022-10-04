import { Card, TextField } from "@shopify/polaris";
import React from "react";

const Component1 = (props) => {
  console.log("component 1");
  const inputHandler = (e) => {
    props.inp(e);
  };
  return (
    <>
      <Card sectioned title="component1">
        <TextField onChange={inputHandler} value={props.inp1} />
      </Card>
    </>
  );
};

export default React.memo(Component1);
