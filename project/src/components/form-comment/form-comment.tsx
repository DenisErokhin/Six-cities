import { ChangeEvent, Fragment, useState } from 'react';
import { START_COUNT } from '../../const';

function FormComment(): JSX.Element {
  const [commentState, setCommentState] = useState<string>('');
  const [ratingState, setRatingState] = useState<number | null>(null);

  function changeRatingState({target}: ChangeEvent<HTMLInputElement>) {
    setRatingState(Number(target.value));
  }

  function changeCommentState({target}: ChangeEvent<HTMLTextAreaElement>) {
    setCommentState(target.value);
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {Array.from({length: START_COUNT}, (_, i) => (
          <Fragment key={`Star ${START_COUNT - i}`}>
            <input
              className="form__rating-input visually-hidden"
              onChange={changeRatingState}
              name="rating"
              defaultValue={START_COUNT - i}
              id={`${START_COUNT - i}-stars`}
              type="radio"
              checked={START_COUNT - i === ratingState}
            />
            <label
              htmlFor={`${START_COUNT - i}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={changeCommentState} id="review" name="review" value={commentState} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default FormComment;
