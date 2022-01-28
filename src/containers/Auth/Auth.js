import React from "react";
import classes from "./Auth.module.scss";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { validate, validateForm } from "../../form/formFramework";
import axios from "axios";

class Auth extends React.Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        label: "Email",
        type: "email",
        errorMessage: "Введите корректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        label: "Пароль",
        type: "password",
        errorMessage: "Введите корректный пароль",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  loginHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1tleQYg-9jKBvmfpGmYNTiFgH0fHhcz0",
        authData
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  registerHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1tleQYg-9jKBvmfpGmYNTiFgH0fHhcz0",
        authData
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    // let isFormValid = true;
    //
    // Object.keys(formControls).forEach((name) => {
    //   isFormValid = formControls[name].valid && isFormValid;
    // });

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          label={control.label}
          errorMessage={control.errorMessage}
          valid={control.valid}
          touched={control.touched}
          shouldValidation={!!control.validation}
          onChange={(event) =>
            this.changeHandler(event.target.value, controlName)
          }
        />
      );
    });
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {this.renderControls()}

            <Button
              type="Primary"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Войти
            </Button>
            <Button
              type="Success"
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Регистрация
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
