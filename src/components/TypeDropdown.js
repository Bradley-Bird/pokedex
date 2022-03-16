import React from 'react';

export default function TypeDropdown({ type, callback }) {
  return (
    <select onChange={(e) => callback(e.target.value)}>
      {type.map((t) => (
        <option key={t}>{t}</option>
      ))}
    </select>
  );
}
