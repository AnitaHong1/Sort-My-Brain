function openNotebook() {
  document.getElementById('cover').style.display = 'none';
  document.getElementById('notebook').style.display = 'flex';
}

function sortBrain() {
  const input = document.getElementById("input").value.toLowerCase().trim();
  const output = document.getElementById("output");
  let mood = [];
  let todos = [];

  if (input.match(/(nervous|anxious|panic|stressed|freaking out|spiral)/)) mood.push("anxious");
  if (input.match(/(tired|exhausted|drained)/)) mood.push("tired");
  if (input.match(/(fat|gross|self-conscious)/)) mood.push("self-conscious");
  if (input.match(/(behind|late|overwhelmed|underwater)/)) mood.push("overwhelmed");

  if (input.match(/(laundry|clothes|hamper|no clean)/)) {
    todos.push(["Do laundry", "Wash", "Dry", "Fold and set aside interview outfit"]);
  }
  if (input.match(/(room|clutter|mess|tidy|dirty)/)) {
    todos.push(["Tidy room", "Clear visible clutter", "Make bed"]);
  }
  if (input.match(/(interview|job interview|behavioral)/)) {
    todos.push(["Prepare for interview", "Review behavioral Q&A", "Write bullet points for top 3 stories", "Practice talking out loud"]);
  }
  if (input.match(/(eat|meal|food|recipe|hungry)/)) {
    todos.push(["Eat something nourishing"]);
  }
  if (input.match(/(friend|reply|text back|message)/)) {
    todos.push(["Text friend back (no pressure message)"]);
  }

  if (mood.length === 0 && todos.length === 0) {
    output.innerHTML = `
      <h3>Mood:</h3>
      <p>Not sure yet — and that’s okay.</p>
      <h3>To-Do:</h3>
      <ul>
        <li>Take a deep breath</li>
        <li>Write one thing you could do next</li>
        <li>Remember: you’re allowed to go slow</li>
      </ul>
      <h3>Breathing Exercise:</h3>
      <p>Inhale for 4 seconds, hold for 7, exhale for 8. Repeat 3x.</p>
    `;
    return;
  }

  const formattedTodos = todos.map(task => {
    if (Array.isArray(task)) {
      const [main, ...subs] = task;
      return `<li>${main}<ul>${subs.map(sub => `<li>${sub}</li>`).join('')}</ul></li>`;
    } else {
      return `<li>${task}</li>`;
    }
  }).join('');

  output.innerHTML = `
    <h3>Mood:</h3>
    <p>${mood.length > 0 ? mood.join(", ") : "Reflective"}</p>
    <h3>To-Do:</h3>
    <ul>${formattedTodos}</ul>
    <h3>Breathing Exercise:</h3>
    <p>Inhale for 4 seconds, hold for 7, exhale for 8. Repeat 3x.</p>
  `;
}
