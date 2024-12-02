let success = document.getElementById('success');
let error = document.getElementById('error');
let warning = document.getElementById('warning');
let info = document.getElementById('info');
let notifications = document.querySelector('.notifications');

function createToast(type, icon, title, text){
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
                <span class="icon">${icon}</span>
                <div class="content">
                    <div class="title">${title}</div>
                    <span class="text">${text}</span>
                </div>
                <span class="close"
                onclick="(this.parentElement).remove()"
                >&times;</span>
            </div>`;

    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(() => newToast.remove(), 5000)
}

success.onclick = function(){
    let type = 'success';
    let icon = '&#10003;';
    let title = 'Success';
    let text = 'This is a success toast.';
    createToast(type, icon, title, text);
}
error.onclick = function(){
    let type = 'error';
    let icon = '&#9421;';
    let title = 'Error';
    let text = 'This is a error toast.';
    createToast(type, icon, title, text);
}
warning.onclick = function(){
    let type = 'warning';
    let icon = '&#9888;';
    let title = 'Warning';
    let text = 'This is a warning toast.';
    createToast(type, icon, title, text);
}
info.onclick = function(){
    let type = 'info';
    let icon = '&#128712;';
    let title = 'Info';
    let text = 'This is a info toast.';
    createToast(type, icon, title, text);
}


