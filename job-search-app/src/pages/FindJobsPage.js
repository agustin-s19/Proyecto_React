import { RiArticleLine, RiSearchLine } from "react-icons/ri";
import CardJobs from "../components/cards";
import Input from "../components/input";
import Navbarmenu from "../components/navbar-menu";
import "../styles/layout.css"
import "../styles/cards.css"



const FindJobs = () => {
  const icon1 = <RiSearchLine size={24} />;
  const icon2 = <RiArticleLine size={24} />;
  return (
    <div class="logged-container">
      <Navbarmenu
        title1 ="Find That Job"
        title2 ="Your Applications"
        icon1 = {icon1}
        icon2 = {icon2}
        link1 = "/jobs/all"
        link2 = "/jobsdetails"
      />
      <div className="link-logged">
        <div class="offers-container">
          <h4>Find that Job</h4>
          <Input
            id = "search by job title"
            label = "SEARCH BY JOB TITLE"
            placeholder = "full stack developer"
          />
          <div className="parameters">
            <ul>
              <Input
                id = "category"
                label = "CATEGORY"
                placeholder = "select a category"
              />
            </ul>
            <ul>
              <Input
                id = "type"
                label = "TYPE"
                placeholder = "select a type"
              />
            </ul>
            <ul>
              <Input
                id = "salary"
                type = "number"
                label = "SALARY"
                placeholder = "enter a salary"
              />
            </ul>
          </div>
            <CardJobs />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;