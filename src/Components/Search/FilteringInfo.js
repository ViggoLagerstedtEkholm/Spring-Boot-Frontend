import {useContext} from "react";
import {FilterContext} from "../Context/FilterContext";

function FilteringInfo() {
    const {filter} = useContext(FilterContext);

    return (
        <div className="search-terms-container">
            <h1>Search terms</h1>
            <ul>
                {filter.Search ?
                    <li>
                        <p><b>Search:</b> {filter.Search}</p>
                    </li>
                    : null
                }

                <li>
                    <p><b>Results per page:</b> {filter.ResultsPerPage}</p>
                </li>
            </ul>
        </div>
    );
}

export default FilteringInfo;