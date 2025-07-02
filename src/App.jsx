import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Detail from "./pages/Detail"
// import CompletedProjects from "./pages/CompletedProjects"
// import Thankyou from "./pages/ThankYou";
// import ContactUs from "./pages/ContactUs"
// import ChannelPartner from "./pages/ChannelPartner"
// import Career from "./pages/Career"
// import AboutUs from "./pages/AboutUs"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import ScrollToTop from "./components/ScrollToTop";
// import HeaderInquiryForm from "./components/HeaderInquiryForm";
// import "../public/styles/globals.css"
if (typeof window !== "undefined") {
  import("@fancyapps/ui/dist/fancybox/fancybox.css");
}






const App = ({ data }) => {
  const [inquiryPopup, setInquiryPopup] = useState(false);
  const [inquiryPopupObj, setInquiryPopupObj] = useState(null);
  const [isAmenityOpen, setAmenityToggle] = useState(false);
  const [isProximityOpen, setProximityToggle] = useState(false);

  useEffect(() => {
    const shouldLockScroll = inquiryPopup || isAmenityOpen || isProximityOpen;

    document.body.style.overflow = shouldLockScroll ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [inquiryPopup, isAmenityOpen, isProximityOpen]);

  return (
    <>
      <h1>Hello From App.jsx</h1>

      {/* {!isAmenityOpen && !isProximityOpen && !inquiryPopup && (<Header inquiryPopup={inquiryPopup} setInquiryPopup={setInquiryPopup} adminDetail={data.AdminDetailData} propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} pageList={data.PageListData} socialList={data.SocialMediaListData} />)}
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home inquiryPopupObj={inquiryPopupObj} setInquiryPopupObj={setInquiryPopupObj} inquiryPopup={inquiryPopup} setInquiryPopup={setInquiryPopup} homeDetails={data.homeDetailData} propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} />} />

          <Route path="/completed-projects" element={<CompletedProjects completedPropertylist={data.CompletedPropertyListData} ></CompletedProjects>} />

          <Route path="/about-us" element={<AboutUs aboutDetails={data.aboutDetailData} pageList={data.PageListData} />} />

          <Route path="/contact-us" element={<ContactUs contactSeoData={data.contactSeoData} ContactData={data.ContactDetailData} pageList={data.PageListData} />} />

          <Route path="/channelpartner" element={<ChannelPartner ChannelDetail={data.ChannelDetailData} pageList={data.PageListData} />} />

          <Route path="/career" element={<Career joblist={data.JobListData} CareerDetail={data.CareerDetailData} pageList={data.PageListData} />} />

          <Route path="/:slug/thankyou" element={<Thankyou />} />

          <Route path="/:slug" element={<Detail isAmenityOpen={isAmenityOpen} setAmenityToggle={setAmenityToggle} isProximityOpen={isProximityOpen}
            setProximityToggle={setProximityToggle} inquiryPopupObj={inquiryPopupObj} setInquiryPopupObj={setInquiryPopupObj} inquiryPopup={inquiryPopup} setInquiryPopup={setInquiryPopup} projectData={data.projectData} propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} />} />

        </Routes>
        { <HeaderInquiryForm inquiryPopupObj={inquiryPopupObj} setInquiryPopupObj={setInquiryPopupObj} inquiryPopup={inquiryPopup} setInquiryPopup={setInquiryPopup}
          propertylist={data.PropertyListData} />}
      </main>

      <Footer adminDetail={data.AdminDetailData} propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} pageList={data.PageListData} socialList={data.SocialMediaListData} /> */}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />

    </>
  );
};

export default App;
