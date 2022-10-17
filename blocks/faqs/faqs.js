export default function decorate(block) {
    const faq_rows = Array.from(block.children);
    const faqs=[];
    //console.log(faq_rows);

  faq_rows.forEach((row)=>{
    const faq_cell=row.innerText.split('\n');
    const faq_question=faq_cell[1];
    const faq_answer=faq_cell[2];
    faqs.push({faq_question,faq_answer});

    });

    block.innerHTML = '';
    faqs.forEach((faq)=>{
        const { faq_question, faq_answer } = faq;

        const accordion = document.createElement('div');
        accordion.className = 'faq-accordion';
        block.append(accordion);
    
        const questionDiv = document.createElement('button');
        questionDiv.className = 'faq-question';
        accordion.append(questionDiv);
        questionDiv.innerHTML = faq_question;
    
    
        const answerDiv = document.createElement('div');
        answerDiv.className = 'faq-answer';
        accordion.append(answerDiv);
        answerDiv.innerHTML = faq_answer;


    });
    
    var acc = document.getElementsByClassName("faq-question");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }     
  }





