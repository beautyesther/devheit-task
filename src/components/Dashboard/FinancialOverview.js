import React from 'react';
import { Typography } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import './FinancialOverview.scss';

const { Title, Text } = Typography;

const FinancialOverview = () => {
  return (
    <div className="financial-overview">
      <div className="header-container">
        <span className="title">Financial Overview</span>
        <span className="view-campaign"> View all campaigns <ExportOutlined /></span>
      </div>
      <div className="metrics">
        <div className="metric">
          <Text className="label">Total Income</Text>
          <Title level={2} className="value">$62,932</Title>
        </div>
        <div className="metric">
          <Text className="label">Funds In Escrow</Text>
          <Title level={2} className="value">$62,231</Title>
        </div>
        <div className="metric">
          <Text className="label">Ave. Income Monthly</Text>
          <Title level={2} className="value">$3,542</Title>
        </div>
      </div>
      
      <div className="summary">
        <Text strong className="summary-label">January Summary:</Text>
        <Text className="total-funds">Total Fund in Escrow • <span className="fund-amount">$350</span></Text>
        <Text className="total-funds">Total Income • <span className="fund-amount">$850</span></Text>
      </div>
    </div>
  );
};

export default FinancialOverview;