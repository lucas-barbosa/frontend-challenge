import { GetStaticProps } from 'next';

import reviewMock from 'components/ReviewCard/mock';
import HomePage, { HomePageProps } from 'templates/Home';
import { getBookById, getNewestBooks } from 'services/bookService';

export default function Index(props: HomePageProps) {
  return <HomePage {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const newBooks = await getNewestBooks();
  const currentlyReading = await getBookById('eLRhDgAAQBAJ');

  return {
    revalidate: 60,
    props: {
      newBooks,
      currentlyReading: [currentlyReading],
      username: 'Mehmed Al Fatih',
      reviews: [reviewMock]
    }
  };
};
