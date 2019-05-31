import React, { useState } from "react";
import Button from "../Button/Button";

export default function ControlBar() {
  const [issueList, setList] = useState([]);

  return (
    <div>
      <Button buttonName="Filter" />
      <Button buttonName="Sort" />
      <Button buttonName="Ascending" />
    </div>
  );
}
