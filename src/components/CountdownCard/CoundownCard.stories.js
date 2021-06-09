import React from 'react';

import CountdownCard from './CountdownCard';

export default {
  component: CountdownCard,
  title: 'CountdownCard',
};

const Template = args => <CountdownCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    // title: 'Test Task',
    // state: 'TASK_INBOX',
    // updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
