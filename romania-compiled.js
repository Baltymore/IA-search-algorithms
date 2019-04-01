var _createClass = (function () { 
    function defineProperties(target, props) { 
        for (var i = 0; i < props.length; i++) { 
            var descriptor = props[i]; 
            descriptor.enumerable = descriptor.enumerable || false; 
            descriptor.configurable = true; 
            if ("value" in descriptor) descriptor.writable = true; 
            Object.defineProperty(target, descriptor.key, descriptor); 
        } 
    } 
    return function (Constructor, protoProps, staticProps) { 
        if (protoProps) defineProperties(Constructor.prototype, protoProps); 
        if (staticProps) defineProperties(Constructor, staticProps); 
        return Constructor; 
    }; 
})();

function _classCallCheck(instance, Constructor) { 
    if (!(instance instanceof Constructor)) { 
        throw new TypeError("Não é possível chamar uma classe como uma função"); } }

var cidades = [{
    name: "Oradea",
    h: 380,
    nearby: [{
        name: "Zerind",
        cost: 71,
        h: 374
    }, {
        name: "Sibiu",
        cost: 151,
        h: 253
    }]
}, {
    name: "Zerind",
    h: 374,
    nearby: [{
        name: "Oradea",
        cost: 71,
        h: 380
    }, {
        name: "Arad",
        cost: 75,
        h: 366
    }]
}, {
    name: "Arad",
    h: 366,
    nearby: [{
        name: "Zerind",
        cost: 75,
        h: 374
    }, {
        name: "Sibiu",
        cost: 140,
        h: 253
    }, {
        name: "Timisoara",
        cost: 118,
        h: 329
    }]
}, {
    name: "Timisoara",
    h: 329,
    nearby: [{
        name: "Arad",
        cost: 118,
        h: 366
    }, {
        name: "Lugoj",
        cost: 111,
        h: 244
    }]
}, {
    name: "Lugoj",
    h: 244,
    nearby: [{
        name: "Timisoara",
        cost: 111,
        h: 329
    }, {
        name: "Mehadia",
        cost: 70,
        h: 241
    }]
}, {
    name: "Mehadia",
    h: 241,
    nearby: [{
        name: "Lugoj",
        cost: 70,
        h: 244
    }, {
        name: "Drobeta",
        cost: 75,
        h: 242
    }]
}, {
    name: "Drobeta",
    h: 242,
    nearby: [{
        name: "Mehadia",
        cost: 75,
        h: 241
    }, {
        name: "Craiova",
        cost: 120,
        h: 160
    }]
}, {
    name: "Craiova",
    h: 160,
    nearby: [{
        name: "Drobeta",
        cost: 120,
        h: 242
    }, {
        name: "Pitesti",
        cost: 138,
        h: 100
    }, {
        name: "Rimnicu Vilcea",
        cost: 146,
        h: 193
    }]
}, {
    name: "Rimnicu Vilcea",
    h: 193,
    nearby: [{
        name: "Craiova",
        cost: 146,
        h: 160
    }, {
        name: "Pitesti",
        cost: 97,
        h: 100
    }, {
        name: "Sibiu",
        cost: 80,
        h: 253
    }]
}, {
    name: "Pitesti",
    h: 100,
    nearby: [{
        name: "Craiova",
        cost: 138,
        h: 160
    }, {
        name: "Rimnicu Vilcea",
        cost: 97,
        h: 193
    }, {
        name: "Bucharest",
        cost: 101,
        h: 0
    }]
}, {
    name: "Sibiu",
    h: 253,
    nearby: [{
        name: "Oradea",
        cost: 151,
        h: 380
    }, {
        name: "Arad",
        cost: 140,
        h: 366
    }, {
        name: "Fagaras",
        cost: 99,
        h: 176
    }, {
        name: "Rimnicu Vilcea",
        cost: 80,
        h: 193
    }]
}, {
    name: "Fagaras",
    h: 176,
    nearby: [{
        name: "Sibiu",
        cost: 99,
        h: 253
    }, {
        name: "Bucharest",
        cost: 211,
        h: 0
    }]
}, {
    name: "Bucharest",
    h: 0,
    nearby: [{
        name: "Pitesti",
        cost: 101,
        h: 100
    }, {
        name: "Giurgiu",
        cost: 90,
        h: 77
    }, {
        name: "Urziceni",
        cost: 85,
        h: 80
    }, {
        name: "Fagaras",
        cost: 211,
        h: 176
    }]
}, {
    name: "Giurgiu",
    h: 77,
    nearby: [{
        name: "Bucharest",
        cost: 90,
        h: 0
    }]
}, {
    name: "Urziceni",
    h: 80,
    nearby: [{
        name: "Bucharest",
        cost: 85,
        h: 0
    }, {
        name: "Hirsova",
        cost: 98,
        h: 151
    }, {
        name: "Vaslui",
        cost: 142,
        h: 199
    }]
}, {
    name: "Eforie",
    h: 161,
    nearby: [{
        name: "Hirsova",
        cost: 86,
        h: 151
    }]
}, {
    name: "Vaslui",
    h: 199,
    nearby: [{
        name: "Urziceni",
        cost: 142,
        h: 80
    }, {
        name: "Iasi",
        cost: 92,
        h: 226
    }]
}, {
    name: "Hirsova",
    h: 151,
    nearby: [{
        name: "Urziceni",
        cost: 98,
        h: 80
    }, {
        name: "Eforie",
        cost: 86,
        h: 161
    }]
}, {
    name: "Iasi",
    h: 226,
    nearby: [{
        name: "Vaslui",
        cost: 92,
        h: 199
    }, {
        name: "Neamt",
        cost: 87,
        h: 234
    }]
}, {
    name: "Neamt",
    h: 234,
    nearby: [{
        name: "Iasi",
        cost: 87,
        h: 226
    }]
}];


var Romania = new Map();

for (var i = 0; i < cidades.length; i++) {
    Romania.set(cidades[i].name, cidades[i].nearby);
}

// searchNodes são criados durante a pesquisa do algoritmo.
// this.action = a ação tomada para alcançar essa cidade a partir do nó de pesquisa anterior
// this.state = nome da cidade atual
// this.parent = a cidade anterior na pesquisa

var searchNode = (function () {
    function searchNode(action, state, parent) {
        _classCallCheck(this, searchNode);

        this.action = action;
        this.state = state;
        this.parent = parent;
    }

    _createClass(searchNode, [{
        key: "path",
        value: function path() {
            if (this.parent === null) {
                return [this.state, this.action];
            } else {
                return this.parent.path() + " -> " + [this.state, this.action.cost];
            }
        }
    }, {
        key: "pathCost",
        value: function pathCost() {
            if (this.parent === null) {
                return 0;
            } else {
                return this.parent.pathCost() + this.action.cost;
            }
        }

    }, {
        key: "inPath",
        value: function inPath(findState) {
            if (findState == this.state) {
                return true;
            } else if (this.parent == null) {
                return false;
            } else {
                return this.parent.inPath(findState);
            }
        }
    }]);

    return searchNode;
})();

function breadthFirstSearch(initialState, goalTest, actions, successor) {

    var fila = [];
    if (goalTest(initialState)) {
        console.log("Estado inicial é o estado da final.");
        return [initialState];
    }

    fila.push(new searchNode(null, initialState, null));
    var expanded = [];
    while (fila.length !== 0) {
        console.log("fila: " + fila.map(function (city) {
            return city.state;
        }));

        var _parent = fila.shift();
        console.log("Removendo: ", _parent.state);
        var newChildStates = [];

        var actionsList = actions(_parent.state);
        console.log("Encontrado " + actionsList.length + " sucessores de " + _parent.state + " : " + actionsList.map(function (item) {
            return item.name;
        }));

        expanded.push(_parent.state);
        console.log("Lista expandida: ", expanded);
        console.log("\n");

        for (var i = 0; i < actionsList.length; i++) {
            var newS = successor(_parent.state, actionsList[i]);
            var newN = new searchNode(actionsList[i], newS, _parent);

            if (goalTest(newS)) {
                console.log("DESTINO ENCONTRADO!", newS);
                return newN.path() + " com custo de " + newN.pathCost();
            }

            else if (expanded.indexOf(newS) !== -1) {
                    console.log("Sucessor " + newS + " de " + _parent.state + " já expandido.");
                    console.log("Não adicionando " + newS + " para a fila");
                    console.log("\n");
                }

                else if (fila.map(function (item) {
                        return item.state;
                    }).indexOf(newN.state) !== -1) {
                        console.log(newS + " já está na fila.");
                    }

                    else {
                            console.log("Descoberto " + newN.state + " com custo de etapa " + actionsList[i].cost + " para " + _parent.state);
                            console.log("Colocando na fila " + newS);
                            newChildStates.push(newS);
                            fila.push(newN);
                            console.log("Caminho: ", newN.path());
                            console.log("Fila atual: " + fila.map(function (city) {
                                return city.state;
                            }));
                            console.log("\n");
                        }
        }
    }
}

function depthFirstSearch(initialState, goalTest, actions, successor) {

    var pilha = [];
    if (goalTest(initialState)) {
        console.log("Estado inicial é o estado da final.");
        return [initialState];
    }

    pilha.push(new searchNode(null, initialState, null));
    var expanded = [];
    while (pilha.length !== 0) {
        console.log("Pilha: " + pilha.map(function (city) {
            return city.state;
        }));

        var _parent2 = pilha.shift();
        console.log("Removendo: ", _parent2.state);
        var newChildStates = [];

        var actionsList = actions(_parent2.state);
        console.log("Encontrado " + actionsList.length + " sucessores de " + _parent2.state + " : " + actionsList.map(function (item) {
            return item.name;
        }));

        expanded.push(_parent2.state);
        console.log("Lista expandida: ", expanded);
        console.log("\n");

        for (var i = 0; i < actionsList.length; i++) {
            var newS = successor(_parent2.state, actionsList[i]);
            var newN = new searchNode(actionsList[i], newS, _parent2);

            if (goalTest(newS)) {
                console.log("DESTINO ENCONTRADO!", newS);
                return newN.path() + " com custo de " + newN.pathCost();
            }

            else if (expanded.indexOf(newS) !== -1) {
                    console.log("Sucessor " + newS + " de " + _parent2.state + " já expandido.");
                    console.log("Não adicionando " + newS + " para a pilha");
                    console.log("\n");
                }

                else if (pilha.map(function (item) {
                        return item.state;
                    }).indexOf(newN.state) !== -1) {
                        console.log(newS + " já está na pilha.");
                    }

                    else {
                            console.log("Descoberto " + newN.state + " com custo de etapa " + actionsList[i].cost + " para " + _parent2.state);
                            console.log("Colocando na pilha: " + newS);
                            newChildStates.push(newS);
                            pilha.unshift(newN);
                            console.log("Caminho: ", newN.path());
                            console.log("Pilha atual: " + pilha.map(function (city) {
                                return city.state;
                            }));
                            console.log("\n");
                        }
        }
    }
}

function uniformCostSearch(initialState, goalTest, actions, successor) {

    var filaP = [];
    if (goalTest(initialState)) {
        console.log("Estado inicial é o estado final.");
        return [initialState];
    }

    filaP.enqueue = function (item) {
        var added = false;
        for (var i = 0; i < filaP.length; i++) {
            console.log("ITEM: ", filaP[i].state);
            console.log("CUSTO: ", filaP[i].pathCost());
            if (item.pathCost() < filaP[i].pathCost()) {
                filaP.splice(i, 0, item);
                added = true;
                return;
            }
        }

        if (!added) {
            filaP.push(item);
        }
    };

    filaP.enqueue(new searchNode(null, initialState, null));
    var expanded = [];
    var shortestPath = { state: null, pathCost: null, path: null };

    while (filaP.length !== 0) {
        console.log("Fila: " + filaP.map(function (city) {
            return city.state;
        }));

        var _parent3 = filaP.shift();
        console.log("Removendo: ", _parent3.state);
        var newChildStates = [];

        var actionsList = actions(_parent3.state);
        console.log("Encontrado " + actionsList.length + " sucessores de " + _parent3.state + " : " + actionsList.map(function (item) {
            return item.name;
        }));

        expanded.push(_parent3.state);
        console.log("Lista expandida: ", expanded);
        console.log("\n");

        for (var i = 0; i < actionsList.length; i++) {
            var newS = successor(_parent3.state, actionsList[i]);
            var newN = new searchNode(actionsList[i], newS, _parent3);

            if (goalTest(newS)) {
                console.log("DESTINO ENCONTRADO!", newS, " com custo de ", newN.pathCost());
                console.log("Continuando pesquisa para encontrar o caminho ideal.");
                if (newN.pathCost() < shortestPath.pathCost || shortestPath.pathCost === null) {
                    shortestPath.pathCost = newN.pathCost();
                    shortestPath.path = newN.path();
                    shortestPath.state = newS;
                }
            }

            else if (expanded.indexOf(newS) !== -1) {
                    console.log("Sucessor " + newS + " de " + _parent3.state + " já expandido.");
                    console.log("Não adicionando " + newS + "para a lista");
                    console.log("\n");
                }

                else {
                        console.log("Descoberto " + newN.state + " com custo de etapa " + actionsList[i].cost + " para " + _parent3.state);
                        console.log("Colocando na pilha: " + newS);
                        newChildStates.push(newS);
                        filaP.enqueue(newN);
                        console.log("Caminho: ", newN.path());
                        console.log("Pilha corrente: " + filaP.map(function (city) {
                            return city.state;
                        }));
                        console.log("\n");
                    }
        }
    }

    if (shortestPath.pathCost === null) {
        return "Não foi possível encontrar o caminho.";
    } else {
        return shortestPath.path + " com o custo " + shortestPath.pathCost;
    }
}

function aStarSearch(initialState, goalTest, actions, successor) {

    var filaP = [];
    if (goalTest(initialState)) {
        console.log("Estado inicial é o estado da final.");
        return [initialState];
    }

    filaP.enqueue = function (item) {
        var added = false;

        var heristica = null;

        for (var i = 0; i < cidades.length; i++) {
            if (cidades[i].name === item.state) {
                heristica = cidades[i].h;
            }
        }

        function findHeuristic(item) {
            for (var i = 0; i < cidades.length; i++) {
                if (cidades[i].name === item.state) {
                    return cidades[i].h;
                }
            }
        }

        for (var i = 0; i < filaP.length; i++) {
            console.log("Iteração na fila: ", filaP[i].state);
            console.log("CUSTO: ", filaP[i].pathCost(), "CUSTO da heuristica: ", findHeuristic(filaP[i]), "CUSTO TOTAL: ", filaP[i].pathCost() + findHeuristic(filaP[i]));
            if (item.pathCost() + heristica < filaP[i].pathCost() + findHeuristic(filaP[i])) {
                filaP.splice(i, 0, item);
                added = true;
                return;
            }
        }

        if (!added) {
            filaP.push(item);
        }
    };

    filaP.enqueue(new searchNode(null, initialState, null));
    var expanded = [];
    var shortestPath = { state: null, pathCost: null, path: null };

    while (filaP.length !== 0) {
        console.log("Fila: " + filaP.map(function (city) {
            return city.state;
        }));

        var _parent4 = filaP.shift();
        console.log("Removendo: ", _parent4.state);
        var newChildStates = [];

        var actionsList = actions(_parent4.state);
        console.log("Encontrado " + actionsList.length + " sucessores de " + _parent4.state + " : " + actionsList.map(function (item) {
            return item.name;
        }));

        expanded.push(_parent4.state);
        console.log("Lista expandida: ", expanded);
        console.log("\n");

        for (var i = 0; i < actionsList.length; i++) {
            var newS = successor(_parent4.state, actionsList[i]);
            var newN = new searchNode(actionsList[i], newS, _parent4);

            if (goalTest(newS)) {
                console.log("DESTINO ENCONTRADO!", newS, " com o custo de ", newN.pathCost());
                console.log("Continuando pesquisa para encontrar o caminho ideal.");
                if (newN.pathCost() < shortestPath.pathCost || shortestPath.pathCost === null) {
                    shortestPath.pathCost = newN.pathCost();
                    shortestPath.path = newN.path();
                    shortestPath.state = newS;
                }
            }

            else if (expanded.indexOf(newS) !== -1) {
                    console.log("Sucessor " + newS + " de " + _parent4.state + " já expandido.");
                    console.log("Não adicionado " + newS + " para a fila.");
                    console.log("\n");
                }

                else {
                        console.log("Descoberto " + newN.state + " com custo da etapa " + actionsList[i].cost + " para " + _parent4.state);
                        console.log("Adicionando para fila: " + newS);
                        newChildStates.push(newS);
                        filaP.enqueue(newN);
                        console.log("Caminho: ", newN.path());
                        console.log("Fila atual: " + filaP.map(function (city) {
                            return city.state;
                        }));
                        console.log("\n");
                    }
        }
    }

    if (shortestPath.pathCost === null) {
        return "Não foi possível encontrar o caminho.";
    } else {
        return shortestPath.path + " com o custo " + shortestPath.pathCost;
    }
}

function goalTest(state) {
    return state === goalCity;
}

function actions(state) {
    return Romania.get(state);
}

function successor(state, action) {
    return action.name;
}

var goalCity = null;
var startCity = null;
var setResult = function setResult(result) {
    var element = document.getElementById("search-result");
    while (element.firstChild !== null) {
        element.removeChild(element.firstChild);
    }
    element.appendChild(document.createTextNode(result));
};

function setSearchInput() {
    startCity = null;
    goalCity = null;
    var start = document.getElementById("start");
    var goal = document.getElementById("goal");
    if (start.value.length > 0 && goal.value.length > 0) {
        startCity = start.value;
        goalCity = goal.value;
        return true;
    } else {
        setResult("Erro: insira uma cidade válida.");
        return false;
    }
}

function bfs() {
    document.getElementById("path").innerHTML = "Caminho:";
    if (setSearchInput()) {
        setResult(breadthFirstSearch(startCity, goalTest, actions, successor));
    }
}

function dfs() {
    document.getElementById("path").innerHTML = "Caminho:";
    if (setSearchInput()) {
        setResult(depthFirstSearch(startCity, goalTest, actions, successor));
    }
}

function ucs() {
    document.getElementById("path").innerHTML = "Caminho ótimo:";
    if (setSearchInput()) {
        setResult(uniformCostSearch(startCity, goalTest, actions, successor));
    }
}

function astar() {
    document.getElementById("path").innerHTML = "Caminho ótimo com heurística de distância em linha reta:";
    if (setSearchInput()) {
        if (goalCity !== "Bucharest") {
            setResult("Erro: Os valores heurísticos são calculados somente para qualquer cidade inicial de Bucareste. Por favor, altere a cidade destino de Bucareste e tente novamente.");
        } else {
            setResult(aStarSearch(startCity, goalTest, actions, successor));
        }
    }
}
// TODO implementar a busca em largura limitada
// TODO implementar lista de prioridade par busca de custo uniforme
// TODO colocar as cidades em dropdown list, tanto para o destino quanto para origem
// TODO importar infos do mapa por arquivo externo e remover do codigo