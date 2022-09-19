import { useState } from "react";
import { useEffect } from "react";
import { DetailText } from "../../styles/styles.styled";
import { CalendarCnt, Day } from "./calendar.styled";

export const Calendar = ({ pickDay, pickedDay }) => {

    const today = new Date(2022, 8, 28);
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
    }, [today]);

    useEffect(() => {
        if (!year) return;
        setDaysInMonth(calcMonthDays());
    }, [today, month, year]);

    useEffect(() => {
        if (!daysInMonth) return;
        setWeekDates();
    }, [daysInMonth])

    useEffect(() => {
        pickDay(week.filter(d => d.date === today.toLocaleString().split(",")[0])[0])
    }, [week])

    const calcMonthDays = () => {
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
        <CalendarCnt>
            {week.map((day, key) => (
                <Day
                    onClick={() => pickDay(day)}
                    color={pickedDay && day.date === pickedDay.date ? 'rgba(255, 255, 255, .25)' :
                        !pickedDay && day.date === today.toLocaleString().split(",")[0] ? 'rgba(255, 255, 255, .25)' : 'transparent'}
                    key={key}>
                    <DetailText>{day.day}</DetailText>
                    <DetailText>{day.date.split("/")[0]}</DetailText>
                </Day>
            ))}
        </CalendarCnt>
    )
}