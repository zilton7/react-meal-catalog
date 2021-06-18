import Item from './Meal';

const ItemPanel = () => (
  <div>
    <div className="items-row">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
    <div className="items-row">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
    <div className="items-row">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  </div>
);

export default ItemPanel;
