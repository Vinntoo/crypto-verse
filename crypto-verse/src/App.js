

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';

function App() {

  const useStyles = makeStyles(() => ({
    App:{
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh',
    },
  }));

  const classes = useStyles()
  return (
    <div className={classes.App}>
      <Routes>
        <Route path='/components/Header' element={<Header />} />
        <Route path='/' element={<Homepage />} exact />
        <Route path='/coins/:id' element={<CoinPage/>} />
      </Routes>

    </div>
   
  );
}

export default App;
