import { useState } from 'react';
import './Card.css';

import noImage from '../../images/no-image.png';

function Card({ data }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeChange = () => setIsLiked(!isLiked);
  return (
    <li className="card">
      <img src={data.imageLink ? data.imageLink : noImage} alt={data.title} className="card__image" />
      <div className="card__container">
        <p className="card__title">{data.title}</p>
        <button
          type="button"
          onClick={handleLikeChange}
          className={`card__button${isLiked ? ' card__button_like' : ' card__button_unlike'}`}
        />
      </div>
    </li>
  );
}

export default Card;
