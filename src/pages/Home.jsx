import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
      <Main />
      <Row  rowId='1' title="Popular"  fetchURL={requests.requestPopular}/>
      <Row  rowId='2' title="TopRated" fetchURL={requests.requestTopRated}/>
      <Row  rowId='3' title="Trending" fetchURL={requests.requestTrending}/>
      <Row  rowId='4' title="Upcoming" fetchURL={requests.requestUpcoming}/>
    </div>
  )
  
}


export default Home
