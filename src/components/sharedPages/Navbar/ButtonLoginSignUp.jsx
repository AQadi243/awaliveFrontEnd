import { DownOutlined } from "@ant-design/icons";
import {  Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';

const ButtonLoginSignUp = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link
          to={'login'}
          rel="noopener noreferrer"
          
        >
          Log In
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          to={'/signup'}
          rel="noopener noreferrer"
          
        >
          Join
        </Link>
      ),
    },
  ];

  

  return (
    <div className="">
      <Space direction="vertical">
        <Space wrap>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            
          >
            <div className="flex  items-center justify-center px-2">
            <UserOutlined className="text-lg" />
            {/* <p className="cursor-pointer text-md flex items-center"></p> */}
            {/* <DownOutlined className="text-xs" /> */}
            </div>
            
          </Dropdown>
        </Space>
      </Space>
    </div>
  );
};

export default ButtonLoginSignUp;
