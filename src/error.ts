export function setupSentry(element: HTMLButtonElement) {
  element.addEventListener("click", () => {
    throw new Error("Sentry Error!");
  });
}
