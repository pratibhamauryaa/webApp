import React, { useState } from 'react';
import LeftSideMenu from '@/components/layouts/leftmenu';
import { Header } from '@/components/layouts/header';
import Content from '@/components/content';

const DashboardPage = () => {
  const [selectedOption, setSelectedOption] = useState('home');

  const handleMenuSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <LeftSideMenu  selectedOption={selectedOption} onSelect={handleMenuSelect} />
      <div>
        <Header />
        <Content selectedOption={selectedOption} />
      </div>
    </div>
  );
};

export default DashboardPage;
