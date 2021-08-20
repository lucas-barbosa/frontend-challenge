import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

import BookActions from 'components/BookActions';
import Container from 'components/Container';
import { BackIcon } from 'components/Icons';
import { Circle, OutlinedCircle, Oval, Waves } from 'components/Symbols';
import { BookProps } from 'types/book';

import * as S from './styles';

const Book = ({ cover, title, subtitle, author, description }: BookProps) => (
  <S.Wrapper>
    <Container as={S.Header}>
      <Link href="/">
        <a title="Voltar para Home page" aria-label="voltar para home">
          <BackIcon />
        </a>
      </Link>

      <S.Cover src={cover} alt={title} />

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
        <strong>{title}</strong>: {subtitle}
      </S.Title>

      <S.Author>{author}</S.Author>

      <S.Description>{ReactHtmlParser(description)}</S.Description>

      <BookActions />
    </Container>
  </S.Wrapper>
);

export default Book;
