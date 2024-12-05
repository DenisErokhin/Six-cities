
import OfferCart from '../../components/cart/cart';
import { Offer } from '../../types/types';

type FavoritesProps = {
  offers: Offer[];
}

function Favorites({offers}: FavoritesProps): JSX.Element {
  const groupedOffersByCity = offers.reduce<{ [key: string] : Offer[] }>((acc, curr) => {
    if(curr.isFavorite) {
      const city = curr.city.name;

      if(!(city in acc)) {
        acc[city] = [];
      }

      acc[city].push(curr);
    }

    return acc;
  }, {});

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
              <li className="favorites__locations-items" key={city}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {groupedOffers.map((offer) => <OfferCart offer = {offer} key = {offer.id} place = {'favorites'} />)}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
