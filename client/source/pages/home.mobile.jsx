import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-size: 2rem;
  color: #000;
  padding: 1rem;
`;

export const HomePageMobile = () => {
  return (
    <Content>
      This is the homepage for <b>MOBILE</b> browsers.
    </Content>
  )
};