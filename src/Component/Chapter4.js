import React, { useState } from 'react';
import file from "./file.png"
import note from "./notes.png"

function Chapter4() {

 
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (

    <div>
      <h7 style={{ fontSize: "18px", cursor: 'pointer' }} onClick={toggleContent}>  <img src={file} height={13} /><b style={{ fontSize: "15px" }}>Chapter 4 </b>: Dairy produce; birds' eggs; natural honey; edible products of animal origin, not elsewhere specified or included</h7>
      {showContent &&

            <ul style={{color:'blue'}}>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}> <img src={note} height={13} />Heding 0401:  Milk and cream, not concentrated nor containing added sugar or other sweetening matter.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0402:  Milk and cream, concentrated or containing added sugar or other sweetening matter.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0403: Yogurt; buttermilk, curdled milk and cream, kephir and other fermented or acidified milk and cream, whether or not concentrated or containing added sugar or other sweetening matter or flavoured or containing added fruit, nuts or cocoa.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0404:  Whey, whether or not concentrated or containing added sugar or other sweetening matter; products consisting of natural milk constituents, whether or not containing added sugar or other sweetening matter, not elsewhere specified or included.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0405:  Butter and other fats and oils derived from milk; dairy spreads.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0406:  Cheese and curd.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0407:  Birds' eggs, in shell, fresh, preserved or cooked.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0408:  Birds' eggs, not in shell, and egg yolks, fresh, dried, cooked by steaming or by boiling in water, moulded, frozen or otherwise preserved, whether or not containing added sugar or other sweetening matter.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0409:  Natural honey.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0410:  Insects and other edible products of animal origin, not elsewhere specified or included.</li>
              </div>

            </ul>


      }
    </div>
  )
}

export default Chapter4;
