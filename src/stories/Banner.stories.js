import Banner from '../_includes/Banner.njk';
const TemplateRender = require("@11ty/eleventy/src/TemplateRender");

// import TemplateConfig from "@11ty/eleventy/src/TemplateConfig";

export default {
    title: 'Example/Banner'
};

const Template = ({ label }) => {
    const banner = Banner({label});
    return banner;
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Hello Banner',
};
