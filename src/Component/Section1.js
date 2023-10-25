import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';
import file from './file.png'
export default function Section1() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timmer);
  }, [])
  return (
    <div>
      {loading ? (
        // Display the loading screen
        <div className="loading-screen" style={{ marginTop: '30px' }}>
          <LinearProgress />
        </div>
      ) : (
        <div >
          <ul>
            <li style={{backgroundColor: 'white'}}>
              <Link to="chapter1"> <img src={file} height={13}/>Chapter 1 : Live animals</Link>
            </li>
            <li style={{backgroundColor: 'white'}}>
              <Link to="chapter2"><img src={file} height={13}/>Chapter 2 : Meat and edible meat offal</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )
      }
    </div>
  );
}
