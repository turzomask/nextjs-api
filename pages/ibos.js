import React from "react";
import MainLayout from "../components/content/MainLayout";
import { useEffect } from "react";
import Aos from "aos";


export default function Ibos() {

      useEffect(() => {
        Aos.init({ duration: 1600 });
      }, []);
  return (
    <div>
      <MainLayout>
        <>
          <div className="container ibos__pb">
            <div className="row">
              <div className="col-lg-6">
                <div className="ibos__box">
                  <div className="ibos__top">
                    <div
                      data-aos="fade-down"
                      data-aos-offset="200"
                      data-aos-delay="20"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                    >
                      <img src="img/ibospage.svg" alt="Blue Pill Ltd." />
                    </div>
                  </div>

                  <h2>iBOS Enterprise</h2>
                  <p>
                    {" "}
                    We add value to become a brand. Not adding value is the same
                    as taking it away. We add value to our product to build
                    customers’ trust.
                  </p>
                  <div className="two__buttons">
                    <div className="button__blue button__common">
                      <a href="#">Live Demo</a>
                    </div>
                    <div className="button__white">
                      <a href="#">View Website</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div data-aos="fade-left">
                  <div
                    className="animation__ibos"
                    data-aos-offset="200"
                    data-aos-delay="20"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                  >
                    <img src="/img/halfibos.png" alt="Blue Pill Ltd." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* procurement management */}

          <div className="procurement__management">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="procurement__management__left">
                    <img
                      src="/img/ibos-laptop.png"
                      alt="Blue Pill Ltd."
                      className="ibos__laptop"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="procurement__management__right">
                    <h4>
                      Procurement <br /> Management
                    </h4>
                    <p>
                      Our procurement module gives authorization to the
                      procurement department to see everything that is ordered,
                      ensure that nothing can be ordered without correct
                      approvals, and let them get the best value by combining
                      several orders. The use of the procurement module
                      incorporates ease of administration and potential long
                      term cost savings. iBOS covers the complete process of
                      Procure to Pay (P2P) with a three-way matching principle’
                      and ensures complete and clear visibility of procurement
                      tasks.
                    </p>
                    <h4>Values:</h4>

                    <div className="row values__svg proc__mgt">
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/pm-1.svg" alt="Blue Pill Ltd." />
                      </div>
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/pm-2.svg" alt="Blue Pill Ltd." />
                      </div>
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/pm-3.svg" alt="Blue Pill Ltd." />
                      </div>
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/pm-4.svg" alt="Blue Pill Ltd." />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="procurement__management__features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="feature__header">
                    <p>Procurement Management</p>
                    <h4>Features</h4>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3  col-12">
                  <div className="feature__card purchase__req">
                    <h4> Purchase Request</h4>
                    <p>
                      A customer can make purchase requests using this feature.
                      With this feature, customers can make local or foreign
                      purchases. They can choose plants and warehouses for that
                      specific purchase order. On the landing page, the grid
                      view shows all the created purchases. It is very
                      convenient for the customer.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="feature__card purchase__order">
                    <h4> Purchase order </h4>
                    <p>
                      With our feature, our customers will have real-life
                      feelings of creating purchase orders but in a more
                      favorable way. For example, PO code, supplier name, order
                      date, delivery address, currency, payment terms are the
                      terms used to make a purchase order. We have this scope in
                      our feature.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="feature__card request__quo">
                    <h4> Request for quotation</h4>
                    <p>
                      In this feature, customers can make different types of
                      request like, request for quotation, request for
                      information, request for proposal. These types of requests
                      are intended by the customers to make the purchase order
                      more specific.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center row__pb">
                <div className="col-lg-3 ">
                  <div className="feature__card maintain__rfq">
                    <h4> Maintain RFQ</h4>
                    <p>
                      It will help the customer to create the RFQ (Request for
                      Quotation). Customers can put price rate as inputs and can
                      also see everything in a grid view.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card comparative__sta">
                    <h4> Comparative statement</h4>
                    <p>
                      In this feature, customers can see all the quotations
                      given by the suppliers. They not only can see the supplier
                      who wanted to sell the product but also can select any
                      specific supplier from whom he can buy the product. It is
                      one kind of digital bidding system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="procurement__management">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mr-5">
                  <div className="procurement__management__right">
                    <h4>
                      Sales and <br /> Distribution
                    </h4>
                    <p>
                      Selling is the most important term in business. you can't
                      run your business if you can't manage sales. To digitize
                      sales, companies need useful, helpful, and configurable
                      modules to run sales. Our sales module can give you all
                      kinds of facilities like order management, transport
                      management, reporting and many more.
                    </p>
                    <h4>Values:</h4>

                    <div className="row values__svg ">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/sd-1.svg" alt="Blue Pill Ltd." />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/sd-2.svg" alt="Blue Pill Ltd." />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/sd-3.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/sd-4.svg" alt="Bluepill Ltd" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="procurement__management__left sales__dist">
                    <img
                      src="/img/ibos-laptop.png"
                      alt="Bluepill Ltd"
                      className="ibos__laptop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*   management feature */}

          <div className="procurement__management__features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="feature__header">
                    <p>Sales and Distribution</p>
                    <h4>Features</h4>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3 ">
                  <div className="feature__card sales__order">
                    <h4> Sales Quotation </h4>
                    <p>
                      Sales quotation is a process of the sales cycle. Our
                      feature includes the ability to swiftly produce
                      professional and impressive sales documents that can win
                      businesses. It helps the customer to keep a look at the
                      cost they are spending on that speciation quotation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card sales__order">
                    <h4> Sales Contract </h4>
                    <p>
                      Customer contracts are outlined customer agreements that
                      display when sales materials or services are sold within a
                      certain time period. Considering that in mind, our feature
                      gives payment method, price, pricing date, start end, end
                      date, transport method, delivery address to our customer
                      so that our customer does not need pen and paper.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card sales__order">
                    <h4> Sales Order</h4>
                    <p>
                      The sales order is one of the most significant pieces of
                      documentation in the sales management system. It is
                      because it shows the ultimate value of sales management,
                      minimize the work time, enhance customer service, scale up
                      and down easily, and process data from anywhere. In our
                      enterprise, we let the customer handle these things so
                      that their sales order management is handy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center row__pb">
                <div className="col-lg-3 ">
                  <div className="feature__card sales__pgi">
                    <h4>PGI </h4>
                    <p>
                      Post Goods issue is done when physically the goods are
                      moved for delivery is fully picked. What our PGI does is
                      to update the stock so that if you have delivered some
                      stock that delivered stock should be removed from the
                      present stock.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card transport__mgt">
                    <h4> Transportation management</h4>
                    <p>
                      Effective transportation management plays a vital role in
                      sales management. It helps to keep the harmony up for the
                      supply chain. Our product gives shipment and vehicle
                      reports to our customers to keep the update of the
                      delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Management  Starats */}

          <div className="procurement__management">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="procurement__management__left">
                    <img
                      src="/img/ibos-laptop.png"
                      alt="Bluepill Ltd"
                      className="ibos__laptop"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="procurement__management__right">
                    <h4>
                      Transport <br /> Management
                    </h4>
                    <p>
                      Transport management is one of the basic needs for any
                      kind of business and it plays a vital role in daily
                      business. As we focus on customers’ value, for us a
                      configurable transport module is very important. Our
                      transport module gives all kinds of facilities such as
                      shipping, routes, vehicle available report and many more
                      to the customer. Our goal is to increase shipment
                      experience, safety, security, and operational efficiency
                    </p>
                    <h4>Values:</h4>

                    <div className="row values__svg ">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/tm-1.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/tm-2.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/tm-3.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/tm-4.svg" alt="Bluepill Ltd" />
                      </div>
                    </div>
                    <div className="row values__svg mt-2">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/tm-5.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/tm-6.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/pm-3.svg" alt="Bluepill Ltd" /> */}
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/pm-4.svg" alt="Bluepill Ltd" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Management  Ends */}

          {/* Management Feture Starts */}
          <div className="procurement__management__features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="feature__header">
                    <p> Transport Management </p>
                    <h4>Features</h4>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3 ">
                  <div className="feature__card transport__mgt">
                    <h4>Vehicle log </h4>
                    <p>
                      A customer can make purchase requests using this feature.
                      With this feature, customers can make local or foreign
                      purchases. They can choose plants and warehouses for that
                      specific purchase order. On the landing page, the grid
                      view shows all the created purchases. It is very
                      convenient for the customer.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card transport__mgt">
                    <h4> Shipment cost </h4>
                    <p>
                      With our feature, our customers will have real-life
                      feelings of creating purchase orders but in a more
                      favorable way. For example, PO code, supplier name, order
                      date, delivery address, currency, payment terms are the
                      terms used to make a purchase order. We have this scope in
                      our feature.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card transport__mgt">
                    <h4> Vehicle in out report</h4>
                    <p>
                      In this feature, customers can make different types of
                      request like, request for quotation, request for
                      information, request for proposal. These types of requests
                      are intended by the customers to make the purchase order
                      more specific.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Management Feture Ends */}

          {/*Accounts and Finance  Manaement*/}

          <div className="procurement__management">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="procurement__management__right">
                    <h4>
                      Accounts and <br /> Finance
                    </h4>
                    <p>
                      Why are accounting and finance important? It is because it
                      helps you keep track of income, expenditures, recording
                      and analyzing business activities, forensic accounting,
                      governance accounting, and so on. Our module serves our
                      customers with plenty of these services. We have all types
                      of features that our customer does not need anything else
                      to take care of their money work.
                    </p>
                    <h4>Values:</h4>

                    <div className="row values__svg ">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/af-1.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/af-2.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/af-3.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/af-4.svg" alt="Bluepill Ltd" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 pl-5">
                  <div className="procurement__management__left">
                    <img
                      src="/img/ibos-laptop.png"
                      alt="Bluepill Ltd"
                      className="ibos__laptop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Starts */}

          <div className="procurement__management__features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="feature__header">
                    <p>Accunts abd finance</p>
                    <h4>Features</h4>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3 ">
                  <div className="feature__card accounts__fin">
                    <h4> Journals</h4>
                    <p>
                      An accounting journal is a detailed account of all the
                      financial transactions of a business. Keeping that in
                      mind, we have journals in our accounting and finance
                      management. To keep it more flexible, we have a cash
                      journal, bank journal, and adjustment journal.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card accounts__fin">
                    <h4>Business transaction </h4>
                    <p>
                      To have a systematic and permanent record of all
                      transactions is difficult. The general ledger comes here
                      to keep records of a company's total financial accounts.
                      Our product business transaction will help our customers’
                      in that case.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card invoice__mgt">
                    <h4> Invoice management system </h4>
                    <p>
                      Invoice management system plays a vital role because it
                      makes things easy, and increases cash flow. What our
                      feature offers to our customers are purchase invoice, post
                      purchase invoice, reconcile purchase, customer sales
                      invoice, clear sales invoice, clear purchases invoice and
                      many more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center row__pb">
                <div className="col-lg-3 ">
                  <div className="feature__card expose__fin">
                    <h4>Expense</h4>
                    <p>
                      An expense is the cost of operations that a company incurs
                      to generate revenue. The main aims of costing are cost
                      control and improvement in efficiency. It also helps set
                      industry standards. So it is necessary to maintain it in a
                      proper way. Keeping that is mind, we offer to our
                      customers expense register, advance for internal expense,
                      receive and payment to make their life trouble-free.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card expose__fin">
                    <h4> Cost controlling</h4>
                    <p>
                      Cost control is the practice of identifying and reducing
                      business expenses to increase profits, and it starts with
                      the budgeting process. Cost control is an important factor
                      in maintaining and growing profitability. So, we offer our
                      customers controlling unit, profit center, profit center
                      group, cost center type, cost center, cost center group,
                      cost element and many more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Ends */}

          {/*Accounts and Finance Management */}

          {/* Inventaroy and Warehouse  Starts*/}
          <div className="procurement__management">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="procurement__management__right">
                    <h4>
                      Inventory and Warehouse <br /> Management
                    </h4>
                    <p>
                      Basically, inventory management is the system used to
                      organize and track all of the company's goods during the
                      time the company owns them. Once they're sold, inventory
                      is converted to revenue. No matter the size of a business,
                      from a small neighborhood gift shop to a multinational
                      corporation, effective inventory management can make the
                      difference between failure and success. Fortunately, our
                      feature can make the inventory management and warehouse
                      management that simple, effortless and straightforward.
                    </p>
                    <h4>Values:</h4>

                    <div className="row values__svg ">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/iw-1.svg " alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/iw-2.svg " alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/iw-3.svg " alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/iw-4.svg " alt="Bluepill Ltd" />
                      </div>
                    </div>
                    <div className="row values__svg  pt-2">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/iw-5.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/mp-2.svg" alt="Bluepill Ltd" /> */}
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/mp-3.svg" alt="Bluepill Ltd" /> */}
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/mp-4.svg" alt="Bluepill Ltd" /> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 pl-5">
                  <div className="procurement__management__left">
                    <img
                      src="/img/ibos-laptop.png"
                      alt="Bluepill Ltd"
                      className="ibos__laptop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Starts */}

          <div className="procurement__management__features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="feature__header">
                    <p>Inventory and warehouse management</p>
                    <h4>Features</h4>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3 ">
                  <div className="feature__card iw__mgt">
                    <h4>Item request </h4>
                    <p>
                      To deliver products, customers need to start with the item
                      request first. Item request is simply letting the
                      warehouse know about the need for products.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card iw__mgt">
                    <h4> Inventory transaction </h4>
                    <p>
                      Producing products are as important as making the
                      transaction. Inventory transactions will let our customers
                      have a proper look at an expense. Transaction controlling
                      plays an important role in any business.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card iw__mgt">
                    <h4>Asset receives</h4>
                    <p>
                      The way is important to put production entry, it is
                      important to put entry when you receive products so that
                      our customer can have the proper idea to make any further
                      decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center row__pb">
                <div className="col-lg-3 ">
                  <div className="feature__card iw__mgt-2">
                    <h4> Service receives </h4>
                    <p>
                      It will help the customer to create the RFQ (Request for
                      Quotation). Customers can put price rate as inputs and can
                      also see everything in a grid view.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card  iw__mgt-2">
                    <h4> Customer delivery</h4>
                    <p>
                      Keeping a delivery note is as important as producing the
                      product. It gives a clear idea of the delivered product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Ends */}
          {/* Manufacturing Plannings Ends */}
          <div className="procurement__management">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 pl-5">
                  <div className="procurement__management__left">
                    <img
                      src="/img/ibos-laptop.png"
                      alt="Bluepill Ltd"
                      className="ibos__laptop"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="procurement__management__right">
                    <h4>
                      Manufacturing <br /> planning{" "}
                    </h4>
                    <p>
                      Manufacturing industries add an important value of a
                      country. Our customers who are into manufacturing business
                      for them have this special manufacturing module. With our
                      module, customers can customize their business from the
                      shop floor to routing. Even it has a manufacturing
                      execution system. Every detail is applicable in this
                      specific module.
                    </p>
                    <h4>Values:</h4>

                    <div className="row values__svg ">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/mp-1.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/mp-2.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/mp-3.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/mp-4.svg" alt="Bluepill Ltd" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Starts */}

          <div className="procurement__management__features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="feature__header">
                    <p>Manufacturing Planning</p>
                    <h4>Features</h4>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3 ">
                  <div className="feature__card manu__plan">
                    <h4> Bill of material</h4>
                    <p>
                      Manufacturing is all about producing materials. It serves
                      as the core of any manufacturing process because it lays
                      out all information required for manufacturing. What we
                      are letting our customers’ to do is to make the details of
                      the plant, shop floor, lot size, net weight and wastage
                      and many more.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card manu__plan">
                    <h4> Production order </h4>
                    <p>
                      Why do we make a production order? Because to get the
                      desired output, the time by which the product is to be
                      produced and the duration of various activities or
                      operations, and their sequence in the production process.
                      To make the manufacturing work, we let our customers
                      create production orders to keep the above things in mind.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card manu__plan">
                    <h4> Production entry</h4>
                    <p>
                      We can produce multiple products but it will be waste of
                      time and money if you do not keep track of it. So,
                      production entry for every product lot is necessary. It is
                      part of production planning.e.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features End */}
          {/* Inventory and warehouse management Ends */}

          {/* Tax Management  Starts*/}
          <div className="procurement__management">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 pl-5">
                  <div className="procurement__management__left">
                    <img
                      src="/img/ibos-laptop.png"
                      alt="Bluepill Ltd"
                      className="ibos__laptop"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="procurement__management__right">
                    <h4>
                      Tax <br /> Management
                    </h4>
                    <p>
                      Taxes are a necessary part of life, but they don’t have to
                      be such a burden. Planning is the key to successfully and
                      legally reducing your tax liability. We go beyond tax
                      compliance and proactively recommend tax saving strategies
                      to maximize your after-tax income. Tax Management relates
                      to the past, present, future assessment proceedings,
                      appeals, and revisions. Our features will fulfill all the
                      needs that customers can possibly ask for.
                    </p>
                    <h4>Values:</h4>

                    <div className="row values__svg ">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/vm-1.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/vm-2.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/vm-3.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/vm-4.svg" alt="Bluepill Ltd" />
                      </div>
                    </div>
                    <div className="row values__svg  pt-2">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/vm-5.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/mp-2.svg" alt="Bluepill Ltd" /> */}
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/mp-3.svg" alt="Bluepill Ltd" /> */}
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/mp-4.svg" alt="Bluepill Ltd" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Starts */}

          <div className="procurement__management__features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="feature__header">
                    <p>Tax Management</p>
                    <h4>Features</h4>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3 ">
                  <div className="feature__card tax__sales">
                    <h4> Sales</h4>
                    <p>
                      In tax management, sales define every kind of selling.
                      Here we planned to put all steps of sales under one roof.
                      Basically, focusing on all steps for example sales
                      invoice, customer name, customer address, delivery date,
                      shipment, transaction date, credit note, partner, and
                      fiscal year.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card  tax__purchase">
                    <h4> Purchase </h4>
                    <p>
                      In this specific feature, customers will be able to do all
                      kinds of purchases. The steps we focused on here are
                      purchase date, partner name, quantity, amount, debit note,
                      purchase invoice, transaction date, and fiscal year.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card  tax__voucher">
                    <h4> Voucher</h4>
                    <p>
                      After completing all types of sales and purchasing, our
                      customers will face the need for vouchers. All sales or
                      purchases won’t be feasible if our customer doesn’t get
                      the chance to create vouchers. This feature will make our
                      customers’ life easy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center row__pb">
                <div className="col-lg-3 ">
                  <div className="feature__card tax__inventory">
                    <h4> Inventory </h4>
                    <p>
                      In tax management, inventory is basically the mid-phase of
                      raw materials and finished goods. To balance in phase, we
                      have production, transfer out, transfer in, and item
                      destroy for our customer. It is easy to control this
                      mid-phase.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card  tax__trans">
                    <h4> Transaction</h4>
                    <p>
                      Our feature can let our customers do two types of
                      transactions and they are expense transactions and
                      treasury transactions. In the expense transactions, our
                      customers will do transactions related to the company’s
                      main activities, such as the cost of goods sold,
                      administrative fees, and rent. The treasury transactions
                      have tax consequences in the form of VAT and sales tax
                      processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tax Management Ends */}

          {/*   Human capital Mgt */}
          <div className="procurement__management">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="procurement__management__right">
                    <h4>
                      Human Capital <br /> Management
                    </h4>
                    <p>
                      Human Capital management refers to managing an
                      organization’s employees for them to contribute
                      significantly in the overall productivity of organization.
                      Organization runs with the help of individuals who
                      contribute in their own way in its success and
                      productivity. Managing this large amount of data can be a
                      burden for the organization. Keeping that in mind we
                      featured our product so that our customer can feel homey
                      using the product.
                    </p>
                    <h4>Values:</h4>

                    <div className="row values__svg ">
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/hc-1.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/hc-2.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/hc-3.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/hc-4.svg" alt="Bluepill Ltd" />
                      </div>
                    </div>
                    <div className="row values__svg  pt-2">
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/hc-5.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/mp-2.svg" alt="Bluepill Ltd" /> */}
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/mp-3.svg" alt="Bluepill Ltd" /> */}
                      </div>
                      <div className="col-lg-3 col-6">
                        {/* <img src="img/mp-4.svg" alt="Bluepill Ltd" /> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 pl-5">
                  <div className="procurement__management__left">
                    <img
                      src="/img/ibos-laptop.png"
                      alt="Bluepill Ltd"
                      className="ibos__laptop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Starts */}

          <div className="procurement__management__features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="feature__header">
                    <p>Human Capital Management</p>
                    <h4>Features</h4>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3 ">
                  <div className="feature__card emp__prof">
                    <h4> Employee profile</h4>
                    <p>
                      An employee profile is basically a sketch of an employee
                      showing basic information, personal information and
                      official information where an employee can give all of his
                      or her information.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card  leav__mgt">
                    <h4> Leave and movement </h4>
                    <p>
                      In every business, there are certain rules for any kind of
                      leave or movement. It may vary from employee to employee.
                      Our feature will help our customers to keep track of this
                      application from the administrative level and employee
                      level for simplification.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card  work__cal">
                    <h4>Working calendar</h4>
                    <p>
                      The working calendar works like a division of work shifts.
                      Employee work shifts can be handled easily using this
                      feature. Our customer can say goodbye to pen and paper.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center row__pb">
                <div className="col-lg-3 ">
                  <div className="feature__card cafe__mgt">
                    <h4> Cafeteria management </h4>
                    <p>
                      In an office, cafeteria management can be a whole
                      difficult part to maintain. Our feature is really easy to
                      handle. For example, in the food corner feature, customers
                      can see everyday meals, menus, and different types of meal
                      requisition. In the cafeteria summary, customers can see
                      and build a compact history of all meals based on the
                      business unit, and in the cafeteria details report, it
                      varies from employee to employee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Human capital mgt */}

          {/*   Human capital Mgt */}
          <div className="procurement__management">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 pl-5">
                  <div className="procurement__management__left">
                    <img
                      src="/img/ibos-laptop.png"
                      alt="Bluepill Ltd"
                      className="ibos__laptop"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="procurement__management__right">
                    <h4>
                      Performance <br /> Management
                    </h4>
                    <p>
                      Performance management is the continuous process of
                      improving performance by setting indi-vidual and team
                      goals. Performance management is an ongoing process of
                      communication between a supervisor and an employee that
                      occurs throughout the year, in support of accomplishing
                      the strategic objectives of the organization. So it is
                      obviously not an easy thing to navigate as it is not
                      constant, it’s changing continuously. Difficult thing to
                      maintain but we have an easy solution for that.
                    </p>
                    <h4>Values:</h4>

                    <div className="row values__svg ">
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/pr-1.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive ">
                        <img src="img/pr-2.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6  svg__responsive">
                        <img src="img/pr-3.svg" alt="Bluepill Ltd" />
                      </div>
                      <div className="col-lg-3 col-6 svg__responsive">
                        <img src="img/pr-4.svg" alt="Bluepill Ltd" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Starts */}

          <div className="procurement__management__features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="feature__header">
                    <p> Performance Management</p>
                    <h4>Features</h4>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3 ">
                  <div className="feature__card stat__plan">
                    <h4> Strategic plan</h4>
                    <p>
                      The strategic plan provides the basis for what your key
                      indicators are. It is a blueprint of your given and
                      estimated goals. What our feature does is to make an
                      internal and external assessment, designing a reliable
                      framework, developing goals and objectives, managing
                      performance and implementation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature__card kpi">
                    <h4>KPI </h4>
                    <p>
                      Our feature KPI (key performance indicator) has different
                      types of KPI for example individual KPI, departmental KPI,
                      SBU KPI stating the value to monitor company health,
                      measure progress, analyze patterns over time, solve
                      problems or tackle opportunities, make adjustments and
                      stay on track. In our feature our customer can have a
                      target, entry, scoreboard, and dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tax Management Ends */}
        </>
      </MainLayout>
    </div>
  );
}
