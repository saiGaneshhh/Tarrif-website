import React from 'react'
import { Link } from 'react-router-dom'
import "./Routs.css"

export default function Routs() {
    return (
        <div >
            <ul>
                <div className='tar'>
                <li>
                    <Link to="/tarrif">COUNTRY TARIFF TREE-VIEW</Link>
                </li>
                </div>
            </ul>
        </div>
    )
}
