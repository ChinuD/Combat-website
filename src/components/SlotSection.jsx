import React, { useState, useEffect } from "react";
import MultipleCardDiv from "./MultipleCardDiv";

function SlotSection() {
  const [matches, setMatches] = useState([]);
  const [todayMatches, setTodayMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [completedMatches, setCompletedMatches] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  useEffect(() => {
    fetchScheduleData();
  }, []);

  const fetchScheduleData = async () => {
    const mockData = [
      {
        day: "Monday",
        date: "20/01/2025",
        events: [
          { department: "Mechanical", sport: "Basketball", time: "10:00", completed: true, score: "89-76", teams: "X vs Y" },
        ],
      },
      {
        day: "Wednesday",
        date: "22/01/2025",
        events: [
          { department: "Computer Science", sport: "Cricket", time: "12:30", completed: false, teams: "A vs B" },
          { department: "Electrical", sport: "Football", time: "18:00", completed: false, teams: "C vs D" },
        ],
      },
      {
        day: "Thursday",
        date: "23/01/2025",
        events: [
          { department: "Civil", sport: "Tennis", time: "10:00", completed: false, teams: "E vs F" },
          { department: "Mechanical", sport: "Hockey", time: "12:00", completed: true, score: "1-3", teams: "G vs H" },
        ],
      },
      {
        day: "Sunday",
        date: "19/01/2025",
        events: [
          { department: "Computer Science", sport: "Volleyball", time: "08:00", completed: true, score: "3-0", teams: "I vs J" },
        ],
      },
    ];

    // Set the matches data
    setMatches(mockData);

    // Extract unique departments
    const uniqueDepartments = [
      ...new Set(mockData.flatMap((match) => match.events.map((event) => event.department))),
    ];
    setDepartments(["All", ...uniqueDepartments]);

    // Process matches based on date and time
    processMatches(mockData);
  };

  const processMatches = (data) => {
    const now = new Date();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayMatches = [];
    const upcomingMatches = [];
    const completedMatches = [];

    data.forEach((match) => {
      const matchDate = new Date(match.date.split("/").reverse().join("-"));
      if (matchDate.getTime() === today.getTime()) {
        match.events.forEach((event) => {
          const eventTime = new Date(`${match.date.split("/").reverse().join("-")}T${event.time}`);
          if (eventTime >= now) {
            todayMatches.push({ ...match, events: [event] });
          } else {
            completedMatches.push({ ...match, events: [event] });
          }
        });
      } else if (matchDate.getTime() > today.getTime()) {
        upcomingMatches.push(match);
      } else {
        completedMatches.push(match);
      }
    });

    setTodayMatches(todayMatches);
    setUpcomingMatches(upcomingMatches);
    setCompletedMatches(completedMatches);
  };

  const handleFilterChange = (event) => {
    const department = event.target.value;
    setSelectedDepartment(department);

    if (department === "All") {
      processMatches(matches);
    } else {
      const filteredMatches = matches.map((match) => ({
        ...match,
        events: match.events.filter((event) => event.department === department),
      })).filter((match) => match.events.length > 0);

      processMatches(filteredMatches);
    }
  };

  return (
    <div className="flex flex-col gap-6 pl-3">
      {/* Filter Dropdown */}
      <div className="flex items-center justify-start mb-4">
        <label htmlFor="department-filter" className="text-white text-lg mr-4">
          Filter by Department:
        </label>
        <select
          id="department-filter"
          value={selectedDepartment}
          onChange={handleFilterChange}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600"
        >
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Today's Matches */}
      {todayMatches.length > 0 && (
        <>
          <h2 className="text-white text-xl font-bold">Today's Matches</h2>
          {todayMatches.map((daySchedule, index) => (
            <MultipleCardDiv
              key={`today-${index}`}
              day={daySchedule.day}
              date={daySchedule.date}
              events={daySchedule.events}
            />
          ))}
        </>
      )}

      {/* Upcoming Matches */}
      {upcomingMatches.length > 0 && (
        <>
          <h2 className="text-white text-xl font-bold">Upcoming Matches</h2>
          {upcomingMatches.map((daySchedule, index) => (
            <MultipleCardDiv
              key={`upcoming-${index}`}
              day={daySchedule.day}
              date={daySchedule.date}
              events={daySchedule.events}
            />
          ))}
        </>
      )}

      {/* Completed Matches */}
      {completedMatches.length > 0 && (
        <>
          <h2 className="text-white text-xl font-bold">Completed Matches</h2>
          {completedMatches.map((daySchedule, index) => (
            <MultipleCardDiv
              key={`completed-${index}`}
              day={daySchedule.day}
              date={daySchedule.date}
              events={daySchedule.events}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default SlotSection;
