import '../styles/buttonRefresh.css';
import { ReactComponent as RefreshIcon } from '../../assets/refresh-svgrepo-com.svg';



export default function ButtonRefresh({ onHandleClick }){
    return (
        <button type="button" onClick={onHandleClick} className='refresh-button'>
            <RefreshIcon className='refresh-button svg' />
        </button>
    )
}

