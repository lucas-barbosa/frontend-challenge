import { Story, Meta } from '@storybook/react/types-6-0';
import NewBookCard, { NewBookCardProps } from '.';
import mock from './mock';

export default {
  title: 'NewBookCard',
  component: NewBookCard,
  args: { ...mock }
} as Meta;

export const Default: Story<NewBookCardProps> = (args) => (
  <NewBookCard {...args} />
);
