import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactSlice';
import css from './Filter.module.css';

const Filter = ({ nameForFind }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.filterContainer}>
      <label className={css.filterName}>
        Find contacts by name
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={nameForFind}
          onChange={event =>
            dispatch(filterContacts.filterContacts(event.target.value))
          }
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  nameForFind: PropTypes.string.isRequired,
  onFilter: PropTypes.func,
};

export default Filter;
