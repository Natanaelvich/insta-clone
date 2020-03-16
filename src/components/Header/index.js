import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, RowContainer, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <RowContainer>
        <Icon name="camera-enhance" size={28} color="#000" />
        <Title>Instagrando</Title>
      </RowContainer>
    </Container>
  );
}
