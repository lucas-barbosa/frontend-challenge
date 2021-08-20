import axios from 'axios';
import { BookProps } from 'types/book';

const url = 'https://www.googleapis.com/books/v1';

type BookResponseData = {
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

export async function getBookById(id: string): Promise<BookProps | null> {
  try {
    const { data } = await axios.get<BookResponseData>(`${url}/volumes/${id}`);

    const book = {
      id,
      title: data.volumeInfo.title,
      subtitle: data.volumeInfo.subtitle,
      author: data.volumeInfo.authors[0] ?? '',
      description: data.volumeInfo.description,
      cover: data.volumeInfo.imageLinks.thumbnail
    };

    return book;
  } catch {
    return null;
  }
}
