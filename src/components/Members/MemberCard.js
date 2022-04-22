import React from "react";
import {MemberCardStat} from "./MemberCardStat";
import {IoArrowUndoCircle} from "react-icons/io5";

function MemberCard(props) {


  const [cardRotate, setCardRotate] = React.useState(false)

  function cardButton() {
    setCardRotate((prevCardRotate) => !prevCardRotate)
  }
  const setRotateClass = cardRotate ? "card-container js-rotation" : "card-container";



  function touchStartTest(eStart) {
    console.log("TouchStart");
  }
 
  function touchEndTest(eEnd) {
    console.log("TouchEnd");  
  }

  return (
    <section id={props.cardparam.id} className={setRotateClass}  onClick={cardButton}  onTouchStart={touchStartTest} onTouchEnd={touchEndTest} >

      <article className="card__front">

      <IoArrowUndoCircle className="card-icon icon-front" />
      
        <figure>
          <img className="general__img" src="./img/profilpicture.jpg" alt="" />
        </figure>
        <article className="card__front-text">
          <h2 className="card__front-position">{props.cardparam.position}</h2>
          <ul className="card__front-stats">
            <MemberCardStat actionName="Sauvé" actionValue={props.cardparam.stats.shootSaved} />
            <MemberCardStat actionName="Dribble" actionValue={props.cardparam.stats.dribbling} />
            <MemberCardStat actionName="Tacle" actionValue={props.cardparam.stats.tackling} />
            <MemberCardStat actionName="Assiste" actionValue={props.cardparam.stats.assist} />
            <MemberCardStat actionName="But" actionValue={props.cardparam.stats.goal} />
          </ul>
        </article>
      </article>

      <article className="card__back">

        <IoArrowUndoCircle className="card-icon icon-back" />

        <div className="card__back-name">
          <h3>{props.cardparam.name}</h3>
          <h2>{props.cardparam.LastName}</h2>
        </div>

        <div className="card__back-infolist">
          <ul className="card__back-infolist-flex">
            <li>{props.cardparam.role}</li>
            <li>{props.cardparam.age} ans</li>
            <li>
              <div>Membre depuis</div>
              <div>:</div>
              <div>{props.cardparam.memberSince} ans</div>
            </li>
            <li>{props.cardparam.aboutMe}</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export {MemberCard};
