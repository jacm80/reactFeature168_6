/* eslint-disable no-console */
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

console.error = (message) => {
  if (message.startsWith('Warning: ')) return;
  originalConsoleError(message);
};

console.warn = (message) => {
  originalConsoleWarn(message);
};
