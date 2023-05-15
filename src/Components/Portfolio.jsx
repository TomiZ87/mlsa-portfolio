/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

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
import image from "../images/ms-office-internship.jpg";
import image1 from "../images/Office_Bejziks.jpg";

const imageAltText1 = "Office Bejziks Team";
const imageAltText = "An office in Microsoft Slovakia";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Zajic's Ground Probe Program",
    description:
      "An initiative to start StarTrek-like program in terms of creation of probes from the most primitive and upgrading them over time.",
    url: "https://www.youtube.com/watch?v=yme8clizDJw&list=PL1H4UfjEsAh04SFn0d8lm5Dv70KRxgTQ1&pp=iAQB",
  },
  {
    title: "Devlogs",
    description:
      "A project of developing ceratin simple or complex games and creating videos around them: Development Vlogs. My first game in Univy was ColorBalls.",
    url: "https://www.youtube.com/watch?v=q3Qwx1qfj3s&list=PL1H4UfjEsAh092Gr6rFmVv3XrF9SyaQDo&pp=iAQB",
  },
  {
    title: "ColorBalls",
    description:
      "A game or a verion of the game ColorSwitch. Through this game and devlogs I learned the basics of programming on C#. Game is available on Google Play.",
    url: "https://play.google.com/store/apps/details?id=com.TomiZ87Dev.ColorBalls",
  },
  {
    title: "New School Website",
    description:
      "As a part of IT Seminar at school I was assigned to create a new school website together with my friend: Simon.",
    url: "https://bilgym-sk.azurewebsites.net/index.php/",
  },
  {
    title: "Microsoft Office Specialist: Associate",
    description:
      "In ŠTC Microsoft I got the opportunity to achieve the MOS: Assiociate certifications.",
    url: "https://www.credly.com/badges/98e77edc-fd8b-4209-8cef-e67e374e16db/public_url",
  },
  {
    title: "Microsoft Office Specialist: Word Expert",
    description:
      "In ŠTC Microsoft I got the opportunity to achieve the MOS: Word Expert as their token of my hard work.",
    url: "https://www.credly.com/badges/e52f5ecf-8b0a-491e-b408-368b2c7c7811",
  },
  {
    title: "The Duke of Edinburgh's International Ward",
    description: "I completed my Bronze Level DoFE and currently making the Gold Level.",
    url: "https://dofe.sk/",
  },
  {
    title: "Team Office Bejziks",
    description:
      "Our Team created and translated numerous courses, articles, and other content for Microsoft Learn to teach local students and teachers about digital competencies and Microsoft products.",
    url: "#office_bejziks",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
          <h2 style={{ textAlign: "center" }}>Our Team</h2>
          <img
            src={image1}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText1}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
