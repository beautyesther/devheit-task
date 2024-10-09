// import React from 'react';
// import { Card, Button } from 'antd';
// import './styles.scss';

// const CampaignCard = ({ campaign }) => {
//   return (
//     <Card className="campaign-card">
//       <h4>{campaign.title}</h4>
//       <p>{campaign.description}</p>
//       <div className="campaign-channels">
//         {campaign.channels.map(channel => (
//           <span key={channel}>{channel}</span>
//         ))}
//       </div>
//       <p>Budget: {campaign.budget}</p>
//       <Button type="primary">Apply Now</Button>
//     </Card>
//   );
// };

// export default CampaignCard;


// import React from 'react';
// import { Card, Button } from 'antd';
// import { FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
// import './styles.scss';

// const ICON_MAP = {
//   'facebook': <FacebookOutlined />,
//   'twitter': <TwitterOutlined />,
//   'instagram': <InstagramOutlined />,
//   'youtube': <YoutubeOutlined />
// };

// const CampaignCard = ({ campaign }) => {
//   return (
//     <Card className="campaign-card">
//       <div className="campaign-header">
//         <div className="campaign-logo">
//           {campaign.logoText}
//         </div>
//         <div className="bookmark-icon">
//           {/* You might want to replace this with an actual bookmark icon */}
//           ☆
//         </div>
//       </div>
//       <h3>{campaign.title}</h3>
//       <p className="company-info">{campaign.company} • {campaign.type}</p>
//       <p className="description">{campaign.description}</p>
//       <div className="section">
//         <h4>Channels</h4>
//         <div className="channel-icons">
//           {campaign.channels.map(channel => (
//             <span key={channel} className="channel-icon">
//               {ICON_MAP[channel.toLowerCase()]}
//             </span>
//           ))}
//           {campaign.additionalChannels > 0 && (
//             <span className="additional-channels">+{campaign.additionalChannels} more</span>
//           )}
//         </div>
//       </div>
//       <div className="section">
//         <h4>Budget</h4>
//         <p className="budget">{campaign.budget}</p>
//       </div>
//       <Button type="primary" className="apply-button">Apply Now</Button>
//     </Card>
//   );
// };

// export default CampaignCard;


// CampaignCard.jsx
import React from 'react';
import { Card, Button } from 'antd';
import { FacebookFilled, TikTokFilled, TwitterSquareFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import SaveCampaign from '../../assets/images/SaveCampaign.svg';
import './styles.scss';

const ICON_MAP = {
  'instagram': <InstagramFilled />,
  'tiktok': <TikTokFilled />,
  'youtube': <YoutubeFilled />,
  'twitter': <TwitterSquareFilled />,
  'facebook': <FacebookFilled />,
};

const CampaignCard = ({ campaign }) => {
  return (
    <Card className="campaign-card">
      <div className="campaign-header">
        <div className="title-section">
          <div className="campaign-logo">
            {campaign.logoText}
          </div>
          <div className="title-info">
            <h3>{campaign.title}</h3>
            <p className="company-info">{campaign.company} • {campaign.type}</p>
          </div>
        </div>
        <div className="post-info">
          <span className="post-time">Posted {campaign.postedTime}</span>
          <span className="bookmark-icon"><img src={SaveCampaign} alt="Profile" /></span>
        </div>
      </div>
      
      <p className="description">{campaign.description}</p>
      
      <div className="section">
        <h4>Channels</h4>
        <div className="channel-icons">
          {campaign.channels.map(channel => (
            <span key={channel} className="channel-icon">
              {ICON_MAP[channel.toLowerCase()]}
            </span>
          ))}
          {campaign.additionalChannels > 0 && (
            <span className="additional-channels">+{campaign.additionalChannels} more</span>
          )}
        </div>
      </div>
      
      <div className="footer">
        <div className="budget-section">
          <h4>Budget</h4>
          <p className="budget">{campaign.budget}</p>
        </div>
        <Button type="primary" className="apply-button">Apply Now</Button>
      </div>
    </Card>
  );
};

export default CampaignCard;