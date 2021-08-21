import Base from 'templates/Base';

import Container from 'components/Container';

import CurrentlyReadingCard, {
  CurrentlyReadingCardProps
} from 'components/CurrentlyReadingCard';

import ErrorMessage from 'components/ErrorMessage';
import { NewBookCardProps } from 'components/NewBookCard';
import ReviewCard, { ReviewCardProps } from 'components/ReviewCard';
import Slider from 'components/NewBooksSlider';

import * as S from './styles';
import Link from 'next/link';

export type HomePageProps = {
  username: string;
  newBooks: NewBookCardProps[];
  currentlyReading: CurrentlyReadingCardProps[];
  reviews: ReviewCardProps[];
};

const HomePage = ({
  username,
  newBooks,
  currentlyReading,
  reviews
}: HomePageProps) => (
  <Base>
    <Container as={S.Title}>
      Hi,&nbsp;
      <span>{username}</span>
      <img src="/images/emoji.png" alt="handle icon" />
    </Container>

    <Container as={S.Section}>
      <S.SectionHeader>
        <S.Heading>Discover new book</S.Heading>

        <Link href="/search?q=more" passHref>
          <S.Link>More</S.Link>
        </Link>
      </S.SectionHeader>

      <S.SectionContent>
        {newBooks && <Slider items={newBooks} />}
        {!newBooks?.length && (
          <ErrorMessage>Nenhum livro encontrado!</ErrorMessage>
        )}
      </S.SectionContent>
    </Container>

    <S.Section>
      <Container as={S.SectionHeader}>
        <S.Heading>Currently Reading</S.Heading>
        <S.Link>All</S.Link>
      </Container>

      <S.SectionCurrentlyReading>
        {currentlyReading &&
          currentlyReading.map((item, index) => (
            <CurrentlyReadingCard key={`reading-${index}`} {...item} />
          ))}

        {!currentlyReading?.length && (
          <ErrorMessage>Nenhum livro encontrado!</ErrorMessage>
        )}
      </S.SectionCurrentlyReading>
    </S.Section>

    <Container as={S.Section}>
      <S.SectionHeader>
        <S.Heading>Reviews of The Days</S.Heading>
        <S.Link>All Video</S.Link>
      </S.SectionHeader>

      <S.SectionContent>
        {reviews &&
          reviews.map((item, index) => (
            <ReviewCard key={`review-${index}`} {...item} />
          ))}

        {!reviews?.length && (
          <ErrorMessage>Nenhum review encontrado!</ErrorMessage>
        )}
      </S.SectionContent>
    </Container>
  </Base>
);

export default HomePage;
