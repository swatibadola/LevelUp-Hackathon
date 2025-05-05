import categories from '../data/categories.json'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

function CategoryGroup({ title, links, searchTerm }) {
  // const categories = [
  //     'Resumes', 'Gigs', 'Services', 'Community', 'Discussion Forums', 'Jobs', 'Housing', 'For Sale'
  // ];
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(saved);
  }, [])

  const toggleBookmark = (link) => {
    const updated = bookmarks.includes(link)
      ? bookmarks.filter((item) => item != link)
      : [...bookmarks, link];

    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  }

  const normalizedSearch = (searchTerm || '').toLowerCase();

  const filteredLinks = links.filter(link => link.toLowerCase().includes(normalizedSearch)
  );

  if (filteredLinks.length === 0) return null;
  // const filtered = categories.map((category) => ({
  //     ...category,
  //     links: category.links.filter((link) => link.toLowerCase().includes(normalizedSearch)),
  // })).filter((category) => category.links.length > 0);

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label={`Category group for ${title}`}>
      <h2
        className="text-lg font-bold mb-3 border-b pb-1 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">{title}</h2>
      <ul
        className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {filteredLinks.map((link, idx) => (
          <li
            key={idx}
            className='flex justify-between items-center group'>
            <motion.a
              href="#"
              className="text-sm text-blue-600 dark:text-blue-300 hover:underline"
              whileHover={{ scale: 1.03 }}
              aria-label={`Go to ${link}`}>
              {link}
            </motion.a>
            <button
              onClick={() => toggleBookmark(link)}
              className='text-yellow-500 hover:text-yellow-600 ml-2 text-lg transition'
              aria-label={`Bookmark ${link}`}
              title={bookmarks.includes(link) ? 'Remove Bookmark' : 'Add to bookmark'}>
              {bookmarks.includes(link) ? '★' : '☆'}
            </button>
          </li>
        ))}
      </ul>
    </motion.section>
  )
}

export default CategoryGroup;