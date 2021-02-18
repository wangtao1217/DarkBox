import * as React from 'react'

import { login } from '../../api/log';

import { LogContext } from '../../content/LogContext';
import Log_container from './styles'


const Form: React.FC= () => {
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const log_context = React.useContext(LogContext);
    const { state, dispatch } = log_context
  
    const handleLog =  async () => {
      const result = await login({ phone, password });
      console.log('===Result===');
      console.log(result);
      if (result) {
        dispatch({
          type: "log_in",
          load: {
            user: { ...result },
          },
        });
      }
      dispatch({ type: "show_form"});
    };
    return (
      <Log_container closed={state.show}>
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
        <span className="hide" onClick={() => dispatch({ type: "show_form" })}/>
        <button onClick={handleLog}>{"登录"}</button>
        {/* <span className="close" onClick={() => dispatch({ type: "show_form" })}>
          <i className="fas fa-times"></i>
        </span> */}
      </Log_container>
    );
  };
  
  export default Form
;