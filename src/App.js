
import './App.css';
import * as React from 'react';
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from 'react-router-dom';
import Tarrif from './Component/Tarrif';
import Routs from './Component/Routs';
import Section1 from './Component/Section1';

import Section from './Component/Section';
import Chapter1 from './Component/Chapter1';
import Chapter2 from './Component/Chapter2';


// import Spinner from 'react-bootstrap/Spinner';


function App() {

  


  const options = [
    { value: "blues", label: "JAPAN" },
    { value: "rock", label: "RUSSIA" },
    { value: "jazz", label: "INDIA" },
    { value: "orchestra", label: "CHINA" },
  ];

  const TYPES = [
    { value: "blues", label: "IMPORT" },
    { value: "rock", label: "EXPORT" },

  ];
  const VERSIONS = [
    { value: "blues", label: "2013" },
    { value: "rock", label: "2015" },
    { value: "jazz", label: "2017" },
    { value: "orchestra", label: "2019" },
  ];


  return (
    <div className="App">
      <div > <h2 className='title' style={{ color: "rgb(77,120,187)" }}> HS CLASSIFICATION </h2></div>
      <div className='droupdowns'>
        <div style={{ width: '150px' }}>
          <p><b>Country</b></p>

          {/* // using reactbootsrap // */}

          {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              CHINA
            </Dropdown.Toggle>

            <Dropdown.Menu style={{overflowY:"scroll",height:"150px"}}>
              <Dropdown.Item href="#/action-1">JAPAN</Dropdown.Item>
              <Dropdown.Item href="#/action-2">RUSSIA</Dropdown.Item>
              <Dropdown.Item href="#/action-3">INDIA</Dropdown.Item>
              <Dropdown.Item href="#/action-3">AUS</Dropdown.Item>
              <Dropdown.Item href="#/action-3">USA</Dropdown.Item>
              <Dropdown.Item href="#/action-3">UK</Dropdown.Item>
              <Dropdown.Item href="#/action-3">AFRICA</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          {/* // normal html css options // */}

          {/* <select style={{ padding:"10px", border:"3px solid rgb(77,120,187) "}}>
            <option value="someOption">CHINA</option>
            <option value="otherOption">JAPAN</option>
            <option value="otherOption">AUS</option>
            <option value="otherOption">USA</option>
            <option value="otherOption">UK</option>
            <option value="otherOption">INDIA</option>
            <option value="otherOption">AFRICA</option>
            <option value="otherOption">RUSSIA</option>
            <option value="otherOption">GREEN LAND</option>
            <option value="otherOption">SRI LANKA</option>
            <option value="otherOption">SOUTH AFRICA</option>
            <option value="otherOption">EUROP</option>
            <option value="otherOption">AFG</option>
          </select> */}

          {/* using material ui */}

          {/* <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={{ age }}
                label="Age"
                onChange={handleChange}
                style={{color:"red"}}
              >
                <MenuItem value={10}>JAPAN</MenuItem>
                <MenuItem value={20}>CHINA</MenuItem>
                <MenuItem value={30}>INDIA</MenuItem>
                <MenuItem value={40}>UK</MenuItem>
              </Select>
            </FormControl>
          </Box> */}
          <Select options={options} />
        </div>
        <div style={{ width: '150px' }}>
          <p><b>Tariff Type</b></p>

          <Select options={TYPES} />

        </div>
        <div style={{ width: '150px' }}>
          <p> <b>WCO VERSION</b></p>

          <Select options={VERSIONS} />

        </div>
      </div>
      <div style={{ backgroundColor: 'white', marginTop: '30px', paddingBottom: '20px', marginBottom: "40px" }}>
        <div class="d-flex justify-content-around">
          <p style={{ marginTop: '20px' }}><b>CLASSIFICATION</b></p>
          <p style={{ marginTop: '20px' }}><b>HS CODE</b></p>
        </div>
        <div class="d-flex justify-content-around">

          <div className='classifications' style={{ display: "flex", justifyContent: "left", width: 'fit-content', padding: '7px' }}>

            <div class="form-check">

              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                IMPORT
              </label>
            </div>
            <div class="form-check" style={{ marginLeft: '20px' }}>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault2">
                EXPORT
              </label>
            </div>
          </div>

          <div >

            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button type="button" class="btn btn-outline-success">Search</button>
            </form>
          </div>
        </div>
      </div>

      {/* <div > <h2 className='title' style={{ color: "rgb(77,120,187)" }}> COUNTRY'S TARIFF TREE-VIEW </h2></div> */}

      {/* {/* <div> */}
      {/* <Spinner animation="border" />; */} 
      <div>
        <Routs />
        <Routes>
          <Route path='/tarrif' element={<Tarrif />} >
            <Route path='china' element={<Section />}>
              <Route path='sec1' element={<Section1 />}>
                {/* <Spinner animation="border" />; */}
                <Route path='chapter1' element={<Chapter1 />} />
                <Route path='chapter2' element={<Chapter2 />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
