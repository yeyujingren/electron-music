import React from "react";
import { useLocation } from 'react-router-dom';
import Head from './components/Head';
import './style.less'

type DetailProps = {
  [t: string]: any
}

const Detail: React.FC<DetailProps> = (props) => {
  const location = useLocation();

  return (
    <div className="music-list_wapper">
      <Head 
        picUrl="http://p2.music.126.net/hG2GoCHzJTAHd47JhViSAw==/109951165802640781.jpg?param=140y140"
        name="Test"
        createAuthor="yeyu"
        createTime="2021-10-28"
        tagName={['欧美', 'R&B']}
        songLen={10}
        playTimes={1000}
        desc='祝所有努力奋斗的人取得自己想要的成绩。'
      />
      <div>
        {/* aaaaaa */}
      </div>
    </div>
  )
}

export default Detail;