import React from "react";
import Button from "../Button/Button";
import ButtonsFooter from "./ButtonsFooter/ButtonsFooter";
import classes from "./Footer.module.css";
import InputFooter from "./InputFooter/InputFooter";
import NavFooter from "./NavFooter/NavFooter1";
import {  useSelector } from "react-redux";

function Footer () {
    const contentInterface = useSelector(state => state.translation.language);
    const { FOOTER_USING_COOLPASS, FOOTER_how_you_save, FOOTER_get_your_pass, FOOTER_sales_points, FOOTER_reviews, ATTRACTIONS,
        FOOTER_sightseeing_tours, FOOTER_areas, FOOTER_closures, FOOTER_whats_on, FOOTER_contact_us, 
        FOOTER_about_us, FOOTER_terms_and_conditions, FOOTER_cancellation_and_refund,
        FOOTER_privacy_policy, FOOTER_faq
        } = contentInterface;

    const nav1 = [
        'CoolPass / Prague Card',
        FOOTER_USING_COOLPASS,
        FOOTER_how_you_save,
        FOOTER_get_your_pass,
        FOOTER_sales_points,
        FOOTER_reviews
    ]

    const nav2 = [
        ATTRACTIONS,
        FOOTER_sightseeing_tours,
        FOOTER_areas,
        FOOTER_closures,
        FOOTER_whats_on,
        FOOTER_contact_us
    ]
    const nav3 = [
        FOOTER_about_us,
        FOOTER_terms_and_conditions,
        FOOTER_cancellation_and_refund,
        FOOTER_privacy_policy,
    ]

    return (
        <footer className={classes.Footer}>
            <div className={classes.Wrapper}>
                <NavFooter items={nav1} style={{marginRight:'27px'}}/>
                <NavFooter items={nav2} style={{marginRight:'68px'}} />
                <div className={classes.Section3}>
                <Button text={contentInterface.FOOTER_faq} style={{width:'87px', height:'48px', float:'left', marginBottom: '12px', display:'block'}}/>
                <NavFooter items={nav3} style={{marginRight:'43px'}} />
                </div>
                <ButtonsFooter/>
                <InputFooter/>
            </div>

        </footer>
    )

}

export default Footer;