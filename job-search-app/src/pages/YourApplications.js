import Navbarmenu from "../components/navbar-menu"
import { RiArticleLine, RiSearchLine } from "react-icons/ri";
import CardJobs from "../components/cards";
import "../styles/layout.css"


const YourApplications = () => {
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
       <div class="offers-container">
          Your Applications:
        <div>
        <CardJobs />
        </div>
      </div>
       
      </div>
  )
}

export default YourApplications