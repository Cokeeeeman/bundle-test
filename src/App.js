import React from "react";
import styled from "@emotion/styled";
import { Button } from "@spokeo/styleguide/inputs";
import { gray200, xl7Space } from "@spokeo/styleguide";

const Wrapper = styled.div`
  background: ${gray200};
  padding: ${xl7Space};
`;

export default () => (
  <Wrapper>
    <Button purchase>button</Button>
  </Wrapper>
);
