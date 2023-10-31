// Section1.js
import React, { useState } from 'react';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import file from "./file.png"
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
function Section1() {
  const [showChapters, setShowChapters] = useState(false);

  const toggleChapters = () => {
    setShowChapters(!showChapters);
  };

  return (
    <div style={{marginLeft:'20px',cursor:'pointer'}}>
      <h6 onClick={toggleChapters}><img src={file} height={13}/>  <b>SECTION 1</b> : LIVE ANIMALS;ANIMAL PRODUCTS </h6>
      {showChapters && (
        <div style={{marginLeft:'20px'}}>
          <Chapter1 />
          <Chapter2 />
          <Chapter3 />
          <Chapter4 />
        </div>
      )}
    </div>
  );
}

export default Section1;

