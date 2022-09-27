import './search-box.css'

const SearchBox = (props) => (
    <input
        className={`search-box ${props.className}`}
        type='search'
        placeholder={props.placeholder}
        onChange={props.onChangeHandler} />
)
export default SearchBox;