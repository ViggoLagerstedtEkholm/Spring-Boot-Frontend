import {useState} from "react";
import FilteringInfo from "./FilteringInfo";

function FilterBox({onSetFilters, showFilterBox}) {
    const [state, setState] = useState(showFilterBox);
    const [showFilteringInfo, setShowInfoFiltering] = useState(!showFilterBox);
    const [username, setUsername] = useState("");
    const [resultsPerPage, setResultsPerPage] = useState(7);

    const toggle = () => {
        if (state) {
            setState(false);
            setShowInfoFiltering(true);
        } else {
            setState(true);
            setShowInfoFiltering(false);
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        const filter = {
            Page: 1,
            Username: username,
            ResultsPerPage : resultsPerPage
        };

        onSetFilters(filter);
        toggle();
    }

    return (
        <div>
            <button className="button-style-4" onClick={toggle}> Toggle filtering.</button>
            {state ? <form onSubmit={onSubmit}>
                <div className="content-filter-box filter-background-box">
                    <div className="row">

                        <div className="column filter-input-background">
                            <div className="filter-text">
                                Results per page
                            </div>
                            <select className="content-filter-select" name="ResultsPerPage" id="ResultsPerPage"
                                    value={resultsPerPage}
                                    onChange={(e) => {
                                        setResultsPerPage(e.target.value);
                                    }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7" selected="selected">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>

                        <div className="column filter-input-background">
                            <div className="filter-text">
                                Search by username
                            </div>
                            <input className="user-input-text" id="search" type="text" name="Search"
                                   placeholder="Search"
                                   value={username}
                                   onChange={(e) => {
                                       setUsername(e.target.value);
                                   }}
                            />
                        </div>
                    </div>

                    <button className="button-style-1" type="submit" name="filter_button" value="GO">Filter</button>
                </div>
            </form> : null}

            {
                showFilteringInfo ? <FilteringInfo/> : null
            }

        </div>
    );
}

export default FilterBox;