/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import { RadioItemProps, SliderProps } from "../../../../models/types";
import PrimaryButton from "../../../ui/buttons/PrimaryButton/PrimaryButton";
import RadioSecondary from "../../../ui/radios/RadioSecondary/RadioSecondary";
import Slider from "../../../ui/Slider/Slider";
import Graph from "../Graph/Graph";
import PensionInfo from "../PensionInfo/PensionInfo";
import styles from "./Calc.module.scss";

const Calculator: FC = () => {
  const [genderValue, setGenderValue] = useState("65"); // гендерный возраст выхода на пенсию

  const [ageValue, setAgeValue] = useState(30); // текущий возраст
  const [ageSliderMax, setAgeSliderMax] = useState(65);

  const numberOfYears = 35; // срок инвестирования => investmentTerm

  // const firstInvestValue = ""; // первичный взнос => downPayment
  const [downPayment, setDownPayment] = useState(1000); // первичный взнос => downPayment

  // const monthInvestValue = ""; // ежемесячный взнос => monthlyInstallment
  const [monthlyInstallment, setMonthlyInstallment] = useState(5000); // ежемесячный взнос => monthlyInstallment

  // const timePaymentsValue = ""; // срок выплат пенсии => periodPaymentPension
  const [periodPaymentPension, setPeriodPaymentPension] = useState(15); // срок выплат пенсии => periodPaymentPension

  const [earlyRretirement, setEarlyRretirement] = useState(true); // ускоренный выход на пенсию

  const yearPersent = 0.05; // годовой процент накопления => annualPercentage
  const generalAccumValue = 5143933; // общие накопления => generalSavings
  const pensionValue = 28577; // размер выплаты пенсии => pension

  const radioItems: RadioItemProps[] = [
    { value: "65", title: "М", name: "gender" },
    { value: "60", title: "Ж", name: "gender" },
  ];

  const ageSlider: SliderProps = {
    title: "Возраст, лет",
    name: "ageSlider",
    min: 18,
    max: ageSliderMax,
    step: 1,
    value: 30,
    emitValue: function (event: React.SetStateAction<number>): void {
      throw new Error("Function not implemented.");
    },
  };

  const downPaymentSlider: SliderProps = {
    title: " Первоначальный взнос, р",
    name: "downPayment",
    min: 0,
    max: 1000000,
    step: 10000,
    value: 10000,
    emitValue: function (event: React.SetStateAction<number>): void {
      throw new Error("Function not implemented.");
    },
  };
  const monthlyInstallmenSlider: SliderProps = {
    title: "Ежемесячный взнос, р.",
    name: "monthlyInstallment",
    min: 0,
    max: 50000,
    step: 500,
    value: 5000,
    emitValue: function (event: React.SetStateAction<number>): void {
      throw new Error("Function not implemented.");
    },
  };
  const periodPaymentPensionSlider: SliderProps = {
    title: "Срок выплаты пенсии, лет",
    name: "periodPaymentPension",
    min: 5,
    max: 30,
    step: 1,
    value: 15,
    emitValue: function (event: React.SetStateAction<number>): void {
      throw new Error("Function not implemented.");
    },
  };

  const onChangeGenderRadio = (valueRadio: React.SetStateAction<string>) => {
    setGenderValue(valueRadio);
    console.log(typeof valueRadio);

    if (valueRadio === "65") {
      setAgeSliderMax(65);
    } else {
      setAgeSliderMax(60);
    }
    // console.log(ageSlider.max);
  };

  const ageSliderHandler = (ageSliderValue: React.SetStateAction<number>) => {
    setAgeValue(ageSliderValue);
  };
  const downPaymentSliderHandler = (downPaymentValue: React.SetStateAction<number>) => {
    setDownPayment(downPaymentValue);
  };
  const monthlyInstallmenSliderHandler = (monthlyInstallmentValue: React.SetStateAction<number>) => {
    setMonthlyInstallment(monthlyInstallmentValue);
  };
  const periodPaymentPensionSliderHandler = (periodPaymentPension: React.SetStateAction<number>) => {
    setPeriodPaymentPension(periodPaymentPension);
  };

  const toogleChecked = () => {
    console.log("toogleChecked");
    setEarlyRretirement((prev) => !prev);
  };

  return (
    <section id="calculator" className={styles["calculator"]}>
      <div className={styles["calculator__container"]}>
        <h2 className={styles["calculator__heading"]}>Калькулятор</h2>
        <h1 className={styles["calculator__subheading"]}>Рассчитайте будущую пенсию</h1>
        <div className={styles["calculator__block"]}>
          <div className={styles["calculator__box"]}>
            <div className={styles["calculator__sliders"]}>
              <form className={styles["slider-block"]}>
                <div className={styles["slider-block__age"]}>
                  <div className={styles["slider-block__switch"]}>
                    <RadioSecondary radioItems={radioItems} emitValue={onChangeGenderRadio} />
                  </div>

                  <Slider
                    title={ageSlider.title}
                    name={ageSlider.name}
                    min={ageSlider.min}
                    max={ageSlider.max}
                    step={ageSlider.step}
                    value={ageSlider.value}
                    emitValue={ageSliderHandler}
                  />
                </div>

                <div>
                  <Slider
                    title={downPaymentSlider.title}
                    name={downPaymentSlider.name}
                    min={downPaymentSlider.min}
                    max={downPaymentSlider.max}
                    step={downPaymentSlider.step}
                    value={downPaymentSlider.value}
                    emitValue={downPaymentSliderHandler}
                  />
                  <Slider
                    title={monthlyInstallmenSlider.title}
                    name={monthlyInstallmenSlider.name}
                    min={monthlyInstallmenSlider.min}
                    max={monthlyInstallmenSlider.max}
                    step={monthlyInstallmenSlider.step}
                    value={monthlyInstallmenSlider.value}
                    emitValue={monthlyInstallmenSliderHandler}
                  />
                  <Slider
                    title={periodPaymentPensionSlider.title}
                    name={periodPaymentPensionSlider.name}
                    min={periodPaymentPensionSlider.min}
                    max={periodPaymentPensionSlider.max}
                    step={periodPaymentPensionSlider.step}
                    value={periodPaymentPensionSlider.value}
                    emitValue={periodPaymentPensionSliderHandler}
                  />
                </div>

                <div className={styles["slider-block__checkbox"]}>
                  <label role="checkbox" aria-checked={true} aria-labelledby="foo" className={styles["r-checkbox"]}>
                    <span
                      onChange={() => setEarlyRretirement(!earlyRretirement)}
                      className={styles["r-checkbox__checker"]}
                    ></span>

                    <div
                      className={
                        earlyRretirement ? styles["r-checkbox__switch_visible"] : styles["r-checkbox__switch_invisible"]
                      }
                    ></div>

                    <input
                      type="checkbox"
                      checked={earlyRretirement}
                      onChange={() => toogleChecked()}
                      className={styles["r-checkbox__input"]}
                    />

                    <div className={styles["r-checkbox__agree-link"]}>Выход на пенсию в 55/60 лет*</div>
                  </label>
                </div>

                {!earlyRretirement && (
                  <p className={styles["slider-block__checkbox-value"]}>
                    * Расчет производится на основании достижения возраста, дающего право на получение страховой пенсии
                    по старости, в случае если это предусмотрено пенсионным договором.
                  </p>
                )}
              </form>
            </div>
            <PensionInfo generalAccumValue={generalAccumValue} pensionValue={pensionValue} />
          </div>

          <div className={styles["calculator__graph-container"]}>
            <Graph />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
