"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { UserInterface } from "../types";

export async function setAuthSession(token: string) {
  const session = token;
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function refreshAuthSession(rawToken: string) {
  const token = jwt.sign(
    { token: rawToken },
    process.env.NEXT_PUBLIC_JWT_SECRET as string
  );
  await setAuthSession(token);
}

export async function checkAuth() {
  const session = cookies().get("session")?.value;

  if (!session) {
    redirect("/login");
  }

  try {
    jwt.verify(session, process.env.NEXT_PUBLIC_JWT_SECRET as string);
  } catch (error) {
    redirect("/login");
  }
}

const loginFormSchema = z.object({
  email: z.string().trim(),
  password: z.string().trim(),
});

interface LoginFormStateInterface {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
}

export async function login(
  state: LoginFormStateInterface,
  formData: FormData
) {
  const validateFields = loginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
    method: "POST",
    body: JSON.stringify({
      email: validateFields.data.email,
      password: validateFields.data.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = (await response.json()) as {
      token: string;
      user: UserInterface;
    };

    await refreshAuthSession(data.token);

    redirect("/");
  } else {
    return {
      message: "Invalid credentials !!",
    };
  }
}

const signupFormSchema = z.object({
  email: z.string().trim(),
  password: z.string().trim(),
  confirmPassword: z.string().trim(),
  firstName: z.string().trim(),
  lastName: z.string().trim().nullable(),
});

interface SignupFormStateInterface {
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    firstName?: string[];
    lastName?: string[];
  };
  message?: string;
}

export async function signup(
  state: SignupFormStateInterface,
  formData: FormData
) {
  const validateFields = signupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  if (validateFields.data.password !== validateFields.data.confirmPassword) {
    return {
      message: "passwords are not same !!",
    };
  }

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/signup", {
    method: "POST",
    body: JSON.stringify({
      email: validateFields.data.email,
      password: validateFields.data.password,
      firstName: validateFields.data.firstName,
      lastName: validateFields.data.lastName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (response.ok) {
    redirect("/login");
  } else {
    return {
      message: data.message,
    };
  }
}

export async function isAuthorized() {
  const session = cookies().get("session")?.value;

  if (!session) {
    return false;
  }

  try {
    jwt.verify(session, process.env.NEXT_PUBLIC_JWT_SECRET as string);
    return true;
  } catch (error) {
    return false;
  }
}

export async function getAuthorizationToken() {
  const token = cookies().get("session")?.value;

  if (!token) {
    redirect("/login");
  }

  const decryptData = jwt.verify(
    token,
    process.env.NEXT_PUBLIC_JWT_SECRET as string
  ) as { token: string };

  return decryptData.token;
}

export async function logout() {
  if (cookies().has("session")) {
    cookies().delete("session");
  }

  redirect("/login");
}
