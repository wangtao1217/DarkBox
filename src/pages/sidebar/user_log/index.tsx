import React, { useEffect, useState, useContext } from "react";

import { LogContainer } from "./style";
import { LogContext } from "../../../content/LogContext";
import Avater from "../../../components/avater";
// import 

const initial_profile = {
  avatarUrl: null,
  nickname: null,
  userId: null,
  description: null,
};

const Log = () => {
  const [profile, setProfile] = useState(initial_profile);
  const { state, dispatch } = useContext(LogContext);

  const handle_login = () => dispatch({ type: "show_form" });
  const handle_logout = () => dispatch({ type: "log_out" });
  useEffect(() => {
    if (state.user.profile) {
      setProfile(state.user.profile);
    }
  }, [state]);
  return (
    <LogContainer>
      {state.islogged ? (
        <>
          <Avater picUrl={profile.avatarUrl} />
          <span className="user-name" onClick={handle_logout}>
            {profile.nickname}
          </span>
        </>
      ) : (
        <>
          <Avater picUrl="''" />
          <span className="user-name" onClick={() => handle_login()}>
            {"点击登录"}
          </span>
        </>
      )}
    </LogContainer>
  );
};

export default Log;
