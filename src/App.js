import React from 'react'
import Header from './components/header'
import Search from './components/searchBar'
import Table from './components/table'
import Data from './components/data'
import Footer from './components/footer'


function App() {
  
  return (
    <div className="App">
      <Header />
      <Search />
      <Table />
      <Footer />
    </div>
  );
}

export default App;