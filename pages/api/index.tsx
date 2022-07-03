import type { NextApiRequest, NextApiResponse } from "next";

async function verifyUserCredentials(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const URL = "https://front.evob.dev.marcomapa.com/front_challenge/login/";
  const requestBody = JSON.parse(req.body);
  const { email } = requestBody;
  const { password } = requestBody;

  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("password", password);

  try {
    const response = await fetch(URL, { method: "POST", body: formData });
    const data = await response.json();

    if (data.Ok === "Login Efetuado!") {
      res.status(200).json({ status: "Ok" });
    } else {
      res.status(500).json({ status: "Erro" });
    }
  } catch (err) {
    console.log(err);
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    verifyUserCredentials(req, res);
  }
}
