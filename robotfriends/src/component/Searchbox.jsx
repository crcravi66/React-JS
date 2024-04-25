import React from "react";


const SearchBox = ({Searchfield, SearchChange})=>{
    return (
        <dir className='pa2'>
            <input 
                className="pa3 ba bw3 b--blue   bg--light-green" 
                type="text" 
                placeholder="Search Robots" 
                onChange={SearchChange}
            />
        </dir>
    )
}

export default SearchBox