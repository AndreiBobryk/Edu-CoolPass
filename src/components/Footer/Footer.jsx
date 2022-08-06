import React from "react";
import Button from "../Button/Button";
import ButtonsFooter from "./ButtonsFooter/ButtonsFooter";
import classes from "./Footer.module.css";
import InputFooter from "./InputFooter/InputFooter";
import NavFooter from "./NavFooter/NavFooter1";

const nav1 = [
    'CoolPass / Prague Card',
    'Using CoolPass',
    'How You Save',
    'Getting Your Pass',
    'Sales & Collection Points',
    'Customer Reviews'
]
const nav2 = [
    'ATTRACTIONS',
    'Sightseeing Tours',
    'Prague Areas',
    'Closures & Notices',
    "What's On",
    'Contact Us'
]
const nav3 = [
    'About Us',
    'Terms and Conditions',
    'Cancellation & Refund',
    'Privacy Policy',
]
function Footer () {

    return (
        <footer className={classes.Footer}>
            <div className={classes.Wrapper}>
                <NavFooter items={nav1} style={{marginRight:'27px'}}/>
                <NavFooter items={nav2} style={{marginRight:'68px'}} />
                <div className={classes.Section3}>
                <Button text="FAQ" style={{width:'87px', height:'48px', float:'left', marginBottom: '12px', display:'block'}}/>
                <NavFooter items={nav3} style={{marginRight:'43px'}} />
                </div>
                <ButtonsFooter/>
                <InputFooter/>
            </div>

        </footer>
    )

}

export default Footer;