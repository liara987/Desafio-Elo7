import "./styles.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const baseURL = "http://www.mocky.io/v2/5d6fb6b1310000f89166087b";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        let items = [];
        response.data.vagas.map((item, index) => {
          items.push({
            id: index,
            role: item.cargo,
            active: item.ativa,
            link: item.link,
            remote: item.localizacao ? false : true,
            adress:
              item.localizacao?.bairro +
              " - " +
              item.localizacao?.cidade +
              ", " +
              item.localizacao?.pais,
          });
        });
        setJobs(items);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="job-list">
      <h3 className="job-list-title">desenvolvimento</h3>
      <ul className="job-list-wrapper">
        {jobs.map((job) => {
          if (job.active) {
            return (
              <li className="job-list-item" key={job.id}>
                <a className="job-list-item-role" href={job.link}>{job.role}</a>
                <span className="job-list-item-neighborhood">
                  {job.remote ? "Remoto" : job.adress}
                </span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default JobList;
