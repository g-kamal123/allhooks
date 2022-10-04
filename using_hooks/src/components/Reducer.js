import {
  Page,
  Layout,
  Card,
  TextField,
  FormLayout,
  Button,
  Modal,
  DataTable,
} from "@shopify/polaris";
import React, { useReducer } from "react";
import { Actions } from "./Actions";
import { reducerFunc } from "./Func";

function Reducer() {

  const handleChange = ()=>{
    dispatch({
        type:Actions.modal
    })
  }

  const activator = (
    <Button onClick={handleChange} destructive fullWidth size="large">
      Show Modal
    </Button>
  );
  const initial = {
    title: "",
    desc: "",
    ht: "",
    aps: "",
    bar: "",
    category: "",
    image: "",
    modal:false
  };
  const [state, dispatch] = useReducer(reducerFunc, initial);
  console.log(state);
  const inputHandler = (type, payload) => {
    dispatch({
      type,
      payload
    });
  };
  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title={
            <>
              Title<sup style={{ color: "red" }}>*</sup>
            </>
          }
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(event) => {
                  inputHandler(Actions.title, event);
                }}
                value={state.title}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
      <hr />
      <Layout>
        <Layout.AnnotatedSection
          title={"Description"}
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(event) => {
                  inputHandler(Actions.desc, event);
                }}
                value={state.desc}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
      <hr />
      <Layout>
        <Layout.AnnotatedSection
          title={
            <>
              Handling Time<sup style={{ color: "red" }}>*</sup>
            </>
          }
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(event) => {
                  inputHandler(Actions.ht, event);
                }}
                value={state.ht}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
      <hr />
      <Layout>
        <Layout.AnnotatedSection
          title={"Amazon Parent Sku"}
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(event) => {
                  inputHandler(Actions.aps, event);
                }}
                value={state.aps}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
      <hr />
      <Layout>
        <Layout.AnnotatedSection
          title={"Barcode/Gstn Exemption"}
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(event) => {
                  inputHandler(Actions.bar, event);
                }}
                value={state.bar}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
      <hr />
      <Layout>
        <Layout.AnnotatedSection
          title={"Add Amazon Category"}
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(event) => {
                  inputHandler(Actions.category, event);
                }}
                value={state.category}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
      <hr />
      <Layout>
        <Layout.AnnotatedSection
          title={"Image Selection"}
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(event) => {
                  inputHandler(Actions.image, event);
                }}
                value={state.image}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
      <hr />

      <div style={{ height: "500px" }}>
        <Modal
          activator={activator}
          open={state.modal}
          onClose={handleChange}
          title="All Entered Data"
        >
          <Modal.Section>
          <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'text',
            'text',
            'text',
            'text'
          ]}
          headings={[
            Actions.title,
            Actions.desc,
            Actions.ht,
            Actions.aps,
            Actions.bar,
            Actions.category,
            Actions.image
          ]}
          rows={[[state.title,state.desc,state.ht,state.aps,state.bar,state.category,state.image]]}
         
        />
      </Card>
          </Modal.Section>
        </Modal>
      </div>
    </Page>
  );
}
export default Reducer;
