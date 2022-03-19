import React from 'react';

export default function SortRadio({ setDirection }) {
  return (
    <>
      <div onChange={(e) => setDirection(e.target.value)}>
        <input type="radio" value="asc" id="asc" name="sort" />
        <label>Ascending</label>
      </div>
      <div onChange={(e) => setDirection(e.target.value)}>
        <input type="radio" value="desc" name="sort" />
        <label>Descending</label>
      </div>
    </>
  );
}
