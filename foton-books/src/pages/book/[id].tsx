import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Book from 'templates/Book';
import { BookProps } from 'types/book';
import { getBookById } from 'services/bookService';

export default function Index(props: BookProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Book {...props} />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const book = await getBookById(`${params?.id}`);

  if (!book) return { notFound: true };

  return {
    props: {
      ...book,
      cover: book.cover ?? null
    }
  };
};
