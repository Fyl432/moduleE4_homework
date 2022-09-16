class Device {
    constructor(calledName, power){
        this.power=power
        this.calledName = calledName 
        this.works=false}
        switch_on() {
            this.works = true;
            console.log(`Включили ${this.calledName}`)    
        }
        switch_off() {
            this.works = false;
            console.log(`Отключили ${this.calledName}`)       
        }
        currentPower() {
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

class Notebook extends Device {
    constructor(calledName, power, user){
        super(calledName, power)
        this.user = user
        this.power=power
        this.calledName = calledName    
    
    }
}
const andreysComputer = new Notebook("Ноутбук", 100, "Andrey")
andreysComputer.color = "Синий"
class WashingMachine extends Device{
    constructor(calledName, power, washingAmount){
    super(calledName, power)
    this.washingAmount = washingAmount
    this.power=power
    this.calledName = calledName 
    }
    wash() {
        console.log("Ш-Ш-Ш-Ш-Ш-Ш! Ж-Ж-Ж-Ж-Ж-Ж! У-У-У-У-У-У! Тинь-тилилинь!")
}
}
const candy = new WashingMachine("Стиральная машина", 1500, 5)
candy.color ="Белый"
lamp.switch_on()
candy.switch_on()
andreysComputer.switch_on()
console.log(`Потребляется сейчас, Вт: ${lamp.currentPower()+computer.currentPower()+kettle.currentPower()+andreysComputer.currentPower()+candy.currentPower()}`)
