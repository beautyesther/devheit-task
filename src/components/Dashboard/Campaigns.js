import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Input, Select } from 'antd';
import { getCampaigns } from '../../services/campaignService';
import CampaignCard from './CampaignCard';
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons';
import './styles.scss';

const { Option } = Select;

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns().then(data => setCampaigns(data));
  }, []);

  return (
    <div className="campaigns-section">
      <div className="header-container">
        <h3>Explore Campaigns</h3>
        <Input.Search
          placeholder="Search Description"
          className="search-input"
          onSearch={value => console.log(value)}
        />
      </div>

<div className="results-sort-container">
        <div className="search-results">
          <span>Search results: &nbsp;</span>
          <span className="total-blogs">432 Blog post &nbsp;</span>
          <span>campaigns</span>
        </div>
        
        <div className="sort-controls">
          <span className="sort-by-text">Sort by:</span>
          <Select defaultValue="category">
            <Option value="category">Category</Option>
          </Select>
          
          <div className="view-toggle">
            <Button icon={<AppstoreOutlined />} />
            <Button icon={<BarsOutlined />} />
          </div>
        </div>
      </div>
      <Row gutter={[16, 16]}>
        {campaigns.map(campaign => (
          <Col key={campaign.id} xs={24} sm={24} md={24} lg={8}>
            <CampaignCard campaign={campaign} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Campaigns;
