import React, { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import note from "./notes.png"
export default function Chapte2() {
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
          Sec-1 Chapter2 content Loading......
          <LinearProgress />
        </div>
      ) : (
        <div>
          <b>Chapter2 Headings -</b>
          <ul>
          <div className='li1'>
            <li style={{cursor:'pointer' }}> <img src={note} height={13}/>Heding 0201:  Meat of bovine animals, fresh or chilled.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0202:  Meat of bovine animals, frozen.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0203:  Meat of swine, fresh, chilled or frozen.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0204:  Meat of sheep or goats, fresh, chilled or frozen.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0205:  Meat of horses,asses,mules or hinnies,fresh,chilled or frozen.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0206:  Edible offal of bovine animals, swine, sheep, goats, horses, asses, mules or hinnies, fresh, chilled or frozen.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0207:  Meat and edible offal, of the poultry of heading 01.05, fresh, chilled or frozen.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0208:  Other meat and edible meat offal, fresh, chilled or frozen.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0209:  Pig fat, free of lean meat, and poultry fat, not rendered or otherwise extracted, fresh, chilled, frozen, salted, in brine, dried or smoked.</li>
            </div>
            <div className='li1'>
            <li style={{cursor:'pointer' }}><img src={note} height={13}/>Heding 0210:  Meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal.</li>
            </div>

          </ul>
        </div>
      )
      }
    </div>
  )
}
