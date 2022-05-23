import Navbarmenu from "../components/navbar-menu";
import { RiBriefcaseLine, RiFileAddLine } from "react-icons/ri";
import CardJobs from "../components/cards";

const JobOffers = () => {
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
          <h4>Job Postings</h4>
          <CardJobs />
        </div>
      </div>
    </div>
  );
};

export default JobOffers;