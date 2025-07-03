import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { HomeDetail } from '../services/HomeDetail'
import Seo from "../components/Seo";



export default function Home({ inquiryPopupObj ,setInquiryPopupObj , inquiryPopup , setInquiryPopup , homeDetails, propertylist, completedPropertylist }) {
    const [isMobilescreen, setMobileScreen] = useState(false);
    const [homeDetailsData, setHomeDetail] = useState(homeDetails || null);

    useEffect(() => {
        if (window.innerWidth < 767) {
            setMobileScreen(true)
        }
        // if (!homeDetailsData) {

        // }
    }, []);

    const seoMetaData = homeDetailsData && {
        page_title: homeDetailsData.page_title || "",
        page_description: homeDetailsData.page_description || "",
        page_keywords: homeDetailsData.page_keywords || "",
        slug : "/",
        image: homeDetailsData.page_image_full
            ? (homeDetailsData.page_image_full.includes("?")
                ? `${homeDetailsData.page_image_full}&w=1280&h=640`
                : `${homeDetailsData.page_image_full}?w=1280&h=640`)
            : "/images/og-image.png"
    };

    if (!homeDetailsData) {
        return <div>Error loading data</div>;
    }

    return (
      <> <h1>
        Hello From Home Page
        </h1>      </>
    );
}
