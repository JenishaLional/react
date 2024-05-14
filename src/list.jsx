function List(props) {
  const itemLists = props.items;
  const listItems = itemLists.map((itemList) => (
    <li className="listItems" key={itemList.id}>
      {itemList.name}
      <b>{itemList.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="category">{props.category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}
export default List;