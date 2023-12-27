export function decycle(obj: any, stack: any[] = []): any {
  if (!obj || typeof obj !== 'object') return obj;

  if (stack.includes(obj)) return null;

  let s = stack.concat([obj]);

  return Array.isArray(obj)
    ? obj.map((x) => decycle(x, s))
    : Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, decycle(v, s)])
      );
}

export async function delay(timeOut: number) {
  return new Promise((resolve) => setTimeout(resolve, timeOut));
}

export function redirectTo(link: string) {
  window.location.href = link;
}
