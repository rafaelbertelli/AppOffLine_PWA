let logado = JSON.parse(localStorage.getItem('logado'));
let usuario = localStorage.getItem('nomeUsuario');
let login = new EventEmitter2();

LoginUsuario_render({
    logado: logado, 
    usuario: localStorage.getItem('nomeUsuario'),
    onLogin: (nomeUsuario) => {
        logado = true;
        localStorage.setItem('logado', true);
        localStorage.setItem('nomeUsuario', nomeUsuario);
        usuario = nomeUsuario;
        login.emit('login');
    },
    onLogout: () => {
        logado = false;
        localStorage.removeItem('logado');
        localStorage.removeItem('nomeUsuario');
        login.emit('logout');
    }
})