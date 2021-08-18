import { Story, Meta } from '@storybook/react/types-6-0';
import ReviewCard, { ReviewCardProps } from '.';
import mock from './mock';

export default {
  title: 'ReviewCard',
  component: ReviewCard,
  args: { ...mock }
} as Meta;

export const Default: Story<ReviewCardProps> = (args) => (
  <ReviewCard {...args} />
);
