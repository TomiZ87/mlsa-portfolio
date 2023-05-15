import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Office_Bejziks.jpg";

const imageAltText = "Office Bejziks Team";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */

const Office_Bejziks = () => {
  return (
    <section className="padding" id="office_bejziks">
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div style={{ maxWidth: "40%", alignSelf: "center" }}>
        <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
        />
      </div>
    </section>
  );
};

export default Office_Bejziks;
