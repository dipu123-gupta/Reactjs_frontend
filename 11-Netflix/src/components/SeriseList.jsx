import seriesData from "../api/api.json";
import SeriesCard from "./SeriseCard";

const Seriselist = () => {
  return (
    <ul className="series-container">
      {seriesData.map((series) => (
        <SeriesCard key={series.id} series={series} />
      ))}
    </ul>
  );
};

export default Seriselist;
