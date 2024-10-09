import React from 'react';
import { Modal, Input, Select, Button } from 'antd';
import { InstagramOutlined, YoutubeOutlined, TwitterOutlined, FacebookOutlined, TikTokOutlined } from '@ant-design/icons';
import './CampaignModal.scss';

const { TextArea } = Input;

const CampaignModal = ({ visible, onClose }) => {
  return (
    <Modal
      title={<div className="modal-title">Create Campaign</div>}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={520}
      className="campaign-modal"
    >
      <div className="campaign-form">
        <div className="form-item">
          <label>Campaign Title</label>
          <Input placeholder="Enter your campaign title here" />
        </div>
        
        <div className="form-item">
          <label>Brand Name</label>
          <Input placeholder="Enter your brand name here" />
        </div>
        
        <div className="form-item">
          <label>Campaign Category</label>
          <Select placeholder="Select your campaign category">
            <Select.Option value="category1">Category 1</Select.Option>
            <Select.Option value="category2">Category 2</Select.Option>
          </Select>
        </div>
        
        <div className="form-item">
          <label>Campaign Description</label>
          <TextArea rows={4} placeholder="Enter your campaign description here" />
        </div>
        
        <div className="form-item">
          <label>Select Preferred Channels</label>
          <div className="channel-icons">
            <Button icon={<InstagramOutlined />} />
            <Button icon={<TikTokOutlined />} />
            <Button icon={<YoutubeOutlined />} />
            <Button icon={<TwitterOutlined />} />
            <Button icon={<FacebookOutlined />} />
          </div>
        </div>
        
        <div className="form-item">
          <label>Campaign Budget</label>
          <Input placeholder="Enter your campaign budget" />
        </div>
        
        <Button type="primary" block className="create-button">
          Create New Campaign
        </Button>
      </div>
    </Modal>
  );
};

export default CampaignModal;