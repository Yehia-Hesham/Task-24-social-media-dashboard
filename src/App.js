import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import './App.css';
import './data.js';
import DarkModeButton from './components/darkModeButton/darkModeButton';
// import currentData from './data.js';

const currentData = [
  {
    platform: 'facebook',
    name: '@nathanf',
    fanbase: ['followers',1987],
    interaction: ['pageViews',87] ,
    likes:52,
    change: {
      fanbase: [12,'value'],
      interaction:  [3,'percentage'],
      likes: [-2,'percentage']
    },
  },
  {
    platform: 'twitter',
    name: '@nathanf',
    fanbase: ['followers',1044],
    interaction: ['retweets',117] ,
    likes:507,
    change: {
      fanbase:  [99,'value'],
      interaction: [303,'percentage'],
      likes:[553,'percentage']
    },
  },
  {
    platform: 'instagram',
    name: '@realnathanf',
    fanbase: ['followers',11429],
    interaction: ['profileViews',87] ,
    likes:5462,
    change: {
      fanbase: [1099,'value'],
      interaction: [1375,'percentage'],
      likes:[2257,'percentage']
    },
  },
  {
    platform: 'youtube',
    name: 'Nathan F.',
    fanbase: ['subscribers',8239],
    interaction: ['totalViews',52320] ,
    likes:107,
    change: {
      fanbase: [-144,'value'],
      interaction: [-12,'percentage'] ,
      likes:[-19,'percentage']
    },
  },
]


function App() {

  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark)
  }

  let renderLargeCards = () => {
    return currentData.map((platform,i) => {
      return <div className='col-3' key = {i}>
        <div className='card social_media_card'>
          <h5>{platform.name}</h5>
          <h2>{platform.fanbase[1]}</h2>
          <h5>{platform.fanbase[0]}</h5>
          <h6>{platform.change.interaction[0]} Today</h6>
        </div>
      </div>
    })
  }

  let renderSmallCards = (interaction) => {
    return currentData.map((platform,i) => {
      return <div className='col-3' key = {i}>
        <div className='card social_media_card'>
          {(interaction)?
          <>
            <h4>{platform.interaction[0]}</h4>
            <h5>{platform.interaction[1]}</h5>
            <h6>{platform.change.fanbase[0]}</h6>
          </>:<>
            <h5>Likes</h5>
            <h4>{platform.likes}</h4>
            <h6>{platform.change.likes[0]}</h6>
          </>
        }
            
        </div>
      </div>
    })
  }

  return (
    <div className="App">
      <div className='container'>
      <div className='row'>
        <div className='col-12 dark_button_div'>
          <DarkModeButton theme={{'dark':dark,'toggleDark':toggleDark}}/>
        </div>
      </div>
      <div className='col-12 Overview_header' >
        <h1>Social Media Dashboard</h1>
      </div>
      <div className='row'>
          {renderLargeCards()}
      </div>
      <div className='col-12 Overview_header' >
        <h1>Overview - Today</h1>
      </div>
      <div className='row'>
          {renderSmallCards(true)}
      </div>
      <div className='row'>
          {renderSmallCards(false)}
      </div>
      </div>
    </div>
  );
}

export default App;
