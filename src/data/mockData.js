export const mockData = {
    stats: [
      { title: "Total Leave Taken", value: "16 days", subtext: "29 days remaining this year" },
      { title: "Approval Rate", value: "92%", subtext: "29% remaining this year" },
      { title: "Pending Request", value: "1", subtext: "29 days remaining this year" },
      { title: "Team Member on Leave", value: "2", subtext: "29 days remaining this year" },
    ],
    leaveOverview: {
      totalDays: 20,
      remainingDays: 29,
      quarterlyData: [5, 4, 3, 4], // Q1, Q2, Q3, Q4 leave days
    },
    upcomingLeave: {
      pending: "Pending Approval is awaiting manager approval",
      scheduled: "Annual Leave, Apr 22, 2025 to Apr 24, 2025 (3 days)",
    },
    notifications: [
      { text: "Your leave request for Mar 10-11 has been approved", time: "2 days ago", status: "success" },
      { text: "Remember to submit your timesheet for this week", time: "1 day ago", status: "primary" },
      { text: "Public holiday coming up on May 1st", time: "Just now", status: "warning" },
    ],
    teamMembers: [
      { name: "Sarah Johnson", role: "UX Designer", dates: "Apr 15 - Apr 19, 2025", type: "Annual Leave" },
      { name: "Micheal Chen", role: "Developer", dates: "Apr 18 - Apr 22, 2025", type: "Annual Leave" },
    ],
  };