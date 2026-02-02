<script setup>
  import Header from './components/main/Head.vue';
  import Competences from './components/main/Competences.vue';
  import Parcours from './components/main/Parcours.vue';
  import Projets from './components/main/Projets.vue';
  import Contact from './components/main/Contact.vue';
  import Certificat from './components/main/Certificat.vue';
  import Notification from './components/base/Notification.vue';
  import { ref } from 'vue';
  import Headers from './components/main/Header.vue';
  import Menu from './components/main/Menu.vue';
  
  const first = ref(true)
  const showNotif = ref(true)
  const notif = ref(false)
  const notiftitle = ref(null)
  const notifDescri = ref(null)
  const notifSound = new Audio('/notif.mp3')
  notifSound.preload = 'auto'
  notifSound.load()


  window.onload = ()=>{
    setTimeout(() => {
      showNotif.value = false
    }, 1300);
  }

  function notify(msg){
      notifSound.play()
      notif.value = true
      notifDescri.value = msg

      let time;
      if (first) {
          time = 1300
          first.value = false
      }
      else{
        time = 2500
      }
      setTimeout(() => {
        notif.value = false
        notifDescri.value = ''
    }, time);
  }
</script>

<template>
    <transition name="system">
        <Notification v-if="showNotif" fozzy=true class="mt-[-5px]"></Notification>
    </transition>
    <transition name="system">
        <Notification v-if="notif" :titre="notiftitle" :contenu="notifDescri" class="mt-[-5px]"></Notification>
    </transition>
    <Menu></Menu>
    <Headers  class="elem"/>
    <Header class="my-5 elem"></Header>
    <Competences id="competences" class="elem"></Competences>
    <Certificat id="choco" class="elem"></Certificat>
    <Parcours id="parcours" class="elem"></Parcours>
    <Projets id="projets" @error="notify" class="elem"></Projets>
    <Contact @clear="notify('Quête terminée')" @dead="notify('Vous etes mort')" id="contact" class="elem"></Contact>
</template> 


<style scoped>
  .system-leave-active {
    animation: systemClose 0.4s cubic-bezier(0.7, 0, 0.84, 0) forwards;
}


@keyframes systemClose {
    0% { transform: scaleX(1) scaleY(1); opacity: 1; }
    50% { transform: scaleX(1) scaleY(0.01); opacity: 1; }
    100% { transform: scaleX(0) scaleY(0); opacity: 0; }
}

</style>
