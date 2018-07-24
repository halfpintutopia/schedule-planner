import React from "react";
import { Icon, Header } from "semantic-ui-react";

import Layout from "../Layout/index";

const NoMatch = () => {
  return (
    <Layout>
      <Icon name="minus circle" size="big" />
      <strong>Page not found!</strong>
    </Layout>
  );
};

export default NoMatch;
