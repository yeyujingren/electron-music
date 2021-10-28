import FontIcon from '../../../../components/FontIcon';
import React from 'react';
import './style.less';
import { Button } from 'antd';

interface HeadProps {
  picUrl: string,
  name: string,
  createAuthor: string,
  createTime: string,
  tagName: string[],
  songLen: number,
  playTimes: number,
  desc: string
}

const Head: React.FC<HeadProps> = (props) => {
  return (
    <div>
      <header className="music-header_wrap">
      <img
        alt="title"
        src={props.picUrl}
      />
      <div className="music-header_right">
        <div className="music-header_line">
          <span className="music-header_line_type">歌单</span>
          <span className="music-header_line_name">
            说不出名字的那些经典英文歌
          </span>
        </div>
        <div className="music-header_line play_line">
          <span>
            {props.createAuthor}
          </span>
          <span>
            {props.createTime}
          </span>
        </div>
        <div className="music-header_line play_line">
          <span className="music-header_line_btn">
            <FontIcon className="icon" type="icon-bofang-copy"/>
            播放全部
          </span>
          <span className="music-header_line_btn">
            <FontIcon className="icon" type="icon-shoucang"/>
            收藏(82万)
          </span>
          <span className="music-header_line_btn">
            <FontIcon className="icon" type="icon-fenxiang"/>
            分享(521)
          </span>
          <span className="music-header_line_btn">
            <FontIcon className="icon" type="icon-xiazai"/>
            下载全部
          </span>
        </div>
        <div className="music-header_line">
          <span>
            标签
          </span>
          {
            props.tagName.map(item => (
              <Button type="link">{item}</Button>
            ))
          }
        </div>
        <div className="music-header_line">
          <span>
            歌曲数：{props.songLen}
          </span>
          <span>
            播放数：{props.playTimes}
          </span>
        </div>
        <div className="music-header_line">
          <span>
            简介：
          </span>
          <span>
            {props.desc}
          </span>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Head;