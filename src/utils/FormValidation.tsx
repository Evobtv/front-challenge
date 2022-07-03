import { SetStateAction } from "react";

export const handleValidity = (
  event: React.InvalidEvent<HTMLInputElement>,
  callback: React.Dispatch<SetStateAction<string>>
) => {
  event.preventDefault();

  const errors: any = {
    valueMissing: "Este campo é obrigatório.",
    typeMismatch: "Insira um e-mail válido!",
    tooShort: "Sua senha deve ter entre 6 e 20 caracteres.",
    tooLong: "Sua senha deve ter entre 6 e 20 caracteres.",
  };

  const validity: any = event.target.validity;
  for (const key in validity) {
    if (validity[key]) {
      callback(errors[key]);
    }
  }
};
