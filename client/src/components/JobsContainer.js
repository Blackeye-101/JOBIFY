import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Job from "./Job";
import Loading from "./Loading";
import Wrapper from "../assets/wrappers/JobsContainer";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    sort,
    searchType,
    searchStatus,
  } = useAppContext();

  useEffect(() => {
    const delayForTyping = setTimeout(() => {
      getJobs();
    }, 1000);

    return () => clearTimeout(delayForTyping);
  }, [search, sort, searchType, searchStatus]);

  if (isLoading) {
    return <Loading center></Loading>;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job}></Job>;
        })}
      </div>
      {/* pagination buttons */}
    </Wrapper>
  );
};
export default JobsContainer;
