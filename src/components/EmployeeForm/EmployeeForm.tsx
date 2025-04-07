import { useFormik } from "formik";
import * as Yup from "yup";

import { EmployeeFormComponent, Title } from "./styles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Field Full Name is required")
      .min(5, "Min 5 symbols")
      .max(50, "Max 50 symbols"),

    age: Yup.number()
      .required("Field Age is required")
      .min(18, "Min 18")
      .max(80, "Max 80"),

    checkbox: Yup.boolean()
    //   .required("Field is required")
      .oneOf([true], "You must accept to the terms of use")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      checkbox: false,
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

  console.log(formik);

  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <Title>EmployeeForm</Title>
      <Input
        name="name"
        label="Full Name *"
        id="name_id"
        placeholder="Enter your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Input
        name="age"
        label="Age *"
        id="age_id"
        placeholder="Enter your name"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <Input
        name="checkbox"
        label="Правила использования *"
        type="checkbox"
        checked={formik.values.checkbox}
        onChange={formik.handleChange}
        error={formik.errors.checkbox}
      />
      <Button name="Create" />
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
