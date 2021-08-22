import axios from 'axios';
import { BookProps } from 'types/book';
const API_URL = 'https://www.googleapis.com/books/v1/volumes';

type BookResponseData = {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
};

type SearchBooksResponseData = {
  items: BookResponseData[];
};

export const getBookById = async (id: string): Promise<BookProps | null> => {
  try {
    const { data } = await axios.get<BookResponseData>(`${API_URL}/${id}`);
    return convertResponseToBookType(data);
  } catch {
    return null;
  }
};

export async function getBooksByName(
  name: string,
  page = 1
): Promise<BookProps[]> {
  const query = new URLSearchParams({
    q: name,
    orderBy: 'newest',
    startIndex: `${page * 10}`
  });

  const { data } = await axios.get<SearchBooksResponseData>(
    `${API_URL}?${query.toString()}`
  );

  return data.items ? data.items.map(convertResponseToBookType) : [];
}

export async function getNewestBooks(): Promise<BookProps[]> {
  const query = new URLSearchParams({
    q: 'h',
    orderBy: 'newest'
  });

  const { data } = await axios.get<SearchBooksResponseData>(
    `${API_URL}?${query.toString()}`
  );

  return data.items?.map(convertResponseToBookType);
}

const convertResponseToBookType = (book: BookResponseData) => ({
  id: book.id,
  title: book.volumeInfo.title,
  subtitle: book.volumeInfo.subtitle ?? '',
  author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : '',
  description: book.volumeInfo.description ?? '',
  cover: book.volumeInfo.imageLinks?.thumbnail
});
