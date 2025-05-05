import { motion } from 'framer-motion'

function Loader() {
    return (
        <div className="flex justify-center items-center p-6">
            <motion.div
                className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
            />
        </div>
    )
}


export default Loader;