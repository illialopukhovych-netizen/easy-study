<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Easy Study — сучасна освітня платформа">
<title>Easy Study — Легке навчання</title>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f4f5fb;
  color: #1b2033;
}

header {
  background: #11182b;
  color: white;
  padding: 22px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 25px;
  font-weight: bold;
  color: #9b8cff;
}

header span {
  font-size: 13px;
  color: #c5c5d2;
}

.container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 20px;
}

h1 {
  font-size: 30px;
  margin-bottom: 10px;
}

.subtitle {
  color: #777;
  margin-bottom: 30px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 18px;
  margin-bottom: 30px;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 15px;
  box-shadow: 0 3px 15px #00000008;
}

.card h3 {
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
}

.number {
  font-size: 30px;
  font-weight: bold;
  color: #7665ed;
}

.section {
  background: white;
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 22px;
  box-shadow: 0 3px 15px #00000008;
}

.section h2 {
  font-size: 19px;
  margin-bottom: 20px;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
}

nav button,
.action {
  border: 0;
  background: #eeeaff;
  color: #6958dc;
  padding: 12px 17px;
  border-radius: 9px;
  cursor: pointer;
  font-weight: bold;
}

nav button.active,
nav button:hover,
.action:hover {
  background: #7665ed;
  color: white;
}

.item {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.item:last-child {
  border: 0;
}

.grade {
  color: #7665ed;
  font-weight: bold;
  font-size: 19px;
}

input[type="text"] {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  margin: 8px 0 15px;
}

.task {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 15px 0;
}

.task input {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.task.done span {
  text-decoration: line-through;
  color: #999;
}

footer {
  text-align: center;
  padding: 25px;
  color: #999;
  font-size: 13px;
}

.page {
  display: none;
}

.page.active {
  display: block;
}

@media(max-width: 600px) {
  header {
    padding: 18px 5%;
  }

  .container {
    margin: 25px auto;
  }

  h1 {
    font-size: 24px;
  }

  .section {
    padding: 18px;
  }

  .item {
    font-size: 13px;
  }
}
</style>
</head>

<body>

<header>
  <div class="logo">Easy Study</div>
  <span>Освітня платформа</span>
</header>

<div class="container">

<h1>Вітаємо в Easy Study!</h1>
<p class="subtitle">Твій особистий простір для навчання та розвитку.</p>

<nav>
  <button class="active" onclick="showPage('home', this)">Головна</button>
  <button onclick="showPage('grades', this)">Оцінки</button>
  <button onclick="showPage('schedule', this)">Розклад</button>
  <button onclick="showPage('tasks', this)">Завдання</button>
  <button onclick="showPage('profile', this)">Профіль</button>
</nav>

<!-- ГОЛОВНА -->

<div id="home" class="page active">

  <div class="cards">

    <div class="card">
      <h3>Середній бал</h3>
      <div class="number">11.5</div>
    </div>

    <div class="card">
      <h3>Предмети</h3>
      <div class="number">16</div>
    </div>

    <div class="card">
      <h3>Невиконані завдання</h3>
      <div class="number" id="taskCount">3</div>
    </div>

  </div>

  <div class="section">
    <h2>Останні оцінки</h2>

    <div class="item"><span>Математика</span><span class="grade">12</span></div>
    <div class="item"><span>Українська мова</span><span class="grade">11</span></div>
    <div class="item"><span>Фізика</span><span class="grade">10</span></div>
    <div class="item"><span>Біологія</span><span class="grade">12</span></div>
  </div>

</div>

<!-- ОЦІНКИ -->

<div id="grades" class="page">

  <div class="section">
    <h2>Електронний щоденник</h2>

    <div class="item"><span>Математика</span><span class="grade">12</span></div>
    <div class="item"><span>Українська мова</span><span class="grade">11</span></div>
    <div class="item"><span>Фізика</span><span class="grade">10</span></div>
    <div class="item"><span>Біологія</span><span class="grade">12</span></div>
    <div class="item"><span>Англійська мова</span><span class="grade">11</span></div>
  </div>

</div>

<!-- РОЗКЛАД -->

<div id="schedule" class="page">

  <div class="section">
    <h2>Розклад уроків</h2>

    <div class="item"><span>08:30 — Українська мова</span><span>204 каб.</span></div>
    <div class="item"><span>09:25 — Алгебра</span><span>312 каб.</span></div>
    <div class="item"><span>10:25 — Фізика</span><span>108 каб.</span></div>
    <div class="item"><span>11:20 — Англійська мова</span><span>215 каб.</span></div>
    <div class="item"><span>12:15 — Біологія</span><span>205 каб.</span></div>
  </div>

</div>

<!-- ЗАВДАННЯ -->

<div id="tasks" class="page">

  <div class="section">

    <h2>Домашні завдання</h2>

    <div id="tasksList">

      <div class="task">
        <input type="checkbox" onchange="updateTasks()">
        <span>Розв'язати вправи з алгебри</span>
      </div>

      <div class="task">
        <input type="checkbox" onchange="updateTasks()">
        <span>Підготуватися до контрольної з фізики</span>
      </div>

      <div class="task">
        <input type="checkbox" onchange="updateTasks()">
        <span>Прочитати параграф з біології</span>
      </div>

    </div>

    <h3 style="margin-top:25px">Додати завдання</h3>

    <input type="text" id="newTask" placeholder="Введіть назву завдання">

    <button class="action" onclick="addTask()">Додати</button>

  </div>

</div>

<!-- ПРОФІЛЬ -->

<div id="profile" class="page">

  <div class="section">

    <h2>Особистий профіль</h2>

    <div class="item"><span>Ім'я</span><b>Ілля Лопухович</b></div>
    <div class="item"><span>Клас</span><b>10-Б</b></div>
    <div class="item"><span>Навчальний заклад</span><b>Ліцей №14</b></div>
    <div class="item"><span>Роль</span><b>Учень</b></div>

  </div>

</div>

</div>

<footer>
  © 2026 Easy Study — Освітня платформа
</footer>

<script>

function showPage(id, button) {

  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  button.classList.add('active');

}

function updateTasks() {

  const tasks = document.querySelectorAll('#tasksList .task');

  let remaining = 0;

  tasks.forEach(task => {

    const checkbox = task.querySelector('input');

    task.classList.toggle('done', checkbox.checked);

    if (!checkbox.checked) {
      remaining++;
    }

  });

  document.getElementById('taskCount').textContent = remaining;

}

function addTask() {

  const input = document.getElementById('newTask');
  const value = input.value.trim();

  if (!value) {
    alert('Введіть назву завдання!');
    return;
  }

  const task = document.createElement('div');
  task.className = 'task';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', updateTasks);

  const text = document.createElement('span');
  text.textContent = value;

  task.append(checkbox, text);

  document.getElementById('tasksList').appendChild(task);

  input.value = '';

  updateTasks();

}

document.getElementById('newTask').addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});

</script>

</body>
</html>
