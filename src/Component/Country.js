
import React, { useState } from 'react';

import China from './China';

function Country() {
  const [showSection, setShowSection] = useState(false);

  const toggleSection = () => {
    setShowSection(!showSection);
  };

  return (
    <div>
      <h3 style={{border :'3px solid rgb(77,120,187)',padding:'6px',borderRadius:'8px',width:'fit-content',color:"rgb(77,120,187)",cursor:'pointer'}} onClick={toggleSection}>COUNTRY'S TARIFF TREE-VIEW</h3>
      {showSection && <China />}
    </div>
  );
}

export default Country;
