import React, { useState } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import addBtn from "../images/addBtn.png";
import FilterOption from "./FiltersOptions";

const FilterHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button color="transparent" onClick={toggleOffcanvas} className="p-0 add-btn" >
        <img src={addBtn} alt="Open Filter" />
      </Button>
      <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas} className="filter-options">
        <OffcanvasHeader toggle={toggleOffcanvas}></OffcanvasHeader>
        <OffcanvasBody>
          <FilterOption />
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default FilterHome;
