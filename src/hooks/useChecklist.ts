import { useEffect, useState, useTransition } from "react";
import { addNewItem, getCheckList } from "../utils/checklist-api";
import { CheckList, Item } from "../data/checklist";

export function useChecklist() {
  const [checklist, setChecklist] = useState<CheckList | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCheckList = async () => {
      const data = await getCheckList();
      if (data) {
        setChecklist(data);
      }
      setIsLoading(false);
    };
    fetchCheckList();
  }, []);

  const addItem = async (label: string) => {
    if (!checklist) return;
    const newItem: Item = {
      id: (checklist.items.length + 1).toString(),
      label,
    };

    try {
      await addNewItem([...checklist.items, newItem]);

      const updated = await getCheckList();
      if (updated) {
        startTransition(() => {
          setChecklist(updated);
        });
      }
    } catch (err) {
      console.error("Failed to add item:", err);
    }
  };

  return { checklist, isPending, isLoading, addItem };
}
