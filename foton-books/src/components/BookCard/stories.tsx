import { Story, Meta } from '@storybook/react/types-6-0';

import BookCard, { BookCardProps } from '.';
import bookMock from './mock';

export default {
  title: 'BookCard',
  component: BookCard,
  args: { ...bookMock }
} as Meta;

export const Default: Story<BookCardProps> = (args) => <BookCard {...args} />;
