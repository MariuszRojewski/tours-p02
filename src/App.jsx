import React from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [tours, setTours] = React.useState([]);
  console.log("TOURS: ", tours)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async() => {
    setIsLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours)
    } catch(error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  React.useEffect(() => {
    fetchTours()
  }, []);

  if(isLoading) {
    return(
      <main>
        <Loading />
      </main>
    )
  }

  return(
    <main>
      {tours.length !== 0 
        ? <Tours tours={tours} removeTour={removeTour} />
        : <main>
            <div className='title'>
              <h2>No tours left</h2>
              <button 
                type='button' 
                className='btn' 
                style={{marginTop: '2rem'}}
                onClick={fetchTours}
              >
                Get new Tours
              </button>
            </div>
          </main>
      }
    </main>
  )
};

export default App;
