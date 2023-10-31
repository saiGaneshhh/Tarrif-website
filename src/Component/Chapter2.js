
import React, { useEffect, useState } from 'react';
import file from "./file.png"
import note from "./notes.png"

function Chapter2() {

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (

    <div>
      <h7 style={{ fontSize: "18px", cursor: 'pointer' }} onClick={toggleContent}>  <img src={file} height={13} /><b style={{ fontSize: "15px" }}>  Chapter 2 </b>: Meat and edible meat offal</h7>
      {showContent &&

            <ul style={{color:'blue'}}>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}> <img src={note} height={13} />Heding 0201:  Meat of bovine animals, fresh or chilled.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0202:  Meat of bovine animals, frozen.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0203:  Meat of swine, fresh, chilled or frozen.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0204:  Meat of sheep or goats, fresh, chilled or frozen.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0205:  Meat of horses,asses,mules or hinnies,fresh,chilled or frozen.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0206:  Edible offal of bovine animals, swine, sheep, goats, horses, asses, mules or hinnies, fresh, chilled or frozen.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0207:  Meat and edible offal, of the poultry of heading 01.05, fresh, chilled or frozen.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0208:  Other meat and edible meat offal, fresh, chilled or frozen.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0209:  Pig fat, free of lean meat, and poultry fat, not rendered or otherwise extracted, fresh, chilled, frozen, salted, in brine, dried or smoked.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0210:  Meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal.</li>
              </div>

            </ul>


      }
    </div>
  )
}

export default Chapter2;
