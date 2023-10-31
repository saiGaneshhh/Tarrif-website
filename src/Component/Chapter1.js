

import React, { useState } from 'react';
import file from "./file.png"
import "./Routs.css"
import note from "./notes.png"
function Chapter1() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <h7 style={{ fontSize: "18px" }} onClick={toggleContent}>  <img src={file} height={13} /><b style={{ fontSize: "15px" }}>  Chapter 1 </b>: Live animals</h7>
      {showContent && <ul style={{ color: 'blue' }}>
        <div className='li1'>
          <li style={{ cursor: 'pointer' }}> <img src={note} height={13} />  Heding 0101:	Live horses, asses, mules and hinnies.</li>
        </div>
        <div className='li1'>
          <li style={{ cursor: 'pointer' }}><img src={note} height={13} />  Heding 0102:  Live bovine animals.</li>
        </div>
        <div className='li1'>
          <li style={{ cursor: 'pointer' }}><img src={note} height={13} />  Heding 0103:  Live swine.</li>
        </div>
        <div className='li1'>
          <li style={{ cursor: 'pointer' }}><img src={note} height={13} />  Heding 0104:  Live sheep and goats.</li>
        </div>
        <div className='li1'>
          <li style={{ cursor: 'pointer' }}><img src={note} height={13} />  Heding 0105:  Live poultry, that is to say, fowls of the species Gallus domesticus, ducks, geese, turkeys and guinea fowls.</li>            </div>
        <div className='li1'>
          <li style={{ cursor: 'pointer' }}><img src={note} height={13} />  Heding 0106:  Other live animals</li>
        </div>
      </ul>}
    </div>
  );
}

export default Chapter1;