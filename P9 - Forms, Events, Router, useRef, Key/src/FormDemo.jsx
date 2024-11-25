import { useRef, useState } from "react";

const FormDemo = () => {
  const inputRef = useRef();
  const [items, setItems] = useState(["Item1", "Item2", "Item3", "Item4"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      setItems([...items, inputRef.current.value.trim()]);
      inputRef.current.value = "";
    }
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, idx) => idx !== index);
    setItems(updatedItems);
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="Enter the Item" />
        <button>Add</button>
      </form>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item}{" "}
            <button onClick={() => handleDelete(idx)} style={{ marginLeft: "10px", color: "red" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormDemo;
