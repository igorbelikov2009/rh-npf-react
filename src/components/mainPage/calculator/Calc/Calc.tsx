/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import PrimaryButton from "../../../ui/buttons/PrimaryButton/PrimaryButton";
import RadioSecondary from "../../../ui/radios/RadioSecondary/RadioSecondary";
import Slider from "../../../ui/Slider/Slider";
import Graph from "../Graph/Graph";
import PensionInfo from "../PensionInfo/PensionInfo";
import styles from "./Calc.module.scss";

export interface RadioItemProps {
  value: string;
  title: string;
  name: string;
}

interface SliderProps {
  title: string;
  name: string;
  min: number;
  max: number;
  step: number;
  currentValue: number;
}

const Calculator: FC = () => {
  const [genderValue, setGenderValue] = useState("65"); // гендерный возраст выхода на пенсию

  // console.log(genderValue);
  const ageValue = 30; // текущий возраст
  const numberOfYears = 35; // срок инвестирования => investmentTerm
  const firstInvestValue = ""; // первичный взнос => downPayment
  const monthInvestValue = ""; // ежемесячный взнос => monthlyInstallment
  const timePaymentsValue = ""; // срок выплат пенсии => periodPaymentPension
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
    max: 65,
    step: 1,
    currentValue: 30,
  };

  const sliders: SliderProps[] = [
    {
      title: " Первоначальный взнос, р",
      name: "firstPayment",
      min: 0,
      max: 1000000,
      step: 10000,
      currentValue: 10000,
    },
    {
      title: "Ежемесячный взнос, р.",
      name: "monthlyPayment",
      min: 0,
      max: 50000,
      step: 500,
      currentValue: 5000,
    },
    {
      title: "Срок выплаты пенсии, лет",
      name: "dueDate",
      min: 5,
      max: 30,
      step: 1,
      currentValue: 15,
    },
  ];

  // validations: {
  //   genderValue: { minValue: minValue(65), maxValue: maxValue(65) },
  //   sliders: { required, numeric },
  //   ageSlider: { required, numeric },
  // },

  const onChangeGenderRadio = (valueRadio: React.SetStateAction<string>) => {
    setGenderValue(valueRadio);
    console.log("genderValue :" + genderValue);
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
                    //  value={ageSlider.currentValue}
                    // @input="onInputAgeSlider"
                  />

                  {/*  Так @input связать без метода
                     @input="ageSlider.currentValue = $event"--> */}
                </div>

                {sliders.map((slid, index) => (
                  <Slider
                    key={index}
                    title={slid.title}
                    name={slid.name}
                    min={slid.min}
                    max={slid.max}
                    step={slid.step}
                    //   :value="slider.currentValue"
                    // @input="onInputSlider($event, slider.name)"
                  />
                ))}
                {/* <Slider /> */}

                {/*  onInputSlider($event, slider.name)
                         @input="slider.currentValue = $event" --> */}

                <div className={styles["slider-block__checkbox"]}>
                  <label role="checkbox" aria-checked="false" aria-labelledby="foo" className={styles["r-checkbox"]}>
                    <span className={styles["r-checkbox__checker"]}></span>

                    <button className={styles["r-checkbox__switch_invisible"]}></button>

                    <input id="Checkbox" type="checkbox" className={styles["r-checkbox__input"]} />

                    <div className={styles["r-checkbox__agree-link"]}>Учитывать социальный налоговый вычет</div>
                  </label>
                </div>

                <div className={styles["slider-block__button-container"]}>
                  <PrimaryButton children="Оформить договор" />
                </div>
              </form>
            </div>
            <PensionInfo generalAccumValue={generalAccumValue} pensionValue={pensionValue} />
            {/* <PensionInfo  pensionValue="pensionValue" generalAccumValue="generalAccumValue" /> */}
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
