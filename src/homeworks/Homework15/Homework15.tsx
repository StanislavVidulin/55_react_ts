import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../components/Input/Input";
import {
  CheckboxLabel,
  CheckBoxWrapper,
  Homework15Container,
  Homework15Form,
} from "./styles";
import Button from "../../components/Button/Button";
import { Homework15FormValues } from "./types";
import Checkbox from "../../components/Checkbox/Checkbox";
import { ErrorMessage } from "../../components/Checkbox/styles";

function Homework15() {
  const schema = Yup.object().shape({
    code: Yup.number()
      .required("Field Validation code is required")
      .typeError("Field Age must be number")
      .test(
        "required symbols",
        "Required symbols - 6",
        (value) => String(value).length === 6
      ),

    agreement: Yup.boolean().oneOf(
      [true],
      "You must agree with privacy and policy"
    ),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
      agreement: false,
    } as Homework15FormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: Homework15FormValues) => {
      console.table(values);
      console.log("Вы успешно вошли");
    },
  });

  return (
    <Homework15Container>
      <Homework15Form onSubmit={formik.handleSubmit}>
        <Input
          name="code"
          label="Validation code *"
          id="code_id"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.errors.code}
        />
        <CheckBoxWrapper>
          <Checkbox
            name="agreement"
            type="checkbox"
            id="agree_id"
            checked={formik.values.agreement}
            onChange={formik.handleChange}
          />
          <CheckboxLabel htmlFor="agree_id">Privacy and policy *</CheckboxLabel>
          </CheckBoxWrapper>
        <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
        <Button name="Login" />
      </Homework15Form>
    </Homework15Container>
  );
}

export default Homework15;
