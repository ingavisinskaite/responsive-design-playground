import React from "react";
import "./style.scss";

const Post = props => (
  <div
    className={`HERO__post HERO__post-${props.sizeClass}`}
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./${props.imgUrl}.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <p className="HERO__post__type">{props.type}</p>
    <div>
      <p className="HERO__post__title">{props.title}</p>
      {props.author && (
        <p className="HERO__post__author">
          Paskelbė <strong>{props.author}</strong>
        </p>
      )}
    </div>
  </div>
);

const Hero = () => {
  let heroInfo = [
    {
      imgUrl: "hero1",
      type: "NAUJIENA",
      title: `Galingiausias telefonas pasaulyje - pristatytas naujasis "Asus" flagmanas žaidimų mėgėjams`,
      author: "Lukas Snarskis",
      sizeClass: "big"
    },
    {
      imgUrl: "hero2",
      type: "AKCIJA",
      title:
        "Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos populiariausiose parduotuvėse",
      sizeClass: "medium"
    },
    {
      imgUrl: "hero3",
      type: "NAUJIENA",
      title: `"Oukitel" išleido "Redmi Note 7" konkurentą už itin patrauklią kainą`,
      sizeClass: "small"
    },
    {
      imgUrl: "hero4",
      type: "AKCIJA",
      title: `Ieškantiems labai pigių belaidžių ausinukų - akcijos "Xiaomi" kolekcijai`,
      sizeClass: "small"
    }
  ];

  return (
    <div className="HERO">
      <div className="HERO__col-1">
        <Post {...heroInfo[0]} />
      </div>
      <div className="HERO__col-2">
        <div>
          <Post {...heroInfo[1]} />
        </div>
        <div className="HERO__small-row">
          <div className="HERO__small-row__col-1">
            <Post {...heroInfo[2]} />
          </div>
          <div className="HERO__small-row__col-2">
            <Post {...heroInfo[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
