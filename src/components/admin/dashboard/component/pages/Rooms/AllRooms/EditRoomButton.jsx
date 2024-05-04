import { Button, Popconfirm } from 'antd';
import { LuClipboardEdit } from "react-icons/lu";

const EditRoomButton = () => {
    const confirm = () =>
     new Promise((resolve) => {
       setTimeout(() => resolve(null), 3000);
     });
  return (

    <Popconfirm
      title="Title"
      description="Open Popconfirm with Promise"
      onConfirm={confirm}
      onOpenChange={() => console.log('open change')}
    >
      <Button type="primary" className='hover:bg-slate-50' style={{color:'black'}} ><LuClipboardEdit className="text-white" /></Button>
    </Popconfirm>


  )
}

export default EditRoomButton