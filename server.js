const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('questions.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const searchTheme = jsonServer.router('/search/:theme', search)

function searchTheme (request, response) {
    var word = request.params.searchTheme;
    var reply;
    if (word[searchTheme]) {
        reply ={
        status: "found",
        word: searchTheme
        }
    } else {
        reply = {
            status: "not found",
            word: searchTheme
        }
    }
}

server.use(middlewares);
server.use(router);

server.listen(port);