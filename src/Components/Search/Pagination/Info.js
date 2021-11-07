import {useContext} from "react";
import {FilterContext} from "../../Context/FilterContext";

export const Info = ({totalPagesCount, totalResultsCount, pageFirstResultIndex}) => {
    const {filter} = useContext(FilterContext);

    return (
        <>
            <p className="txt-small">
                Total amount of pages: {totalPagesCount}
            </p>

            <p className="txt-small">
                Total result count: {totalResultsCount}
            </p>

            <p className="txt-small">
                Page index: {filter.Page}
            </p>

            <p className="txt-small">
                Range: {pageFirstResultIndex + 1} - {pageFirstResultIndex + filter.ResultsPerPage}
            </p>
        </>
    );
}