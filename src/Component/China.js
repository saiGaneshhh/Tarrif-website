
import React, { useEffect, useState } from 'react';
import Section1 from './Section1';
import file from "./file.png"
import { LinearProgress } from '@mui/material';
import Section2 from './Section2';
function China() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timmer);
  }, [])


  const [showSection, setShowSection] = useState(false);

  const toggleSection = () => {
    setShowSection(!showSection);
  };

  return (
    <div>
      {loading ? (
        // Display the loading screen
        <div className="loading-screen" style={{ marginTop: '1Gpx' }}>
          LOADING PLZ WAIT........
          <LinearProgress />
        </div>
      ) : (
        <div style={{ marginLeft: '20px', cursor: 'pointer', backgroundColor: 'white' }}>
          <h6 onClick={toggleSection}> <img src={file} height={13} /><b>China HS Classification Folder Tree Root</b></h6>
          {showSection &&
           (
            <div style={{marginLeft:'20px'}}>
              <Section1 />
              <Section2 />
            </div>
          )}
        </div>
      
      )
}
</div>
  )
}
export default China;
