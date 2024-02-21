import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const YearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={YearChangeHandler} />
        <CostDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
