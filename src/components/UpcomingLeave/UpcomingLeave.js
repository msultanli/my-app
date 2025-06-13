import React, { useState } from 'react';

function UpcomingLeave({ pending, scheduled }) {
  const [isPending, setIsPending] = useState(true);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Upcoming Leave</h5>
        <p className="text-success">{scheduled}</p>
        <p className="text-warning">{isPending ? pending : "Approved"}</p>
        <button className="btn btn-primary btn-sm mt-2" onClick={() => setIsPending(false)}>Approve</button>
      </div>
    </div>
  );
}

export default UpcomingLeave;