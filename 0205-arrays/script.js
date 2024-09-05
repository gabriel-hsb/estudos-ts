/*

// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, res, courses, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "https://api.origamid.dev/json/cursos.json";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(URL)];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    courses = _a.sent();
                    showData(courses);
                    console.log(courses);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    throw new Error("Erro: " + err_1);
                case 5: return [2 /*return*/];
            }
        });
    });
}
fetchData();
function verifyLevel(level) {
    if (level === "iniciante") {
        return "CornflowerBlue";
    }
    else if (level === "avancado") {
        return "Crimson";
    }
    throw new Error("N\u00EDvel desconhecido: ".concat(level));
}
function showData(courses) {
    courses.forEach(function (_a) {
        var aulas = _a.aulas, gratuito = _a.gratuito, horas = _a.horas, idAulas = _a.idAulas, nivel = _a.nivel, nome = _a.nome, tags = _a.tags;
        document.body.innerHTML += "\n    <div>\n      <h1 style=\"color: ".concat(verifyLevel(nivel), "\"> ").concat(nome, " </h1>\n      <p><i>N\u00EDvel ").concat(nivel.replace("avancado", "avançado"), "</i></p>\n\n      <b>").concat(gratuito ? "Totalmente grátis" : "Apenas 1BTC", "</b>\n      <p> ").concat(horas, " horas de curso! </p>\n\n      <h2>Voc\u00EA vai aprender:</h2>\n      <ul style=\"list-style: '\uD83D\uDC49'\">\n        ").concat(tags.map(function (tag) { return "<li>".concat(tag, "</li>"); }).join(""), "\n      </ul>\n\n    </div>\n    <hr/>\n  ");
    });
}
