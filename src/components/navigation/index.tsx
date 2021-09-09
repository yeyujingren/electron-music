import React from 'react';
import {useHistory} from 'react-router-dom';
import Persion from './components/Persion/index';

import './style.css';

// MOCK
import photo from '../../mock/photo.jpg';

type NaVProps = {
  [T: string]: string
}

const Navigation: React.FC<NaVProps> = (props) => {
  const histroy = useHistory();
  console.log(histroy)
  const routeChangeHandler = (path: string) => {
    histroy.push(path);
  }
  return (
    <div className="nav-wapper">
      <Persion
        avatar={photo}
        name="夜雨惊人"
      />
      <button
        onClick={() => routeChangeHandler('/')}
      >
        home
      </button>
      <button
        onClick={() => routeChangeHandler('/detail')}
      >
        detail
      </button>
    </div>
  )
}

export default Navigation;
