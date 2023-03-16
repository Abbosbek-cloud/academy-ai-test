import React from "react";
import Card from "../components/main/Card";
import "../styles/main.css";

const Home = () => {
  return (
    <div className="main__wrapper">
      <div className="container">
        <div className="inner__box">
          <h2 className="header_projects">
            Rounded IT kompaniyasi uchun <br /> test topshiriqlari
          </h2>
          <p className="about_projects">
            Quyida <span className="company_name">Rounded IT</span> kompaniyasi
            uchun test topshiriqlarini ko&apos;rishingiz mumkin! Landing page
            ikkita bo&apos;lganligi va bu test topshiriq ekanligini hisobga
            olgan holda ikkala test topshiriqni bir loyihaga single-page
            application shaklida qo'shishga qaror qildim.
          </p>
        </div>
        <div className="cards_container">
          <Card
            name="1-topshiriq"
            img="/project1.png"
            info="1-topshiriq uchun tayyorlangan sahifa"
            link="/project1"
          />
          <Card
            name="2-topshiriq"
            img="/project2.png"
            info="2-topshiriq uchun tayyorlangan sahifa"
            link="/project2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
