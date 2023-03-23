import React, {FC, useState, useMemo, useCallback} from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import './style.scss';

dayjs.extend(duration);

const daysOfWeek = ['SUN', 'MON', 'THE', 'WEN', 'THU', 'FRI', 'SAT'];
const timesOfDay = [
  "",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const CalendarPage: FC = () => {

  const [startDate, setStartDate] = useState<Date>(dayjs().startOf('week').toDate());

  const timeslotHeight = useMemo(() => {
    return 48;
  }, []);

  const renderDates = () => {

    return (
      <div className={'calendar-dates-container'}>
        <div className={'calendar-dates-gap'}></div>
        {daysOfWeek.map((day, index) => (
          <div className={'calendar-dates'} key={day}>
            <h2 style={{position: 'relative'}}>
              <div>{day}</div>
              <div>{dayjs(startDate).add(index + 1, 'day').date()}</div>
            </h2>
          </div>
        ))}
      </div>
    )
  };

  const renderTimeslotLabels = () => {
    return timesOfDay.map((time, index) => (
      <div className={'time-slots'} key={index}>
        <div className={'slots-label'} style={{height: timeslotHeight}}>{time}</div>
      </div>
    ));
  };

  const renderTimeGrid = () => {
    return (
      <div className={'time-grid'}>
        <div className={'time-slots-line-container'}>
          {timesOfDay.map((day, index) => (
            <div key={day} className={'time-slots-line'} style={{height: timeslotHeight}}>
            </div>
          ))}
        </div>
        {daysOfWeek.map((timeslot, index) => (
          // TODO: render items here
          <div className={'grid-date'} key={index}>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div className={'page-container'}>
      <h1 className={'title'}>
        Calendar View
        {dayjs(startDate).format('YYYY-MM-DD')} - {dayjs(startDate).endOf('week').format('YYYY-MM-DD')}
      </h1>
      <div className={'calendar-container'}>
        <div className={'calendar-header'}>
          {renderDates()}
        </div>
        <div className={'calendar-body'}>
          <div className={'time-slot-labels-container'}>
            {renderTimeslotLabels()}
          </div>
          <div className={'time-grid-container'}>
            {renderTimeGrid()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
