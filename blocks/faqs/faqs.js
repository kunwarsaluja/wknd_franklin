export default function decorate(block) {
  const faqRows = Array.from(block.children);
  const faqs = [];
  // console.log(faq_rows);

  faqRows.forEach((row) => {
    const faqCell = row.innerText.split('\n');
    const faqQuestion = faqCell[1];
    const faqAnswer = faqCell[2];
    faqs.push({ faqQuestion, faqAnswer });
  });

  block.innerHTML = '';
  faqs.forEach((faq) => {
    const { faqQuestion, faqAnswer } = faq;

    const accordion = document.createElement('div');
    accordion.className = 'faq-accordion';
    block.append(accordion);

    const questionDiv = document.createElement('button');
    questionDiv.className = 'faq-question';
    accordion.append(questionDiv);
    questionDiv.innerHTML = faqQuestion;

    const answerDiv = document.createElement('div');
    answerDiv.className = 'faq-answer';
    accordion.append(answerDiv);
    answerDiv.innerHTML = faqAnswer;
  });

  const acc = document.getElementsByClassName('faq-question');
  let i;

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < acc.length; i++) {
    // eslint-disable-next-line func-names
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const faqAnswer = this.nextElementSibling;
      if (faqAnswer.style.display === 'block') {
        faqAnswer.style.display = 'none';
      } else {
        faqAnswer.style.display = 'block';
      }
    });
  }
}
