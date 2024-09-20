// validation script
document.getElementById('send-btn').addEventListener('click', function(event){
    verify(event);
});

let errorMessage = document.getElementById('error-message');

function verify(event){
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(name === "" || email === "" || message ===""){
        errorMessage.style.visibility = 'visible';
        errorMessage.textContent = 'All Field are required';
    } else{
        errorMessage.style.visibility = 'hidden';
        document.querySelector('.contact-form').submit();
    }
}