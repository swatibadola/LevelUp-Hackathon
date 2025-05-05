function LinksSidebar() {
    const links = ['Help, Faq, Abuse, Legal',
        'Avoid scams & fraud',
        'Personal safety tips',
        'About craiglist',]
    return (
        <aside className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md space-y-2">

            <div className='p-4'>
                <h2 className='text-md font-semibold mb-2'>Help & Info</h2>
                <ul className='space-y-1'>
                    {links.map((link, i) => (
                        <li key={i}>
                            <a
                                href="#"
                                className='text-sm text-blue-700 dark:text-blue-300 hover:underline'>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}


export default LinksSidebar;