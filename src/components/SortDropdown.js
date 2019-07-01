import React from 'react';

const SortDropdown = ({handleChange}) => {
  return (
    <section className='sortDropdown' >
    <br/>
    <label for="sortBy-dropdown" style={{color: 'white', fontWeight: 'bold'}}> Sort by... </label>
    <select id="sortBy-dropdown" onChange={handleChange} style={{width: '45%', height: '100%', fontSize: 15, textAlignLast: 'center'}}>
    <option value="created_at" selected="selected" >CREATED AT 🕒</option>
    <option value="votes" >VOTES 🗳</option>
    <option value="comment_count">COMMENT COUNT 💬</option>
    </select>
  <br/>
  <br/>
  </section>
  );
};

export default SortDropdown;

// style={{width: '50%', height: '100%', fontSize: 15, textAlignLast: 'center'}}