import { Card, Page } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const Parent = () => {
  const [inp1, setInp1] = useState("");
  const [inp21, setInp21] = useState("");
  const inp1Handler = useCallback((e) => {
    setInp1(e);
    // console.log("chl gya");
  }, []);
  const inp2Handler = useCallback((e) => {
    setInp21(e);
  }, []);
  return (
    <Page sectioned title="useCallback">
      <Card>
        <Component1 inp={inp1Handler} inp1={inp1} />
        <Component2 inp={inp1} inp2Handler={inp2Handler} inp21={inp21} />
        <Component3 inp21={inp21} />
      </Card>
    </Page>
  );
};

export default Parent;
