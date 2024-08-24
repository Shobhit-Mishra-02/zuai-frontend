"use server";

import { UserInterface } from "@/app/types";
import { revalidatePath } from "next/cache";
import { getAuthorizationToken, refreshAuthSession } from "./auth";
import { z } from "zod";

const updateUserFormSchema = z.object({
  id: z.string().trim(),
  email: z.string().trim(),
  firstName: z.string().trim(),
  lastName: z.string().trim().nullable(),
  bio: z.string().nullable(),
});

interface UpdateUserFormStateInterface {
  errors?: {
    id?: string[];
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    bio?: string[];
  };
  message?: string;
}

export async function updateUser(
  state: UpdateUserFormStateInterface,
  formData: FormData
) {
  const validateFields = updateUserFormSchema.safeParse({
    id: formData.get("id"),
    email: formData.get("email"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    bio: formData.get("bio"),
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const token = await getAuthorizationToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/updateUser/" + validateFields.data.id,
    {
      method: "POST",
      body: JSON.stringify({
        email: validateFields.data.email,
        firstName: validateFields.data.firstName,
        lastName: validateFields.data.lastName,
        bio: validateFields.data.bio,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  // await refreshAuthSession(response.headers.get("Authorization") as string);

  const data = (await response.json()) as {
    user?: UserInterface;
    message?: string;
  };

  if (response.ok) {
    revalidatePath("/profile");
    return {
      message: "User updated successfully !!",
    };
  } else {
    return {
      message: data.message,
    };
  }
}

export async function getUser() {
  const token = await getAuthorizationToken();

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/getUser", {
    headers: {
      Authorization: token,
    },
  });

  // await refreshAuthSession(response.headers.get("Authorization") as string);

  const user = (await response.json()) as UserInterface;

  return user;
}
