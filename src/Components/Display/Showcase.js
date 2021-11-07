import FilterContent from "../Search/FilterContent";
import {UserBox} from "../Display/UserBox";
import {FilterContext} from "../Context/FilterContext";
import {useContext, useMemo, useState} from "react";
import {UserContext} from "../Context/UserContext";

function Showcase() {
    const [filter, setFilter] = useState({
        Page: 1,
        Username : undefined,
        ResultsPerPage : 7
    });

    const {user} = useContext(UserContext);
    console.log(user);
    const value = useMemo(() => ({ filter, setFilter }), [filter, setFilter]);

    return (
        <div className="container">
            {user ? <h3>Welcome, {user.sub}</h3> : null}
            <FilterContext.Provider value={value}>
                <FilterContent
                    displayBox={UserBox}
                    showFilterBox={true}
                />
            </FilterContext.Provider>
        </div>
    );
}

export default Showcase;
