import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Layout from "../components/Layout";

function contact() {
  return (
    <Layout>
      <h2>Contact</h2>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  );
}

export default contact;
