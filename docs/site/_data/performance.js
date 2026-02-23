function getPacificDateInfo(dateInput) {
  if (dateInput === undefined || dateInput === null) return {};

  const dateObj = new Date(dateInput);
  if (Number.isNaN(dateObj.getTime())) return {};

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(dateObj).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});

  const displayDate = `${parts.year}-${parts.month}-${parts.day}`;
  const displayTime = `${parts.hour}:${parts.minute}:${parts.second} PT`;

  return {
    timestamp: dateObj.getTime(),
    displayDate,
    tooltip: `${displayDate} ${displayTime}`,
  };
}

module.exports = function () {
  return new Promise(async (resolve, reject) => {
    // console.log("FETCHING performance data");
    // console.trace();
    // see details about this API in readme
    const perfAudits = await fetch("https://18ap0iejha.execute-api.us-west-1.amazonaws.com/?site=hub.innovation.ca.gov");
    const perfData = await perfAudits.json();
    let pagePerformanceData = {};
    perfData.forEach(item => {
      if(item.performance) {
        pagePerformanceData[item.pageURL.replace('https://hub.innovation.ca.gov/','/')] = {
          lighthouse: {
            performance: item.performance,
            accessibility: 1,
            lastmod: getPacificDateInfo(item.lastmod),
            lastreviewed: getPacificDateInfo(item.lastreviewed),
          }
        }
      }
      if(item.accessibility) {
        pagePerformanceData[item.pageURL.replace('https://hub.innovation.ca.gov/','/')].lighthouse.accessibility = item.accessibility;
      }
    })
  
    console.log(pagePerformanceData);
    resolve(pagePerformanceData);
  });
};

