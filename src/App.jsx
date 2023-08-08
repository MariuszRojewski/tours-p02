import React from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [tours, setTours] = React.useState([]);

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
      <Tours tours={tours} />
    </main>
  )
};

export default App;
