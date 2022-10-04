import { Card, Heading, TextField } from "@shopify/polaris";
import React from "react";

const Component2 = (props) => {
  console.log("component2");
  const inpHandler = (e) => {
    props.inp2Handler(e);
  };
  return (
    <>
      <Card sectioned title="component2">
        <Heading>{props.inp}</Heading>
        <TextField onChange={inpHandler} value={props.inp21} />
      </Card>
    </>
  );
};

export default React.memo(Component2);
