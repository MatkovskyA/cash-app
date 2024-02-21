import "./CostFilter.css";

const CostsFilter = (props) => {
  const YearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Фильтр по году</label>
        <select onChange={YearChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
