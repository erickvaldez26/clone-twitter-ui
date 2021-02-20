import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Erick Valdez</h1>
        <h2>@erizap26</h2>

        <p>
          Developer at<a href="https://anunalog.com/"> @anunalog</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Lima, Perú
          </li>
          <li>
            <CakeIcon />
            Cumpleaños 26 de sep 2001
          </li>
        </ul>

        <Followage>
          <span>
            Siguiendo <strong>26</strong>
          </span>
          <span>
            <strong>2556 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
