import React, { useState } from 'react';
import '../../styles/bootstrap.min.css'
import '../../app/globals.css'
import '../../styles/dashboard.css'
import { LuHome } from "react-icons/lu";
import { AiOutlineFundView, AiOutlineFileProtect } from "react-icons/ai";
import { TbBoxSeam, TbCoinRupee, TbUsers, TbReportMoney, TbListSearch, TbUserPlus, TbChecklist, TbFileDollar } from "react-icons/tb";
import { Layout, Menu, theme, Breadcrumb } from 'antd';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


const menuItems = [
  {
    label: "Home",
    icon: <LuHome style={{ fontSize: '26px' }} />,
    key: "home",
    // className:"sidemenu-btn",
  },
  {
    label: "Product Details",
    icon: <TbBoxSeam style={{ fontSize: '26px' }} />,
    key: "product-details",
    // className:"sidemenu-btn"
  },
  {
    label: "Credit",
    icon: <TbCoinRupee style={{ fontSize: '26px' }} />,
    key: "credit",
    // className:"sidemenu-btn"
  },
  {
    label: "Assigned Buyers",
    icon: <TbUsers style={{ fontSize: '26px' }} />,
    key: "assigned-buyers",
    // className:"sidemenu-btn"
  },
  {
    label: "Invoices",
    icon: <TbReportMoney style={{ fontSize: '26px' }} />,
    key: "invoice-main",
    subMenu: [
      {
        label: "Invoices details",
        key: "invoices"
      },
      {
        label: "Upload Invoice",
        key: "upload-invoices"
      },
    ],
    // className:"sidemenu-btn"
  },
  {
    label: "GST Analysis",
    icon: <TbListSearch style={{ fontSize: '26px' }} />,
    key: "gst-analysis",

  },
  {
    label: "Add Seller",
    icon: <TbUserPlus style={{ fontSize: '26px' }} />,
    key: "add-seller",

    // className:"sidemenu-btn"
  },
  {
    label: "Seller List",
    icon: <TbChecklist style={{ fontSize: '26px' }} />,
    key: "seller-list",
    // className:"sidemenu-btn"
  },
  {
    label: "My Repayments",
    icon: <TbFileDollar style={{ fontSize: '26px' }} />,
    key: "my-repayments",
    // className:"sidemenu-btn"
  },
  {
    label: "view Leadger",
    icon: <AiOutlineFundView style={{ fontSize: '26px' }} />,
    key: "view-leadger",
    // className:"sidemenu-btn"
  },
  {
    label: "FHC",
    icon: <AiOutlineFileProtect style={{ fontSize: '26px' }} />,
    key: "fhc",
    // className:"sidemenu-btn"
  },
];



const LeftSideMenu = ({ selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedKey, setSelectedKey] = useState('home');
  const handleMenuClick = (key) => {
    const menuItem = menuItems.find((item) => item.key === key);
    const subMenuItem = menuItem?.subMenu?.find((item) => item.key === key);
    setSelectedKey(key);
    onSelect(key);


  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();



  const toggleDropdown = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider className="left side-menu" width={270} trigger={null} collapsible collapsed={collapsed}  >
      {collapsed ? <div >
        <MdKeyboardDoubleArrowRight className="trigger" onClick={() => setCollapsed(!collapsed)} style={{ height: "30px" }} />
      </div>
        :
        <div>
          <MdKeyboardDoubleArrowLeft className="trigger" onClick={() => setCollapsed(!collapsed)} />
        </div>
      }
      <Menu theme="light" mode="inline" selectedKeys={[selectedKey]} style={{ fontSize: "15px", paddingTop: "50px", justifyContent: "space-between" }}>
        {menuItems.map((item) => {
          if (item.subMenu) {
           
            return (
              <SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.subMenu.map((subItem) => (
                  <Menu.Item style={{ fontSize: "12px" }} key={subItem.key} onClick={() => handleMenuClick(subItem.key)}>{subItem.label}</Menu.Item>
                ))}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.key)}>
                {item.label}
              </Menu.Item>
            )
          }
        })}
      </Menu>
    </Sider>
  );
};

export default LeftSideMenu;
