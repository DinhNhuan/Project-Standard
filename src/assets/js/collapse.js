// Collapse Components
class CollapseComponent {
    constructor(){
        this._addEvent();
    }
    _addEvent(){
        let listCollapseBtn = document.querySelectorAll('.collapse__button');
        for (let idx = 0; idx < listCollapseBtn.length; idx++) {
            let collapseBtn = listCollapseBtn[idx];
            let datatarget = collapseBtn.dataset.target;
            collapseBtn.addEventListener('click', function(){
                collapseBtn.classList.toggle('active');
                let targetElement = document.querySelector(datatarget);
                targetElement.classList.toggle('show');
            })
        }
    }
}
let collapse = new CollapseComponent();