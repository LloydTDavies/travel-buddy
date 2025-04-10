// hooks/useChecklistInput.ts
import { useState, ChangeEvent, KeyboardEvent } from 'react';

export function useChecklistInput(onAdd: (value: string) => void) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      handleAdd();
    }
  };

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      onAdd(trimmed);
      setInputValue('');
    }
  };

  return {
    inputValue,
    handleChange,
    handleKeyDown,
    handleAdd,
    setInputValue,
  };
}
