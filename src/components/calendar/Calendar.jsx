import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DetailText } from "../../styles/styles.styled";
import { CalendarCnt, Day, Wrapper, Month } from "./calendar.styled";

export const Calendar = ({ pickDay, pickedDay }) => {

    const months = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

    const today = new Date();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [daysInMonth, setDaysInMonth] = useState();

    const [week, setWeek] = useState([
        { day: "Mon", date: "" },
        { day: "Tue", date: "" },
        { day: "Wed", date: "" },
        { day: "Thu", date: "" },
        { day: "Fri", date: "" },
        { day: "Sat", date: "" },
        { day: "Sun", date: "" }
    ])

    useEffect(() => {
        setMonth(today.getMonth());
        setYear(today.getFullYear());
        setDaysInMonth(calcMonthDays(today.getFullYear(), today.getMonth()));
        // eslint-disable-next-line
    }, [today]);



    useEffect(() => {
        if (!daysInMonth) return;
        setWeekDates();
        // eslint-disable-next-line
    }, [daysInMonth])
    // eslint-disable-next-line

    useEffect(() => {
        pickDay(week.filter(d => d.date === today.toLocaleString().split(",")[0])[0]);
        // eslint-disable-next-line
    }, [week])

    const calcMonthDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    const setWeekDates = () => {
        let days = []
        for (let i = 1; i < daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }
        let weekDays = days.filter(d => (d.getDate() + 6) >= today.getDate() && (d.getDate() - 6) <= today.getDate());
        let firstDay = weekDays.filter(d => d.getDay() === 1)[0];
        let weekToDisplay = days.filter(d => d.getDate() >= firstDay.getDate() && d.getDate() <= firstDay.getDate() + 6);
        let newWeek = week.map((day, key) => {
            return { ...day, date: weekToDisplay[key] ? weekToDisplay[key].toLocaleString().split(",")[0] : null }
        })
        let nextMonthDays = newWeek.filter(d => d.date === null).map((day, key) => { return { ...day, date: new Date(year, month + 1, key + 1).toLocaleString().split(",")[0] } });
        setWeek([...newWeek, ...nextMonthDays].filter(d => d.date !== null));
    }

    return (
        <Wrapper>
            <Month>{months[month]}</Month>
            <CalendarCnt>
                {week.map((day, key) => (
                    <Day
                        onClick={() => pickDay(day)}
                        bg={pickedDay && day.date === pickedDay.date ? 'rgba(255, 255, 255, .25)' :
                            !pickedDay && day.date === today.toLocaleString().split(",")[0] ? 'rgba(255, 255, 255, .25)' : 'transparent'}
                        color={pickedDay && day.date === pickedDay.date ? 'var(--color-compl)' :
                            !pickedDay && day.date === today.toLocaleString().split(",")[0] ? 'var(--color-compl)' : 'var(--color-main)'}
                        key={key}>
                        <DetailText>{day.day}</DetailText>
                        <DetailText>{day.date.split("/")[0]}</DetailText>
                    </Day>
                ))}
            </CalendarCnt>
        </Wrapper>
    )
}