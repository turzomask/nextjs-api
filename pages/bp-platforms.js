import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
export default function BPplatforms() {
  return (
    <div>
      <MainLayout pageTitle="BP Platform">
        <>
          <UnderConstruction />
        </>
      </MainLayout>
    </div>
  );
}
