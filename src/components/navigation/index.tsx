import React from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';

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
      this is Navigation
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
