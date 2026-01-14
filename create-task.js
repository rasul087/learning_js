"use strict";

const fs = require("fs");
const path = require("path");

const [, , folderName, title] = process.argv;

if (!folderName || !title) {
  console.log("Usage: node create-task.js <folder-name> <Task Title>");
  process.exit(1);
}

const ROOT = __dirname;
const TEMPLATE_DIR = path.join(ROOT, "templates", "js-task");
const TARGET_DIR = path.join(ROOT, folderName);

// 1. Проверка
if (fs.existsSync(TARGET_DIR)) {
  console.log(`❌ Folder "${folderName}" already exists`);
  process.exit(1);
}

// 2. Создаём папку
fs.mkdirSync(TARGET_DIR);

// 3. Копируем файлы шаблона
fs.copyFileSync(
  path.join(TEMPLATE_DIR, "index.js"),
  path.join(TARGET_DIR, `${folderName}.js`)
);

let readme = fs.readFileSync(path.join(TEMPLATE_DIR, "README.md"), "utf-8");

// 4. Подставляем название задачи
readme = readme.replace("Task Title", title);

// 5. Пишем README
fs.writeFileSync(path.join(TARGET_DIR, "README.md"), readme);

console.log(`✅ Project "${folderName}" created successfully`);

// 6. Добавляем проект в главный README
const mainReadmePath = path.join(ROOT, "README.md");

if (fs.existsSync(mainReadmePath)) {
  let mainReadme = fs.readFileSync(mainReadmePath, "utf-8");

  const projectBlock = `
---

### 🔹 ${title}
📁 \`${folderName}\`

Short description.
`;

  // Добавляем перед последней строкой
  mainReadme = mainReadme.replace(
    /\nMore projects will be added as I continue learning JavaScript 🚀/,
    `${projectBlock}\n\nMore projects will be added as I continue learning JavaScript 🚀`
  );

  fs.writeFileSync(mainReadmePath, mainReadme);
}
