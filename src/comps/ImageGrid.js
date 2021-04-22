import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
// import FavoriteIcon from '@material-ui/icons/Favorite';


const ImageGrid = ({ setSelectedImg, setId }) => {
  const { docs } = useFirestore('images');
  const [count, setcount] = useState(0);
  // const [id, setId] = useState();

  function handleCount(){
    setcount(count +1);
    
  }
  // console.log(id)

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => {
                          setSelectedImg(doc.url)
                          setId(doc.id) 
                        }
                  }
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />




          {/* <button className="like-btn">Button</button> */}
              {/* <FavoriteIcon  className={`like-btn ${setcount ? " " : "keep-red" } `}  onClick={handleCount} />
              <p className="like-count" > {count} </p> */}
          
          
          



        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;