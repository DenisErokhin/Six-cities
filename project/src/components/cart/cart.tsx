import { Link } from 'react-router-dom';
import { AppRoute, START_COUNT, MAX_PERCENT_STARS_WIDTH } from '../../const';
import { Offer } from '../../types/types';

type OfferCartProps = {
  offer: Offer;
  key: number;
  onMouseMove?: (id: number) => void;
  onMouseLeave?: () => void;
  place?: 'cities' | 'favorites';
}

const FavoritesCartImgSize = {
  WIDTH: '150',
  HEIGHT: '110',
};

const CitiesCartImgSize = {
  WIDTH: '260',
  HEIGHT: '200',
};

function OfferCart({
  offer,
  key,
  place = 'cities',
  onMouseMove = () => void 0,
  onMouseLeave = () => void 0,
}: OfferCartProps): JSX.Element {
  const {id, price, rating, title, isPremium, isFavorite, previewImage, type} = offer;
  function handleMouseMove() {
    onMouseMove(id);
  }

  let widthImg;
  let heightImg;

  switch (place) {
    case 'cities':
      widthImg = CitiesCartImgSize.WIDTH;
      heightImg = CitiesCartImgSize.HEIGHT;
      break;
    case 'favorites':
      widthImg = FavoritesCartImgSize.WIDTH;
      heightImg = FavoritesCartImgSize.HEIGHT;
      break;
  }

  return (
    <article className={`${place}__place-card place-card`}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={widthImg} height={heightImg} alt="Place" />
        </a>
      </div>
      <div className={`place-card__info ${place === 'favorites' ? 'favorites__card-info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${(MAX_PERCENT_STARS_WIDTH * rating) / START_COUNT}%`,
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCart;
