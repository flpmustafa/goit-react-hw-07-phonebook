import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'Redux/Selector';
import { filterContacts } from 'Redux/SeachSlise';
import css from 'components/Filter/Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
  
    <label className={css.filter__label}>
      Find contacts by name
      <input
        className={css.filter__input}
        type="text"
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </label>
  );
}