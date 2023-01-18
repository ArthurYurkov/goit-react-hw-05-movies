import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function BackBtn({ location }) {
  return (
    <>
      <NavLink className={styles.backButton} to={location}>
        Back
      </NavLink>
    </>
  );
}

BackBtn.propTypes = {
  location: PropTypes.any,
};
