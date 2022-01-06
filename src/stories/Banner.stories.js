import Banner from '../_includes/Banner.njk';

export default {
    title: 'Example/Banner'
};

const Template = ({ label }) => {
    return Banner({ label });
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Hello Banner',
};
