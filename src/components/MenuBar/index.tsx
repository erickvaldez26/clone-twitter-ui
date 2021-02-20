import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  ExitIcon,
  Botside,
  Avatar,
  ProfileData,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página principal</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificaciones</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensajes</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritos</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Twettear</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Erick Valdez</strong>
          <span>@erizap26</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
