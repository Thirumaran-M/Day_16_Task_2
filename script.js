function create_table() {
    var ele = document.createElement("table");
    ele.className="table";
    return ele;
}
function create_thead(){
    var ele = document.createElement("thead");
    ele.className="thead-dark";
    return ele;
}

function create_tbody(){
    var ele = document.createElement("tbody");
    return ele;
}

function create_tr(){
    var ele = document.createElement("tr");
    return ele;
}

function create_th(scope,text){
    var ele = document.createElement("th");
    ele.setAttribute("scope",scope);
    ele.innerHTML = text;
    return ele;
}
function create_td(text){
    var ele = document.createElement("td");
    ele.innerHTML = text;
    return ele;
}


var createTable = create_table();
var createThead = create_thead();
var createTbody = create_tbody();

var createTr1 = create_tr();
var createTh1 = create_th("col","#");
var createTh2 = create_th("col","First");
var createTh3 = create_th("col","Last");
var createTh4 = create_th("col","Handle");

createTr1.append(createTh1,createTh2,createTh3,createTh4);

var createTr2 = create_tr();
var createTd21 = create_th("row","1");
var createTd22 = create_td("Mark");
var createTd23 = create_td("Otto");
var createTd24 = create_td("@mdo");
createTr2.append(createTd21,createTd22,createTd23,createTd24);

var createTr3 = create_tr();
var createTd31 = create_th("row","2");
var createTd32 = create_td("Jacob");
var createTd33 = create_td("Thomton");
var createTd34 = create_td("@fat");
createTr3.append(createTd31,createTd32,createTd33,createTd34);

var createTr4 = create_tr();
var createTd41 = create_th("row","3");
var createTd42 = create_td("Larry");
var createTd43 = create_td("the Bird");
var createTd44 = create_td("@twitter");
createTr4.append(createTd41,createTd42,createTd43,createTd44);

createTbody.append(createTr2,createTr3,createTr4);
createThead.append(createTr1);
createTable.append(createThead,createTbody);
document.body.append(createTable);
