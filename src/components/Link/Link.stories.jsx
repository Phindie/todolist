import Link from './Link'
import Global from '../Global/Global'

const config = {
    title: 'component/Link'
}

export default config;

const Default = () => <Global> <Link url="/test">Click me!</Link></Global>

const Full = () => <Global><Link url="/test" fullWidth>Click me!</Link></Global>

const Disabled = () => <Global> <Link disabled url="/test">Click me!</Link></Global>

export {
    Default, Disabled, Full
}