import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./styles.css";

function Homework08() {

  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const showUserPassword = () => {
    setShowPassword(true);
  };

  const hideUserPassword = () => {
    setShowPassword(false);
  };

  return (
    <div className="homework08-container">
      <h2>Change password</h2>
      <div className="input-container">
      <Input
        name="user_password"
        label="Password: "
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={changePassword}
      />
      </div>
      <Button name="SHOW PASSWORD" onClick={showUserPassword} />
      {showPassword && <div>{password}</div>}
      <Button name="HIDE PASSWORD" onClick={hideUserPassword} />
    </div>
  );
}

export default Homework08;
