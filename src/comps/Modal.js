import React from 'react';
import { motion } from 'framer-motion';
import LikeComment from './LikeComment';

const Modal = ({ setSelectedImg, selectedImg, id }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }
  // console.log(selectedImg.id)

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      {/* <LikeComment uid={id} /> */}
    </motion.div>
  )
}

export default Modal;