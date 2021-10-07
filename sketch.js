document.getElementById('start').addEventListener('click', startup);

function startup() {
  document.getElementById('start').style.display = 'none';

  const info = {};
  const properties = ['Name', 'Nick Name', 'Age', 'Hobbies'];
  let count = 0;

  const question = document.createElement("input");
  document.body.append(question)

  question.placeholder = properties[count];
  question.addEventListener('change', () => {
    if (question.placeholder == 'Hobbies (, , ,)') {
      let res = question.value.trim().split(',').map(x => x.trim());
      info[properties[count]] = res;
    } else {
      info[properties[count]] = question.value;
    }

    question.value = '';

    if (info[properties[count]]) {
      question.placeholder = properties[count + 1];
      if (question.placeholder == 'Hobbies') question.placeholder = `${properties[count + 1]} (, , ,)`;

      count++;
      if (count == properties.length) {
        giveRes(info);
        return;
      }
    }
  });
}

function giveRes(info) {
  document.body.textContent = '';

  const h3 = document.createElement('h3');

  h3.textContent =
    `
    ${info['Name']} is ${info['Age']} years old. He also called ${info['Nick Name']}.
    Some of his hobbies are ${info['Hobbies'].join(', ')}.
    `;

  document.body.append(h3)
}