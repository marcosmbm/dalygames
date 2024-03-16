import { BASE_URL } from "@/utils/constants";

interface httpRequest {
  endpoint?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: any;
  headers?: HeadersInit;
  revalidate?: number;
  cache?: "no-store" | "default";
}

export async function httpRequest({
  data,
  endpoint,
  method = "GET",
  headers = {},
  cache,
  revalidate,
}: httpRequest): Promise<any> {
  try {
    const requestOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      cache,
      next: {
        revalidate,
      },
    };

    if (data) requestOptions.body = JSON.stringify(data);

    const response = await fetch(`${BASE_URL}${endpoint}`, requestOptions);
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
