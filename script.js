"Use strict"
document.querySelector(".btn").onclick = myClick;
let Sum = 0;

function myClick() {
    let kilometers = Number(document.querySelector("#formkm").value);
    let age = Number(document.querySelector("#formage").value);
    let mass = Number(document.querySelector("#formmass").value);

    class MyClass {
        constructor(kilometers, age, mass) {
            this.kilometers = kilometers; 
            this.age = age; 
            this.mass = mass; 
        }
        CreatedEcoTrain() {
            let ecotrain = document.createElement('li');
            ecotrain.className = "item";
            ecotrain.innerHTML = "Эконом: " + Sum + " ₽";
            trainUl.append(ecotrain);
        }
        CreatedAdvTrain() {
            let advtrain = document.createElement('li');
            advtrain.className = "item";
            advtrain.innerHTML = "Продвинутый: " + Sum + " ₽";
            trainUl.append(advtrain);
        }
        CreatedLuxTrain() {
            let luxtrain = document.createElement('li');
            luxtrain.className = "item";
            luxtrain.innerHTML = "Люкс: " + Sum + " ₽";
            trainUl.append(luxtrain);
        }
        CreatedEcoPlane() {
            let ecopane = document.createElement('li');
            ecopane.className = "item";
            ecopane.innerHTML = "Эконом: " + Sum + " ₽";
            planeUl.append(ecopane);
        }
        CreatedAdvPlane() {
            let advpane = document.createElement('li');
            advpane.className = "item";
            advpane.innerHTML = "Продвинутый: " + Sum + " ₽";
            planeUl.append(advpane);
        }
        CreatedLuxPlane() {
            let luxpane = document.createElement('li');
            luxpane.className = "item";
            luxpane.innerHTML = "Люкс: " + Sum + " ₽";
            planeUl.append(luxpane);
        }
        ecoPlane() {
            if ((5 < mass) && (mass < 20)) {
                Sum = 4000 + 4 * kilometers;
                this.CreatedEcoPlane();
            } else if (mass < 6) {
                Sum = 4 * kilometers;
                this.CreatedEcoPlane();
            }
        }
        advPlane() {
            if ((20 < mass) && (mass <= 50) && (age < 8)) {
                Sum = 5000 + 8 * kilometers * 0.7;
                this.CreatedAdvPlane();
            } else if ((mass < 21) && (age < 8)) {
                Sum = 8 * kilometers * 0.7;
                this.CreatedAdvPlane();
            } else if ((20 < mass) && (mass <= 50) && (age > 7)) {
                Sum = 5000 + 8 * kilometers;
                this.CreatedAdvPlane();
            } else if ((mass < 21) && (age > 7)) {
                Sum = 8 * kilometers;
                this.CreatedAdvPlane();
            }
        }
        luxPlane() {
            if((mass <= 50) && (age <= 16)) {
                Sum = 15 * kilometers * 0.7; 
                this.CreatedLuxPlane();
            } else if ((mass <= 50) && (age > 16)) {
                Sum = 15 * kilometers; 
                this.CreatedLuxPlane();
            }
        }
        ecoTrain() {
            if((mass <= 50) && (mass > 15) && (age <= 5)) {
                Sum = kilometers * 0.5 * 0.5 + 50 * mass;
                this.CreatedEcoTrain();
            } else if ((mass <= 15) && (age <= 5)) {
                Sum = kilometers * 0.5 * 0.5;
                this.CreatedEcoTrain();
            } else if ((mass <= 50) && (mass > 15) && (age > 5)) {
                Sum = kilometers * 0.5 + 50 * mass;
                this.CreatedEcoTrain();
            } else if ((mass <= 15) && (age > 5)) {
                Sum = kilometers * 0.5;
                this.CreatedEcoTrain();
            }
        }
        advTrain() {
            if ((mass <= 60) && (mass > 20) && (age <= 8)) {
                Sum = kilometers * 2 * 0.7 + 50 * mass;
                this.CreatedAdvTrain();
            } else if ((mass <= 15) && (age <= 8)) {
                Sum = kilometers * 2 * 0.7;
                this.CreatedAdvTrain();
            } else if ((mass <= 60) && (mass > 20) && (age > 8)) {
                Sum = kilometers * 2 + 50 * mass;
                this.CreatedAdvTrain();
            } else if ((mass <= 15) && (age > 8)) {
                Sum = kilometers * 2;
                this.CreatedAdvTrain();
            }
        }
        luxTrain() {
            if ((mass <= 60) && (age <= 16)) {
                Sum = kilometers * 4 * 0.8;
                this.CreatedLuxTrain();
            } else if ((mass <= 60) && (age > 16)) {
                Sum = kilometers * 4;
                this.CreatedLuxTrain();
            }
        }
    }
    let myclass = new MyClass(this.kilometers, this.age, this.mass);
    myclass.ecoPlane();
    myclass.advPlane();
    myclass.luxPlane();
    myclass.ecoTrain();
    myclass.advTrain();
    myclass.luxTrain();
};

