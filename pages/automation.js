import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
export default function Automation() {
  return (
    <div>
      <MainLayout pageTitle="Automation">
        <>
          <UnderConstruction />
        </>
      </MainLayout>
    </div>
  );
}
