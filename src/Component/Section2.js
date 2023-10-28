import React, { useState } from 'react';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import file from "./file.png"
function Section2() {
  const [showChapters, setShowChapters] = useState(false);

  const toggleChapters = () => {
    setShowChapters(!showChapters);
  };

  return (
    <div style={{marginLeft:'20px',cursor:'pointer'}}>
      <h6 onClick={toggleChapters}><img src={file} height={13}/>SECTION 2 : LIVE ANIMALS;ANIMAL PRODUCTS </h6>
      {showChapters && (
        <div style={{marginLeft:'20px'}}>
          <Chapter1 />
          <Chapter2 />
        </div>
      )}
    </div>
  );
}

export default Section2;