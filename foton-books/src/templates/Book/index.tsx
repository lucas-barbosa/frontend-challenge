import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';

import BookActions from 'components/BookActions';
import Container from 'components/Container';
import { BackIcon } from 'components/Icons';
import { Circle, OutlinedCircle, Oval, Waves } from 'components/Symbols';
import { BookProps } from 'types/book';

import * as S from './styles';

const Book = ({
  title,
  subtitle = '',
  cover = '/images/generic-cover.png',
  author = 'unknown author',
  description = ''
}: BookProps) => {
  const { back } = useRouter();

  return (
    <S.Wrapper>
      <Container as={S.Header}>
        <a
          onClick={back}
          title="Voltar para Home page"
          aria-label="voltar para home"
        >
          <BackIcon />
        </a>

        <S.Cover
          src={cover ?? '/images/generic-cover.png'}
          alt={title}
          title={`${title} by ${author}`}
        />

        <S.Symbols>
          <Oval />
          <Circle className="smaller-pink-circle" />
          <Circle className="smaller-blue-circle" />
          <OutlinedCircle className="outlined-circle" />
          <Waves className="smaller-waves" />
          <Waves className="bigger-waves" />
        </S.Symbols>
      </Container>

      <Container as={S.Content}>
        <S.Title>
          <strong>{title}</strong>
          {subtitle && `: ${subtitle}`}
        </S.Title>

        <S.Author>{author || 'unknown author'}</S.Author>

        <S.Description>
          {ReactHtmlParser(description || 'Nenhuma descrição encontrada')}
        </S.Description>

        <BookActions />
      </Container>
    </S.Wrapper>
  );
};

export default Book;
