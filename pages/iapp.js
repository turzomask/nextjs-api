import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
export default function Iapp() {
  return (
    <div>
      <MainLayout pageTitle="iAPP">
        <>
          <UnderConstruction />
        </>
      </MainLayout>
    </div>
  );
}
