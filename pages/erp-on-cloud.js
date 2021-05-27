import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
export default function ErpOnCloud() {
  return (
    <div>
      <MainLayout pageTitle="ERP on Cloud">
        <>
          <UnderConstruction />
        </>
      </MainLayout>
    </div>
  );
}
