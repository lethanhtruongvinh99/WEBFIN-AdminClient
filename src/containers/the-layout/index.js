import { Route, Switch } from "react-router-dom";
import HeaderCustom from "./../../components/header/index";
import Rooms from "./../rooms/index";
import Users from "./../users/index";
import UserProfile from "./../user-profile/index";

const LayoutCustom = (props) => {
  return (
    <>
      <HeaderCustom />
      <Switch>
        <Route exact path="/users" component={Users} />
        <Route exact path="/user/:id" component={UserProfile} />
        <Route exact path="/rooms" component={Rooms} />
      </Switch>
    </>
  );
};

export default LayoutCustom;
