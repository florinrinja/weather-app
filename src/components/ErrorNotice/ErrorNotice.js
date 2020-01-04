import React from 'react';
import classes from './ErrorNotice.module.css';

const errorNotice = () => {
  return (
    <div className={classes.ErrorNoticeWrapper}>
      <h1 className={classes.NotFound404}>404</h1>
      <div className={classes.ErrorTextWrapper}>
        <h2 className={classes.NotFoundHeading}>Oops!</h2>
        <p className={classes.NotFoundDetails}>Something went wrong and we can't show you the weather.</p>
      </div>
    </div>
  );
}

export default errorNotice;
