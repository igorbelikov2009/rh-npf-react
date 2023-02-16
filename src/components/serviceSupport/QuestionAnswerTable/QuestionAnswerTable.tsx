import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useState } from "react";
import ExpandingPanel from "../../general/expanding/ExpandingPanel/ExpandingPanel";
import TableQ, { TableQProps } from "../TableQ/TableQ";
import styles from "./QuestionAnswerTable.module.scss";

const QuestionAnswerTable: FC = () => {
  const [isVisible, setVisible] = useState(false);

  const tableQustion01: TableQProps = {
    headings: ["Пенсионные суммы за счет взносов компании", "Выкупная сумма", "Пенсия"],

    arrayRows: [
      ["Взносы", "НДФЛ", "НДФЛ"],
      ["Инвестиционный доход", "НДФЛ", "НДФЛ"],
    ],
  };
  const tableQustion02: TableQProps = {
    headings: ["Пенсионные суммы за счет взносов участника", "Выкупная сумма", "Пенсия"],

    arrayRows: [
      [" Взносы", " Удерживается сумма НДФЛ, соответствующая социальному налоговому вычету за период участия"],
      ["Инвестиционный доход", "НДФЛ", "НДФЛ не удерживается *"],
    ],
  };

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="expanding">
      <ExpandingPanel
        isContentVisible={isVisible}
        panelName="Какие налоги уплачиваются в связи с участием в пенсионной программе?"
        onClickExpanding={expanderHandler}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div className={styles.expanding__content}>
              <p className={styles["paragraph"]}>Порядок налогообложения при выплате пенсий и выкупных сумм:</p>

              <TableQ arrayRows={tableQustion01.arrayRows} headings={tableQustion01.headings} />

              <p className={styles["paragraph"]}>
                <br />
              </p>

              <TableQ arrayRows={tableQustion02.arrayRows} headings={tableQustion02.headings} />

              <p className={styles["paragraph"]}>
                * Независимо от факта получения / неполучения социального налогового вычета
              </p>

              <p className={styles["paragraph"]}>
                Участникам пенсионных программ предоставляются налоговые льготы - возможность получить социальный
                налоговый вычет в размере 13% от суммы уплаченных взносов по личному договору негосударственного
                пенсионного обеспечения (максимальный размер суммы взносов для получения налогового вычета – 120 000
                рублей/год).
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionAnswerTable;
