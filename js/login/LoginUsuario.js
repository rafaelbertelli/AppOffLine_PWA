let logado = JSON.parse(localStorage.getItem('logado'));

LoginUsuario_render({
    logado: logado, 
    usuario: localStorage.getItem('nomeUsuario'),
    onLogin: (nomeUsuario) => {
        logado = true;
        localStorage.setItem('logado', true);
        localStorage.setItem('nomeUsuario', nomeUsuario);
    },
    onLogout: () => {
        logado = false;
        localStorage.removeItem('logado');
        localStorage.removeItem('nomeUsuario');
    }
})