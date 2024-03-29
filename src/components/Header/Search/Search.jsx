import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"

import  {MdClose} from "react-icons/md"
const Search = ({setSearched}) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text" 
                autoFocus
                placeholder="Saerch For Products" 
                />
                <MdClose onClick={()=>{setSearched(false)}}/>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="image-container">
                            <img src={prod}  alt=""/>
                        </div>
                        <div className="prod-details">
                            <span className="name">Product Name</span>
                            <span className="desc">Product desc</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
