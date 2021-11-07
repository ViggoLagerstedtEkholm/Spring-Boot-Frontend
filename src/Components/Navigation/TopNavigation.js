import UserNavigation from "./UserNavigation";
import GuestNavigation from "./GuestNavigation";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../Context/UserContext";

function Navigation() {
    const {user} = useContext(UserContext);
    if (user) {
        return (
            <div className="top-nav">
                <UserNavigation/>
                <Link className="logo" to="/"><b>MicroLabsAA back-end case</b></Link>
            </div>);
    }
    return (
        <div className="top-nav">
            <GuestNavigation/>
            <Link className="logo" to="/"><b>MicroLabsAA back-end case</b></Link>
        </div>);
}

export default Navigation;