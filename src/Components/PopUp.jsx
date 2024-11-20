import React, { useState } from "react";
import "../Styles/PopUp.css";
import { useData } from "../context/dataContext";

export default function PopUp({ handleGroupByChange, handleOrerByChange }) {
  const { groupByKey, orderByKey, updateGroupBy, updateOrderBy } = useData();
  console.log(groupByKey, orderByKey);

  return (
    <div className="App">
      <div className="controls">
        <div className="control">
          <label>Grouping</label>
          <select
            value={groupByKey}
            onChange={(e) => updateGroupBy(e.target.value)}
          >
            <option value="status">Status</option>
            <option value="userId">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="control">
          <label>Ordering</label>
          <select
            value={orderByKey}
            onChange={(e) => updateOrderBy(e.target.value)}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
      {/* <div className="results">
            {sortedAndGroupedTickets.map(({ key, tickets }) => (
              <div key={key} className="group">
                <h3>{key}</h3>
                <ul>
                  {tickets.map((ticket) => (
                    <li key={ticket.id}>
                      <strong>{ticket.title}</strong> (Priority: {ticket.priority})
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
    </div>
  );
}
