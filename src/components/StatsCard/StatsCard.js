import React from 'react';

function StatsCard({ title, value, subtext }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h3>{value}</h3>
        <p className="card-text">{subtext}</p>
      </div>
    </div>
  );
}

export default StatsCard;