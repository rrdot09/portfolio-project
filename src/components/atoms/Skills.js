import {
  AmazonLogo,
  SQLLogo,
  ExpressLogo,
  FigmaLogo,
  CSSLogo,
  GITLogo,
  GraphqlLogo,
  HTMLLogo,
  JSLogo,
  KOALogo,
  MongoDBLogo,
  NextJSLogo,
  NodeJSLogo,
  ReactJSLogo,
  ShopifyLogo,
} from "../../images";

export default function Skills() {
  return (
    <>
      <div className="info u-mb-80">
        <h3 className="info_header u-mb-20">EXPERIENCE</h3>
        <div className="flex">
          <img src={ReactJSLogo} alt="" className="flex_item" />
          <img src={NextJSLogo} alt="" className="flex_item" />
          <img src={JSLogo} alt="" className="flex_item" />
          <img src={HTMLLogo} alt="" className="flex_item" />
          <img src={ExpressLogo} alt="" className="flex_item" />
          <img src={SQLLogo} alt="" className="flex_item" />
          <img src={CSSLogo} alt="" className="flex_item" />
          <img src={ShopifyLogo} alt="" className="flex_item" />
          <img src={AmazonLogo} alt="" className="flex_item" />
          <img src={NodeJSLogo} alt="" className="flex_item" />
          <img src={MongoDBLogo} alt="" className="flex_item" />
          <img src={KOALogo} alt="" className="flex_item" />
          <img src={GITLogo} alt="" className="flex_item" />
          <img src={FigmaLogo} alt="" className="flex_item" />
          <img src={GraphqlLogo} alt="" className="flex_item" />
        </div>
      </div>
    </>
  );
}
