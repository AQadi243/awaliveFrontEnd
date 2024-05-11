import { Table, Modal, Button, Form, Input, Select, DatePicker } from "antd";

const { Option } = Select;

const BookingInfoAdmin = ({ setIsModalVisible, isModalVisible, selectedData }) => {
  

  return (
    <>
      <Modal title="Guest Details" open={isModalVisible}  onCancel={() => setIsModalVisible(false)} footer={[
        <Button key="back" onClick={() => setIsModalVisible(false)}>
          Return
        </Button>,
      ]}>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="" className="font-bold capitalize">
              First Name:
            </label>
            <p className="py-2 px-2 border ">{selectedData?.firstName} </p>
          </div>
          <div>
            <label htmlFor="" className="font-bold capitalize">
              Last Name:
            </label>
            <p className="py-2 px-2 border ">{selectedData?.lastName}</p>
          </div>
          <div>
            <label htmlFor="" className="font-bold capitalize">
              Guest Email:
            </label>
            <p className="py-2 px-2 border ">{selectedData?.email}</p>
          </div>
          <div>
            <label htmlFor="" className="font-bold capitalize">
              Phone Number:
            </label>
            <p className="py-2 px-2 border ">{selectedData?.phone}</p>
          </div>
          <div>
            <label htmlFor="" className="font-bold capitalize">
              Address:
            </label>
            <p className="py-2 px-2 border ">{selectedData?.address ? selectedData?.address : 'N/A'} </p>
          </div>
          <div>
            <label htmlFor="" className="font-bold capitalize">
              City:
            </label>
            <p className="py-2 px-2 border ">{selectedData?.city ? selectedData?.city : 'N/A'} </p>
          </div>
          <div>
            <label htmlFor="" className="font-bold capitalize">
            Message:
            </label>
            <p className="py-2 px-2 border ">{selectedData?.guestNote ? selectedData?.guestNote : 'N/A'}</p>
          </div>
          <div>
            <label htmlFor="" className="font-bold capitalize">
              Arrival:
            </label>
            <p className="py-2 px-2 border ">{selectedData?.arrivalTime ? selectedData?.arrivalTime : "N/A"}</p>
          </div>
          
        </div>
        {/* <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="CheckIn"  >
            <p>12/12123</p>
          </Form.Item>
          <Form.Item label="CheckOut">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Bed type">
            <Select>
              <Option value="single">Single</Option>
              <Option value="double">Double</Option>
              <Option value="suite">Suite</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Proof">
            <Input defaultValue="Adhar Card" />
          </Form.Item>
          <Form.Item label="Person">
            <Input placeholder="Enter Person" />
          </Form.Item>
          <Form.Item label="Rooms">
            <Input placeholder="Enter Rooms" />
          </Form.Item>
          <Form.Item label="Room Type">
            <Select>
              <Option value="junior">Junior Suite</Option>
              <Option value="master">Master Suite</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Payment">
            <Select>
              <Option value="cash">Cash</Option>
              <Option value="credit">Credit Card</Option>
              <Option value="online">Online</Option>
            </Select>
          </Form.Item>
        </Form> */}
      </Modal>
    </>
  );
};

export default BookingInfoAdmin;
