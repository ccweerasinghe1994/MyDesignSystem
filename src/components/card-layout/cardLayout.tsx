import { Card } from "../card/card";
import "./cardLayout.styles.css";
export const CardLayout = (...props: any) => {
  return (
    <div className="cards">
      {/* Common card classes extracted for reusability */}
      {[
        "apple",
        "microsoft",
        "shopify",
        "atlassian",
        "wordpress",
        "bootstrap",
        "dropbox",
        "behance",
        "paypal",
        "cc-visa",
        "slack",
        "skype",
        "youtube",
        "tiktok",
      ].map((brand) => (
        <Card brand={brand} key={brand} />
      ))}
    </div>
  );
};
