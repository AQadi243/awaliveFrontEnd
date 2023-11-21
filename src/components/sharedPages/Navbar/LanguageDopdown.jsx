import React, { useEffect, useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu  } from "antd";
import { FaGlobe } from "react-icons/fa6";
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import Item from "antd/es/list/Item";
// import en from '../../../assets/en.jpg';
// import ar from '../../../assets/en.jpg'

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
    flag: "../../../assets/en.jpg",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
    flag: "../../../assets/sa.jpg",
  },
];



const CustomMenu = ({ onClose }) => {
    
  const handleItemClick = (code) => {
    i18next.changeLanguage(code);
    onClose(); // Close the dropdown after selecting an item
  };


    return (
      <Menu>
        {languages.map(({ code, name, country_code, flag }) => (
          <Item
            key={country_code}
            className={`cursor-pointer ${
              i18next.language === code ? 'ant-dropdown-menu-item-disabled' : ''
            }`}
            onClick={() => handleItemClick(code)}
          >
            <Space>
              <img className="mx-2" src={flag} alt="" style={{
                  opacity: i18next.language === code ? 0.5 : 1,
                }} />
              {/* <span
                className={`flag-icon flag-icon-${country_code} `}
                
              ></span> */}
              <p className="pointer">{name}</p>
              
            </Space>
          </Item>
        ))}
      </Menu>
    );
  };

const LanguageDopdown = () => {
  const [visible, setVisible] = useState(false);
    const currentLanguageCode = Cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log('Setting page stuff');
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('app_title');
  }, [currentLanguage, t]);


  return (
    <div className="language-select">
        <div className="flex justify-end items-center">
          <Dropdown overlay={<CustomMenu  onClose={() => setVisible(false)}/>} trigger={['click']} visible={visible} onVisibleChange={(visibility) => setVisible(visibility)}>
            <a
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setVisible(!visible);
              }}
            >
              <Space>
                <FaGlobe />
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
  );
};

export default LanguageDopdown;
