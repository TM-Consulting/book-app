import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import CustomCard from '../../components/CustomCard';
import Profile from '../../components/Profile';

const index = () => {
  return (
    <div className="container">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="profiles" title="Profile">
          <Profile name={"Mohamed Bataoui"} email={"Mohamed.bataoui@gmail.com"} city={"Mohammedia"} handleChange={() => { }} handleClick={() => { }} />
        </Tab>
        <Tab eventKey="home" title="Home">
          <CustomCard
            imgUrl={"https://images.unsplash.com/photo-1620400557579-93560a77987c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"}
            showBtn={true}
            title={"Monaim touanssi"}
            description={"developpeur web"}
            handleClick={() => { }} />
          <CustomCard
            imgUrl={"https://images.unsplash.com/photo-1620400557579-93560a77987c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"}
            showBtn={true}
            title={"Monaim touanssi"}
            description={"developpeur web"}
            handleClick={() => { }} />

        </Tab>
      </Tabs>
    </div>
  )
}

export default index
