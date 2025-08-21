export const SelectPagination = ({ options, onChangeFct, initialValue }) => {
  // option = {value: value, label: label}

  return (
    <div>
      <select
        value={initialValue}
        onChange={(e) => onChangeFct(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
