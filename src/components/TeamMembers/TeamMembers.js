import React from 'react';

function TeamMembers({ teamMembers }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Team Member on Leave</h5>
        {teamMembers.map((member, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <p>{member.name} <span className="text-muted">{member.role}</span></p>
              <small>{member.dates}</small>
            </div>
            <span className="badge badge-secondary">{member.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;