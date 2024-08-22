"use server";

import { UserInterface } from "@/app/types";
import { revalidatePath } from "next/cache";
import { getUserId } from "./auth";
import { getAuthorizationToken } from "./auth";
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

  const data = (await response.json()) as {
    user?: UserInterface;
    message?: string;
  };

  console.log(data);

  if (response.ok) {
    revalidatePath("/profile");
    return {
      message: "user created",
    };
  } else {
    return {
      message: data.message,
    };
  }
}

export async function getUser() {
  const userId = await getUserId();
  const token = await getAuthorizationToken();

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/getUser/" + userId,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  const user = (await response.json()) as UserInterface;

  return user;
}
