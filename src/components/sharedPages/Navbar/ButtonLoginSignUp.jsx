import { DownOutlined } from "@ant-design/icons";
import {  Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

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
            <div className="flex gap-1">

            <p className="cursor-pointer text-md flex items-center">Join / Log In</p>
            <DownOutlined className="text-xs" />
            </div>
            
          </Dropdown>
        </Space>
      </Space>
    </div>
  );
};

export default ButtonLoginSignUp;
