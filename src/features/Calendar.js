import { useState, useEffect } from "react";
import toast from 'react-hot-toast';

function Calendar() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = [
    '', '', '', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '10', '11',
    '12', '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24', '25',
    '26', '27', '28', '29', '30', '31', ''
  ];

  const [reminders, setReminders] = useState({});
//   const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("calendarReminders");
    if (stored) setReminders(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("calendarReminders", JSON.stringify(reminders));
  }, [reminders]);

  const handleClickDate = (date) => {
    if (!date) return;
    const reminder = window.prompt(`Add a reminder for May ${date}`);
    if (reminder) {
      setReminders((prev) => ({
        ...prev,
        [date]: [...(prev[date] || []), reminder]
      }));
      toast.success(`Reminder added for May ${date}`);
    }
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-4'>
      <h2 className='text-md font-semibold mb-3 text-center'>📅 Event Calendar</h2>
      <div className="grid grid-cols-7 text-sm text-center gap-1">
        {days.map((day, index) => (
          <div key={index} className="font-medium text-gray-600 dark:text-gray-300">
            {day}
          </div>
        ))}
        {dates.map((date, index) => (
          <div
            key={index}
            onClick={() => handleClickDate(date)}
            className={`p-2 rounded relative transition-all duration-200 ease-in-out
              ${date
                ? 'text-gray-700 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer'
                : 'text-gray-300 dark:text-gray-600'}`}
          >
            {date}
            {reminders[date] && reminders[date].length > 0 && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </div>
        ))}
      </div>

      {/* Reminder list */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">📝 Reminders</h3>
        <ul className="text-xs text-gray-600 dark:text-gray-300 max-h-32 overflow-y-auto space-y-1">
          {Object.entries(reminders).map(([date, notes]) =>
            notes.map((note, idx) => (
              <li key={`${date}-${idx}`}>
                <strong>{date}:</strong> {note}
              </li>
            ))
          )}
          {Object.keys(reminders).length === 0 && (
            <li className="text-gray-400 italic">No reminders yet</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Calendar;
