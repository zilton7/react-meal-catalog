const Meal = ({ name, image }) => {
  return (
    <span>
      <h3>{name}</h3>
      <img className="meal-thumb" src={image} />
    </span>
  );
};

export default Meal;
