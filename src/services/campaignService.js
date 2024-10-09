//campaign service.ts

import EsCardLogo from '../../src/assets/images/EsCardLogo.svg';
import DsCardLogo from '../../src/assets/images/DsCardLogo.svg';
import VsCardLogo from '../../src/assets/images/VsCardLogo.svg';
import CtCardLogo from '../../src/assets/images/CtCardLogo.svg';

// campaignService.js
export const getCampaigns = async () => {
  return [
    {
      id: 1,
      logoText:  <img src={EsCardLogo} alt="Profile" />,
      title: 'Epic Social Buzz',
      company: 'Samsung',
      type: 'Product Review',
      postedTime: '2 days ago',
      description: 'Aliquam massa donec pron sit duis magna eu maecenas. Ultrices in mattis laobrort pron congue pron elementrum. Sed ac porttitor metus ante et eu...',
      channels: ['instagram', 'tiktok', 'youtube', 'twitter', 'facebook'],
      additionalChannels: 2,
      budget: '$1000 - $2,000'
    },
    {
      id: 2,
      logoText:  <img src={EsCardLogo} alt="Profile" />,
      title: 'Epic Social Buzz',
      company: 'Samsung',
      type: 'Product Review',
      postedTime: '2 days ago',
      description: 'Aliquam massa donec pron sit duis magna eu maecenas. Ultrices in mattis laobrort pron congue pron elementrum. Sed ac porttitor metus ante et eu...',
      channels: ['instagram', 'tiktok', 'youtube', 'twitter', 'facebook'],
      additionalChannels: 2,
      budget: '$1000 - $2,000'
    },
    {
      id: 3,
      logoText:  <img src={VsCardLogo} alt="Profile" />,
      title: 'Viral Social Sparks',
      company: 'Samsung',
      type: 'Product Review',
      postedTime: '2 days ago',
      description: 'Aliquam massa donec pron sit duis magna eu maecenas. Ultrices in mattis laobrort pron congue pron elementrum. Sed ac porttitor metus ante et eu...',
      channels: ['instagram', 'tiktok', 'youtube', 'twitter', 'facebook'],
      additionalChannels: 2,
      budget: '$1000 - $2,000'
    },
    {
      id: 4,
      logoText:  <img src={CtCardLogo} alt="Profile" />,
      title: 'Connect & Trend',
      company: 'Samsung',
      type: 'Product Review',
      postedTime: '2 days ago',
      description: 'Aliquam massa donec pron sit duis magna eu maecenas. Ultrices in mattis laobrort pron congue pron elementrum. Sed ac porttitor metus ante et eu...',
      channels: ['instagram', 'tiktok', 'youtube', 'twitter', 'facebook'],
      additionalChannels: 2,
      budget: '$1000 - $2,000'
    },
    {
      id: 5,
      logoText:  <img src={EsCardLogo} alt="Profile" />,
      title: 'Engage & Share',
      company: 'Samsung',
      type: 'Product Review',
      postedTime: '2 days ago',
      description: 'Aliquam massa donec pron sit duis magna eu maecenas. Ultrices in mattis laobrort pron congue pron elementrum. Sed ac porttitor metus ante et eu...',
      channels: ['instagram', 'tiktok', 'youtube', 'twitter', 'facebook'],
      additionalChannels: 2,
      budget: '$1000 - $2,000'
    },
    {
      id: 6,
      logoText:  <img src={DsCardLogo} alt="Profile" />,
      title: 'Dynamic Social Sparks',
      company: 'Samsung',
      type: 'Product Review',
      postedTime: '2 days ago',
      description: 'Aliquam massa donec pron sit duis magna eu maecenas. Ultrices in mattis laobrort pron congue pron elementrum. Sed ac porttitor metus ante et eu...',
      channels: ['instagram', 'tiktok', 'youtube', 'twitter', 'facebook'],
      additionalChannels: 2,
      budget: '$1000 - $2,000'
    },
  ];
};