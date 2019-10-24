import React from 'react';

export default function Calendar() {
  const d = Date().split(" ");
  const dayOfTheWeek = d[0];
  const month = d[1];
  const dayOfTheMonth = d[2];
  const year = d[3];

  const tr = ( text, search, replace ) => {
    // Make the search string a regex.
    var regex = RegExp( '[' + search + ']', 'g' );
    var t = text.replace( regex, 
            function( chr ) {
                // Get the position of the found character in the search string.
                var ind = search.indexOf( chr );
                // Get the corresponding character from the replace string.
                var r = replace.charAt( ind );
                return r;
            } );
    return t;
}

  const dayOfTheWeekJPN = (dayOfTheWeek) => ({
    "Mon": "月曜日",
    "Tue": "火曜日",
    "Wed": "水曜日",
    "Thu": "木曜日",
    "Fri": "金曜日",
    "Sat": "土曜日",
    "Sun": "日曜日",
  })[dayOfTheWeek];

  const monthJPN = (month) => ({
    "Jan": "１月",
    "Feb": "２月",
    "Mar": "３月",
    "Apr": "４月",
    "May": "５月",
    "Jun": "６月",
    "Jul": "７月",
    "Aug": "８月",
    "Sep": "９月",
    "Oct": "１０月",
    "Nov": "１１月",
    "Dec": "１２月",
  })[month];

  const dayOfTheMonthJPN = tr(dayOfTheMonth, "0123456789 ", "０１２３４５６７８９　");;

  // to update formatting. or use moment.js.
  const yearJPN = tr(`平成${year - 2017 + 29}年`, "0123456789 ", "０１２３４５６７８９　");

  return (
    <div>
      <br />
      {dayOfTheWeekJPN(dayOfTheWeek)}
      <br />
      {monthJPN(month)}
      <br />
      {dayOfTheMonthJPN}
      <br />
      {yearJPN}
    </div>
  )
}
