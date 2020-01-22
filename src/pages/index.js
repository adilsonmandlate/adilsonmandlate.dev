import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import WelcomeInfo from "../components/Welcome";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <WelcomeInfo />
    <Contact />
  </Layout>
);

export default IndexPage;
