import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
    return (
        <div id='go-project' className='col-sm-12'>
            <h1 className='ms-5 my-5 '><u>MY RECENT PROJECTS</u> </h1>
      
            <div className='project-container text-primary display-4'>
                <div className=''>SOLAR SYSTEM
                </div> 
                <div className=''>PLANET EARTH</div>
                <div className=''>SPACE PROJECTS</div>
          </div>
          <div className='text-center my-4'>
          <Link to="/night-photography"><button className='btn btn-info rounded text-white '>See more..</button></Link>
          </div>
        </div>
    );
};

export default Project;
