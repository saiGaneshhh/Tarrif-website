import React, { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import "./Routs.css"
import note from "./notes.png"
export default function Chapter1() {
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
           Sec-1 Chapter1 content Loading.....
          <LinearProgress />
        </div>
      ) : (
        <div style={{backgroundColor: 'white'}}>
          <b>Chapter1 Headings -</b>
          {/* Heding 0101:	Live horses, asses, mules and hinnies.		
          Heding 0102:  Live bovine animals.
          Heding 0103:  Live swine.

          Heding 0104:  Live sheep and goats.

          Heding 0105:  Live poultry, that is to say, fowls of the species Gallus domesticus, ducks, geese, turkeys and guinea fowls.
          Heding 0106:  Other live animals */}
          <ul>

            <div className='li1'>
            <li style={{cursor:'pointer' }}> <img src={note} height={13}/>Heding 0101:	Live horses, asses, mules and hinnies.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0102:  Live bovine animals.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0103:  Live swine.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0104:  Live sheep and goats.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0105:  Live poultry, that is to say, fowls of the species Gallus domesticus, ducks, geese, turkeys and guinea fowls.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0106:  Other live animals</li>
            </div>
          </ul>
        </div>
      )
      }
    </div>
  )
}
