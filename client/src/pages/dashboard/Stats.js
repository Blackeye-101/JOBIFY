import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, ChartsContainer, Loading } from "../../components";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center></Loading>;
  }
  return (
    <>
      <StatsContainer></StatsContainer>
      {monthlyApplications.length > 0 && <ChartsContainer></ChartsContainer>}
    </>
  );
};
export default Stats;
