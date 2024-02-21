import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputNum, setInputNum] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const numChangeHandler = (event) => {
    setInputNum(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputNum,
      date: new Date(inputDate),
    };
    props.onSaveCostData(costData);

    setInputDate("");
    setInputName("");
    setInputNum("");
  };
  return (
    <div>
      <form>
        <div className="new-cost__controls hidden">
          <div className="new-cost__control">
            <label>Название</label>
            <input type="text" value={inputName} onChange={nameChangeHandler} />
          </div>
          <div className="new-cost__control">
            <label>Сумма</label>
            <input type="number" value={inputNum} onChange={numChangeHandler} />
          </div>
          <div className="new-cost__control">
            <label>Дата</label>
            <input
              type="date"
              min="2023-01-01"
              value={inputDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-cost__action">
            <button type="submit" onClick={submitHandler}>
              Добавить расход
            </button>
            <button type="button" onClick={props.onCancel}>
              Отмена
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CostForm;
