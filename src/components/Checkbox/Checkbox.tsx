import { CheckboxComponent } from "./styles";
import { CheckboxProps } from "./types";

function Checkbox({ name, type = 'checkbox', id, checked, onChange }: CheckboxProps) {
  return (
    <CheckboxComponent
      name={name}
      type={type}
      id={id}
      checked={checked}
      onChange={onChange}
    >
    </CheckboxComponent>
  );
}

export default Checkbox;
