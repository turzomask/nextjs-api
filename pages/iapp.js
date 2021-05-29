import { ProfilePageJsonLd } from "next-seo";
import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
import { buildFeedBackPath, extraxtFeedBack } from "../pages/api/user";
function Iapp(props) {
  return (
    <div>
      <MainLayout pageTitle="iAPP">
        <>
          <div className="iapp__body">
            <div className="list__container">
              <ul>
                {props.feedbackItems.map(item =>
                  <li> {item.queryType} </li>)}
              </ul>
            </div>
          </div>
        </>
      </MainLayout>
    </div>
  );
}

export async function getStaticProps() {

  const filePath = buildFeedBackPath();
  const data = extraxtFeedBack(filePath);
  return {
    props: {
      feedbackItems: data
    }
  }

}

export default Iapp;