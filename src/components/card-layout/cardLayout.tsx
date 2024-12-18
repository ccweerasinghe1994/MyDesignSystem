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
        <div className="card" key={brand}>
          <i className={`fa-brands fa-${brand}`}></i>
        </div>
      ))}
    </div>
  );
};
