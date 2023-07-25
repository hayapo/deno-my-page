export function calcAge(birthdate: string) {
  const dateOfBirth = new Date(birthdate);
  const monthOfBirth = dateOfBirth.getMonth() + 1;
  const today = new Date();
  if (monthOfBirth > today.getMonth() + 1) {
    return today.getFullYear() - dateOfBirth.getFullYear();
  } else {
    return today.getFullYear() - dateOfBirth.getFullYear() - 1;
  }
}
