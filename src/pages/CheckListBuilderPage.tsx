import { useChecklist } from '../hooks/useChecklist';
import CheckListItem from '../components/CheckListItem';
import AddChecklistItem from '../components/AddChecklistItem';
import { useChecklistInput } from '../hooks/useCheckListInput';
export const CheckListBuilderPage = () => {
  const { checklist, isLoading, isPending, addItem } = useChecklist();
  const { inputValue, handleChange, handleKeyDown, handleAdd } = useChecklistInput(addItem);

  if (isLoading || !checklist) {
    return <div className="p-4 text-sm opacity-70">Loading checklist...</div>;
  }

  return (
    <>
      <h1>Your trip checklist</h1>
      <ul className="list bg-base-100 rounded-box shadow-md pb-5">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Build your pre trip checklist.
        </li>
        <li>
          <AddChecklistItem
            inputValue={inputValue}
            isPending={isPending}
            onAdd={handleAdd}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <div className="divider"></div>
        </li>
        {checklist.items.map((item) => (
          <CheckListItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default CheckListBuilderPage;
