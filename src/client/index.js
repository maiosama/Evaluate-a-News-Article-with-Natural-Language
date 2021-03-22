import {handleSubmit} from './js/formHandler'

//  include scss file here
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    //  get the button for submit
    const submit = document.getElementById("form")
    // add event listener to it when the click to call handleSubmit function
    submit.addEventListener('submit',  (event)=>{
        event.preventDefault()
        console.log(handleSubmit);
        handleSubmit()
    })
});
export default handleSubmit 
