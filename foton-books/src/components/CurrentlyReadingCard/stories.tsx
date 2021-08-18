import { Story, Meta } from '@storybook/react/types-6-0';
import CurrentlyReadingCard, { CurrentlyReadingCardProps } from '.';
import mock from './mock';

export default {
  title: 'CurrentlyReadingCard',
  component: CurrentlyReadingCard,
  args: { ...mock }
} as Meta;

export const Default: Story<CurrentlyReadingCardProps> = (args) => (
  <CurrentlyReadingCard {...args} />
);
