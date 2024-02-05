import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import '../../../../index.css'
import s from './NavSearch.module.css'
import NavSearchSVG from './NavSearchSVG';
import NavSearchMore from './NavSearchMore/NavSearchMore';

const NavSearch = () => {
    const [isVisible, setVisible] = useState(false)
    const handleVisibility = () => setVisible(!isVisible)
    return (
        <div className={s.NavSearch}>
            <NavSearchSVG onClickLogic={handleVisibility} />
            <AnimatePresence>
                {
                    isVisible && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <NavSearchMore />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
};

export default NavSearch;