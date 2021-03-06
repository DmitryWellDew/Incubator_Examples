import React, {useState} from 'react';
import Rating, {RatingValueType} from "./Rating";

export default {
    title: 'Rating Stories',
    component: Rating
}


export const EmptyRating = () => <Rating value={0} setRatingvalue={x=>x}/>
export const Rating1 = () => <Rating value={1} setRatingvalue={x=>x}/>
export const Rating2 = () => <Rating value={2} setRatingvalue={x=>x}/>
export const Rating3 = () => <Rating value={3} setRatingvalue={x=>x}/>
export const Rating4 = () => <Rating value={4} setRatingvalue={x=>x}/>
export const Rating5 = () => <Rating value={5} setRatingvalue={x=>x}/>
export const RatingChanging = () => {
    let [ratingValue, setRatingvalue] = useState<RatingValueType>(0)
    return <Rating value={ratingValue} setRatingvalue={setRatingvalue}/>
}