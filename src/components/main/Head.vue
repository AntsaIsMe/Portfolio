<script setup>
    import Container from '../base/Container.vue';
</script>

<template>
    <Container class="princ">
        <div class="grid grid-cols-[150px_1fr] gap-2 items-center contGrid">
            <Container round="true" class="pdp">
                <img class=" rounded-md" src="../../assets/me.jpeg" alt="sd">
            </Container>
            <div class="text-justify text">
                <h1>
                    <span class='text-lg'>ANDRIAMIALISOA Antsa Ny Aina Johanesa</span>
                </h1>
                <div class="text-justify descri">
                    <p>Etudiant en informatique, j'explore également l'univers du developpement web, des systèmes embarqués et du developpement de jeu vidéo</p>
                </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>
    @media (max-width : 410px) {
        .princ{
            padding: 7px;
        }
        .contGrid{
            grid-template-columns: 100px 1fr;
        }
        .text-lg{
            font-size: medium;
        }
        .descri{
            font-size: small;
            font-style: italic;
        }
        .text{
            padding:  0px 10px 10px 0px;
        }
    }
</style>