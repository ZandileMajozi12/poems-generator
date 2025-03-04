function generatePoem(event) {
  event.preventDefault();
  const poems = {
    love: "Love is a whisper in the wind, soft yet eternal.",
    flower: "A flower blooms, kissed by the golden sun.",
    night: "The night hums a lullaby of silent dreams.",
    ocean: "Waves dance under the moon’s silver gaze.",
  };

  let keyword = document.getElementById("keyword").value.toLowerCase();
  let poem = poems[keyword] || "No poem found for this word.";
  document.getElementById("poem").innerText = poem;
}
