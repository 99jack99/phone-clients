export let initials_gen = (
  name: string | undefined,
  surname: string | undefined
) => {
  if (name == undefined || surname == undefined) {
    return "AA";
  } else {
    return `${name[0]}${surname[0]}`;
  }
};
