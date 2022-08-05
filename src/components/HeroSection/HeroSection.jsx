import Button from "../Button/Button";
import CarouselMain from "../Carousel/Carousel";
import classes from "./HeruSection.module.css";

function HeroSection() {
  return (
    <section className={classes.HeroSection}>
      <CarouselMain />
      <div className={classes.HeroSection__Content}>
        <div>
        <h1 className={classes.Title}>PRAGUE CARD IS NOW "COOLPASS"</h1>
        <h3 className={classes.Subtitle}>
          Visit the best city attractions included in Prague CoolPass
        </h3>
        </div>
        <div className={classes.Search}>
          <input
            placeholder="Search Attractions"
            className={classes.Input}
          ></input>
          <Button
            text="LET'S GO"
            style={{ width: "103px", height: "37px" }}
          ></Button>
        </div>
      </div>
      <div className={classes.BottomLine}>Now you have a choice! Download the new DIGITAL PRAGUE COOLPASS straight to your mobile or collect the PHYSICAL PRAGUE CARD upon arrival</div>
    </section>
  );
}

export default HeroSection;
