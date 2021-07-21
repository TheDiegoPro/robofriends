import React from 'react';

const SearchBox = ({searchfield,searchChange}) =>{
    return (
        <div className='ps2'>
            <input className='pa3 ba b--green bg-black-05' type='search' placeholder='search robots' onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;