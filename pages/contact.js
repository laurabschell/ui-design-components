import React from "react";
import Layout from "../components/Layout";
import Container from "@mui/material/Container";
import styles from "../styles/Home.module.scss";

function contact() {
  return (
    <Layout>
      <Container className={styles.container}>
        <h2>Contact Form</h2>
      </Container>
    </Layout>
  );
}

export default contact;
