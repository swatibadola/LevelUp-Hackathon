function CityList() {
    const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Ahmedabad', 'Bhubaneshwar', 'Chandigarh', 'Goa', 'Indore', 'Jaipur', 'Kolkata', 'Lucknow', 'Pune'];
    return (
        <div className='bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md'>
            <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3'>🌍 Select City</h2>
            <div className="relative">
                <select className='w-full appearance-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 p-3 rounded-lg shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition duration-200'>
                    {cities.map((city, i) => (
                        <option key={i} value={city}>{city}</option>
                    ))}
                </select>
                <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 dark:text-gray-300 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    )
}


export default CityList;