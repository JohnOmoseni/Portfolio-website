import React from "react";

function Tabs({ activeTab, id, idx, title, onClick }) {
  return (
    <button
      id={id}
      role="tab"
      aria-selected={activeTab === id ? "true" : "false"}
      className={activeTab === id ? "tab-button active" : "tab-button"}
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
}

export default Tabs;
