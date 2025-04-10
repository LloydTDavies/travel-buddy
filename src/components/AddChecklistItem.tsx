// components/AddChecklistItem.tsx
import { ChangeEvent, KeyboardEvent } from "react";

interface AddChecklistItemProps  {
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  isPending: boolean;
};

export const AddChecklistItem = ({
  inputValue,
  onChange,
  onKeyDown,
  onAdd,
  isPending,
}: AddChecklistItemProps) => {
  return (
    <div>
      <input
        className="input ml-2.5"
        placeholder="Add to your list"
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button
        className="btn btn-primary ml-2.5"
        onClick={onAdd}
        disabled={!inputValue.trim() || isPending}
      >
        {isPending ? "Saving..." : "Add"}
      </button>
    </div>
  );
};

export default AddChecklistItem;
