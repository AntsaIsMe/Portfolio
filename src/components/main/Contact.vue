<script setup>
import { ref } from 'vue';

    const contacts = [
        { label: 'Whatsapp 1/4', value: '+261 32 25 474 43', action: 'MESSAGE', type: 'whatsapp', image : '/whatsapp.png' },
        { label: 'MAIL 2/4', value: 'Antsajony@gmail.com', action: 'SEND MAIL', type: 'mail', image : '/mail.png' },
        { label: 'GITHUB 3/4', value: 'https://github.com/AntsaIsMe', action: 'VOIR', type: 'link', image : '/githubRed.png' },
        { label: 'DIRECT CALL 4/4', value: '038 28 510 80', action: 'CALL', type: 'phone', image : '/phone.png' },
    ];
    const minute = ref(2)
    const second = ref(10)
    const emit = defineEmits(['contacted', 'dead'])
    let int;

    const handleAction = (contact) => {
        emit('clear')
        clearInterval(int)
        setTimeout(() => {
            switch (contact.type) {
                case 'whatsapp':
                    const waPhone = contact.value.replace(/\s/g, '');
                    window.open(`https://wa.me/${waPhone}`, '_blank');
                    break;
                case 'mail':
                    window.location.href = `mailto:${contact.value}`;
                    break;
                case 'link':
                    window.open(contact.value, '_blank');
                    break;
                case 'phone':
                    window.location.href = `tel:${contact.value.replace(/\s/g, '')}`;
                    break;
                default:
                    navigator.clipboard.writeText(contact.value);
            }
        }, 1000);
    };

    function timer(){
        int = setInterval(() => {
            second.value--
            if (second.value === 0) {
                if (minute.value <= 0) {
                    clearInterval(int)
                    emit('dead')
                    return
                }
                minute.value -= 1
                second.value = 59
            }
            if(minute.value == 0 && second.value == 30){
                window.location = "#contact"
            }
        }, 1000);
    }

    timer()
    </script>
    
    <template>
        <div class="my-10 mx-auto relative p-1 rounded-xl bg-red-600 shadow-[0_0_50px_rgba(220,38,38,0.4)] max-h-[95vh] max-w-[95vw] flex flex-col">
            
            <div class="bg-black rounded-xl border-2 border-red-600 p-4 lg:p-6 relative overflow-hidden flex flex-col h-full">
                
                <div class="absolute inset-0 opacity-5 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ff0000_10px,#ff0000_20px)]"></div>
    
                <div class="relative z-10 text-center mb-4 flex-none">
                    <div class="animate-pulse [animation-duration:1s] inline-block border-2 rounded-md border-red-600 px-6 py-1 mb-2 bg-red-600/10">
                        <h2 class="text-red-600 font-black italic tracking-[0.4em] text-xl lg:text-2xl uppercase">
                            QUETE URGENTE
                        </h2>
                    </div>
                    <div class="flex items-center justify-center gap-4">
                        <div class="h-[2px] w-full bg-red-600"></div>
                        <span class="text-red-500 font-mono text-[10px] whitespace-nowrap tracking-widest uppercase">Protocole d'urgence</span>
                        <div class="h-[2px] w-full bg-red-600"></div>
                    </div>
                </div>
    
                <div class="relative z-10 mb-4 flex-none">
                    <h3 class="text-white font-bold text-md lg:text-lg mb-1 uppercase italic tracking-tighter text-center">
                        [ Quête: Contactez-moi ]
                    </h3>
                    <p class="text-red-200/60 text-[10px] lg:text-xs font-light text-center italic leading-tight px-4">
                        "Si vous échouez à faire une de ces actions, votre accès au portfolio sera verrouillé et vous n'aurez pas accès à la <span class="text-red-500 uppercase">récompense</span>"
                    </p>
                </div>
    
                <div class="space-y-2 relative z-10 overflow-y-auto flex-1 custom-scrollbar pr-1">
                    <div v-for="(contact, index) in contacts" :key="index"  @click="handleAction(contact)"
                         class="rounded-md flex items-center gap-3 bg-red-950/20 border border-red-900/40 p-3 group hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer">
                        
                        <div class="w-8 h-8 lg:w-10 lg:h-10 border rounded-sm border-red-600 flex items-center justify-center text-red-600 group-hover:text-white group-hover:border-white transition-all overflow-hidden shrink-0">
                            <img :src="contact.image" alt="!" class="w-5 lg:w-6 group-hover:brightness-0 group-hover:invert transition-all">
                        </div>
    
                        <div class="flex-1 min-w-0">
                            <p class="text-[8px] font-bold text-red-600 group-hover:text-red-200 uppercase tracking-widest truncate">{{ contact.label }}</p>
                            <p class="text-xs lg:text-sm font-bold text-white tracking-tight truncate">{{ contact.value }}</p>
                        </div>
    
                        <div class="animate-pulse [animation-duration:1s] text-[9px] font-black italic text-red-200 rounded-sm group-hover:text-white px-2 py-1 border border-red-600 group-hover:border-white shrink-0">
                            {{ contact.action }}
                        </div>
                    </div>
                </div>
    
                <div class="animate-pulse [animation-duration:1s] mt-4 flex flex-col items-center gap-0 flex-none relative z-10">
                    <p class="text-[9px] text-red-900 font-bold tracking-[0.3em] uppercase">Time Remaining</p>
                    <p class="text-2xl lg:text-3xl font-black text-red-600 font-mono italic drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                        {{minute < 10 ? "0"+minute : minute}} :  {{second < 10 ? "0"+second : second}}
                    </p>
                </div>
            </div>
        </div>
    </template>
    
    <style scoped>
    /* Petite scrollbar stylisée style Solo Leveling si jamais ça déborde sur petit écran */
    .custom-scrollbar::-webkit-scrollbar {
      width: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(153, 27, 27, 0.1);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #dc2626;
    }
    </style>