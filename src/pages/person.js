import React from "react";
import "./person.css";
export default function Person({
  name,
  username,
  email,
  phone,
  website,
  company,
}) {
  return (
    <div class="card-container">
    <div style={{border:'1px red solid'}}></div>
      <ul>
        <li>
          <div className="name-container">
            <span class='title'>Name</span>:{name}
          </div>
        </li>
        <li>
          <div className="username"><span class='title'>Username</span>:{username}</div>
        </li>
        <li>
          <div className="email"><span class='title'>Email</span>:{email}</div>
        </li>
      </ul>
    </div>
  );
}
