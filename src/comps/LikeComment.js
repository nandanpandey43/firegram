import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStorage from '../hooks/useStorage';
import useFirestore from '../hooks/useFirestore';
import {  projectFirestore } from '../firebase/config';

function LikeComment(props) {

    const { likes, comments, setLikes, setComments } = useStorage;
    // const { docs } = useFirestore;
    const { docs } = useFirestore('images');

    const [check, setCheck] = useState(null);

    // projectFirestore.collection('images').add({ check })

    // let count = 0;

    function likesHandler(){
        // setLikes(likes++);
        const del = props.uid;
        console.log(del);

        const data = projectFirestore.collection('images').get(del).delete();
        console.log(data);
        // docs.id.delete()
        // docs.document(del).delete();
        // const docRef = useFirest
        // docRef(del).delete();
        // console.log(docs);
    }


    return (
        <div>
            <FavoriteIcon style={{ color:"white", cursor:"pointer" }} onClick={likesHandler} />
            {/* {likes}
            {comments} */}
            bnv
        </div>
    )
}

export default LikeComment;
