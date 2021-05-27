import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
export default function Ilea() {
  return (
    <div>
      <MainLayout pageTitle="iLEA">
        <>
          <UnderConstruction />
        </>
      </MainLayout>
    </div>
  );
}
