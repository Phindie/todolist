import Add from './Add';
import Global from '../../components/Global/Global';


const config = {
    title: 'views/Add',
}

export default config;

const Default = () => <Global><Add onSave={console.log}/></Global>

export {
    Default
}