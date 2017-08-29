function setup(){
    canvas = createCanvas(windowWidth - 50,windowHeight - 110);
    canvas.class("todo");
    colorMode(RGB,255,255,255,1);

}

function readdb() {
    var str = "";
    var txtFile = new File("tododb.txt");
    txtFile.open("r");
    while (!txtFile.eof) {
        str += txtFile.readln() + "\n";
    }
    return str;
}

function makeScrap(str){

}