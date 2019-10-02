import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

import useAxios from 'axios-hooks'
import youtube from '../utils/api/youtube';

const Home = ({ myList, trends, originals, test }) => {

  /*
      //const  [isLoding, isError, isData] =  useState(false);
      const [hasError, setErrors] = useState(false);
      const [planets, setPlanets] = useState({});

      async function fetchData() {
        console.log('Entro al metodo de fetchsx')
        const res = await fetch('https://swapi.co/api/planets/4/')
        response = await res.json()
          .then(res => setPlanets(res))
          .catch(err => setErrors(err));
      }

      useEffect(() => {
        console.log('ypa')
          //fetchData();
      }, []);
  */

  const [{ data, loading, error }, refetch] = useAxios(
    'https://rickandmortyapi.com/api/location/48'
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  console.log(data)
  /*
    // Create State with Hooks
    const [test] = useState({state: 'Entro al Estado'});
    console.log(test);
  */
  return (
    <>
      <Header />
      <Search isHome />
      {console.log(test)}
      {myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    test: state.test,
  };
};

export default connect(mapStateToProps, null)(Home);
