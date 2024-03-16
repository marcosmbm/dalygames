export async function sleep(delay: number) {
  return await new Promise((resolve) => setTimeout(resolve, delay));
}
