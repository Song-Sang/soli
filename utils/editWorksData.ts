export const editWorksData = (combinedWorksData: WORKS_DATA_INNER[]) => {
  const uniqueTitles = new Set();

  return combinedWorksData.filter((item) => {
    if (uniqueTitles.has(item.title)) {
      return false;
    }
    uniqueTitles.add(item.title);
    return true;
  });
};
