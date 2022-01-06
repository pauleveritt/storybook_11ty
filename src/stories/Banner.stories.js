import { action } from '@storybook/addon-actions';

import Button from  './Banner.njk';

export default {
    title: 'Design System/Atoms/Button',
    argTypes: {
        label: { control: 'text' }
    }
};

const Template = ({ onClick, label }) => {
    return Button({ label });
};

export const Text = Template.bind({});
Text.args = {
    label: 'Button',
    onClick: action('onClick')
};

// // More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
// export default {
//     title: 'Example/Banner',
//     // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
//     argTypes: {},
// };
//
// // More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
// const Template = ({label, ...args}) => {
//     // You can either use a function to create DOM elements or use a plain html string!
//     // return `<div>${label}</div>`;
//     return createBanner({label, ...args});
// };
//
// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/html/writing-stories/args
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
