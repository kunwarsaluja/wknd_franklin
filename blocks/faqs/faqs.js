export default function decorate(block) {
  const faqRows = Array.from(block.children);
  const faqs = [];

  faqRows.forEach((row) => {
    const faqCell = row.innerText.split('\n');
    const faqQuestion = faqCell[1];
    const faqAnswer = faqCell[2];
    faqs.push({ faqQuestion, faqAnswer });
  });

  block.innerHTML = '';
  faqs.forEach((faq) => {
    const { faqQuestion, faqAnswer } = faq;
    const accordion = domConstructor('div','faq-accordion',block,false,'');
    domConstructor('button','faq-question',accordion,true,faqQuestion);
    domConstructor('div','faq-answer',accordion,true,faqAnswer);
  });

  const acc = document.getElementsByClassName('faq-question');
  bindClick(acc);
}

function domConstructor(el,classname,appendtarget,doinner,innerhtml){
  var thiselement = document.createElement(el);
  thiselement.className = classname;
  appendtarget.append(thiselement);
  if(doinner){
    thiselement.innerHTML = innerhtml;
  }  else {
    return appendtarget;
  }
}

function bindClick(acc){
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      clearClass(acc,'active');
      addClass(this,'active');
    });
  }
}

function addClass(acc,classname){
  acc.classList.add(classname);
  acc.nextElementSibling.classList.add(classname);
}

function clearClass(acc,classname){
  [].forEach.call(acc, function(el) {
    el.classList.remove(classname);
    el.nextElementSibling.classList.remove(classname);
  });
}