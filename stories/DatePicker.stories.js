import React, { useState } from 'react';
import DatePicker from './DatePicker';
 
export default {
  title: 'Example/DatePicker',
  component: DatePicker,
  argTypes: {
    value: { control: 'date' },
    onChange: { action: 'changed' },
  },
};
 
const Template = (args) => {
  const [date, setDate] = useState(args.value);
  return <DatePicker {...args} value={date} onChange={setDate} />;
};
 
export const Default = Template.bind({});
Default.args = {
  value: new Date().toISOString().split('T')[0],
};
 
export const WithInitialDate = Template.bind({});
WithInitialDate.args = {
  value: '2024-07-04',
};