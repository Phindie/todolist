import Layout from './Layout';
import Global from '../Global/Global'
import faker from 'faker';

const config ={
    title: 'component/Layout'

}

export default config;

const MOCK_ACTIONS ={
    onUserClick: () => console.log('onUserClick')
}

const Home = () => (
   <Global>
    <Layout activePage='home' {...MOCK_ACTIONS}>{faker.lorem.paragraphs(5)}</Layout>
    </Global>
);


const LoggedIn = () => (
    <Global>
     <Layout activePage='home'userName ='Phindi Nqanqaru' {...MOCK_ACTIONS}>{faker.lorem.paragraphs(5)}</Layout>
     </Global>
 );


const Add = () => (
   <Global>
    <Layout activePage='add' {...MOCK_ACTIONS}>{faker.lorem.paragraphs(5)}</Layout>
    </Global>
);

const Edit = () => (
    <Global>
     <Layout activePage='edit' {...MOCK_ACTIONS}>{faker.lorem.paragraphs(5)}</Layout>
     </Global>
 );
 
export {
   Home, LoggedIn, Add, Edit
};