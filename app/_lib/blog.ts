"use server";

import { BlogInterface } from "@/app/types";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getAuthorizationToken, refreshAuthSession } from "./auth";
import { redirect } from "next/navigation";

const CreateBlogFormSchema = z.object({
  title: z.string().trim(),
  content: z.string().trim(),
});

interface CreateBlogFormStateInterface {
  errors?: {
    title?: string[];
    content?: string[];
  };
  message?: string;
}

export async function createBlog(
  state: CreateBlogFormStateInterface,
  formData: FormData
) {
  const validateFields = CreateBlogFormSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const token = await getAuthorizationToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/createBlog",
    {
      method: "POST",
      body: JSON.stringify({
        title: validateFields.data.title,
        content: validateFields.data.content,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  const data = await response.json();

  await refreshAuthSession(response.headers.get("Authorization") as string);

  if (response.ok) {
    revalidatePath("/");
    return {
      message: "Blog created successfully !!",
    };
  } else {
    return {
      message: data.message,
    };
  }
}

const UpdateBlogFormSchema = z.object({
  id: z.string().trim(),
  title: z.string().trim(),
  content: z.string().trim(),
});

interface UpdateBlogFormStateInterface {
  errors?: {
    id?: string[];
    title?: string[];
    content?: string[];
  };
  message?: string;
}

export async function updateBlog(
  state: UpdateBlogFormStateInterface,
  formData: FormData
) {
  const validateFields = UpdateBlogFormSchema.safeParse({
    id: formData.get("id"),
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const token = await getAuthorizationToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/updateBlog/" + validateFields.data.id,
    {
      method: "POST",
      body: JSON.stringify({
        title: validateFields.data.title,
        content: validateFields.data.content,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  const data = await response.json();

  await refreshAuthSession(response.headers.get("Authorization") as string);

  if (response.ok) {
    revalidatePath("/editBlog/" + validateFields.data.id);
    return {
      message: "Blog updated successfully !!",
    };
  }

  return {
    message: data.message,
  };
}

export async function getBlog(id: string) {
  const token = await getAuthorizationToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/getBlog/" + id,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  const data = (await response.json()) as { blog: BlogInterface };

  return data.blog;
}

const LikeBlogFormSchema = z.object({
  id: z.string().trim(),
});

interface LikeBlogFormStateInterface {
  errors?: {
    id?: string[];
  };
  message?: string;
}

export async function likeBlog(
  state: LikeBlogFormStateInterface,
  formData: FormData
) {
  const validateFields = LikeBlogFormSchema.safeParse({
    id: formData.get("id"),
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const token = await getAuthorizationToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/likeBlog/" + validateFields.data.id,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  // await refreshAuthSession(response.headers.get("Authorization") as string);

  const data = await response.json();

  if (response.ok) {
    revalidatePath("/blog/" + validateFields.data.id);
    return {
      message: "you liked the blog",
    };
  } else {
    return {
      message: data.message,
    };
  }
}

const disLikeBlogFormSchema = z.object({
  id: z.string().trim(),
});

interface disLikeBlogFormStateInterface {
  errors?: {
    id?: string[];
  };
  message?: string;
}

export async function disLikeBlog(
  state: disLikeBlogFormStateInterface,
  formData: FormData
) {
  const validateFields = disLikeBlogFormSchema.safeParse({
    id: formData.get("id"),
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const token = await getAuthorizationToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/dislikeBlog/" + validateFields.data.id,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  // await refreshAuthSession(response.headers.get("Authorization") as string);

  const data = await response.json();

  if (response.ok) {
    revalidatePath("/blog/" + validateFields.data.id);
    return {
      message: "you liked the blog",
    };
  } else {
    return {
      message: data.message,
    };
  }
}

interface deleteBlogFormStateInterface {
  errors?: {
    id?: string[];
  };
  message?: string;
}

export async function deleteBlog(
  state: deleteBlogFormStateInterface,
  formData: FormData
) {
  const validateFields = disLikeBlogFormSchema.safeParse({
    id: formData.get("id"),
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const token = await getAuthorizationToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/deleteBlog",
    {
      method: "POST",
      body: JSON.stringify({
        id: validateFields.data.id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  const data = await response.json();

  if (response.ok) {
    revalidatePath("/");
    redirect("/");
  } else {
    return {
      message: data.message,
    };
  }
}

export async function getBlogPage(page: number = 1, limit: number = 5) {
  const token = await getAuthorizationToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/getBlogPage?page=${page}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  // await refreshAuthSession(response.headers.get("Authorization") as string);

  const data = (await response.json()) as {
    blogs: BlogInterface[];
    totalBlogCount: number;
  };
  return data;
}

export async function getTopBlogs(limit: number) {
  const token = await getAuthorizationToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/getTopBlogs?limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  // await refreshAuthSession(response.headers.get("Authorization") as string);
  const data = (await response.json()) as {
    blogs: BlogInterface[];
  };

  return data.blogs;
}
