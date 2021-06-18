import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Meal = ({ name, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <span onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <img className="meal-thumb" src={image} />
    </span>
  );
};

export default Meal;
