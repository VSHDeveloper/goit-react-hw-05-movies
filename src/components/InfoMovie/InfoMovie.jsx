import PropTypes from 'prop-types';
import styles from './InfoMovie.module.scss';

const InfoMovie = ({ movie }) => {
  const {
    title,
    name,
    overview,
    genres,
    release_date,
    first_air_date,
    poster_path,
    vote_average,
  } = movie;

  const userScore = Math.round(vote_average * 10);

  const imgNotFound =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : imgNotFound;

  return (
    <>
      <div className={styles.cardFilm}>
        <img
          src={imgUrl}
          alt={title || name}
          width="200"
          className={styles.img}
        />
        <div>
          <h2 className={styles.title}>
            {title || name} ({(first_air_date || release_date).slice(0, 4)})
          </h2>

          <p className={styles.score}>User Score: {userScore}%</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

InfoMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
    release_date: PropTypes.string.isRequired,
    first_air_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default InfoMovie;
