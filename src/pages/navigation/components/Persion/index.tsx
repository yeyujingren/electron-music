import React from "react";
import {CaretRightOutlined} from '@ant-design/icons'
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
        <CaretRightOutlined className="icon"/>
      </span>
    </div>
  )
}

export default Persion;
