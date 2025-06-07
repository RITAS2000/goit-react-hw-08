import { FadeLoader } from 'react-spinners';
import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.backdrop}>
      <FadeLoader size={300} color="#14532D" aria-label="hourglass-loading" />
    </div>
  );
};

export default Loader;
