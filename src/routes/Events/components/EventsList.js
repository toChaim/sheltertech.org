import React from 'react'
import './EventsList.scss'

import ImageDinner from '../assets/dinner.jpg'
import ImageDatathon from '../assets/datathon.jpg'
import ImageBurstTheBubble from '../assets/burst-the-bubble.jpg'
import ImageMayoralEvent from '../assets/mayoral-event.jpg'
import ImageMusic from '../assets/music.jpg'
import ImageTacklingHomelessness from '../assets/tackling-homelessness.jpg'

export const EventsList = () => (

  <ul className='events-list'>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/o/sheltertech-10605816644', '_blank')}>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageDinner} />
      <div className='event-card--details'>
        <p className='event-card--details--date'>Mon, May 14 6:30PM</p>
        <h4>Dinner With Your Neighbour</h4>
        <p className='event-card--details--description'>Share a table and a meal with housed and unhoused residents of San Francisco</p>
        <small>Mission, San Francisco</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/o/sheltertech-10605816644', '_blank')}>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageDatathon} />
      <div className='event-card--details'>
        <p className='event-card--details--date'>Mon, May 14 6:30PM</p>
        <h4>Homeless Services Workshop</h4>
        <p className='event-card--details--description'>Volunteer event to improve our programs and work with the homeless</p>
        <small>Mission, San Francisco</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/o/sheltertech-10605816644', '_blank')}>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageMusic} />
      <div className='event-card--details'>
        <p className='event-card--details--date'>Mon, May 14 6:30PM</p>
        <h4>Concert in a Shelter</h4>
        <p className='event-card--details--description'>The SF Symphony Orchestra is playing for people experiencing homelessnss at a local shelter</p>
        <small>Saint Anthony's</small>
      </div>
    </li>
  </ul>
)

export default EventsList