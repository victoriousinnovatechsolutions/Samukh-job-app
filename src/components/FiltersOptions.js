import { IconChevronRight } from "@tabler/icons-react";
import React, { useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import Upload from "../images/uploadImg.png";
const FilterOption = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const buyOption = [
    "Cloths",
    "Electronics",
    "Household furniture",
    "Home appliances",
  ];
  const ServiceOption = ["Plumber", "A.C Repair", "Mechanic", "Driver"];
  return (
    <div>
      <Nav justified pills className="filter-tabs">
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => toggleTab("1")}
          >
            Buy
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active" : ""}
            onClick={() => toggleTab("2")}
          >
            Sell
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "3" ? "active" : ""}
            onClick={() => toggleTab("3")}
          >
            Services
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="filter-input-sec">
            {buyOption.map((index) => (
              <FormGroup check>
                <Input type="checkbox" />
                <Label check>{index}</Label>
              </FormGroup>
            ))}
          </div>
          <Button className="main-btn btn-arrow ">
            Submit
            <span>
              <IconChevronRight stroke={2} size="24px" />
            </span>
          </Button>
        </TabPane>
        <TabPane tabId="2">
          <div className="filter-input-sec">
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Ex: Bajaj Fan"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="ategory">Category</Label>
              <Input
                id="ategory"
                name="ategory"
                placeholder="Ex: Electronics"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                id="price"
                name="price"
                placeholder="Ex: 1200"
                type="number"
              />
            </FormGroup>
            <FormGroup className="upload-img form-control">
              <Label for="price"><img src={Upload} className="img-fluid"/></Label>
              <Input
                id="price"
                name="price"
                placeholder="Ex: 1200"
                type="file"
              />
            </FormGroup>
          </div>
          <Button className="main-btn btn-arrow ">
            Post
            <span>
              <IconChevronRight stroke={2} size="24px" />
            </span>
          </Button>
        </TabPane>
        <TabPane tabId="3">
          <div className="filter-input-sec">
            {ServiceOption.map((index) => (
              <FormGroup check>
                <Input type="checkbox" />
                <Label check>{index}</Label>
              </FormGroup>
            ))}
          </div>
          <Button className="main-btn btn-arrow ">
            Submit
            <span>
              <IconChevronRight stroke={2} size="24px" />
            </span>
          </Button>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default FilterOption;
