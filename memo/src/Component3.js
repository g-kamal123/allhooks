import { Card, Heading } from "@shopify/polaris";
import React from "react";

const Component3 = (props) => {
  console.log("component3");
  return (
    <Card sectioned title="component3">
      <Heading>{props.inp21}</Heading>
    </Card>
  );
};

export default React.memo(Component3);
