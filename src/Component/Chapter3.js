import React, { useState } from 'react';
import file from "./file.png"
import note from "./notes.png"

function Chapter3() {

 
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (

    <div>
      <h7 style={{ fontSize: "18px", cursor: 'pointer' }} onClick={toggleContent}>  <img src={file} height={13} /><b style={{ fontSize: "15px" }}>Chapter 3</b> : Fish and crustaceans, molluscs and other aquatic invertebrates</h7>
      {showContent &&

            <ul style={{color:'blue'}}>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}> <img src={note} height={13} />Heding 0301:  Live fish.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0302:  Fish, fresh or chilled, excluding fish fillets and other fish meat of heading 03.04.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0303: Fish, frozen, excluding fish fillets and other fish meat of heading 03.04.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0304:  Fish fillets and other fish meat (whether or not minced), fresh, chilled or frozen.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0305:  Fish, dried, salted or in brine; smoked fish, whether or not cooked before or during the smoking process.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0306:  Crustaceans, whether in shell or not, live, fresh, chilled, frozen, dried, salted or in brine; smoked crustaceans, whether in shell or not, whether or not cooked before or during the smoking process; crustaceans, in shell, cooked by steaming or by boiling in water, whether or not chilled, frozen, dried, salted or in brine.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0307:  Molluscs, whether in shell or not, live, fresh, chilled, frozen, dried, salted or in brine; smoked molluscs, whether in shell or not, whether or not cooked before or during the smoking process.</li>
              </div>
              <div className='li1'>
                <li style={{ cursor: 'pointer' }}><img src={note} height={13} />Heding 0308:  Aquatic invertebrates other than crustaceans and molluscs, live, fresh, chilled, frozen, dried, salted or in brine; smoked aquatic invertebrates other than crustaceans and molluscs, whether or not cooked before or during the smoking process.</li>
              </div>

            </ul>


      }
    </div>
  )
}

export default Chapter3;
