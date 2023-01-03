export const hasTextInName = (name: string, text: string) => {
  return name.toLowerCase().includes(text.toLowerCase());
};
