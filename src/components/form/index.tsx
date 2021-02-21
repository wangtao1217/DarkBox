import * as React from "react";

import { login } from "../../api/log";

import { LogContext } from "../../content/LogContext";
import Log_container from "./styles";
import Button from "../Button";

const Form: React.FC = () => {
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const log_context = React.useContext(LogContext);
  const { state, dispatch } = log_context;

  const handleLog = () => {
    const result = login({ phone, password }).then((res) => {
      // console.log("🎅");
      // console.log(res);

      if (res) {
        dispatch({
          type: "log_in",
          load: {
            user: { ...res },
          },
        });
      }
      dispatch({ type: "show_form" });
    });
  };
  return (
    <Log_container closed={state.show}>
      <section className="main">
        <span className="close" onClick={()=>{
      dispatch({ type: "show_form" });

        }}>✖</span>
        <input
          type="text"
          placeholder="account..."
          value={phone}
          onChange={(el) => setPhone(el.target.value)}
        />
        <input
          type="text"
          className="pass"
          placeholder="passwords..."
          value={password}
          onChange={(el) => setPassword(el.target.value)}
        />
        <span
          className="hide"
          onClick={() => dispatch({ type: "show_form" })}
        />
        <Button onClick={() => handleLog()}>{"🔖登录 "}</Button>
      </section>
    </Log_container>
  );
};

export default Form;
