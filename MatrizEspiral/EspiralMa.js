let n = prompt("Ingrese el tamaño de la matriz");
let ini = 0;
let lim = n - 1;
let con = 1;

let matriz = new Array(n);
for (i = 0; i < n; i++) {
    matriz[i] = new Array(n);
}

for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        matriz[i][j] = 0;
    }
}

while (con <= (Math.pow(n, 2))) {
    /*El primer for va desde la posición 0
    que es ini a la posición 4 que es lim, e itera
    la columna quedando fija la fila */
    for (i = ini; i <= lim; i++) {
        matriz[ini][i] = con;
        con++;
    }
    /*El segundo for va desde la posición 1
    que es ini a la posición 4 que es lim, e itera
    la fila quedando la columna fija*/
    for (i = ini + 1; i <= lim; i++) {
        matriz[i][lim] = con;
        con++;
    }
    /*El tercer for va desde la posición 3
    que es lim a la posición 0 que es ini y decrementa,
    e itera la columna y queda fija la fila*/
    for (i = lim - 1; i >= ini; i--) {
        matriz[lim][i] = con;
        con++;
    }
    /*El cuarto for va desde la posición 3
    que es lim a la posicion 1 que es ini y decrementa,
    e itera la fila y queda fija la columna*/
    for (i = lim - 1; i >= ini + 1; i--) {
        matriz[i][ini] = con;
        con++;
    }
    /*A inicio se le aumenta 1 para que entre
    a la poscición 1 y termine de llenar la matriz
    y se le resta al limite para que entre a la posición
    anterior y termine de llenar la matriz*/
    ini = ini + 1;
    lim = lim - 1;
}

document.write("<table>");
for (i = 0; i < n; i++) {
    document.write("<tr>")
    for (j = 0; j < n; j++) {
        document.write("<td align='center'>" + matriz[i][j] + "</td>");
    }
    document.write("</tr>")
}
document.write("</table>")