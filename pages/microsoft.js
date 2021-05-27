import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
export default function Microsoft() {
  return (
    <div>
      <MainLayout pageTitle="Microsoft">
        <>
          <UnderConstruction />
        </>
      </MainLayout>
    </div>
  );
}
