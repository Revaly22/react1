import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// adding props

const Person = ({ img, name, job, children }) => {
  // using template litrals
  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="me"></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

// now create a component
const PersonList = () => {
  return (
    <div>
      <section className="person-list">
        <Person img="35" name="spider" job="web developer"></Person>
        <Person img="22" name="revaly" job="doctor"></Person>
        <Person img="57" name="esther" job="lawyer">
          <p>
            {" "}
            this is esther she is a renowned lawyer in ghana with phd in law at
            university of ghana.{" "}
          </p>
        </Person>
      </section>
      <section className="person-list">
        <Person img="36" name="isabella" job="teacher"></Person>
        <Person img="23" name="abigail" job="nurse">
          <p>
            {""}
            meet Abigail she is nursing officer at tamale teaching hospital
          </p>
        </Person>
        <Person img="51" name="dorcas" job="dentist">
          {" "}
        </Person>
      </section>
      <section className="person-list">
        <Person img="30" name="mary" job="banker">
          <p>
            {" "}
            hello your money is safe with Mary she works at the accounts
            department at access bank.{" "}
          </p>
        </Person>
        <Person img="20" name="emeritus" job="politician"></Person>
        <Person img="50" name="jennifer" job="journalist">
          {" "}
        </Person>
      </section>
      <section className="person-list">
        <Person img="38" name="naomi" job="minister"></Person>
        <Person img="28" name="joan" job="pastress">
          <p>
            {" "}
            {""}
            Joan is the head pastor of true God ministry
            {""}
          </p>
        </Person>
        <Person img="59" name="thiara" job="engineer"></Person>
      </section>
      <section className="person-list">
        <Person img="5" name="mercy" job="motivational speaker"></Person>
        <Person img="22" name="valy" job="musician"></Person>
        <Person img="10" name="easthood" job="military officer">
          <p>
            {" "}
            this is Easthood she is a renowned millitary offer at burma camp.{" "}
          </p>
        </Person>
      </section>
    </div>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
