import { Story, Meta } from '@storybook/react/types-6-0';
import BookActions from '.';

export default {
  title: 'BookActions',
  component: BookActions
} as Meta;

export const Default: Story = (args) => <BookActions {...args} />;
