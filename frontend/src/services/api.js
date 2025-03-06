export const fetchHighScores = async () => {
  try {
    const response = await fetch('/api/highscores');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching high scores:', error);
    throw error;
  }
};