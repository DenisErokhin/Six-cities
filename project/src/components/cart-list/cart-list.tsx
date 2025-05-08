import { Offer } from '../../types/types';
import Cart from '../cart/cart';
import { useState } from 'react';

type ListOffersProps = {
  offers: Offer[];
}

function CartList ({offers}: ListOffersProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  function handleCardMouseMove(id: number) {
    setActiveOffer(id);
  }

  function handleCardMouseLeave() {
    setActiveOffer(null);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Cart
          offer = {offer}
          key = {offer.id}
          onMouseMove = {handleCardMouseMove}
          onMouseLeave = {handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default CartList;
