function Calendar() {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const dates = [
        '', '', '', '1', '2', '3', '4',
        '5', '6', '7', '8', '9', '10', '11',
        '12', '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23', '24', '25',
        '26', '27', '28', '29', '30', '31', ''
    ];

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-4'>
            <h2 className='text-md font-semibold mb-3 text-center'>📅 Event Calender</h2>
            <div className="grid grid-cols-7 text-sm text-center gap-1">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className="font-medium text-gray-600 dark:text-gray-300">
                        {day}
                    </div>
                ))}
                {dates.map((date, index) => (
                    <div
                        key={index}
                        className={`p-2 rounded ${date
                                ? 'text-gray-700 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}>
                        {date}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calendar;