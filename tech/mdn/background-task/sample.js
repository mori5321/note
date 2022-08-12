// Values
let taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;

// Elems
let totalTaskCountElem = document.getElementById("totalTaskCount");
let currentTaskNumberElem = document.getElementById("currentTaskNumber");
let progressBarElem = document.getElementById("progress");
let startButtonElem = document.getElementById("startButton");
let logElem = document.getElementById("log");

// Others
let logFragment = null;
let statusRefreshScheduled = false;

const enqueTask = (taskHandler, taskData) => {
  taskList.push({
    handler: taskHandler,
    data: taskData
  })

  totalTaskCount++;

  if (!taskHandle) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 })
  }

  scheduleStatusRefresh()
}

const runTaskQueue = (deadline) => {
  while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && taskList.length) {
    let task = taskList.shift();
    currentTaskNumber++;

    task.handler(task.data);
    scheduleStatusRefresh();
  }

  if (taskList.length) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000} );
  } else {
    taskHandle = 0;
  }
}

const scheduleStatusRefresh = () => {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}

function updateDisplay() {
  let scrolledToEnd = logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;

  if (totalTaskCount) {
    if (progressBarElem.max !== totalTaskCount) {
      totalTaskCountElem.textContent = totalTaskCount;
      progressBarElem.max = totalTaskCount;
    }

    if (progressBarElem.value !== currentTaskNumber) {
      currentTaskNumberElem.textContent = currentTaskNumber;
      progressBarElem.value = currentTaskNumber;
    }
  }

  if (logFragment) {
    logElem.appendChild(logFragment);
    logFragment = null;
  }

  if (scrolledToEnd) {
      logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
  }

  statusRefreshScheduled = false;
}

function log(text) {
  if (!logFragment) {
      logFragment = document.createDocumentFragment();
  }

  const el = document.createElement("div");
  el.textContent = text;
  logFragment.appendChild(el);
}
// 
async function logTaskHandler(data) {
  log(`Running task #${currentTaskNumber}`);

  await sleep(1000)

  for (i=0; i<data.count; i+=1) {
    log(`${(i+1).toString()}. ${data.text}`);
  }
}

const sleep = ms => new Promise(res => setTimeout(res, ms))

async function decodeTechnoStuff() {
  totalTaskCount = 0;
  currentTaskNumber = 0;
  updateDisplay();

  let n = getRandomIntInclusive(100, 200);

  for (i=0; i<n; i++) {
    let taskData = {
      count: getRandomIntInclusive(75, 150),
      text: `This text is from task number ${(i+1).toString()} of ${n}`
    };

    enqueTask(logTaskHandler, taskData);
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

document.getElementById("startButton").addEventListener("click", decodeTechnoStuff, false);

