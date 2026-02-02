<script setup>
  import { ref, watch } from 'vue';
import Container from '../base/Container.vue';
import { storeUse } from '@/composables/money';
  const props = defineProps({
    item: Object,
    isActive: Boolean,
    DataLength: Number,
    ImageOnly : {
      type : Boolean,
      default : false
    },
  });

  watch(
  () => props.item.locked, 
  (newLockedValue) => {
    if (newLockedValue === false) {
      console.log("Le projet vient d'être déverrouillé !");
    }
  },
  { immediate: true } 
)

  const emit = defineEmits(['error', 'success'])

  const store = storeUse()
  const price = 500
  const coinAnim = ref(null)
  function unlock(id){
    if(store.spend(price)){
      emit('success', id)
      coinAnim.value.classList.replace('coin','fewSec')
      setTimeout(() => {
          coinAnim.value.classList.add('coin')
      }, 500);
    }
    else{
      emit('error', "Solde insuffisant")
      console.log(store.getMoney().value);
      
    }
  }
  </script>
  
  <template>
    <div>

    </div>
    <Container 
        :class="[
          'relative flex-shrink-0 transition-all duration-500 ease-out rounded-xl overflow-hidden shadow-2xl',
          'w-[50%] h-[50%]',
          isActive 
            ? 'scale-110 z-20 opacity-100 shadow-[0_0_30px_rgba(116,147,255,0.4)]' 
            : 'scale-90 z-10 opacity-30 blur-[3px] rotate-3',
          'aspect-[3/4] sm:aspect-video',
        ]"
      >
          <div v-if="isActive && !item.locked" class=" h-10 absolute inset-0 z-20 flex justify-end items-center gap-1 mr-1">
              <div v-for="(elem, index) in item.stack" 
                  :key="index"
                  class="bg-lighter px-2 rounded-md opacity-75 text-sm"
              >
                <p>{{ elem }}</p>        
              </div>
          </div>
          <div ref="coinAnim" class="coin absolute inset-0 bg-[radial-gradient(circle_farthest-corner_at_center,_theme(colors.dark/50%)_0%,_transparent_100%)] z-20 flex justify-center items-center gap-2">
              <div>
                <img src="/coin.png" class="w-7"/>
              </div>
              <p class="text-[25px] text-yellow-400">{{ price }}</p>
          </div>
          <img  :src="item.image" class="absolute inset-0 w-full h-full object-cover" :class="item.locked ? 'blur-md grayscale opacity-30' : 'blur-0'"/>
          <div v-if="item.locked" class=" h-full flex flex-col gap-2 justify-center items-center">
            <!-- <p class="text-white text-lg">Verouillé</p> -->
            <img 
              src="/lock.png" 
              alt="Verouillé" 
              class="w-10 filter drop-shadow-[0_0_2px_var(--lighter)]"
            >
            <div>
              <button @click="unlock(item.id)" class="relative hover:drop-shadow-[0_0_4px_var(--lighter)]">Déverouiller (500)</button>
            </div>
          </div>

          <div v-if="!ImageOnly">
            <Transition name="unlocked">
                <div 
                  v-if="isActive && !item.locked"
                  class="absolute inset-x-0 pb-2 bottom-0 h-1/2 bg-gradient-to-t from-black/100 via-black/50 to-black/0 flex flex-col justify-end p-6"
                >
                  <h3 class="titre text-white font-black italic tracking-tighter text-xl lg:text-3xl uppercase drop-shadow-md ">
                    {{ item.title }}
                  </h3>
                  <p class="text-blue-100 text-sBlack text-xs lg:text-sm font-mono mt-2 italic">
                    {{ item.description }}
                  </p>
                </div>
            </Transition>
          </div>
          <div v-if="!isActive" class="absolute inset-0 bg-blue-900/20 backdrop-blur-[2px]"></div>
      </Container>
  </template>

  
<style scoped>
  img{
    transition: 2s all;
  }
    @media (max-width : 410px) {
        .titre{
          font-size: small;
          line-height: 15px;
        }
    }

    .unlocked-enter-active{
      transition: all 0.5s ease;
      opacity: 0.5;
      transform: scale(1);
    }

    .unlocked-enter-from{
      opacity: 0;
      transform: scale(1.5);
    }

    .coin{
      @apply hidden;
    }

    .fewSec{
      animation: bye 0.5s;
    }
    @keyframes bye {
      0%{
        display: flex;
        opacity: 0.5;
        transform: scale(1);
        visibility: visible;
      }
      50%{
        opacity: 1;
      }
      100%{
        transform: scale(1.5);
        opacity: 0.1;
        visibility: hidden;
      }
    }
</style>