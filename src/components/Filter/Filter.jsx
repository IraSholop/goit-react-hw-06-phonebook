import css from './Filter.module.css';
import { filter } from 'redux/filter/slice';
import { useDispatch, useSelector } from 'react-redux';

export function Filter({ value, onChange }) {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filter(e.currentTarget.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filterValue}
        onChange={changeFilter}
        className={css.input}
      />
    </label>
  );
}
