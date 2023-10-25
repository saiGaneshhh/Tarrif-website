import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Tarrif.css'
import file from './file.png'
import LinearProgress from '@mui/material/LinearProgress';


export default function Tarrif() {

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
                <div className="loading-screen"style={{marginTop:'30px'}}>
                       <LinearProgress />
                </div>
            ) : (
                <div>
                    <ul >
                        <li >

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', color: 'black', backgroundColor: 'white' }}>


                                <Link to='/tarrif/china'><img src={file} height={13}/> <b>China HS Classification Folder Tree Root</b></Link>


                                <Link to='/tarrif/tarrif'> Back </Link>


                            </div>

                        </li>
                    </ul>
                    <Outlet />

                </div>

            )

            }
        </div>

    );
}