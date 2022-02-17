'use strict';
const poll = {
  question: 'What is your favourite Programming Language?',
  options: ['0:Javscript', '1:Python', '2:c++'],
  answers: new Array(4).fill(0),
  registernewanswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number?)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string');
    {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};
//poll.registernewanswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registernewanswer.bind(poll));
