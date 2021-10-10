document.getElementById('start').addEventListener('click', startup);

function startup() {
  document.getElementById('start').style.display = 'none';

  const info = {};
  const properties = ['Name', 'Nick Name', 'Age', 'Gender', 'Hobbies'];
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

  let pro1;
  let pro2;
  if (info['Gender'] == 'Male' || info['Gender'] == 'Masculine' || info['Gender'].startsWith('M') || info['Gender'].startsWith('m')) {
    pro1 = 'He'
    pro2 = 'his'
  } else {
    pro1 = 'She'
    pro2 = 'her'
  }

  h3.textContent =
    `
    ${info['Name']} is ${info['Age']} years old. ${pro1} also called ${info['Nick Name']}.
    Some of ${pro2} hobbies are ${info['Hobbies'].join(', ')}.
    `;

  document.body.append(h3)
}
