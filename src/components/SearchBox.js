import React from 'react';

const SearchBox = ({searchfield , SearchChange}) => {
    return (
        <div className='measure pa3 center'> 
             <input 
                className=' measure pa2 ba b--green  bg-light-blue w-60'
                type='search' 
                placeholder='search robots'  
                onChange={SearchChange}
            />
        </div>
    );
}

export default SearchBox;