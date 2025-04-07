import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { Checkbox, ErrorMessage, CheckboxContainer, CheckboxLabel, EmployeeFormComponent, Title } from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    full_name: Yup.string()
      .required("Field Full Name is required")
      .min(5, "Min 5 symbols")
      .max(50, "Max 50 symbols"),

    age: Yup.number().typeError("Field Age must be number")
      .required("Field Age is required")
      .min(18, "Min age of employee - 18 years old")
      .max(80, "Max age of employee - 80 years old"),

    agreement: Yup.boolean()
      .oneOf([true], "Accept agreement"),

    password: Yup.string()
      .required("Field Password is required")
      // метод matches принимает 2 аргумента (1-регулярное выражение, 2 - текст ошибки)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)'
      ),

    code: Yup.number().typeError("Тип значения число")
      .test('min length', 'Min 3 symbols', (value)=>String(value).length >= 3)
      .test('max length', 'Max 8 symbols', (value)=>String(value).length <= 8)
  });

  const formik = useFormik({
    initialValues: {
      full_name: '',
      age: '',
      agreement: false,
      password: '',
      code: ''
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
        name="full_name"
        label="Full Name *"
        id="name_id"
        placeholder="Enter your full name"
        value={formik.values.full_name}
        onChange={formik.handleChange}
        error={formik.errors.full_name}
      />
      <Input
        name="age"
        label="Age *"
        id="age_id"
        placeholder="Enter your name"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
       <Input
        name="password"
        label="Password *"
        id="password_id"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
       <Input
        name="code"
        label="Code"
        id="code_id"
        placeholder="Enter your employee code"
        value={formik.values.code}
        onChange={formik.handleChange}
        error={formik.errors.code}
      />
      <CheckboxContainer>
        <Checkbox
        name="agreement"
        type="checkbox"
        id="agree_id"
        // Для checkbox используют атрибут checked вместо value
        checked={formik.values.agreement}
        onChange={formik.handleChange}
        />
        <CheckboxLabel htmlFor="agree_id">
          I agree privacy and policy
        </CheckboxLabel>
      </CheckboxContainer>
      <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
      {/* <Input
        name="checkbox"
        label="Правила использования *"
        type="checkbox"
        checked={formik.values.agreement}
        onChange={formik.handleChange}
        error={formik.errors.agreement}
      /> */}
      <Button name="Create" />
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
