export function wrapText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

export function getFullName(firstName: string, lastName?: string) {
  let fullName = firstName[0].toUpperCase() + firstName.slice(1);
  if (lastName) {
    fullName += " " + lastName[0].toUpperCase() + lastName.slice(1);
  }
  return fullName;
}
