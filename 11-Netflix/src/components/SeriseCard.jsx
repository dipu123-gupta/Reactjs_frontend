const SeriesCard = ({ series }) => {
  return (
    <li className="card">
      <img src={series.img_url} alt={series.name} />
      <h2>{series.name}</h2>
      <p><strong>Rating:</strong> {series.rating}</p>
      <p>{series.description}</p>

      <p><strong>Genre:</strong> {series.genre.join(", ")}</p>
      <p><strong>Cast:</strong> {series.cast.join(", ")}</p>

      <a href={series.watch_url} target="_blank" rel="noopener noreferrer">
        ▶ Watch Now
      </a>
    </li>
  );
};

export default SeriesCard;
