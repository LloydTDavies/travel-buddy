import { Item } from '../data/checklist';

interface CheckListItemProps {
  item: Item;
}

export const CheckListItem = ({ item }: CheckListItemProps) => {
  return (
    <li className="list-row" key={item.id}>
      <div>{item.label}</div>
    </li>
  );
};
export default CheckListItem;
