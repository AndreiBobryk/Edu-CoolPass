
import CarouselMain from "../Carousel/Carousel";
import classes from "./HeruSection.module.css";
import {ReactComponent as IconSearch} from "../../image/svg/iconSearch.svg"
import Alert from "../Alert/Alert";
import { useSelector } from "react-redux";

function HeroSection() {
  const lang = useSelector(state => state.translation.language)
  console.log('lang', lang)
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
          <span className={classes.WrapInput}>
          <input
            placeholder=''/* {props.language.SEARCH} */
            className={classes.Input}
            
          >
      
          </input>
            <IconSearch className={classes.Icon}/>
          </span>

          <button className={classes.Button} onClick={Alert}>LET'S GO</button>
 
        </div>
      </div>
      <div className={classes.BottomLine}><nobr>Now you have a choice! Download the new DIGITAL PRAGUE COOLPASS straight to your mobile or collect the PHYSICAL PRAGUE CARD upon arrival</nobr></div>
    </section>
  );
}

export default HeroSection;
