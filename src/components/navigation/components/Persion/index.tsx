import React from "react";
import './style.css'

type PersionProps = {
  avatar: string,
  name: string
}

const Persion: React.FC<PersionProps> = (props) => {
  return (
    <div className="persion-wapper">
      <img src={props.avatar} alt="" />
      <span>
        {props.name}
      </span>
    </div>
  )
}

export default Persion;
