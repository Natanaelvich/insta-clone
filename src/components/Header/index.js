import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, RowContainer, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <RowContainer>
        <Title>Instagrando</Title>
        <Icon name="camera-enhance" size={28} color="#000" />
      </RowContainer>
    </Container>
  );
}
