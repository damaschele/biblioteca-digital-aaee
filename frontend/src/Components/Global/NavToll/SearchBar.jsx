import './searchbar.css'

function SearchBar() {
  return (
    <div className="search-bar">
        <form 
        className='search-form d-flex align-items-center'
        method='POST'
        action="#">
            <input 
            type="text"
            name='query'
            placeholder='Search' />

            <button type='submit' className='submit-btn'>
                <i className='bi bi-search'></i>
            </button>
        </form>
    </div>
  )
}

export default SearchBar