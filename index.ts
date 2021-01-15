import App from './App';

// let host = process.env.HOST = 'localhost';
let host = process.env.HOST || '0.0.0.0';
let port = process.env.PORT || '3000';

App.app.listen({ port, host }, () => {
    console.log(`server listening on: ${host}:${port}`)
})




