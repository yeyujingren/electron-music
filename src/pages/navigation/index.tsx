import React from 'react';
import {useHistory} from 'react-router-dom';
import Persion from './components/Persion/index';
import MusicList from './components/MusicList/index';

import './style.less';

// MOCK
import photo from '../../mock/photo.jpg';
import {musicList} from '../../mock/index';

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
      <MusicList 
        name={musicList} 
        title="创建歌单"  
        supportAdd={true}
      />
      <MusicList 
        name={musicList} 
        title="收藏歌单"
        supportAdd={false}
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
