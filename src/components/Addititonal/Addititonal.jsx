import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Addititonal.module.scss';

const AdditionalItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const Additional = ({ location }) => {
  return (
    <div>
      <h4 className={styles.title}>Addititonal information</h4>
      <ul>
        {AdditionalItems.map(({ href, text }) => (
          <li className={styles.item} key={href}>
            <Link to={href} state={{ from: location }} className={styles.link}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

AdditionalItems.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    hash: PropTypes.string,
    state: PropTypes.bool,
  }).isRequired,
};

export default Additional;
