import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { CheckList } from "../data/checklist";
import { addNewItem, getCheckList } from "../utils/checklist-api";

export const CheckListBuilderPage = () => {
  const [checklist, setChecklist] = useState<CheckList>({
    items: [],
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchCheckList = async () => {
      const data = await getCheckList();
      if (data) setChecklist(data);
    };
    fetchCheckList();
  }, []);

  const addItem = () => {
    const newItem = {
      id: (checklist.items.length + 1).toString(),
      label: inputValue,
    };
    try {
      addNewItem(checklist.items, newItem);
    } catch (error) {
      console.log("Error adding new item - ", error);
    } finally {
      setChecklist((prev) => ({
        ...prev,
        items: [...prev.items],
      }));

      setInputValue("");
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const handleOnClick = () => {
    addItem();
  };

  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md pb-5">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Build your pre trip checklist.
        </li>
        <li>
          <div>
            <input
              className="input ml-2.5"
              placeholder="Add to your list"
              type="text"
              value={inputValue}
              onInput={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button className="btn btn-primary ml-2.5" onClick={handleOnClick}>
              Add
            </button>
          </div>
          <div className="divider"></div>
        </li>
        {checklist?.items.map((item) => (
          <li className="list-row" key={item.id}>
            <div>{item.label}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CheckListBuilderPage;
