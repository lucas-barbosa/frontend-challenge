import Link from 'next/link';
import { useRouter } from 'next/router';

import { HomeIcon, LibraryIcon, ProfileIcon } from 'components/Icons';
import Container from 'components/Container';

import * as S from './styles';

const menuItems = [
  {
    link: '/',
    title: 'Home',
    icon: <HomeIcon title="home link" />
  },
  {
    link: '/libraries',
    title: 'Libraries',
    icon: <LibraryIcon title="library link" />
  },
  {
    link: '/profile',
    title: 'Profile',
    icon: <ProfileIcon title="profile link" />
  }
];

const BottomMenu = () => {
  const { asPath } = useRouter();

  return (
    <S.Wrapper>
      <Container as={S.Nav}>
        {menuItems.map((item) => (
          <Link key={item.link} href={item.link} passHref>
            <S.Link role="link" active={item.link == asPath}>
              {item.icon}
              <span>{item.title}</span>
            </S.Link>
          </Link>
        ))}
      </Container>
    </S.Wrapper>
  );
};

export default BottomMenu;
