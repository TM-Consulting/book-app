import React, { useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import CustomCard from "../../components/CustomCard";
import Profile from "../../components/Profile";
import { makeSelectCurrentUser } from "../../selectors/userSelector";
import { getUserBooks } from "../../services/userService";
import { addBooks } from "../../actions/bookActions";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectBooks } from "../../selectors/bookSelector";

const userState = createStructuredSelector({
  curentUser: makeSelectCurrentUser(),
  books: makeSelectBooks(),
});
const Dashboard = () => {
  const { curentUser, books } = useSelector(userState);
  const dispatch = useDispatch();
  async function fetchMyAPI() {
    if (curentUser) {
      const data = await getUserBooks(curentUser.id);
      data.reverse();
      dispatch(addBooks(data));
    }
  }
  useEffect(() => {
    fetchMyAPI();
  }, [curentUser]);
  return (
    curentUser && (
      <div className="container">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="profile" title="Profile">
            <Profile
              name={curentUser.name}
              email={curentUser.email}
              city={"Mohammedia"}
              handleChange={() => {}}
              handleClick={() => {}}
            />
          </Tab>
          <Tab eventKey="home" title="Home">
            {books.map((item) => (
              <CustomCard
                imgUrl={item.image_id}
                showBtn={true}
                title={item.title}
                description={item.description}
                handleClick={() => {}}
              />
            ))}
          </Tab>
        </Tabs>
      </div>
    )
  );
};

export default Dashboard;
