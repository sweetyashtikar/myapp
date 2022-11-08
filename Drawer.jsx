import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Drawer, Radio, Space } from "antd";

const App = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
        
          </form>
        </p>
        <p>
          <label>
            Email :
            <input type="text" Email="name" />
          </label>
    
        </p>
        <p>
          <label>
            Massage :
            <input type="text" Massage="name" />
          </label>
        </p>
        <Button type="primary" onClick={onClose}>
          Submit
        </Button>
      </Drawer>
    </>
  );
};
export default App;
