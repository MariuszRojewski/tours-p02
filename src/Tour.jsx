import React from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [activeIntroText, setActiveIntroText] = React.useState(false)
  const introText = `${info.substring(0, 200)}...`

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {activeIntroText ? info : introText}
          <button 
            type='button' 
            className='info-btn' 
            onClick={() => setActiveIntroText(!activeIntroText)}
          >
            {`${activeIntroText ? "Show less" : "Read More"}`}
          </button>
        </p>
        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  )
}

export default Tour
