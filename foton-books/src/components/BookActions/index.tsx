import { BookIcon, HeadphoneIcon, ShareIcon } from 'components/Icons';
import * as S from './styles';

const BookActions = () => (
  <S.Wrapper>
    <S.Button>
      <BookIcon />
      <span>Read</span>
    </S.Button>

    <S.Button>
      <HeadphoneIcon />
      <span>Listen</span>
    </S.Button>

    <S.Button>
      <ShareIcon />
      <span>Share</span>
    </S.Button>
  </S.Wrapper>
);

export default BookActions;
