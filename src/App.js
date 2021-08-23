import React from "react";
import styled from "@emotion/styled";
import { copyStyles } from "@spokeo/styleguide/typography";
import { gray200, xl7Space } from "@spokeo/styleguide";

const Wrapper = styled.div`
  background: ${gray200};
  padding: ${xl7Space};
`;

const P = styled.p`
  ${copyStyles({ version: 3 })}
`;
export default () => (
  <Wrapper>
    <h2>sample data is accesable globally via variable "data"</h2>
    <P>
      data.BundleComponents.BundleComponent.length:{" "}
      {data.BundleComponents.BundleComponent.length}
    </P>
  </Wrapper>
);
