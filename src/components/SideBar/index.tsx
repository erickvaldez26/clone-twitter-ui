import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar en twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="A quién seguir"
            elements={[
              <FollowSuggestion
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion name="Camila Magalhaes" nickname="@camiM" />,
              <FollowSuggestion name="Camila Magalhaes" nickname="@camiM" />,
            ]}
          />
          <List
            title="Tendencias de Perú"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Tendencias de Perú"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Tendencias de Perú"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Tendencias de Perú"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
