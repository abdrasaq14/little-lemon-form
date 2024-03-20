import littleLemmon from "../assets/little-lemon.png";
import MainButton from "../component/MainButton/mainButton.tsx";
import LittleLemonFormStyle from "./LittleLemonFormStyle.tsx";
import { ChangeEvent, useState } from "react";
import Loader from "../component/Loader/Loader.tsx";

export default function LittleLemonForm() {
  const [isloading, setIsLoading] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    reservationDate: "",
  });
  const handleFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formInput.name ||
      !formInput.email ||
      !formInput.phone ||
      !formInput.reservationDate
    )
      return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Reservation made successfully");
    }, 2000);
    setFormInput({
      name: "",
      email: "",
      phone: "",
      reservationDate: "",
    });
  };

  return (
    <LittleLemonFormStyle className="form-component-main-body-wrapper">
      <div className="form-component-inner-body-wrapper">
        <div className="form-component-wrapper">
          <div className="form-component-logo-wrapper">
            <img src={littleLemmon} alt="" />
          </div>
          <p className="form-component-title"></p>
          <form className="form-component" onSubmit={handleSubmit}>
            <fieldset className="input-wrapper">
              <label htmlFor="name"> Name:</label>
              <input
                type="text"
                name="name"
                value={formInput.name}
                placeholder="John Doe"
                onChange={handleFormInput}
                required
              />
            </fieldset>
            <fieldset className="input-wrapper">
              <label htmlFor="email"> Email Address:</label>
              <input
                type="text"
                name="email"
                value={formInput.email}
                placeholder="johndoe@gmail.com"
                onChange={handleFormInput}
                required
              />
            </fieldset>
            <fieldset className="input-wrapper">
              <label htmlFor="password">Phone:</label>
              <input
                type="text"
                name="phone"
                value={formInput.phone}
                placeholder="+2348111111"
                onChange={handleFormInput}
              />
            </fieldset>
            <fieldset className="input-wrapper">
              <label htmlFor="password">Reservation Date:</label>
              <input
                type="datetime-local"
                name="reservationDate"
                value={formInput.reservationDate}
                placeholder="********"
                onChange={handleFormInput}
              />
            </fieldset>

            <MainButton
              button_text={"Make Reservation"}
              isLoading={isloading}
              loaderComponent={<Loader />}
            />
          </form>
        </div>
      </div>
    </LittleLemonFormStyle>
  );
}
