import css from "./HomePage.module.css";
import image from "../../assets/img.png";

const HomePage = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Stay  in touch</h1>
        <p className={css.slogan}>
          Let&rsquo;s create a universe of possibilities
          together!
        </p>
      </div>
      <div className={css.description}>
        <p className={css.descriptionText}>
          Wherever we are on the earth, the ability to instantly communicate,
          share ideas and support each other is becoming increasingly important.
          <br /> <br />
          Nowadays, when technology makes distance less noticeable, it is
          important to stay in touch, because together we can overcome all
          obstacles and barriers.
        </p>
        <img src={`${image}`} alt="moon" />
        
      </div><p className={css.text}>© 2024 Yana Lepska GoIT </p>
    </>
  );
};

export default HomePage;
