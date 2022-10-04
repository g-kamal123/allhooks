import { Button, Card, Page, TextField } from "@shopify/polaris";
import { useMemo, useState } from "react";
import classes from "./App.module.css";
import Parent from "./Parent";

function App() {
  const [inp1, setInp1] = useState(0);
  const [inp2, setInp2] = useState(0);
  const [sum, setSum] = useState();

  const [flag, setFlag] = useState(false);
  const mValue = useMemo(
    function multiplyValue() {
      console.log("multiplication function");
      return inp1 * inp2;
    },
    [inp1, inp2]
  );
  return (
    <>
      <Page title="useMemo">
        <Card sectioned>
          <Card sectioned>Sum is: {sum}</Card>
          <TextField
            label="input 1"
            type="number"
            onChange={(e) => setInp1(e)}
            value={inp1}
          />
          <TextField
            label="input 2"
            type="number"
            onChange={(e) => setInp2(e)}
            value={inp2}
          />
          <Button onClick={() => setSum(Number(inp1) + Number(inp2))}>
            Add
          </Button>
          <span className={`${flag ? classes.blue : classes.red}`}>
            <Button onClick={() => setFlag(!flag)}>Toggle</Button>
          </span>
        </Card>
        {mValue}
      </Page>
      <Parent />
    </>
  );
}

export default App;
