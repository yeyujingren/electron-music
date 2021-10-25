import React from "react";
import { useHistory } from "react-router";
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
  const histroy = useHistory();

  const routeChangeHandler = (path: string) => {
    histroy.push(path);
  }

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
            onClick={() => routeChangeHandler(`/detail?name=${item}`)}
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
