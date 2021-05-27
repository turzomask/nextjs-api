import Head from "next/head";

const PageTitle = (props) => {
  const { title } = props;
  const siteTitle = typeof title === "undefined" ? `Blue Pill Ltd.` : title+' | Blue Pill Ltd.';

  return (
    <Head>
      <title>
        {siteTitle}
      </title>
    </Head>
  );
};

export default PageTitle;
