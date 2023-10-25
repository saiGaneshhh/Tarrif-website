import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';
import file from './file.png'
export default function Section() {

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
            <li>
              <Link to="sec1"><h6 style={{ backgroundColor: 'white' }}><img src={file} height={13}/>SECTION 1 : LIVE ANIMALS; ANIMAL PRODUCTS</h6></Link>
            </li>
           
          </ul>
          <Outlet />

        </div>
      )
      }
    </div>
  );
}
