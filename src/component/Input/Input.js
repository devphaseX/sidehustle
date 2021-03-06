import { useInput } from '../../context/InputContext';
import classes from './Input.module.css';
import Search from '../ui/icons/Search';

const Input = () => {
  const { value, setValue } = useInput();
  return (
    <div className={classes.InputContainer}>
      <span className={classes.SearchIcon}>
        <Search />
      </span>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        placeholder="Search for something offline"
        type="text"
        className={classes.Input}
      ></input>
      <span className={classes.MicIcon}>
        <img
          src="/icons/google-mic.svg"
          alt="google icon"
        />
      </span>
    </div>
  );
};

export default Input;
