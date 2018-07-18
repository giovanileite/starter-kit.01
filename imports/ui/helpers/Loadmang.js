import Loadable from 'react-loadable';
import Loading from './Loading';

export default Loadmang = func => Loadable({
    loading: Loading,
    loader: func,
    timeout: 10000 // 10 seconds
})