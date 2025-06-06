import { CircleLoader } from 'react-spinners';
import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.backdrop}>
      <CircleLoader size={300} color="#FFD700" aria-label="hourglass-loading" />
    </div>
  );
};

export default Loader;
