import {AiOutlineSearch} from 'react-icons/ai'



const Navbar = ({ searchQuery, setSearchQuery }) => {
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    return (
      <nav>
        <input
          type="text"
          className="searchbar"
          placeholder="Search foodoun"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <AiOutlineSearch size={22} className='navsearch'/>
      </nav>
    );
  };
  
  export default Navbar;