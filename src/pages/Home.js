import Calendar from "../features/Calendar";
import CategoryGroup from '../components/CategoryGroup'
import LinksSidebar from "../components/LinksSidebar";
import CityList from "../components/CityList";
import SearchBar from "../features/SearchBar";
import { useState } from 'react';
import data from '../data/categories.json';


function Home() {
    const [searchTerm, setSearchTerm] = useState('');
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="space-y-4 md:col-span-1">
            <Calendar/>
            <LinksSidebar/>
          {/* Your Left Sidebar Components like Calendar, LinksSidebar */}
        </div>
  
        {/* Main Center Content */}
        <div className="md:col-span-2">
          <SearchBar onSearch={setSearchTerm} />
          {data.map((group, idx) => (
            <CategoryGroup
              key={idx}
              title={group.title}
              links={group.links}
              searchTerm={searchTerm}
            />
          ))}
        </div>
  
        {/* Right Sidebar */}
        <div className="md:col-span-1 space-y-4">
          {/* Your Right Sidebar Components like CityList */}
          <CityList/>
        </div>
      </div>
    );
  }


// function Home() {
//     const [searchTerm, setSearchTerm] = useState('');

//     return (
//         <div>
//             <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

//             <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
//                 <aside className='md:col-span-1 space-y-4'>
//                     <Calender />
//                     <LinksSidebar />
//                 </aside>

//                 <section className='md:col-span-2'>
//                     <CategoryGroup />
//                 </section>

//                 <aside className='md:col-span-1 space-y-4'>
//                     <CityList />
//                 </aside>
//             </div>
//         </div>
//     )
// }

export default Home;