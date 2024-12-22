export let sort_by_id = (items: Array<any>, order: "asc" | "desc") => {
  if (order == "asc") {
    return items.sort((a, b) => a.id - b.id);
  } else {
    return items.sort((a, b) => b.id - a.id);
  }
};
