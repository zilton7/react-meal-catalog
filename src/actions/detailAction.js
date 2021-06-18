import axios from "axios";
import { mealsByIdURL } from "../api";

const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(mealsByIdURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      meal: detailData.data,
    },
  });
};

export { loadDetail };
