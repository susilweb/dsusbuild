import React from "react";
import Home from "./Home";
import BusinessCentral from "./BusinessCentral";
import Finance from "./Finance";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Sales from "./Sales";
import CustomerService from "./CustomerService";
import SupplyChainManagement from "./SupplyChainManagement";
import FieldService from "./FieldService";
import ProjectOperations from "./ProjectOperations";
import Marketing from "./Marketing";
import Commerce from "./Commerce";
import HumanResource from "./HumanResource";
import Contact from "./Contact";
import Career from "./Career";
import WhyUs from "./WhyUs";
import Header from "./Header";
import Footer from "./Footer";
import Startup from "./Startup";
import MicrosoftCloudForNonprofit from "./MicrosoftCloudForNonprofit";
import Ecommerce from "./Ecommerce";
import AzureIoT from "./AzureIoT";
import AzureIoTHub from "./AzureIoTHub";
import AzureIoTCentral from "./AzureIoTCentral";
import AzureSphere from "./AzureSphere";
import AzureDigitalTwins from "./AzureDigitalTwins";
import AzureMachineLearning from "./AzureMachineLearning";
import AzureIoTEdge from "./AzureIoTEdge";
import Manufacturing from "./Manufacturing";
import ProfessionalService from "./ProfessionalService";
import FoodBeverages from "./FoodBeverages";
import PowerBI from "./PowerBI";
import PowerApps from "./PowerApps";
import PowerAutomate from "./PowerAutomate";
import D360 from "./D360";
import BusinessCentralUpgrade from "./BusinessCentralUpgrade";
import BusinessCentralImplementation from "./BusinessCentralImplementation";
import BusinessCentralSupport from "./BusinessCentralSupport";
import PowerVirtualAgents from "./PowerVirtualAgents";
import Erp from "./Erp";
import MicrosoftDynamicsCrm from "./MicrosoftDynamicsCrm";
import MicrosoftAzure from "./MicrosoftAzure";
import MicrosoftDynamics365MixedReality from "./MicrosoftDynamics365MixedReality";
import MicrosoftDynamics365Ai from "./MicrosoftDynamics365Ai";
import AzureIotCentralWebinar from "./AzureIotCentralWebinar";
import CaseStudyTimosco from "./CaseStudyTimosco";
import CategoryList from "./CategoryList";
import CloudvsOnpremise from "./CloudvsOnpremise";
import WhyMigrade360 from "./WhyMigrade360";
import WhyChooseBc from "./WhyChooseBc";
import BcAdvantages from "./BcAdvantages";
import BCvsSap from "./BCvsSap";
import FinancevsSapErp from "./FinancevsSapErp";
import BcNetSuite from "./BcNetSuite";
import BCvsFinance from "./BCvsFinance";
import MicrosoftDynamicsNAV from "./MicrosoftDynamicsNAV";
import MicrosoftDynamicsAX from "./MicrosoftDynamicsAX";
import MicrosoftDynamicsGP from "./MicrosoftDynamicsGP";
import PowerPlatform from "./PowerPlatform";
import SupportServices from "./SupportServices";
import UpgradeServices from "./UpgradeServices";
import ImplementationServices from "./ImplementationServices";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Test from "./Test";
import DynamicsNavToBusinessCentral from "./DynamicsNavToBusinessCentral";

import MicrosoftDynamicsPartnerLeeds from "./MicrosoftDynamicsPartnerLeeds";
import MicrosoftDynamicsPartnerEdinburgh from "./MicrosoftDynamicsPartnerEdinburgh";
import MicrosoftDynamicsPartnerGlasgow from "./MicrosoftDynamicsPartnerGlasgow";
import MicrosoftDynamicsPartnerLiverpool from "./MicrosoftDynamicsPartnerLiverpool";
import MicrosoftDynamicsPartnerBristol from "./MicrosoftDynamicsPartnerBristol";
import Locations from "./Locations";

import MyComponents from "./MyComponents";
import ThankYou from "./ThankYou";
import Howtochooserighterp from "./Howtochooserighterp";
import DynamicsNavSupportEndingSoon from "./DynamicsNavSupportEndingSoon";
import BusinessCentralVSFinance from "./BusinessCentralVSFinance";
import MigrateFandSC from "./MigrateFandSC";
import AdvantagesfinanceScm from "./AdvantagesfinanceScm";
import D365VSDynamicsAX from "./D365VSDynamicsAX";
import FaqsUgradingDynamics from "./FaqsUgradingDynamics";
import DynamicsNavnowBusinessCentral from "./DynamicsNavnowBusinessCentral";
import Dynamics365vsSalesForce from "./Dynamics365vsSalesForce";
import ScmCloudvsonPremise from "./ScmCloudvsonPremise";
import FinanceCloudvsOnpremise from "./FinanceCloudvsOnpremise";
import SalesInsightsanOverview from "./SalesInsightsanOverview";
import HealthCheck from "./HealthCheck";
import Error404 from "./Error404";
import BusinessCentralFeatures from "./BusinessCentralFeatures";
import BusinessCentralPricingLicensing from "./BusinessCentralPricingLicensing";
import CaseStudyMTA from "./CaseStudyMTA";
import Dynamics365CustomerEngagement from "./Dynamics365CustomerEngagement";
import FinanceOperations from "./FinanceOperations";
import WebinarList from "./WebinarList";
import FinanceImplementation from "./FinanceImplementation";
import EbookList from "./EbookList";
import NonProfits from "./NonProfits";
import IndustriesManufacturing from "./IndustriesManufacturing";
import IndustriesList from "./IndustriesList";
import OurServicesList from "./OurServicesList";
import ProductsList from "./ProductsList";
import CookiePolicy from "./CookiePolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsOfUse";
import Partner from "./Partner";
import ThankYouEmailSubscriber from "./ThankYouEmailSubscriber";
import SubscribeUpdates from "./SubscribeUpdates";
import ScheduleDemoForm from "./ScheduleDemoForm";
import ThankYouWebinar from "./ThankYouWebinar";
import PowerBIImplementation from "./PowerBIImplementation";
import NonProfitAccelerator from "./NonProfitAccelerator";
import ThankYouHowToChooseRightErp from "./ThankYouHowToChooseRightErp";
import ScrollToTop from "./ScrollToTop";
import CrmTrading from "./CrmTrading";
import CaseStudyPasante from "./CaseStudyPasante";
import CaseStudyCqc from "./CaseStudyCqc";
import CaseStudyArteak from "./CaseStudyArteak";
import CaseStudyWiper from "./CaseStudyWiper";
import CaseStudyGlobalTea from "./CaseStudyGlobalTea";
import Form2 from "./Form2";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us/" component={AboutUs} />
        <Route exact path="/why-us/" component={WhyUs} />
        <Route
          exact
          path="/products/dynamics-365-business-central/"
          component={BusinessCentral}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-365-finance/"
          component={Finance}
        />
        <Route
          exact
          path="/products/dynamics-365-supply-chain-management/"
          component={SupplyChainManagement}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-365-sales/"
          component={Sales}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-365-customer-service/"
          component={CustomerService}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-365-field-service/"
          component={FieldService}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-365-commerce/"
          component={Commerce}
        />
        <Route
          exact
          path="/products/dynamics-365-project-operations/"
          component={ProjectOperations}
        />
        <Route
          exact
          path="/products/dynamics-365-human-resources/"
          component={HumanResource}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-365-marketing/"
          component={Marketing}
        />
        <Route exact path="/industries/startup/" component={Startup} />
        <Route
          exact
          path="/industries/microsoft-cloud-for-nonprofit/"
          component={MicrosoftCloudForNonprofit}
        />
        <Route
          exact
          path="/industries/food-and-beverages/"
          component={FoodBeverages}
        />
        <Route
          exact
          path="/industries/microsoft-cloud-for-manufacturing/"
          component={Manufacturing}
        />
        <Route
          exact
          path="/industries/professional-services/"
          component={ProfessionalService}
        />
        <Route exact path="/industries/ecommerce/" component={Ecommerce} />
        <Route
          exact
          path="/products/azure-iot-internet-of-things/"
          component={AzureIoT}
        />
        <Route exact path="/products/azure-iot-hub/" component={AzureIoTHub} />
        <Route
          exact
          path="/products/azure-iot-central/"
          component={AzureIoTCentral}
        />
        <Route exact path="/products/azure-sphere/" component={AzureSphere} />
        <Route
          exact
          path="/products/azure-iot-edge/"
          component={AzureIoTEdge}
        />
        <Route
          exact
          path="/products/azure-digital-twins/"
          component={AzureDigitalTwins}
        />
        <Route
          exact
          path="/products/azure-machine-learning/"
          component={AzureMachineLearning}
        />
        <Route exact path="/contact-us/" component={ContactUs} />
        <Route
          exact
          path="/dynamics-365-business-central-implementation/"
          component={BusinessCentralImplementation}
        />
        <Route
          exact
          path="/dynamics-365-business-central-upgrade/"
          component={BusinessCentralUpgrade}
        />
        <Route
          exact
          path="/dynamics-365-business-central-support/"
          component={BusinessCentralSupport}
        />
        <Route exact path="/products/microsoft-dynamics-erp/" component={Erp} />
        <Route
          exact
          path="/products/microsoft-dynamics-crm/"
          component={MicrosoftDynamicsCrm}
        />
        <Route
          exact
          path="/products/microsoft-azure/"
          component={MicrosoftAzure}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-365-mixed-reality/"
          component={MicrosoftDynamics365MixedReality}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-365-ai/"
          component={MicrosoftDynamics365Ai}
        />
        <Route
          exact
          path="/products/microsoft-power-platform/"
          component={PowerPlatform}
        />
        <Route exact path="/products/microsoft-power-bi/" component={PowerBI} />
        <Route
          exact
          path="/products/microsoft-power-apps/"
          component={PowerApps}
        />
        <Route
          exact
          path="/products/microsoft-power-automate/"
          component={PowerAutomate}
        />
        <Route
          exact
          path="/products/microsoft-power-virtual-agents/"
          component={PowerVirtualAgents}
        />
        <Route
          exact
          path="/our-services/dynamics-365-implementation-services/"
          component={ImplementationServices}
        />
        <Route
          exact
          path="/our-services/dynamics-365-support-services/"
          component={SupportServices}
        />
        <Route
          exact
          path="/our-services/dynamics-365-upgrade-services/"
          component={UpgradeServices}
        />
        <Route exact path="/career/" component={Career} />
        <Route
          exact
          path="/products/microsoft-dynamics-365/"
          component={D360}
        />
        <Route exact path="/test/" component={Test} />
        <Route
          exact
          path="/azure-iot-central-webinar/"
          component={AzureIotCentralWebinar}
        />

        <Route exact path="/case-studies/" component={CategoryList} />
        <Route
          exact
          path="/microsoft-dynamics-365-cloud-vs-on-premise/"
          component={CloudvsOnpremise}
        />
        <Route
          exact
          path="/10-reasons-to-choose-dynamics-365/"
          component={WhyMigrade360}
        />
        <Route
          exact
          path="/why-choose-microsoft-dynamics-365-business-central/"
          component={WhyChooseBc}
        />
        <Route
          exact
          path="/advantages-capabilities/"
          component={BcAdvantages}
        />
        <Route
          exact
          path="/dynamics-365-business-central-vs-sap-business-one/"
          component={BCvsSap}
        />
        <Route
          exact
          path="/dynamics-365-finance-operations-vs-sap-erp/"
          component={FinancevsSapErp}
        />
        <Route
          exact
          path="/dynamics-365-business-central-vs-netsuite/"
          component={BcNetSuite}
        />
        <Route
          exact
          path="/d365-business-central-vs-d365-finance/"
          component={BCvsFinance}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-nav/"
          component={MicrosoftDynamicsNAV}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-ax/"
          component={MicrosoftDynamicsAX}
        />
        <Route
          exact
          path="/products/microsoft-dynamics-gp/"
          component={MicrosoftDynamicsGP}
        />
        <Route
          exact
          path="/dynamics-nav-to-business-central/"
          component={DynamicsNavToBusinessCentral}
        />
        <Route
          exact
          path="/location/microsoft-dynamics-partner-leeds/"
          component={MicrosoftDynamicsPartnerLeeds}
        />
        <Route
          exact
          path="/location/microsoft-dynamics-partner-edinburgh/"
          component={MicrosoftDynamicsPartnerEdinburgh}
        />
        <Route
          exact
          path="/location/microsoft-dynamics-partner-glasgow/"
          component={MicrosoftDynamicsPartnerGlasgow}
        />
        <Route
          exact
          path="/location/microsoft-dynamics-partner-liverpool/"
          component={MicrosoftDynamicsPartnerLiverpool}
        />
        <Route
          exact
          path="/location/microsoft-dynamics-partner-bristol/"
          component={MicrosoftDynamicsPartnerBristol}
        />
        <Route exact path="/thank-you/" component={ThankYou} />
        <Route exact path="/location/" component={Locations} />
        <Route
          exact
          path="/ebook/how-to-choose-right-erp/"
          component={Howtochooserighterp}
        />
        <Route
          exact
          path="/dynamics-nav-support-ending-soon/"
          component={DynamicsNavSupportEndingSoon}
        />
        <Route
          exact
          path="/dynamics-365-business-central-vs-finance-operations/"
          component={BusinessCentralVSFinance}
        />
        <Route
          exact
          path="/why-to-migrate-to-d365-finance-supply-chain/"
          component={MigrateFandSC}
        />
        <Route
          exact
          path="/advantages-of-using-dynamics-365-finance-scm/"
          component={AdvantagesfinanceScm}
        />
        <Route
          exact
          path="/d365-vs-dynamics-ax/"
          component={D365VSDynamicsAX}
        />
        <Route
          exact
          path="/faqs-upgrading-dynamics-ax-to-dynamics-365/"
          component={FaqsUgradingDynamics}
        />
        <Route
          exact
          path="/dynamics-nav-is-now-dynamics-365-business-central/"
          component={DynamicsNavnowBusinessCentral}
        />
        <Route
          exact
          path="/dynamics-365-vs-salesforce/"
          component={Dynamics365vsSalesForce}
        />
        <Route
          exact
          path="/dynamics-365-scm-cloud-vs-on-premise/"
          component={ScmCloudvsonPremise}
        />
        <Route
          exact
          path="/dynamics-365-finance-cloud-vs-on-premise/"
          component={FinanceCloudvsOnpremise}
        />
        <Route
          exact
          path="/dynamics-365-sales-insights-an-overview/"
          component={SalesInsightsanOverview}
        />
        <Route
          exact
          path="/free-dynamics-365-system-health-check/"
          component={HealthCheck}
        />
        <Route
          exact
          path="/dynamics-365-business-central-features/"
          component={BusinessCentralFeatures}
        />
        <Route
          exact
          path="/dynamics-365-business-central-pricing-licensing/"
          component={BusinessCentralPricingLicensing}
        />
        <Route
          exact
          path="/case-studies/timesco/"
          component={CaseStudyTimosco}
        />

        <Route
          exact
          path="/case-studies/mta-manufacturing-technologies-association/"
          component={CaseStudyMTA}
        />
        <Route
          exact
          path="/products/dynamics-365-customer-engagement/"
          component={Dynamics365CustomerEngagement}
        />

        <Route
          exact
          path="/products/microsoft-dynamics-365-finance-operations/"
          component={FinanceOperations}
        />
        <Route exact path="/components/" component={MyComponents} />
        <Route exact path="/webinars/" component={WebinarList} />
        <Route
          exact
          path="/dynamics-365-finance-implementation/"
          component={FinanceImplementation}
        />
        <Route exact path="/ebook/" component={EbookList} />
        <Route exact path="/industries/non-profits/" component={NonProfits} />
        <Route
          exact
          path="/industries/manufacturing/"
          component={IndustriesManufacturing}
        />
        <Route exact path="/industries/" component={IndustriesList} />
        <Route exact path="/our-services/" component={OurServicesList} />
        <Route exact path="/products/" component={ProductsList} />
        <Route exact path="/cookie-policy/" component={CookiePolicy} />
        <Route exact path="/privacy-policy/" component={PrivacyPolicy} />
        <Route exact path="/terms-of-use/" component={TermsOfUse} />
        <Route exact path="/partner/" component={Partner} />
        <Route
          exact
          path="/thank-you/email-subscriber/"
          component={ThankYouEmailSubscriber}
        />
        <Route exact path="/subscribe-updates/" component={SubscribeUpdates} />
        <Route exact path="/schedule-a-demo/" component={ScheduleDemoForm} />
        <Route
          exact
          path="/thanks-webinar-registration/"
          component={ThankYouWebinar}
        />
        <Route
          exact
          path="/power-bi-implementation/"
          component={PowerBIImplementation}
        />
        <Route
          exact
          path="/products/dynamics-365-non-profit-accelerator/"
          component={NonProfitAccelerator}
        />
        <Route
          exact
          path="/thank-you/how-to-choose-right-erp/"
          component={ThankYouHowToChooseRightErp}
        />
        <Route exact path="/case-studies/crm-trading/" component={CrmTrading} />
        <Route
          exact
          path="/case-studies/pasante/"
          component={CaseStudyPasante}
        />
        <Route exact path="/case-studies/cqc/" component={CaseStudyCqc} />
        <Route exact path="/case-studies/arteak/" component={CaseStudyArteak} />
        <Route
          exact
          path="/case-studies/wiper-supply-services/"
          component={CaseStudyWiper}
        />
        <Route
          exact
          path="/case-studies/global-tea/"
          component={CaseStudyGlobalTea}
        />
        <Route exact path="/components/" component={MyComponents} />
        <Route exact path="/form2/" component={Form2} />
        <Redirect to="/404" component={Error404} />
        <Home />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
