import Toggle from "../features/Toggle";

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Craigslist
        </h1>
        <Toggle />
      </div>
    </header>
  )
}

export default Header;