export const MyButton = ({ handleClick, children }) => {
  return (
    <button
      key={children}
      className="btn m-2"
      onClick={() => handleClick(children)}
    >
      {children}
    </button>
  );
};
