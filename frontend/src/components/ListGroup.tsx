import { useState } from "react";

interface Prop {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem}: Prop) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getNoItemsMessage = () => items.length == 0 && <p>No Items found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {getNoItemsMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              "list-group-item " + (index == selectedIndex ? "active" : "")
            }
            onClick={() => {
              if (index != selectedIndex) {
                setSelectedIndex(index);
                onSelectItem(item);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
//make sure that list item has unique key
export default ListGroup;
