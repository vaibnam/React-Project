import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

function Rating({rating,onClick,style}) {
    return (
       <>
       {[...Array(5)].map((_,i)=>(
        <span key={i} onClick={()=>onClick(i)} style={style}>
        {rating >i ?(
            <AiFillStar fontSize="18px"/>
        ):(
            <AiOutlineStar fontSize="18px"/>
        )}
        </span>

    ))}
       </>
    );
}

export default Rating;