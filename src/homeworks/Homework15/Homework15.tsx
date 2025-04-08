import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../components/Input/Input";
import {
  Homework15Container,
  Homework15Form,
} from "./styles";
import Button from "../../components/Button/Button";
import { Homework15FormValues } from "./types";
import Checkbox from "../../components/Checkbox/Checkbox";


function Homework15() {
  const validationSchema = Yup.object().shape({
    // code: Yup.string()
    // .required('Поле обязательное')
    // .matches(/^\d{6}$/, 'Код должен содержать 6 символов'),

    code: Yup.number()
      .required("Field Validation code is required")
      .typeError("Field Age must be number")
      .test(
        "required symbols",
        "Required symbols - 6",
        (value) => String(value).length === 6
      ),

    privacy: Yup.boolean().oneOf(
      [true],
      "You must agree with privacy and policy"
    ),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
      privacy: false,
    } as Homework15FormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: Homework15FormValues, formikHelpers) => {
      console.table(values);
      console.log("Вы успешно вошли");
      formikHelpers.resetForm()
    },
  });

  return (
    <Homework15Container>
      <Homework15Form onSubmit={formik.handleSubmit}>
        <Input
          name="code"
          label="Validation code *"
          id="code_id"
          placeholder="Enter your code"
          type="number"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.errors.code}
        />
          <Checkbox
            name="privacy"
            label="Privacy and Policy"
            id="privacy_id"
            checked={formik.values.privacy}
            onChange={formik.handleChange}
            error={formik.errors.privacy}
          />
        <Button name="Login" />
      </Homework15Form>
    </Homework15Container>
  );
}

export default Homework15;
