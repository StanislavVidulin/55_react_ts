import { CheckboxComponent, CheckboxContainer, ErrorMessage } from "./styles";
import { CheckboxProps } from "./types";

function Checkbox({ name, id, checked, onChange, error }: CheckboxProps) {
  return (
    <CheckboxContainer>
    <CheckboxComponent
      name={name}
      type='checkbox'
      id={id}
      checked={checked}
      onChange={onChange}
    >
    </CheckboxComponent>
      <ErrorMessage>{error}</ErrorMessage>
      </CheckboxContainer>
  );
}

export default Checkbox;
