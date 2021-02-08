const SidebarItem = ({ name, active, handleClick, disabled }) => {
  return (
    <button
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default SidebarItem;
