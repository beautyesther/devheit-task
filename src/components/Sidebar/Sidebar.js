import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  SoundOutlined,
  MessageOutlined,
  DollarOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './Sidebar.scss';
import ProfileImage from '../../assets/images/Profile.png';
import ExpandIcon from '../../assets/images/Expand.svg';



const Sidebar = ({sidebarVisible}) => {
  console.log(sidebarVisible + "QQQQ")
  return (
    <div className={sidebarVisible ? 'sidebar activateMobile' : 'sidebar'}>
      <div className="brand">
        <h1>Micro-Influx</h1>
      </div>
    
      <div className="user-info">
        <div className="profile-image">
        <img src={ProfileImage} alt="Profile" />
        </div>
        <div className="info">
          <span className="name">Olivia Jacobs</span>
          <span className="title">Lifestyle Influencer</span>
        </div>
        <div className="expand-icon">
        <img src={ExpandIcon} alt="" />
        </div>
      </div>
      <Menu mode="inline" defaultSelectedKeys={['1']} className="menu">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<SoundOutlined />}>
          Campaigns
        </Menu.Item>
        <Menu.Item key="3" icon={<MessageOutlined />}>
          Messages
        </Menu.Item>
        <Menu.Item key="4" icon={<DollarOutlined />}>
          Earning History
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;