// ProfileInformation.jsx
import React from 'react';
import { Card, Progress } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import './ProfileInformation.scss';
import ProfileImage from '../../assets/images/Profile.png';

const ProfileInformation = () => {
  return (
    <Card className="profile-info">
      <div className="profile-header">
        <span className="underlined">Profile Information</span>
        <ExportOutlined />
      </div>
      
      <div className="profile-content">
        <div className="avatar">
        <img src={ProfileImage} alt="Profile" />
        </div>
        <div className="info">
          <div className="name-progress">
            <span className="name">Olivia Jacobs Jacobs</span>
            <div className="progress-container">
              <Progress percent={15} showInfo={false} />
              <span className="percentage">15%</span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="description">
        Complete your profile with details showcasing your skills and personality. Stand out and attract more opportunities.
      </p>
    </Card>
  );
};

export default ProfileInformation;