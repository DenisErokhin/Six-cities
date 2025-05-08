import ReviewsItem from '../reviews-item/reviews-item';
import FormComment from '../form-comment/form-comment';
import { Comment } from '../../types/types';

type ReviewsProps = {
  reviews: Comment[];
}

function ReviewsList ({reviews}: ReviewsProps) {
  return (
    <section className="property__reviews reviews">
      {reviews.length > 0 && (
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
          <ul className="reviews__list">
            {reviews.map((review) => (
              <ReviewsItem key = {review.id} review = {review}/>
            )
            )}
          </ul>
        </>)}
      <FormComment/>
    </section>);
}

export default ReviewsList;
