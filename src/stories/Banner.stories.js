import {createBanner} from './Banner';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Example/Banner',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({label, ...args}) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createBanner({label, ...args});
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button',
};
