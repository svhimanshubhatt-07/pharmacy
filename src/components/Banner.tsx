import React from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  backgroundImage = "/images/aboutbanner.jpg",
  mobileBackgroundImage = backgroundImage,
}) => {
  return (
    <section className="route-banner">
      <div
        className="route-banner__image route-banner__image--desktop"
      >
        <img className="route-banner__background" src="/images/aboutbanner.jpg" alt="" aria-hidden="true" />
        <img className="route-banner__background" src={backgroundImage} alt="" aria-hidden="true" />
      </div>
      <div
        className="route-banner__image route-banner__image--mobile"
      >
        <img className="route-banner__background" src="/images/aboutbanner.jpg" alt="" aria-hidden="true" />
        <img className="route-banner__background" src={backgroundImage} alt="" aria-hidden="true" />
        <img
          className="route-banner__background route-banner__background--mobile"
          src={mobileBackgroundImage}
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="route-banner__overlay" />
      {title && (
        <div className="container route-banner__caption">
          <h1>{title}</h1>
        </div>
      )}
    </section>
  );
};
