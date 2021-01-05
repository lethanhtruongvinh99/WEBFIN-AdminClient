import { Route, Switch } from "react-router-dom";
import HeaderCustom from "./../../components/header/index";
import Rooms from "./../rooms/index";
import Users from "./../users/index";
import UserProfile from "./../user-profile/index";
import Room from './../room/index';

const LayoutCustom = (props) =>
{
  return (
    <>
      <HeaderCustom />
      <Switch>
        <Route exact path="/users" component={Users} />
        <Route exact path="/user/:id" component={UserProfile} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/room/:id" component={Room} />
      </Switch>
    </>
  );
};

export default LayoutCustom;
