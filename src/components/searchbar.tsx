import { motion } from "motion/react";

export default function SearchBar() {
    return <>
        <motion.div initial={{
                    translate: "0 -100%",
                    opacity: 0
                }} animate={{
                    translate: "0 0%",
                    opacity: 1,
                    transition: {
                        duration: 0.05,
                        delay: 0.02
                    }
                }}>
            <input type="text" placeholder="Search"></input>
            <button>Search</button>
        </motion.div>
    </>
}