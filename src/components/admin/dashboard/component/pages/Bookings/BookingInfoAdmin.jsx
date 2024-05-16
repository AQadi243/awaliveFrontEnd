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
        
      </Modal>
    </>
  );
};

export default BookingInfoAdmin;
