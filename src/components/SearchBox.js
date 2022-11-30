import React from 'react';
export const Searchbox = ({ placeholder, handleChange }) => (
    <form class="form-inline my-2 my-lg-0">
        <input 
        className='search' 
        type='search' 
        placeholder={ placeholder }
        onChange = { handleChange }
        aria-label="Search" />
    </form>  
);