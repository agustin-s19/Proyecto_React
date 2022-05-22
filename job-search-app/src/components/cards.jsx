import { MdOutlinePlace } from "react-icons/md"
import { RiMoneyDollarCircleLine, RiMailOpenLine, RiAccountCircleLine, RiSearchLine, RiCloseCircleLine } from "react-icons/ri"
import moment from "moment";
import ButtonSubmit from "./button-submit";

const CardJobs = () => {
  let jobs = [
    {
      "employer": {
        "id": "628314458af7034b7f7ecdfa",
        "name": "Usuario Employer",
        "email": "employer@employer.com",
        "role": "employer",
        "birthday": "2022-05-17T03:19:55.012Z"
      },
      "location": {
        "country": "México",
        "province": "CDMX"
      },
      "_id": "6283145b8af7034b7f7ecdfc",
      "description": "Descripción de la oferta de empleo",
      "title": "Back end developer Node JS, JavaScript, Mongo DB",
      "applicants": [
        {
          "id": "62843daa8b76f3a05c28c243",
          "name": "Roxana Berrios",
          "email": "Roxana@applicant.com",
          "role": "applicant",
          "birthday": "2022-05-18T00:38:55.689Z"
        },
        {
          "id": "6286f6c5dce63d0b51dbb72b",
          "name": "Tzuzul Applicant",
          "email": "tzuzul@applicant.com",
          "role": "applicant",
          "birthday": "2022-05-20T02:08:11.202Z"
        },
        {
          "id": "62830137d83d04d1bb29a38b",
          "name": "Usuario Prueba",
          "email": "usuario@usuario.com",
          "role": "applicant",
          "birthday": "2022-05-20T16:30:30.701Z"
        },
        {
          "id": "6286f7cadce63d0b51dbb737",
          "name": "Leonardo",
          "email": "leonardo11emn@gmail.com",
          "role": "applicant",
          "birthday": "2022-05-20T20:13:39.467Z"
        }
      ],
      "category": [
        "node js",
        "javascript",
        "mongo db"
      ],
      "salary": 110000,
      "state": true,
      "creationDate": "2022-05-17T03:19:55.014Z",
      "__v": 0
    },
    {
      "employer": {
        "id": "628314458af7034b7f7ecdfa",
        "name": "Usuario Employer",
        "email": "employer@employer.com",
        "role": "employer",
        "birthday": "2022-05-17T03:36:50.263Z"
      },
      "location": {
        "country": "México",
        "province": "CDMX",
        "city": "CDMX"
      },
      "_id": "628318527db6e7231bc5813e",
      "description": "Descripción de la oferta de empleo",
      "title": "Back end developer Python, Django, PostgreSQL",
      "category": [
        "python",
        "django",
        "postgresql"
      ],
      "salary": 100000,
      "state": true,
      "applicants": [
        {
          "id": "6286f7cadce63d0b51dbb737",
          "name": "Leonardo",
          "email": "leonardo11emn@gmail.com",
          "role": "applicant",
          "birthday": "2022-05-20T16:44:25.637Z"
        }
      ],
      "creationDate": "2022-05-17T03:36:50.265Z",
      "__v": 0
    }
  ]

  return (
    <>
      {jobs.map(job => 
        <div className="cards">
          <div>
            <h6>{job.title.slice(0,30)}...</h6>
            <div className="cards-group">
              <p><MdOutlinePlace size={12.5}/>{job.location.province} </p>
              <p><RiMoneyDollarCircleLine size={12.5}/>{job.salary}</p>
            </div>
          </div>
          <div className="cards-details">
            <div>
              <RiMailOpenLine size={12.5}/>
              <p>Open on {moment.utc(job.creationDate).format('DD/MM/YYYY')}</p>
            </div>
            <div>
              <RiAccountCircleLine size={12.5}/>
              <p>Total candidates</p>
            </div>
          </div>
          <div className="cards-button">
            <ButtonSubmit><RiSearchLine/>SHOW</ButtonSubmit>
            <ButtonSubmit><RiCloseCircleLine/>CLOSE</ButtonSubmit>
          </div>
        </div>
      )}
    </>
  );
};

export default CardJobs;