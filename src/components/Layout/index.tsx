import React from 'react';

import Main from '../Main';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Menubar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
