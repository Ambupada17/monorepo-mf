 import React from 'react';
// import Form from './Form';

// export default{
//     title: "Example/Form",
//     component: Form,
// };

// const Template = (args) => <Form {...args} />
// export const Default = Template.bind({});
// Default.args ={};


import { fn } from '@storybook/test';
import  Form  from './Form';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Form',
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    initialData: {
        control: 'object',
    },
    showErrors: {
        control: 'boolean',
    },
    isDisabled: {
        control: 'boolean',
    },
    // backgroundColor: {
    //     control: 'color',
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

const Template = (args) => <Form {...args} />
export const Default = Template.bind({});
Default.args ={ };

export const WithPreFilledData = Template.bind({});
WithPreFilledData.args = {
    initialData: {
        firstName: "Tiger",
        lastName: "Cheeta",
        email: "Tiger@gmail.com",
        phone: "1234567890",
        address: "Gurgaon",
        city: "Indigo",
        state: "Haryana",
        zip: "754250",
        gender: "male",
        country: "USA",
    },
    // backgroundColor: '#ffffff',
};

export const WithErrors = Template.bind({});
WithErrors.args = {
    initialData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        gender: "",
        country: "",
    },
    showErrors: true,
    // backgroundColor: '#ffffff',
};

export const DisabledForm = Template.bind({});
DisabledForm.args = {
    initialData: {
        firstName: "Cat",
        lastName: "Billi",
        email: "Cat@gmail.com",
        phone: "0987654321",
        address: "Bangalore",
        city: "Marathahalli",
        state: "Karnataka",
        zip: "560037",
        gender: "female",
        country: "UK",
    },
    isDisabled: true,
    // backgroundColor: '#ffffff',
}