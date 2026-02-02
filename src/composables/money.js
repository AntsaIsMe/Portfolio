import { computed, ref } from "vue"

const money = ref(1000)
const quest = ref([])
const coinSound = new Audio("/coin.mp3")
coinSound.preload = 'auto'
coinSound.load()


export const storeUse =  ()=>{

    function getMoney(){
        return computed( () => money.value)
    }
    
    function add(moneyAdd) {
        money.value+= moneyAdd
    }
    
    function spend(amount){
        if(amount <= money.value){
            money.value -= amount
            coinSound.play()
            
            return true
        }
        return false
    }

    return {getMoney, add, spend}
}