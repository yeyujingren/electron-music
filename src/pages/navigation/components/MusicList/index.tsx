import React from "react";
import { List } from 'antd';
import { CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
import FontIcon from '../../../../components/FontIcon';

import './style.less'

type ListProps = {
  name: Array<string>,
  title: string,
  supportAdd?: boolean
}

const MusicList: React.FC<ListProps> = (props) => {
  return (
    <div className="list-wapper">
      <header>
        <span>
          <CaretDownOutlined className="icon" />
          {props.title}
        </span>
        {props?.supportAdd ? <PlusOutlined /> : null}
      </header>
      <List
        dataSource={props.name}
        renderItem={item => (
          <List.Item
            className="item-wrapper"
          >
            <FontIcon type="icon-musicmenu" className="icon"/>
            <span>{item}</span>
          </List.Item>
        )}
      />
    </div>
  )
}

export default MusicList;
