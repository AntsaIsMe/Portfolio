<script setup>
    import { onMounted } from 'vue';
import Container from '../base/Container.vue';
    import Comptetence from './Comptetence.vue';

    const skillCategories = [
    {
        title: 'Langages',
        skills: [
            { id: 1, label: 'HTML', progress: '95%', img: '/html.png' },
            { id: 2, label: 'CSS', progress: '90%', img: '/css.png' },
            { id: 3, label: 'JavaScript', progress: '85%', img: '/js.png' },
            { id: 5, label: 'PHP', progress: '60%', img: '/php.png' },
            { id: 7, label: 'C++', progress: '40%', img: '/cpp.png' },
            { id: 6, label: 'C', progress: '30%', img: '/C.png' },
        ]
    },
    {
        title: 'Frameworks & Libs',
        skills: [
            { id: 12, label: 'Qt', progress: '80%', img: '/qt.png' },
            { id: 10, label: 'Node.js', progress: '80%', img: '/node.png' },
            { id: 9, label: 'Angular', progress: '60%', img: '/angular.png' },
            { id: 4, label: 'TypeScript', progress: '60%', img: '/ts.png' },
            { id: 8, label: 'Vue.js', progress: '40%', img: '/vue.png' },
            { id: 13, label: 'Arduino', progress: '40%', img: '/arduino.svg' },
            { id: 11, label: 'Tailwind CSS', progress: '30%', img: '/tailwind.png' },
        ]
    },
    {
        title: 'Bases de données',
        skills: [
            { id: 13, label: 'MySQL', progress: '90%', img: '/mysql.png' },
            { id: 15, label: 'MongoDB', progress: '70%', img: '/mongodb.png' },
            { id: 14, label: 'PostgreSQL', progress: '50%', img: '/postgresql.png' },
        ]
    },
    {
        title: 'Outils & Tests',
        skills: [
            { id: 16, label: 'Git', progress: '85%', img: '/git.png' },
            { id: 17, label: 'GitHub', progress: '80%', img: '/github.png' },
            { id: 18, label: 'Jest', progress: '80%', img: '/jest.png' },
        ]
    }
];

    onMounted(() => {
        console.clear()
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                }
                else{
                    entry.target.classList.remove('show')
                }
            });
        }, {})
        const categories = document.querySelectorAll('.category')
        categories.forEach(el => observer.observe(el))
    })
</script>
<template>
    <Container>
        <div class="p-4 flex gap-2 justify-center border-y-2 'border-2 border-blue-200 rounded-sm',
        'ring-2 ring-lighter'">
            <img class="drop-shadow-[-1px_0px_20px_#7493ff] w-8 object-cover" src="../icons/brain-circuit.png" alt="i">
            <h1 class="text-2xl">Compétences</h1>
        </div>

        <div v-for="category in skillCategories" :key="category.title" class="mb-10 category">
            <div class="border-b-2 border-blue-200 ring-b-2 ring-lighter mb-6 px-4 py-2">
            <h2 class="text-l font-bold uppercase tracking-widest text-blue-200">
                {{ category.title }}
            </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="skill in category.skills" :key="skill.id">
                <Comptetence 
                    :image="skill.img" 
                    :label="skill.label" 
                    :progress="skill.progress" 
                />
            </div>
        </div>
    </div>
    </Container>
</template>

<style scoped>
    .category{
        opacity: 0;
    }
    .show{
        opacity: 1;
        transition: all 0.4s ease;
        animation: slideLeft ease 1s;
    }

    @keyframes slideLeft{
        from{
            opacity: 0;
            transform: translateX(-100%);
        }
        to{
            opacity: 1;
            transform: translateX(0%);
        }
    }
</style>