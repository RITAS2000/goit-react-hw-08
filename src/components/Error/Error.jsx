import css from './Error.module.css';

const Error = () => {
  return (
    <div className={css.backdrop}>
      <p className={css.text}>
        <span className={css.span}>Oops!</span> Something went wrong. Try
        refreshing the page or come back later.
      </p>
    </div>
  );
};

export default Error;
