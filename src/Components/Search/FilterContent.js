import {useContext, useEffect, useState} from "react";
import FilterBox from "./FilterBox";
import PaginationBox from "./Pagination/PaginationBox";
import {Info} from "./Pagination/Info";
import Message from "../Alerts/Message";
import {FilterContext} from "../Context/FilterContext";
import {GetAllUsers, GetUsersByUsername} from "../Services/UserService";
import {Loading} from "./State/Loading";

const FilterContent = ({displayBox, showFilterBox}) => {
    const [message, setMessage] = useState("");
    const [totalPagesCount, setTotalPages] = useState(0);
    const [totalResultsCount, setTotalResults] = useState(0);
    const [topRatedMovies, setResults] = useState([]);
    const [pageFirstResultIndex, setPageFirstResultIndex] = useState(0);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [paginationLoading, setPaginationLoading] = useState(false);

    const DisplayBox = displayBox;

    const {filter} = useContext(FilterContext);

    useEffect(() => {
        doSearch();
    }, [filter.Page, filter.Username, filter.ResultsPerPage])

    const onSetFilters = (updatedFilter) => {
        setHasLoaded(false);
        filter.Username = updatedFilter.Username;
        filter.ResultsPerPage = parseInt(updatedFilter.ResultsPerPage, 10);
        filter.Page = 1;
        doSearch();
    }

    const onGoToPage = (page) => {
        filter.Page = parseInt(page, 10);
        setPaginationLoading(true);
        doSearch();
    }

    const onNextPage = () =>{
        filter.Page = filter.Page + 1;
        setPaginationLoading(true);
    }

    const onPreviousPage = () =>{
        filter.Page = filter.Page - 1;
        setPaginationLoading(true);
    }

    const doSearch = () => {
        if(filter.Username){
            GetUsersByUsername(filter).then(response =>{
                console.log(response);
                setResults(response);
                setTotalResults(response['totalResults']);
                setTotalPages(response['totalPages']);
                setPageFirstResultIndex(response['pageFirstResultIndex']);
                setHasLoaded(true);
                setPaginationLoading(false);
            }).catch(() =>{
                setMessage("Could not search for person!");
            });
        }else{
            GetAllUsers(filter).then(response => {
                setResults(response);
                setTotalResults(response['totalResults']);
                setTotalPages(response['totalPages']);
                setPageFirstResultIndex(response['pageFirstResultIndex']);
                setHasLoaded(true);
                setPaginationLoading(false);
            }).catch(() => {
                setMessage("Could not fetch all users!");
            });
        }
    }

    return (
        <div>
            <FilterBox onSetFilters={onSetFilters} showFilterBox={showFilterBox}/>

            {hasLoaded ? (message ? <Message msg={message}/> :
                    <div className="display-result-box">

                        <Info totalPagesCount={totalPagesCount}
                              totalResultsCount={totalResultsCount}
                              pageFirstResultIndex={pageFirstResultIndex}
                        />

                        <DisplayBox results={topRatedMovies} filter={filter}/>
                    </div>
            ) : <div className="display-result-box">
                <Loading/>
            </div>
            }

            <PaginationBox totalPages={totalPagesCount}
                           onGoToPage={onGoToPage}
                           onNextPage={onNextPage}
                           onPreviousPage={onPreviousPage}
                           page={filter.Page}/>
        </div>
    );
}

export default FilterContent;