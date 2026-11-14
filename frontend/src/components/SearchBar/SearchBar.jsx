import './SearchBar.css';

function SearchBar({ leftContent, middleContent, rightContent, className }) {

    return (
        <div className={`searchbar-div ${className || ""}`}>

            <div className="left-container">
                {leftContent}
            </div>

            <div className="middle-container">
                {middleContent}
            </div>

            <div className="right-container">
                {rightContent}
            </div>

        </div>
    );

}

export default SearchBar;