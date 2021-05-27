import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
export default function Consulting() {
  return (
    <div>
      <MainLayout pageTitle="Consulting">
        <>
          <UnderConstruction />
        </>
      </MainLayout>
    </div>
  );
}
