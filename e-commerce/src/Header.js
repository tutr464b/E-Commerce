import React from 'react'
import "./Header.css" 
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img 
            className="header_logo"
            src="https://preview.thenewsmarket.com/Previews/NonAssetImages/MR_760/source/2d3219ad-9d26-4260-8c3c-a093173b93a1.png" 
            /> 
           
            <div className="header_search">
                <input className="header_searchInput" type = "text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
                
           
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLine1">Hello Guest</span>
                    <span className="header_optionLine2">Sign in</span>

                </div>
                <div className="header_option">
                    <span className="header_optionLine1">Your</span>
                    <span className="header_optionLine2">Prime</span>

                </div>
                <div className="header_option">
                    <span className="header_optionLine1">Return</span>
                    <span className="header_optionLine2">&Order</span>

                </div>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLine2 header_basketCount">0</span>

                </div>

            </div>

        </div>
    )
}

export default Header
