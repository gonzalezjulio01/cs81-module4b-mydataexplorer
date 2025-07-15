// myDataJournal.js
// GitHub Repo: https://github.com/your-username/cs81-module4b-mydataexplorer

// Week's personal data
const weekData = [
  { day: "Monday", sleepHours: 7, screenTime: 5, mood: "productive", caffeineIntake: 1, focusLevel: 8 },
  { day: "Tuesday", sleepHours: 6, screenTime: 6, mood: "tired", caffeineIntake: 2, focusLevel: 6 },
  { day: "Wednesday", sleepHours: 5.5, screenTime: 8, mood: "stressed", caffeineIntake: 3, focusLevel: 5 },
  { day: "Thursday", sleepHours: 8, screenTime: 4, mood: "relaxed", caffeineIntake: 1, focusLevel: 9 },
  { day: "Friday", sleepHours: 6.5, screenTime: 7, mood: "busy", caffeineIntake: 2, focusLevel: 7 },
  { day: "Saturday", sleepHours: 9, screenTime: 3, mood: "happy", caffeineIntake: 0, focusLevel: 8 },
  { day: "Sunday", sleepHours: 7.5, screenTime: 2, mood: "rested", caffeineIntake: 0, focusLevel: 9 }
];

// 📝 Predictions:
// I think the most screen time will be on Wednesday (8 hrs)
// Best focus day will probably be Sunday (focus 9)
// I think more caffeine might not improve focus — could even hurt it

// Function 1: Find the day with the most screen time
function findHighestScreenTime(data) {
  let maxDay = data[0];
  for (let day of data) {
    if (day.screenTime > maxDay.screenTime) {
      maxDay = day;
    }
  }
  return `${maxDay.day} (${maxDay.screenTime} hrs)`;
}

// Function 2: Average sleep
function averageSleep(data) {
  let total = 0;
  for (let day of data) {
    total += day.sleepHours;
  }
  return (total / data.length).toFixed(1);
}

// Function 3: Most frequent mood
function mostFrequentMood(data) {
  const moodCounts = {};
  for (let day of data) {
    if (!moodCounts[day.mood]) {
      moodCounts[day.mood] = 1;
    } else {
      moodCounts[day.mood]++;
    }
  }

  let topMood = null;
  let topCount = 0;
  for (let mood in moodCounts) {
    if (moodCounts[mood] > topCount) {
      topMood = mood;
      topCount = moodCounts[mood];
    }
  }

  return `"${topMood}"`;
}

// Function 4: Correlate caffeine and focus
function correlateCaffeineToFocus(data) {
  let highCaffeineDays = data.filter(day => day.caffeineIntake >= 2);
  let lowCaffeineDays = data.filter(day => day.caffeineIntake <= 1);

  let avgFocus = (group) => {
    let total = 0;
    for (let d of group) total += d.focusLevel;
    return (total / group.length).toFixed(1);
  };

  return `Focus with more caffeine: ${avgFocus(highCaffeineDays)}\nFocus with less caffeine: ${avgFocus(lowCaffeineDays)}`;
}

// 🧪 Output:
console.log("Most screen time:", findHighestScreenTime(weekData));
console.log("Average sleep:", averageSleep(weekData), "hrs");
console.log("Most frequent mood:", mostFrequentMood(weekData));
console.log(correlateCaffeineToFocus(weekData));
