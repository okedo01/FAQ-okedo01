const faqs = document.querySelectorAll('.questions li');

const toggleItems = () => {
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const answer = faq.lastElementChild;
            const qn = faq.firstElementChild.firstElementChild;
            const iconRotate = faq.firstElementChild.lastElementChild;
            
                answer.classList.toggle('paras');
                qn.classList.toggle('color');
                iconRotate.classList.toggle('icon');
            
        })
        
    })
}

toggleItems();
