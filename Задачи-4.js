function Device(calledName, power){
    this.power=power;
    this.calledName = calledName
    this.works=false
    this.switch_on = function(){
        this.works = true;
        console.log(`Включили ${this.calledName}`)    
    }
    this.switch_off = function(){
        this.works = false;
        console.log(`Отключили ${this.calledName}`)       
    }
    this.currentPower = function(){
        if (this.works) return this.power
            else return 0
    }
    
}

let lamp = new Device("Настольная лампа", 60)
let computer = new Device("ПК", 200)
let kettle = new Device("Электрочайник", 2000)

lamp.style = "Старомодная"
computer.configuration ='11gen i5 CPU, 8G RAM, 2TB HDD, 24"IPS'
kettle.color = "Прозрачный"
function Notebook(user){
    this.user = user
}
Notebook.prototype = new Device("Ноутбук", 100)
const andreysComputer = new Notebook("Andrey")
andreysComputer.color = "Синий"
function WashingMachine(washingAmount){
    this.washingAmount = washingAmount
}
WashingMachine.prototype = new Device("Стиральная машина", 1500)
WashingMachine.prototype.wash = function() {
    console.log("Ш-Ш-Ш-Ш-Ш-Ш! Ж-Ж-Ж-Ж-Ж-Ж! У-У-У-У-У-У! Тинь-тилилинь!")
}
const candy = new WashingMachine(5)
candy.color ="Белый"
lamp.switch_on()
candy.switch_on()
andreysComputer.switch_on()
console.log(`Потребляется сейчас, Вт: ${lamp.currentPower()+computer.currentPower()+kettle.currentPower()+andreysComputer.currentPower()+candy.currentPower()}`)
candy.wash()