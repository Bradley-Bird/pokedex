import React from 'react';

export default function TypeDropdown({ type }) {
  return (
    <select>
      {type.map((t) => (
        <option key={t}>{t}</option>
      ))}
    </select>
  );
}
