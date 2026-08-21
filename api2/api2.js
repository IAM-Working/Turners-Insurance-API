export function calculateriskRating(claimHistory) {
    if (typeof claimHistory !== "string") {
    return {
      error: "there is an error"
    }
  };
  
  const keywords = [
    "collide",
    "crash",
    "scratch",
    "bump",
    "smash",
  ];

  const text = claimHistory.toLowerCase();
  let riskRating = 0;

  for (const keyword of keywords) {
    const matches = text.match(new RegExp(keyword, "g"))

    if (matches) {
      riskRating += matches.length;
    }
  }

  riskRating = Math.max(1, Math.min(5, riskRating));

  return { risk_rating: riskRating};
}