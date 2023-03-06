import React, { useState } from "react";
import {requestLogin} from "./RequestAccount";

export const AccountPage: React.FC = () => {
    // login
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [name, setName] = useState<string>("");

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }

    const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }

    const onClickLoginBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        requestLogin({email: email, password: password}).then(res => {
            let result = JSON.parse(res);

            if(result.code == 0) {
                let data = result.data;
                window.alert("로그인 성공");
            }
        })
    }

    return (
        <>
            <form>
                <h2>Login</h2>
                <input type="email" placeholder="Email" onChange={ onEmailHandler }/>
                <input type="password" placeholder="Password" onChange={ onPasswordHandler } />

                <button onClick={ onClickLoginBtn }>Login</button>
            </form>

        </>
    )
}