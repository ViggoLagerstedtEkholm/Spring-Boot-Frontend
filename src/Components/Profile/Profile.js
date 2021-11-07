import {PasswordForm} from "../Authentication/PasswordForm";
import Email from "../Authentication/Email";

function Profile() {
    return (
        <div className="container">
            <PasswordForm/>
            <Email/>
        </div>);
}

export default Profile;