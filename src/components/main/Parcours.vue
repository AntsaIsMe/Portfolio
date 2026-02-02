<script setup>
    import { onMounted, ref } from 'vue';
import Container from '../base/Container.vue';
    import QuestItem from './Parcour.vue';
    
    const careerQuests = [
        {
            rank: 'B-RANK',
            date: '2025 - 2026',
            title: 'L2 ENI Fianarantsoa',
            status: 'IN PROGRESS',
            description: 'En deuxieme année d\'informatique a l\'ENI Fianarantsoa.'
        },
        {
            rank: 'B-RANK',
            date: 'Octobre 2025',
            title: 'It Support from GOOGLE',
            status: 'COMPLETED',
            description: 'Formation de base pour IT support offert par google a travers Coursera'
        },
        {
            rank: 'C-RANK',
            date: '2024',
            title: 'BACC Serie S',
            status: 'COMPLETED',
            description: 'Bacc Serie S, Lycée Jules Ferry Antananarivo.'
        },
        {
            rank: 'D-RANK',
            date: 'Aout 2023',
            title: 'Formation maintenance',
            status: 'COMPLETED',
            description: 'Formation en maintenance hardware et software par Infomada Anosizato.'
        },
    ];
    
    const title = ref(null)
    onMounted(() => {
        const observer = new IntersectionObserver((elem)=>{
            elem.forEach(el => {
                if(el.isIntersecting){
                    if(el.target === title.value){
                        el.target.classList.add("kaboom")
                        observer.unobserve(el.target)
                    }
                    else{
                        el.target.classList.add("show")
                    }
                }
                else{
                    el.target.classList.remove("show")
                }
            })
        },{})
        const animone = document.querySelectorAll(".animone")
        
        animone.forEach(el => {
            observer.observe(el)
        })

        if(title.value){
            observer.observe(title.value)
        }
    })
    </script>
    
    <template>
        <div class="mt-10">
            <div class="mb-12 text-center">
                <h2 ref="title" class="text-3xl font-black italic tracking-tighter text-white uppercase">
                    <span class="text-lighter">QUESTS:</span> Education
                </h2>
                <div class="h-1 w-24 bg-lighter mx-auto mt-2 shadow-[0_0_15px_#1b45d7]"></div>
            </div>
            <div class="max-w-2xl mx-auto px-4">
                <QuestItem 
                    v-for="(quest, index) in careerQuests" 
                    :key="index"
                    v-bind="quest"
                    class="animone"
                />
            </div>
        </div>
    </template>

    <style scoped>
        @keyframes slide {
            0%{
                transform: translateX(-100%);
            }
            100%{
                transform: translateX(0%);
            }
        }

        .animone{
            visibility: hidden;
        }

        .show{
            animation: slide 1s ease;
            visibility: visible;
        }

        .kaboom{
            animation: boom 0.5s ease-in 0.5s;
        }
        
    </style>