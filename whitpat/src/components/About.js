import React from 'react'
import NavBar from './NavBar'

const About = () => {
  return (
    <div>
        <NavBar/>
        <div className="ambulencedescription">
      <div className="description">
        <h2>Ambulance</h2>
        <p>vehicle equipped to provide emergency care to sick or injured people and to get them to hospital.
           Ambulances can also be used to transport patients between hospitals. There are several types of ambulance</p>

      </div>
      <img src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1lcmdlbmN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image"/>
     </div>


    </div>
  )
}

export default About