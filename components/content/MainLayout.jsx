import React from 'react';
import HeaderMain from "../header/MainHeader";
import Footer from "../footer/FooterMain";
import PageTitle from "../meta/PageTitle";

const MainLayout = (props) => {
 
    const { pageTitle, children, navTextColor } = props;
    return (
      <>
        <PageTitle title={pageTitle} />

        {/* Header */}
        <HeaderMain
          title={pageTitle}
          pageCss={props.pageCss}
          navTextColor={navTextColor}
        />
        {/* Page Main Content */}
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            {children}
          </main>
        </div>
        {/* Footer */}
        <Footer title={pageTitle} />
      </>
    );
}
 
export default MainLayout;