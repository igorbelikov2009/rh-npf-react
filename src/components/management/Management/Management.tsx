import React, { useEffect, useRef, useState } from "react";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import SidebarLink, { ISidebarLink } from "../../ui/links/SidebarLink/SidebarLink";
import AuditCommittee from "../AuditCommittee/AuditCommittee";
import BoardOfDirectors from "../BoardOfDirectors/BoardOfDirectors";
import ChiefAccountant from "../ChiefAccountant/ChiefAccountant";
import Controller from "../Controller/Controller";
import GeneralMeetingOfShareholders from "../GeneralMeetingOfShareholders/GeneralMeetingOfShareholders";
import GoverningBody from "../GoverningBody/GoverningBody";
import Team from "../Team/Team";
import "./Management.scss";

const Management = () => {
  const block1 = useRef<HTMLDivElement>(null);
  const block2 = useRef<HTMLDivElement>(null);
  const block3 = useRef<HTMLDivElement>(null);
  const block4 = useRef<HTMLDivElement>(null);
  const block5 = useRef<HTMLDivElement>(null);
  const block6 = useRef<HTMLDivElement>(null);
  const block7 = useRef<HTMLDivElement>(null);
  const refBbarContainer = useRef<HTMLDivElement>(null);

  const [barContainerTop, setBarContainerTop] = useState(0);
  const [barNavAbsolute, setBarNavAbsolute] = useState(true);
  const [idSidebarLink, setIdSidebarLink] = useState("0");
  const [iconTop, setIconTop] = useState(0);

  const [h00] = useState(452); // высота (topBlock - 100px)
  const [h01, setH01] = useState(0);
  const [h02, setH02] = useState(0);
  const [h03, setH03] = useState(0);
  const [h04, setH04] = useState(0);
  const [h05, setH05] = useState(0);
  const [h06, setH06] = useState(0);
  const [h07, setH07] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const sidebarLinks: ISidebarLink[] = [
    { itemName: "Правление", id: "0" },
    { itemName: "Совет директоров", id: "1" },
    { itemName: "Команда", id: "2" },
    { itemName: "Ревизионная комиссия", id: "3" },
    { itemName: "Главный бухгалтер", id: "4" },
    { itemName: "Контролер", id: "5" },
    { itemName: "Собрание акционеров", id: "6" },
  ];

  useEffect(() => {
    getTopBarContainer();
    changeStyleBarNav();
    getIconTop();

    document.addEventListener("scroll", scrollHandler);

    // этот код срабатывает при размонтировании! Идеально подходит для нашего случая использования!
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barContainerTop]);

  const scrollHandler = (event: any) => {
    getTopBarContainer();
    getTopAllComponents();
    setScrollY(window.scrollY);
  };
  // console.log(scrollY);

  const getTopBarContainer = () => {
    if (refBbarContainer.current) {
      setBarContainerTop(refBbarContainer.current.getBoundingClientRect().top);
    }
  };
  // console.log(barContainerTop);

  const changeStyleBarNav = () => {
    if (barContainerTop > 0) {
      setBarNavAbsolute(true);
    } else {
      setBarNavAbsolute(false);
    }
  };
  // console.log(barNavAbsolute);

  const getTopAllComponents = () => {
    if (block1.current) {
      setH01(block1.current.getBoundingClientRect().height);
    }

    if (block2.current) {
      setH02(block2.current.getBoundingClientRect().height);
    }

    if (block3.current) {
      setH03(block3.current.getBoundingClientRect().height);
    }

    if (block4.current) {
      setH04(block4.current.getBoundingClientRect().height);
    }

    if (block5.current) {
      setH05(block5.current.getBoundingClientRect().height);
    }

    if (block6.current) {
      setH06(block6.current.getBoundingClientRect().height);
    }

    if (block7.current) {
      setH07(block7.current.getBoundingClientRect().height);
    }
  };

  const getIconTop = () => {
    if (scrollY >= h00 && scrollY < h00 + h01) {
      setIconTop(0);
      setIdSidebarLink("0");
    } else if (scrollY >= h00 + h01 && scrollY < h00 + h01 + h02) {
      setIconTop(1);
      setIdSidebarLink("1");
    } else if (scrollY >= h00 + h01 + h02 && scrollY < h00 + h01 + h02 + h03) {
      setIconTop(2);
      setIdSidebarLink("2");
    } else if (scrollY >= h00 + h01 + h02 + h03 && scrollY < h00 + h01 + h02 + h03 + h04) {
      setIconTop(3);
      setIdSidebarLink("3");
    } else if (scrollY >= h00 + h01 + h02 + h03 + h04 && scrollY < h00 + h01 + h02 + h03 + h04 + h05) {
      setIconTop(4);
      setIdSidebarLink("4");
    } else if (scrollY >= h00 + h01 + h02 + h03 + h04 + h05 && scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21) {
      setIconTop(5);
      setIdSidebarLink("5");
    } else if (
      scrollY >= h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21 &&
      scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 + h07
    ) {
      setIconTop(6);
      setIdSidebarLink("6");
    }
  };

  const getValueId = (id: string) => {
    setIdSidebarLink(id);
  };

  return (
    <section className="management">
      <div className="management__container">
        <div className="management__content">
          <div className="management__department" id="Правление" ref={block1}>
            <GoverningBody />
          </div>

          <div className="management__department" id="Совет директоров" ref={block2}>
            <BoardOfDirectors />
          </div>

          <div className="management__department" id="Команда" ref={block3}>
            <Team />
          </div>

          <div className="management__department" id="Ревизионная комиссия" ref={block4}>
            <AuditCommittee />
          </div>

          <div className="management__department" id="Главный бухгалтер" ref={block5}>
            <ChiefAccountant />
          </div>

          <div className="management__department" id="Контролер" ref={block6}>
            <Controller />
          </div>

          <div className="management__department" id="Собрание акционеров" ref={block7}>
            <GeneralMeetingOfShareholders />
          </div>
        </div>

        <div className="management__bar-container" ref={refBbarContainer}>
          <aside className={barNavAbsolute ? "management__bar-nav_absolute" : "management__bar-nav_fixed"}>
            <div className="management__bar-icon" style={{ top: `${iconTop * 48}px` }}>
              <DarkIcon icon="Arrow Down" />
            </div>

            {sidebarLinks.map((link, index) => (
              <SidebarLink
                key={index}
                itemName={link.itemName}
                id={link.id}
                isActive={index === Number(idSidebarLink)}
                emitValueId={getValueId}
              />
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Management;
