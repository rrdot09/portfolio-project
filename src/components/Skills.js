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
} from "../images";

export default function Skills() {
  return (
    <>
      <div className="info u-mb-80">
        <h3 className="info_header u-mb-20">EXPERIENCE</h3>
        <div className="grid">
          <img src={ReactJSLogo} alt="" className="grid_item a" />
          <img src={NextJSLogo} alt="" className="grid_item b" />
          <img src={JSLogo} alt="" className="grid_item c" />
          <img src={HTMLLogo} alt="" className="grid_item d" />
          <img src={ExpressLogo} alt="" className="grid_item e" />
          <img src={SQLLogo} alt="" className="grid_item f" />
          <img src={CSSLogo} alt="" className="grid_item g" />
          <img src={ShopifyLogo} alt="" className="grid_item h" />
          <img src={AmazonLogo} alt="" className="grid_item i" />
          <img src={NodeJSLogo} alt="" className="grid_item j" />
          <img src={MongoDBLogo} alt="" className="grid_item k" />
          <img src={KOALogo} alt="" className="grid_item l" />
          <img src={GITLogo} alt="" className="grid_item m" />
          <img src={FigmaLogo} alt="" className="grid_item n" />
          <img src={GraphqlLogo} alt="" className="grid_item o" />
        </div>
      </div>
    </>
  );
}
