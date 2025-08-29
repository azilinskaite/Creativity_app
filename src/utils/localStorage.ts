export type Submission = {
  discipline: string;
  challenge: string;
  imageData: string;
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
      s.discipline === submission.discipline && s.challenge === submission.challenge
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