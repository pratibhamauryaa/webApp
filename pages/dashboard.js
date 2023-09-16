import React, { useState } from 'react';
import LeftSideMenu from '@/components/layouts/leftmenu';
import { Header } from '@/components/layouts/header';
import Content from '@/components/content';
import { Layout, Menu, theme, Breadcrumb} from 'antd';

const DashboardPage = () => {
  const [selectedOption, setSelectedOption] = useState('home');

  const handleMenuSelect = (option) => {
    setSelectedOption(option);
  };
   
  

  return (

      <Layout>
      <LeftSideMenu  selectedOption={selectedOption} onSelect={handleMenuSelect} />
      <Header onSelect={handleMenuSelect} />
      <Layout>
      </Layout>
      <Content selectedOption={selectedOption} />
      </Layout>
       
  );
};

export default DashboardPage;
