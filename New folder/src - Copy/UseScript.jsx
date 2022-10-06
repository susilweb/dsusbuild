import React from "react";
import { useEffect } from "react";

//Zoho Sales Iq Script:
const UseScript = (url, widgetCode, minimizeCB) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");

    let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){
        $zoho.salesiq.floatbutton.visible('hide');
}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "";`;

    script.appendChild(document.createTextNode(code));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default function SalesIQ(props = {}) {
  useEffect(() => {
    let { isChatOpen } = props;
    window.$zoho &&
      window.$zoho.salesiq.floatwindow.visible(isChatOpen ? "show" : "hide");
  }, [props]);

  return (
    <React.Fragment>
      {UseScript(
        "https://salesiq.zoho.in/widget",
        "295657a1b35e666b7021468d543019143daca3d2252ea722931cb3e7d35378538df75c738b6fc3206d566d5e6336955d"
      )}
    </React.Fragment>
  );
}
