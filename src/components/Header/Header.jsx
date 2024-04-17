import './Header.scss';
import { ReactComponent as InStockLogo } from '../../assets/instock-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {

    const location = useLocation();
    const [ url, setUrl ] = useState(null);

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <header className='header'>
            <div className='header__content'>
                <InStockLogo className='header__logo'/>
                <div className='header__tabs'>
                    <Link
                        to='/warehouses'
                        className={url === '/warehouses' ? 'header__button header__button--active' : 'header__button'}
                        >Warehouses</Link>
                    <Link
                        to='/inventory'
                        className={url === '/inventory' ? 'header__button header__button--active' : 'header__button'}
                    >Inventory</Link>
                </div>
            </div>
        </header>
    )
}