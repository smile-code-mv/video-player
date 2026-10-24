import './MainPage.scss'
import React from 'react';
import {type Film} from '../../types/Film.ts'

type props = {
  films : Film[];
}

const MainPage = ({ films } : props) => {
  return(
    <main id="main_page"></main>
  )
}

export default MainPage
