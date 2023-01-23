import React, { FC } from "react";
import Logotypes from "../general/Logotypes/Logotypes";
import FooterLink, { FooterLinkProps } from "../ui/FooterLink/FooterLink";
import "./Footer.scss";

const Footer: FC = () => {
  const FirstBlock: FooterLinkProps[] = [
    {
      to: "/support",
      children: "Написать нам", // to: "/support#form",
    },
    {
      to: "/support",
      children: "Вопросы и ответы",
      // to: "/support#questionsAnswers",
    },
    { to: "/about", children: "О Фонде" },
    { to: "/managment", children: "Руководство фонда" },
  ];

  const SecondBlock: FooterLinkProps[] = [
    {
      children: "Раскрытие информации",
      to: "/info",
    },
    {
      children: "Инвестиционная деятельность",
      to: "/investment",
    },
    {
      children: "Для бизнеса",
      to: "/business",
    },
    {
      children: "Калькулятор",
      // to: "/#calculator",
      to: "/",
    },
  ];
  const ThirdBlock: FooterLinkProps[] = [
    {
      children: "Новости",
      to: "/newspages",
    },
    {
      children: "Налогообложение",
      to: "/taxation",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__top-block">
        <div className="footer__logotype">
          <Logotypes isBackgroundWhite />
        </div>

        <div>
          <img className="footer__logos-items" src="/icons/logoNapf.svg" alt="logo" />

          <img className="footer__logos-items" src="/icons/logoAeb.svg" alt="logo" />

          <img className="footer__logos-items" src="/icons/logoExpert.svg" alt="logo" />
        </div>
      </div>

      <div className="footer__phone">
        <h2 className="footer__phone-number">8 800 200-47-66</h2>
      </div>

      <div className="footer__content">
        <div className="footer__nav">
          <div className="footer__column">
            {FirstBlock.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.children}
              </FooterLink>
            ))}
          </div>

          <div className="footer__column">
            {SecondBlock.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.children}
              </FooterLink>
            ))}
          </div>

          <div className="footer__column">
            {ThirdBlock.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.children}
              </FooterLink>
            ))}
          </div>
        </div>

        <div className="footer__copyright-wrapper">
          <div className="footer__copyright">
            <a
              className="footer__copyright-link"
              href="/pdf/infoOpening/archive-aktsionerov/01 Beneficiaries structure 16.03.2021.pdf"
            >
              Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд
              (соответствует информации, направленной в Банк России 16.03.2021 г. для размещения на официальном сайте
              Банка России).
            </a>

            <p className="footer__copyright-npf">©2009-2019 НПФРенессанс. Пенсии.</p>

            <p className="footer__copyright-license">Лицензия № 383/2 от 16 июня 2009 года</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
