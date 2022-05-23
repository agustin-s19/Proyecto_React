import { RiBriefcaseLine, RiFileAddLine } from "react-icons/ri";
import ButtonSubmit from "../components/button-submit";
import Input from "../components/input";
import Navbarmenu from "../components/navbar-menu";

const CreateJob = () => {
  const icon1 = <RiBriefcaseLine size={24} />;
  const icon2 = <RiFileAddLine size={24} />;
  return (
    <div className="logged-container">
      <Navbarmenu
        title1 ="Job Postings"
        title2 ="Create New Job"
        icon1 = {icon1}
        icon2 = {icon2}
        link1 = "/jobs/:id"
        link2 = "/jobs/new"
      />
      <div className="link-logged">
        <div class="offers-container">
          <h4>Create new job posting</h4>
          <h5>Main information</h5>
          <form>
            <Input
              id = "title"
              label = "JOB TITLE"
              placeholder = "Software Developer"
            />
            <Input
              id = "description"
              label = "JOB DESCRIPTION"
              placeholder = "Details about the job position"
            />
            <Input
              id = "salary"
              type = "number"
              label = "SALARY"
              placeholder = "5000"
            />
            <Input
              id = "technical requirements"
              label = "TECHNICAL REQUIREMENTS (separar con comas)"
              placeholder = "Ejm. react, node js, django"
            />
            <Input
              id = "country"
              label = "COUNTRY"
              placeholder = "Peru"
            />
            <Input
              id = "province"
              label = "PROVINCE"
              placeholder = "Lima"
            />
            <Input
              id = "city"
              label = "CITY"
              placeholder = "Surco"
            />
            <div className="button-center">
              <ButtonSubmit>POST THIS JOB</ButtonSubmit>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;