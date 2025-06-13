import React from 'react';

function LeaveOverview({ totalDays, remainingDays, quarterlyData }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Leave Overview</h5>
        <div className="d-flex justify-content-between text-muted mb-2">
          {['Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => (
            <span key={q}>{q}: {quarterlyData[i]}</span>
          ))}
        </div>
        <p>Total days: {totalDays}, Remaining: {remainingDays}</p>
      </div>
    </div>
  );
}

export default LeaveOverview;