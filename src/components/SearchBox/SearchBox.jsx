import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";



const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <>
      <p className={css.findCotact}>
        Find contact:{" "}
      </p>
      <div  className={css.findCotact}>
        <input
        className={css.inputCotact}
        type="text"
        value={filters}
        onChange={handleChange}
      />
      </div>
    </>
  );
};

export default SearchBox;
