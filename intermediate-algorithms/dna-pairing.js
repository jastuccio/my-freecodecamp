/**
 * Created by joe on 11/16/16.
 */

function pairElement(str) {
    var pairs = [];
    arr = str.split("");

    for (x in arr) {
        switch (arr[x]) {
            case "G":
                pairs.push(["G", "C"]);
                break;
            case "C":
                pairs.push(["C", "G"]);
                break;
            case "A":
                pairs.push(["A", "T"]);
                break;
            case "T":
                pairs.push(["T", "A"]);
                break;
        }
    }
    return pairs;
}

pairElement("T");