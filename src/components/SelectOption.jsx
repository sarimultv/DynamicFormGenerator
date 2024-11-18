const SelectOption = ({ item }) => {
  const { value, label } = item;

  const handleSelectedOption = (e) => {
    console.log(e.target);
  };

  return (
    <option
      value={value}
      onClick={handleSelectedOption}
      className="bg-gray-600 text-white"
    >
      {label}
    </option>
  );
};

export default SelectOption;
