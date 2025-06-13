import React from 'react';

function Notifications({ notifications }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Notifications</h5>
        <ul className="list-group list-group-flush">
          {notifications.map((note, index) => (
            <li key={index} className="list-group-item">
              {note.text} <span className={`text-${note.status} float-right`}>{note.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;