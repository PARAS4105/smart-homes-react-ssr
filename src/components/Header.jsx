import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import './Header.css';

export default function Header({ inquiryPopup, setInquiryPopup, adminDetail, propertylist, socialList }) {

    const location = useLocation();
    const activePath = location.pathname;

    const [isMounted, setIsMounted] = useState(false);
    const [isMobileScreen, setMobileScreen] = useState(false);
    const [categoryList, setCategoryList] = useState(null);
    const [megaMenuCategory, setMegaMenuCategory] = useState('');
    const [megaMenuActive, setMegaMenuToggle] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [megaMenuList, setMegaMenuList] = useState([]);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    useEffect(() => {

        if (window.innerWidth < 767) {
            setMobileScreen(true)
        }

        if (Array.isArray(propertylist)) {
            getCategory();

        }
        setIsMounted(true);

        console.log(categoryList)

    }, [propertylist]);

    async function getCategory() {
        try {
            const categorySet = new Set();
            const categoryArray = [];

            propertylist.forEach((value) => {
                if (!categorySet.has(value.category)) {
                    categoryArray.push({ category: value.category });
                    categorySet.add(value.category);
                }
            });

            setCategoryList(categoryArray);
        } catch (error) {
            console.error("Error fetching property details:", error);
        }
    }

    const megaMenuClick = (category) => {
        if (megaMenuCategory == category) {
            setMegaMenuCategory('');
            setMegaMenuToggle(false);
            setMegaMenuList([]);

        } else {
            setMegaMenuCategory(category);
            setMegaMenuToggle(true);
            let tempArray = propertylist.filter((p)=> p.category == category);
            setMegaMenuList(tempArray);
        }
    };
    const megaMenuClickClose = () => {
        setMegaMenuCategory('');
        setMegaMenuToggle(false);
    };

    if (!categoryList || categoryList.length === 0) return null;

    return (
        <>

            <div className="header-wrapper noPrint">
                
                <div className="main-container" >
                    <div className={`header-flex  ${inquiryPopup ? "webmenu_hidden2" : ""}`}>
                        <div className="header-logo"  onClick={() => { setMenuToggle(!menuToggle); megaMenuClickClose(); }} >
                            <Link to="/">
                                <img src="/images/logo/smart-homes-logo.svg" alt="" className="" />
                            </Link>
                        </div>

                        <div className="header-links-ul" >
                            <ul className="section-paragraph hidden-xs hidden-sm">
                                {categoryList && categoryList.length > 0 && categoryList.map((category_data, index) => (
                                    <li className="hide-tab-mobile" key={index}
                                        onClick={(e) => {
                                            setMenuToggle(false);
                                            megaMenuClick(category_data.category);
                                            e.stopPropagation();
                                        }}>
                                        <a href="javascript:void(0);" className={` ${megaMenuCategory == category_data.category ? "active " : ""}`}>
                                            <p className={`capitalize ${megaMenuCategory == category_data.category ? "secondary-color" : ""}`}>
                                                {category_data.category}
                                            </p>
                                            <span className="material-symbols-outlined"> keyboard_arrow_down </span>
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <Link to="bulk-land-in-dholera/">
                                        <p className={`capitalize ${activePath == '/bulk-land-in-dholera/' ? "secondary-color" : ""}`}>
                                            Bulk Land
                                        </p>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="about-us/">
                                        <p className={`capitalize ${activePath == '/about-us/' ? "secondary-color" : ""}`} >
                                            About
                                        </p>

                                    </Link>
                                </li>

                                <li>
                                    <Link to="channel-partners/">
                                        <p className={`capitalize ${activePath == '/channel-partners/' ? "secondary-color" : ""}`} >
                                            Channel Partners
                                        </p>
                                    </Link>
                                </li>




                                <li>
                                    <Link to="nri-corner/">
                                        <p className={`capitalize ${activePath == '/nri-corner/' ? "secondary-color" : ""}`} >
                                            NRI Corner
                                        </p>
                                    </Link>
                                </li>

                                <li className="headerBtn">
                                    <Link to="contact-us/">
                                        <button className="reecosys-template-button button-style-secondary">
                                            <p className="">Contact Us</p>
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                            <div className="visible-tab-mobile">
                                <ul className="">
                                    <li>
                                        <div ng-click="open_contact_dropdown(); mobile_menu_close();" className="blink-background">
                                            <img src="/images/icon/call-green.svg" alt="" />
                                        </div>
                                    </li>

                                    <li>

                                        <div className={`menubar ${menuToggle ? 'active' : ''}`} onClick={() => { setMenuToggle(!menuToggle); megaMenuClickClose(); }}>
                                            <div className="bar bar-top"></div>
                                            <div className="bar bar-middle"></div>
                                            <div className="bar bar-bottom"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                { megaMenuActive && <div className="megamenu-wrapper" id="megamenu-wrapper">
                    <div className="megamenugrid">
                        <div className="megamenuTitle inner-flex inner-flex-big j-c-sb" style={{height: "100%"}}>
                            <div className="section-title">
                                <h2 className="medium-fonts uppercase">
                                    { megaMenuCategory } <br />
                                    Projects
                                </h2>
                            </div>
                            <div className="wfc" style="margin-top: 2rem">
                                <a href="projects/">
                                    <div className="">
                                        <button className="reecosys-template-button button-style-primary">
                                            <p className="">View All Projects</p>
                                        </button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="megamenuContent">
                            <div className="megamenuItem relative inner-flex" ng-repeat="data in megaMenuList | limitTo : 8"
                                ng-className="{'active' : activePath == '/{{data.slug}}/' }" ng-if="data.project_id != 744  "
                                ng-click="megaMenuClickClose();">
                                <a href="{{data.slug}}/" ng-if="megaMenuCategory != 'Commercial' ">
                                    <div className="megamenuStatus statusText" ng-if="data.status">
                                        <p className="text-uppercase white-color">
                                            { data.status == "under construction" ? "Ongoing" : data.status }
                                        </p>
                                    </div>
                                    <div className="megamenuImg relative overflow small-border-radius">
                                        <img src="https://dummyimage.com/250x250/c1c1c1/c1c1c1"
                                            hires="{{data.banner_data.image_web_full}}&h=350&w=350&q=100" alt="reecosys" />
                                        <div className="megamenu_overlay"></div>
                                        <div className="megamenu_overlay_2"></div>
                                    </div>
                                    <div className="megamenuText">
                                        <div className="section-paragraph">
                                            <p className="medium-fonts text-uppercase white-color">
                                                { data.project_title }
                                            </p>
                                        </div>
                                        <div className="inner-flex inner-flex-smallest">
                                            <div className="project-info-flex flex-row alc">
                                                <div className="project_list_icon common-icon" ng-if="data.size_price">
                                                    <img src="assets/images/icon/building.svg" alt="{{data.project_title}}" className="filterIcon" />
                                                </div>
                                                <p className="white-color">{ data.size_price }</p>
                                            </div>
                                            <div className="project-info-flex flex-row alc" ng-if="data.location">
                                                <div className="project_list_icon common-icon">
                                                    <img src="assets/images/icon/location.svg" alt="{{data.project_title}}" className="filterIcon" />
                                                </div>
                                                <p className="white-color">{ data.location }</p>
                                            </div>
                                            <div className="project-info-flex small_content ellips2 flex-row alc" ng-if="data.construction">
                                                <div className="progress-status-list">
                                                    <div className="progress" data-percentage="{{data.construction.progress_percent}}"
                                                        ng-if="data.construction.progress_percent > 0">
                                                        <span className="progress-left">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <p className="white-color">
                                                                { data.construction.progress_percent }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="iconimg" ng-if="data.construction.progress_percent <= 0">
                                                        <img src="assets/images/icon/construction.svg" className="filterIcon" alt="Construction Image" />
                                                    </div>
                                                </div>
                                                <p className="white-color capitalize">{data.status }</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="{{data.slug}}/" ng-if="megaMenuCategory == 'Commercial' ">
                                    <div className="megamenuStatus statusText" ng-if="data.status">
                                        <p className="text-uppercase white-color">
                                            { data.status == "under construction" ? "Ongoing" : data.status }
                                        </p>
                                    </div>
                                    <div className="megamenuImg relative overflow small-border-radius">
                                        <img src="https://dummyimage.com/250x250/c1c1c1/c1c1c1"
                                            hires="{{data.banner_data.image_web_full}}&h=350&w=350&q=100" alt="reecosys" />
                                        <div className="megamenu_overlay"></div>
                                        <div className="megamenu_overlay_2"></div>
                                    </div>
                                    <div className="megamenuText">
                                        <div className="section-paragraph">
                                            <p className="medium-fonts text-uppercase white-color">
                                                { data.project_title }
                                            </p>
                                        </div>
                                        <div className="inner-flex inner-flex-smallest">
                                            <div className="project-info-flex flex-row alc">
                                                <div className="project_list_icon common-icon" ng-if="data.size_price">
                                                    <img src="assets/images/icon/building.svg" alt="{{data.project_title}}" className="filterIcon" />
                                                </div>
                                                <p className="white-color">{ data.size_price }</p>
                                            </div>
                                            <div className="project-info-flex flex-row alc" ng-if="data.location">
                                                <div className="project_list_icon common-icon">
                                                    <img src="assets/images/icon/location.svg" alt="{{data.project_title}}" className="filterIcon" />
                                                </div>
                                                <p className="white-color">{ data.location }</p>
                                            </div>
                                            <div className="project-info-flex small_content ellips2 flex-row alc" ng-if="data.construction">
                                                <div className="progress-status-list">
                                                    <div className="progress" data-percentage="{{data.construction.progress_percent}}"
                                                        ng-if="data.construction.progress_percent > 0">
                                                        <span className="progress-left">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <p className="white-color">
                                                                { data.construction.progress_percent }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="iconimg" ng-if="data.construction.progress_percent <= 0">
                                                        <img src="assets/images/icon/construction.svg" className="filterIcon" alt="Construction Image" />
                                                    </div>
                                                </div>
                                                <p className="white-color capitalize">{ data.status }</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>}

            </div>
        </>
    )


}
