import React from 'react';
import weather from '../data/weather';
import './Calendar.css';

export default function Calendar() {
  const random = (arr) => arr.reduce( 
    (newArr, _, i) => {
        var rand = i + ( Math.floor( Math.random() * (newArr.length - i) ) );
        [newArr[rand], newArr[i]] = [newArr[i], newArr[rand]]
        return newArr
    }, [...arr]
  )[0]

  const weatherOfTheDay = random(weather);

  const d = Date().split(" ");
  const dayOfTheWeek = d[0];
  const month = d[1];
  const dayOfTheMonth = d[2];
  const year = d[3];

  const convert = ( text, search, replace ) => {
    const regex = RegExp( '[' + search + ']', 'g' );
    const t = text.replace( regex, 
            function( chr ) {
                const ind = search.indexOf( chr );
                const r = replace.charAt( ind );
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

  const dayOfTheMonthJPN = convert(dayOfTheMonth, "0123456789 ", "０１２３４５６７８９　");;

  // to update formatting. or use moment.js.
  const yearJPN = convert(`平成${year - 2017 + 29}年`, "0123456789 ", "０１２３４５６７８９　");

  return (
    <div className="calendar">
      <p>Calendar Here</p>
      {dayOfTheWeekJPN(dayOfTheWeek)}
      <br />
      {monthJPN(month)}
      <br />
      {dayOfTheMonthJPN}
      <br />
      {yearJPN}
      <br />
      {weatherOfTheDay.weatherJPN}
    </div>
  )
}
