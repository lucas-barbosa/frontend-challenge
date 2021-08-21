import * as S from './styles';

import { HomeIcon, LibraryIcon, ProfileIcon } from 'components/Icons';
import Container from 'components/Container';

const BottomMenu = () => (
  <S.Wrapper>
    <Container as={S.Nav}>
      <S.Link href="" role="link" active>
        <HomeIcon title="home link" />
        <span>Home</span>
      </S.Link>

      <S.Link href="" role="link">
        <LibraryIcon title="library link" />
        <span>Libraries</span>
      </S.Link>

      <S.Link href="" role="link">
        <ProfileIcon title="profile link" />
        <span>Profile</span>
      </S.Link>
    </Container>
  </S.Wrapper>
);

export default BottomMenu;
