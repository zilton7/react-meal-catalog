import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loadDetail from '../actions/detailAction';

const Meal = ({ name, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <Link
      role="button"
      className="meal"
      tabIndex="0"
      onClick={loadDetailHandler}
      onKeyDown={loadDetailHandler}
      id={id}
      to={`/meal/${id}`}
    >
      <h3 className="meal-name">{name}</h3>
      <img className="meal-thumb" src={image} alt="" />
    </Link>
  );
};

Meal.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Meal.defaultProps = {
  image: '',
};

export default Meal;
