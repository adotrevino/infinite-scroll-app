import React, {useState, useEffect} from 'react';
import './App.css';
import getImages from './helpers/getImages';
import ImageList from './components/ImageList';
import Loader from './components/Loader';
import BottomMessage from './components/BottomMessage';
import Error from './components/Error';


function App() {
  const [page, setPage] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [bottom, setBottom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageBottom, setPageBottom] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    handleLoad();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    if(bottom){
      handleLoad();
    }
  },[bottom])

  function handleLoad(){
    setLoading(true)
    let pagePlusOne = page + 1;
    setPage(pagePlusOne);
    getImages(page).then((res) => {
      if(res.length > 0){
        const newDogs =  [
          ...dogs,
          ...res
        ];
        setDogs(newDogs);
        setBottom(false)
       
      }else{
        setPageBottom(true);
      }
      setLoading(false)
    }).catch(error => {

      console.log(error)
      setError('Error loading dogs')
    });    
  }
  function handleScroll(){
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight){
      setBottom(true);
    }
  }
  
  return (
    <div className="App container">
      <h1 className="title mt-4 mb-4">Dog Breeds</h1>    
    {error && <Error error={error} />}
    <ImageList dogs={dogs} />
    
    {loading && <Loader /> }
    {pageBottom && <BottomMessage />}
    </div>
  );
}

export default App;
