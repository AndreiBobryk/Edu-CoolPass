
import CarouselMain from "../Carousel/Carousel";
import classes from "./HeruSection.module.css";
import {ReactComponent as IconSearch} from "../../image/svg/iconSearch.svg"
import Alert from "../Alert/Alert";
import { useSelector } from "react-redux";

function HeroSection() {
  const contentInterface = useSelector(state => state.translation.language)
  const contentMainSection = useSelector(state => state.translation.mainSection)
  console.log('contentMainSection', contentMainSection)
  return (
    <section className={classes.HeroSection}>
      <CarouselMain />
      <div className={classes.HeroSection__Content}>
        <div>
        <h1 className={classes.Title}>{contentMainSection.title}</h1>
        <h3 className={classes.Subtitle}>
        {contentMainSection.subtitle}
        </h3>
        </div>
        <div className={classes.Search}>
          <span className={classes.WrapInput}>
          <input
            placeholder={contentInterface.SEARCH}
            className={classes.Input}
            
          >
      
          </input>
            <IconSearch className={classes.Icon}/>
          </span>

          <button className={classes.Button} onClick={Alert}>{contentInterface.APP_LETS_GO}</button>
 
        </div>
      </div>
      <div className={classes.BottomLine}><nobr>{contentMainSection.header_banner}</nobr></div>
    </section>
  );
}

export default HeroSection;
