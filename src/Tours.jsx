import React from 'react'
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  const mapedTours = tours.map((tour) => {
    return(
      <Tour key={tour.id} {...tour} removeTour={removeTour} />
    )
  })

  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {mapedTours}
      </div>
    </section>
  )
}

export default Tours
