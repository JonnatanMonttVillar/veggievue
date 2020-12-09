<template>
    <div>
        <b-carousel id="carousel-1" v-model="slide" :interval="2000" controls indicators background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333">
        

        <b-carousel-slide >
            <template v-slot:img>
                <img class="d-block img-fluid w-100" style="width: auto; height:20rem;" :src="require('@/assets/carrusel/fruit3.jpg')" alt="image slot">
            </template>
        </b-carousel-slide>

        <b-carousel-slide>
            <template v-slot:img>
                <img class="d-block img-fluid w-100" style="width: auto; height:20rem;" :src="require('@/assets/carrusel/fruit2.jpg')" alt="image slot">
            </template>
        </b-carousel-slide>

        <b-carousel-slide>
            <template v-slot:img>
                <img class="d-block img-fluid w-100" style="width: auto; height:20rem;" :src="require('@/assets/carrusel/fruit1.jpg')" alt="image slot">
            </template>
        </b-carousel-slide>

        </b-carousel>

    </div>
</template>

<script>
export default {
    data(){
        return{
            slide: 0,
            sliding: null
        }
    },
    methods:{
    
    }
}
</script>