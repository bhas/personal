
export function formatDate(date) {
  if (date === null) {
      return "Present";
  }

  return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
  });
}

export function formatTimeElapsed(startDate, endDate) {
  if (endDate === null) {
      endDate = new Date();
  }

  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const differenceYears = Math.floor(totalMonths / 12);
  const differenceMonths = totalMonths % 12;
  
  const monthText = `${differenceMonths} ${differenceMonths > 1 ? "months" : "month"}`;
  const yearText = `${differenceYears} ${differenceYears > 1 ? "years" : "year"}`;
  if (differenceYears === 0) {
      return monthText;
  }
  else {
      if (differenceMonths === 0) {
          return yearText;
      } 
      else {
          return `${yearText} and ${monthText}`;
      }
  }
}