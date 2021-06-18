import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

const Meal = ({ name, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <span onClick={loadDetailHandler} id={id}>
      <Link to={`/meal/${id}`}>
        <h3>{name}</h3>
        <img className="meal-thumb" src={image} />
      </Link>
    </span>
  );
};

export default Meal;
