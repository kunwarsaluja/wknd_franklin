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

/**
  * Constructs dom elements for this block. Called from the decorate funciton.
  * Returns an element if doinner is FALSE.
  * 
  * @param {element} el element to be constructed
  * @param {string} classname class name to be added to the element
  * @param {element} appendtarget dom element target this element will be appended to
  * @param {boolean} doinner determins if the element has innerHtml or not.  
  * @param {html} doinner HTML to append in the created element
 */
function domConstructor(el,classname,appendtarget,doinner,innerhtml){
  const thiselement = document.createElement(el);
  thiselement.className = classname;
  appendtarget.append(thiselement);
  if(doinner){
    thiselement.innerHTML = innerhtml;
  }  else {
    return appendtarget;
  }
}

/**
  * Binds the click action, toggles decorative classes.  Called from the decorate function.
  * 
  * @param {element} acc element array 
 */
function bindClick(acc){
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    });
  }
}