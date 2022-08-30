import React from "react";
import Calendar from "react-github-contribution-calendar";
function GithubActivity() {
  var values = {
    "2022-06-23": 1,
    "2022-06-26": 2,
    "2022-06-27": 3,
    "2022-06-28": 4,
    "2022-06-29": 4,
  };
  var until = "2022-06-30";
  var panelColors = ["#EEEEEE", "#F78A23", "#F87D09", "#AC5808", "#7B3F06"];
  var weekNames = ["", "Mon", "", "Wed", "", "Fri", ""];
  var monthNames = [
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <Calendar
        style={{ width: "100%" }}
        values={values}
        until={until}
        panelColors={panelColors}
        weekNames={weekNames}
        monthNames={monthNames}
      />
    </div>
  );
}

export default GithubActivity;
