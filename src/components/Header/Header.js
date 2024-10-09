// import React, { useState } from 'react';
// import { Button } from 'antd';
// import { PlusOutlined, BellOutlined, MessageOutlined } from '@ant-design/icons';
// import CampaignModal from '../Modal/CampaignModal';
// import './Header.scss';

// const Header = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <div className="header">
//       <h1 className="header__title">Dashboard</h1>
      
//       <div className="header__actions">
//         <Button 
//           type="primary" 
//           icon={<PlusOutlined />}
//           className="header__create-btn"
//           onClick={() => setModalVisible(true)}
//         >
//           Create a New Campaign
//         </Button>
        
//         <div className="header__icons">
//           <Button 
//             type="text" 
//             icon={<MessageOutlined />}
//             className="header__icon-btn"
//           />
//           <Button 
//             type="text" 
//             icon={<BellOutlined />}
//             className="header__icon-btn"
//           />
//         </div>
//       </div>

//       <CampaignModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//       />
//     </div>

    
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined, BellOutlined, MessageOutlined, MenuOutlined } from '@ant-design/icons';
import CampaignModal from '../Modal/CampaignModal';
import ProfileImage from '../../assets/images/Profile.png';
import './Header.scss';
// import Sidebar from '../Sidebar/Sidebar'; 

const Header = ({toggleSidebar}) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [sidebarVisible, setSidebarVisible] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarVisible(!sidebarVisible);
  // };

  return (
    <>
    <div className="header">
      

      <h1 className="header__title">Dashboard</h1>
      
      <div className="header__actions">
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          className="header__create-btn"
          onClick={() => setModalVisible(true)}
        >
          Create a New Campaign
        </Button>
        
        <div className="header__icons">
          <Button 
            type="text" 
            icon={<MessageOutlined />}
            className="header__icon-btn"
          />
          <Button 
            type="text" 
            icon={<BellOutlined />}
            className="header__icon-btn"
          />
        </div>
      </div>

      {/* Sidebar component */}
      {/* <Sidebar visible={sidebarVisible} onClose={toggleSidebar} /> */}

      {/* Campaign Modal */}
      <CampaignModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
    
    <div className="mobileHeader">
    <div className="profile-image">
        <img src={ProfileImage} alt="Profile" />
        </div>
    <div className="profile-title">Micro-Influx</div>

    <div className="header__hamburger">
        <Button 
          type="text" 
          icon={<MenuOutlined />} 
          className="header__hamburger-btn"
          onClick={toggleSidebar}
        />
      </div>
    </div>
    </>
    
  );
};

export default Header;
