// import Banner from '../_includes/Banner.njk';

const TemplateRender = require("@11ty/eleventy/src/TemplateRender");

export default {
    title: 'Example/Banner'
};

const Template = ({ label }) => {
    /*

    Here is where I will use the TemplateRender and TemplateConfig
    as shown in the ava tests for 11ty.

    For now just return a string, as the import above triggers
    all the failures.

     */
    return $`<div>Hello</div>`;
    // return Banner({label});
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Hello Banner',
};
