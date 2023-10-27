// import React, { useEffect, useState } from 'react'
// import { Link, Outlet } from 'react-router-dom'
// import LinearProgress from '@mui/material/LinearProgress';
// import file from './file.png'
// export default function Section1() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timmer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timmer);
  // }, [])
  // return (
    // <div>
    //   {loading ? (
    //     // Display the loading screen
    //     <div className="loading-screen" style={{ marginTop: '30px' }}>
    //       <LinearProgress />
    //     </div>
    //   ) : (
//         <div >
//           <ul>
//             <li style={{backgroundColor: 'white'}}>
//               <Link to="chapter1"> <img src={file} height={13}/>Chapter 1 : Live animals</Link>
//             </li>
//             <li style={{backgroundColor: 'white'}}>
//               <Link to="chapter2"><img src={file} height={13}/>Chapter 2 : Meat and edible meat offal</Link>
//             </li>
//           </ul>
//           <Outlet />
//         </div>
//       )
//       }
//     </div>
//   );
// }

// Section1.js
import React, { useState } from 'react';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import file from "./file.png"
function Section1() {
  const [showChapters, setShowChapters] = useState(false);

  const toggleChapters = () => {
    setShowChapters(!showChapters);
  };

  return (
    <div style={{marginLeft:'20px',cursor:'pointer'}}>
      <h6 onClick={toggleChapters}>  <img src={file} height={13}/>SECTION 1 : LIVE ANIMALS;ANIMAL PRODUCTS </h6>
      {showChapters && (
        <div style={{marginLeft:'20px'}}>
          <Chapter1 />
          <Chapter2 />
        </div>
      )}
    </div>
  );
}

export default Section1;

