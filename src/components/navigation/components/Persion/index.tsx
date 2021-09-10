import React from "react";
import './style.less'

type PersionProps = {
  avatar: string,
  name: string
}

const Persion: React.FC<PersionProps> = (props) => {
  return (
    <div className="persion-wapper">
      <img src={props.avatar} alt="avatar" />
      <span>
        {props.name}
      </span>
    </div>
  )
}

export default Persion;
