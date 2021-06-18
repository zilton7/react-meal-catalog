const Meal = ({ name, image }) => {
  return (
    <span>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <img src={image} />
      </div>
    </span>
  );
};

export default Meal;
