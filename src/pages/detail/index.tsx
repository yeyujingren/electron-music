import React from "react";
import { useLocation } from 'react-router-dom';

type DetailProps = {
  [t: string]: any
}

const Detail: React.FC<DetailProps> = (props) => {
  const location = useLocation();

  return (
    <div>
      <head>
        <img 
          alt="title"
          src="http://p2.music.126.net/hG2GoCHzJTAHd47JhViSAw==/109951165802640781.jpg?param=140y140" 
        />
        <div>
          
        </div>
      </head>
    </div>
  )
}

export default Detail;