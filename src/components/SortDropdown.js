import React from 'react';

const SortDropdown = ({handleChange}) => {
  return (
    <section className='sortDropdown'>
    <br/>
    <label for="sortBy-dropdown"> Sort by... </label>
    <select id="sortBy-dropdown" onChange={handleChange}>
    <option value="created_at" selected="selected">CREATED AT</option>
    <option value="votes" >VOTES</option>
    <option value="comment_count">COMMENT COUNT</option>
    </select>
  <br/>
  <br/>
  </section>
  );
};

export default SortDropdown;