
import styles from "./Navigation.module.css";

const Navigation=()=> {
  console.log(styles);
  return (
  <nav className={styles.navigation}>
<div className="logo">
<img src="/images/Frame 2 1.png" alt= "do some coding logo"/>

</div>
<ul>

  <li>
    Home
  </li>
  <li>About</li>
  <li>CONTACT</li>
</ul>

  </nav>
  );
};

export default Navigation
