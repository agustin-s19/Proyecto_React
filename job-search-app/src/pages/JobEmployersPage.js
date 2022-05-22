import CardJobs from "../components/cards";
import Input from "../components/input";
import Navbarmenu from "../components/NavbarMenu";
import "../styles/cards.css"



const JobOffers = () => {
  return (
    
    
      
    <div class="offers-container">
      <Navbarmenu/>
      <h3>Find that Job</h3>
      <p className="sub">SEARCH BY JOB TITLE</p>
      <Input/>
      <div className="Parameters">
        <ul>
          <li className="list">Category</li>
          <Input/>
        </ul>
        <ul>
          <li className="list">Type</li>
          <Input/>
        </ul>
        <ul>
          <li className="list">Salary Range</li>
          <Input/>
        </ul>
      </div>
      
      <CardJobs />
    </div>
    
  );
};

export default JobOffers;