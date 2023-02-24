import React, { FC } from "react";
import { Form, Button } from "react-bootstrap";
import { IFormsOfCreation } from "../../../models/types";
import FormControl from "../../ui/inputs/FormControl";

interface FormCreationProps {
  formsOfCreation: IFormsOfCreation[];
  addObject: React.MouseEventHandler<HTMLButtonElement>;
  ButtonName: string;
}

const FormCreation: FC<FormCreationProps> = ({ formsOfCreation, addObject, ButtonName }) => {
  return (
    <Form>
      {formsOfCreation.map((obj, index) => (
        <FormControl
          key={index}
          value={obj.value}
          placeholder={obj.placeholder}
          setValue={obj.setValue}
          type={obj.type}
        />
      ))}

      <Button variant="outline-success" onClick={addObject}>
        {ButtonName}
      </Button>
    </Form>
  );
};

export default FormCreation;
