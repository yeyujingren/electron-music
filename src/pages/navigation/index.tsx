import React from 'react';
import Persion from './components/Persion/index';
import MusicNameList from './components/MusicNameList/index';

import './style.less';

// MOCK
import photo from '../../mock/photo.jpg';
import {musicList} from '../../mock/index';

type NaVProps = {
  [T: string]: string
}

const Navigation: React.FC<NaVProps> = (props) => {
  return (
    <div className="nav-wapper">
      <Persion
        avatar={photo}
        name="夜雨惊人"
      />
      <MusicNameList 
        name={musicList} 
        title="创建歌单"  
        supportAdd={true}
      />
      <MusicNameList 
        name={musicList} 
        title="收藏歌单"
        supportAdd={false}
      />
    </div>
  )
}

export default Navigation;
