// validation script
document.getElementById('send-btn').addEventListener('click', function(event){
    verify(event);
});

function verify(event){
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(name === "" || email === "" || message ===""){
        console.log('all field required');
    } else{
        console.log('ready');
    }
}