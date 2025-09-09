export type Submission = {
  discipline: string;
  challengeText: string;
  challengeId: string;
  imageData: string;
  comment?: string;
};

export function getSubmissions(): Submission[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("submissions");
  return stored ? JSON.parse(stored) : [];
}

export function saveSubmission(submission: Submission) {
  if (typeof window === "undefined") return;
  const submissions = getSubmissions();
  const exists = submissions.some(
    (s) =>
      s.discipline === submission.discipline && s.challengeText === submission.challengeText
  );
  if (!exists) {
    submissions.push(submission);
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }
}

export function calculateProgress(
  disciplineName: string,
  totalChallenges: number,
  submissions: Submission[]
) {
  const doneCount = submissions.filter(
    (sub) => sub.discipline === disciplineName
  ).length;

  return Math.min(100, (doneCount / totalChallenges) * 100);
}

export function saveMoodboardImages(images: (string | null)[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("moodboardImages", JSON.stringify(images));
}

export function getMoodboardImages() {
  try {
    const item = localStorage.getItem("moodboardImages");
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Failed to load moodboardImages from localStorage:", error);
    return null;
  }
}


// type Achievement = {
//   id: string;
//   discipline: string;
//   name: string;
//   dateEarned: string;
//   iconUrl: string;
// };
