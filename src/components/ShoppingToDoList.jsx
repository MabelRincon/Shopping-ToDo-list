import { useState } from "react";

export default function ShoppingToDoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem("");
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const moveItem = (index, direction) => {
    const newItems = [...items];
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= items.length) return;
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setItems(newItems);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add new item..."
          className="border p-2 flex-1"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="border p-2 flex justify-between items-center">
            <span>{item}</span>
            <div className="flex gap-2">
              <button
                onClick={() => moveItem(index, -1)}
                className="bg-gray-300 p-1 rounded"
                disabled={index === 0}
              >⬆</button>
              <button
                onClick={() => moveItem(index, 1)}
                className="bg-gray-300 p-1 rounded"
                disabled={index === items.length - 1}
              >⬇</button>
              <button
                onClick={() => deleteItem(index)}
                className="bg-red-500 text-white p-1 rounded"
              >✖</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
