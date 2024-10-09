import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import FinancialOverview from '../components/Dashboard/FinancialOverview';
import ProfileInformation from '../components/Dashboard/ProfileInformation';
import Campaigns from '../components/Dashboard/Campaigns';
import './DashboardPage.scss';

const { Content } = Layout;

const DashboardPage = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    console.log(sidebarVisible)
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar sidebarVisible={sidebarVisible} />
      <Layout>
        <Header toggleSidebar={toggleSidebar} />
        <Content className="dashboard-content">
          <div className="overview-section">
            <FinancialOverview />
            <ProfileInformation />
          </div>
          <Campaigns />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
