import React, { useRef, useState } from "react";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import AuditCommittee from "../AuditCommittee/AuditCommittee";
import BoardOfDirectors from "../BoardOfDirectors/BoardOfDirectors";
import ChiefAccountant from "../ChiefAccountant/ChiefAccountant";
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
  const barContainer = useRef<HTMLDivElement>(null);

  const [barContainerTop, setBarContainerTop] = useState(0);
  const [barNavAbsolute, setBarNavAbsolute] = useState(true);
  const [iconTop, setIconTop] = useState(0);

  const [h00, setH00] = useState(552);
  const [h01, setH01] = useState(0);
  const [h02, setH02] = useState(0);
  const [h03, setH03] = useState(0);
  const [h04, setH04] = useState(0);
  const [h05, setH05] = useState(0);
  const [h06, setH06] = useState(0);
  const [h07, setH07] = useState(0);

  return (
    <section className="management">
      <div className="management__container">
        <div className="management__content">
          <div className="management__department" id="governingBody" ref={block1}>
            <GoverningBody />
          </div>

          <div className="management__department" id="boardOfDirectors" ref={block2}>
            <BoardOfDirectors />
          </div>

          <div className="management__department" id="team" ref={block3}>
            <Team />
          </div>

          <div className="management__department" id="auditCommittee" ref={block4}>
            <AuditCommittee />
          </div>

          <div className="management__department" id="chiefAccountant" ref={block5}>
            <ChiefAccountant />
          </div>

          <div className="management__department" id="controller" ref={block6}>
            "Controller"
          </div>

          <div className="management__department" id="generalMeetingOfShareholders" ref={block7}>
            "GeneralMeetingOfShareholders"
          </div>
        </div>

        <div className="management__bar-container" ref={barContainer}>
          <aside className={barNavAbsolute ? "management__bar-nav_absolute" : "management__bar-nav_fixed"}>
            <div className="management__bar-icon" style={{ top: `${iconTop * 48}px` }}>
              <DarkIcon icon="Arrow Down" />
            </div>

            {/* <router-link className="management__bar-link" :to="{ path: '/management#governingBody' }"
            >Правление</router-link
          > */}

            {/* <router-link className="management__bar-link" :to="{ path: '/management#boardOfDirectors' }"
            >Совет директоров</router-link
          > */}

            {/* <router-link className="management__bar-link" :to="{ path: '/management#team' }"
            >Команда</router-link
          > */}

            {/* <router-link className="management__bar-link" :to="{ path: '/management#auditCommittee' }"
            >Ревизионная комиссия</router-link
          > */}

            {/* <router-link className="management__bar-link" :to="{ path: '/management#chiefAccountant' }"
            >Главный бухгалтер</router-link
          > */}
            {/* 
          <router-link className="management__bar-link" :to="{ path: '/management#controller' }"
            >Контролер</router-link
          > */}

            {/* <router-link
            className="management__bar-link"
            :to="{ path: '/management#generalMeetingOfShareholders' }"
            >Собрание акционеров</router-link
          > */}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Management;
