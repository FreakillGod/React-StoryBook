import FilePicker from '../components/filePicker'
import Button from "../components/button"

export default {
  title: 'File Picker',
  component: FilePicker
};

const Template = (args) => (<Button {...args} />);

export const File = Template.bind({})
File.args = {

}