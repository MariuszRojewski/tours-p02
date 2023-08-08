import React from 'react'
import Tour from './Tour';

const Tours = ({ tours }) => {
  const mapedTours = tours.map((tour) => {
    console.log(tour)
    return(
      // Coś tu nie działa
      <Tour key={tour.id} {...tour} />
    )
  })

  console.log("mapedTours: ", mapedTours)

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
