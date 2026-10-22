import './Header.scss'
import React from 'react'

const Header = () => {

  const [navOpened,setNavOpened] = React.useState(false)
  const [searchData,setSearchData] = React.useState('')

  return(
    <header>
      <button
        id="nav_button"
        onClick={() => navOpened ? setNavOpened(false) : setNavOpened(true)}></button>
      <input
        id="search_input"
        type="text" 
        value={searchData} onChange={e => setSearchData(e.target.value)} />
    </header>
  )
}

export default Header
