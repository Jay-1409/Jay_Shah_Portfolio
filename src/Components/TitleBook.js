import React from 'react';

const TitleBook = () => {
  return (
    <h1 className="jt --debug">
      <span className="jt__row">
        <span className="jt__text">Book Recommendations</span>
      </span>
      <span className="jt__row jt__row--sibling" aria-hidden="true">
        <span className="jt__text">Book Recommendations</span>
      </span>
      <span className="jt__row jt__row--sibling" aria-hidden="true">
        <span className="jt__text">Book Recommendations</span>
      </span>
      <span className="jt__row jt__row--sibling" aria-hidden="true">
        <span className="jt__text">Book Recommendations</span>
      </span>
    </h1>
  );
}

export default TitleBook;
