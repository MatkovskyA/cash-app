import "./CostDate.css";

const CostDate = (props) => {
  const month = props.date.toLocaleString("ru-RU", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });

  return (
    <div className="cost-item__date">
      <div className="cost-item__month">
        {day} - {month}
      </div>
      <div className="cost-item__year">{year}</div>
      <div className="cost-item__day"></div>
    </div>
  );
};

export default CostDate;
