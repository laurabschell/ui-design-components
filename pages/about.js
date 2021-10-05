import React from "react";
import Layout from "../components/Layout";
import Container from "@mui/material/Container";
import styles from "../styles/Home.module.scss";

function about() {
  return (
    <Layout>
      <Container className={styles.container}>
        <h2>About</h2>
      </Container>
    </Layout>
  );
}

export default about;
