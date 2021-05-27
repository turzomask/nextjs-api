import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
export default function Iship() {
  return (
    <div>
      <MainLayout pageTitle="iSHIP">
        <>
          <UnderConstruction />
        </>
      </MainLayout>
    </div>
  );
}
