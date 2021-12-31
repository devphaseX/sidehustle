import classes from './NavigationList.module.css';

const NavigationList = ({ items }) => {
  return (
    <ul className={classes.NavigationList}>
      {items.map((item, i) => (
        <li key={item.title.concat(i)}>{item.title}</li>
      ))}
    </ul>
  );
};

export default NavigationList;
