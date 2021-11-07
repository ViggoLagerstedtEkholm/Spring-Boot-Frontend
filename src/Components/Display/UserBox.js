import {NoResults} from "../Alerts/NoResults";
import {HighlightText} from "../Regex/HighlightText";
import {RemoveUser} from "../Services/UserService";
import DefaultImage from "../../Images/ProfileDefault.png";
import {UserContext} from "../Context/UserContext";
import {useContext} from "react";

export const UserBox = ({results, filter}) => {
    const {user} = useContext(UserContext);
    const search = filter['Username'] ?  filter['Username'] : "";

    const users = results['users'];
    if(users.length === 0){
        return (<NoResults/>)
    }

    return users.map(function (data, i) {
        console.log(data);
        const id = data['id'];
        const name = data['name'];
        const username = data['username'];

        return (
            <div key={i} id={id} className="content-card-body">
                <div className="card-info">
                    <div className="content-card-image">
                        <img src={DefaultImage} alt="USER IMAGE"/>
                    </div>

                    <div className="content-card-info responsive-text">
                        <h4><b>Username</b></h4>
                        <p><b>{HighlightText(username, search)}</b></p>
                    </div>

                    <div className="content-card-info responsive-text">
                        <h4><b>Name</b></h4>
                        <p><b>{name}</b></p>
                    </div>

                    <div className="content-card-info-buttons">
                        {user ? <button className="button-style-2" onClick={() => {
                            RemoveUser(username).then(() => window.location.reload()).catch(() => alert('Could not remove, something went wrong.'));
                        }}>Remove user</button> : null}
                    </div>
                </div>
            </div>
        )
    });
}