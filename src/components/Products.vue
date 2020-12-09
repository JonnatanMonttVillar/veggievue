<template>
    <div>
        <b-container fluid class="bv-example-row mt-4">

            <!-- Frutas -->
            <b-row>
                <b-col cols="3" v-for="(fruit, index) in fruits" :key="index">
                    <b-card :title = fruit.name  tag="article" class="mb-4 text-center">
                
                    <img :src="require(`@/assets/fruta/fruta${fruit.id}.jpg`)" img-alt="Image" img-center style="width: 10rem; height: 8rem;"/>
                        <b-card-text>
                            <h5>Precio: ${{fruit.price}}</h5>
                        </b-card-text>
                        <b-button v-if="!fruit.cart" :disable="fruit.cart" @click="fruit.cart = true, addtocart(JSON.parse(JSON.stringify(fruit)))" block href="#" variant="success"> Agregar Al Carro </b-button>

                        <b-button v-if="fruit.cart" :disable="fruit.cart" block href="#" variant="warning">
                                El producto ya esta en el carro </b-button>
                    </b-card>
                </b-col>
            </b-row>
            <hr>
            <!-- Verduras -->
           <b-row>
                <b-col cols="3" v-for="(verdura, index) in verduras" :key="index">
                    <b-card :title = verdura.name  tag="article" class="mb-4 text-center">
                
                    <img :src="require(`@/assets/verdura/verdura${verdura.id}.jpg`)" img-alt="Image" img-center style="width: 10rem; height: 8rem;"/>
                        <b-card-text>
                            <h5>Precio: ${{verdura.price}}</h5>
                        </b-card-text>
                        <b-button v-if="!verdura.cart" :disable="verdura.cart" @click="verdura.cart = true, addtocart(JSON.parse(JSON.stringify(verdura)))" block href="#" variant="success"> Agregar Al Carro </b-button>

                        <b-button v-if="verdura.cart" :disable="verdura.cart" block href="#" variant="warning">
                                El producto ya esta en el carro </b-button>
                    </b-card>
                </b-col>
            </b-row>    
             <hr>
            <!-- Abarrotes -->
           <b-row>
                <b-col cols="3" v-for="(abarrote, index) in abarrotes" :key="index">
                    <b-card :title = abarrote.name  tag="article" class="mb-4 text-center">
                
                    <img :src="require(`@/assets/abarrote/abarrote${abarrote.id}.jpg`)" img-alt="Image" img-center style="width: 10rem; height: 8rem;"/>
                        <b-card-text>
                            <h5>Precio: ${{abarrote.price}}</h5>
                        </b-card-text>
                        <b-button v-if="!abarrote.cart" :disable="abarrote.cart" @click="abarrote.cart = true, addtocart(JSON.parse(JSON.stringify(abarrote)))" block href="#" variant="success"> Agregar Al Carro </b-button>

                        <b-button v-if="abarrote.cart" :disable="abarrote.cart" block href="#" variant="warning">
                                El producto ya esta en el carro </b-button>
                    </b-card>
                </b-col>
            </b-row>    
        </b-container>
    </div>
</template>

<script>
export default {
  data(){
    return{
        fruits:[
        {id: 1, type: 'fruta', quantity: 1, name: 'Banana', price: 700,
        img:'@/assets/fruta/fruta1.jpg', cart: false},
        {id: 2, type: 'fruta', quantity: 1, name: 'Manzana', price: 400, 
        img:'@/assets/fruta/fruta2.jpg', cart: false},
        {id: 3, type: 'fruta', quantity: 1, name: 'Naranja', price: 600,
         img:'@/assets/fruta/fruta3.jpg', cart: false},
        {id: 4, type: 'fruta', quantity: 1, name: 'Melon', price: 400,
         img:'@/assets/fruta/fruta4.jpg', cart: false}
        ],
        verduras:[
        {id: 5, type: 'verdura', quantity: 1, name: 'Tomate', price: 800,
         img:'@/assets/verdura/verdura5.jpg', cart: false},
        {id: 6, type: 'verdura', quantity: 1, name: 'Zanahoria', price: 800,
         img:'@/assets/verdura/verdura6.jpg', cart: false},
        {id: 7, type: 'verdura', quantity: 1, name: 'Lechuga', price: 600,
         img:'@/assets/verdura/verdura7.jpg', cart: false},
        {id: 8, type: 'verdura', quantity: 1, name: 'Repollo', price: 400,
         img:'@/assets/verdura/verdura8.jpg', cart: false}
        ],
        abarrotes:[
        {id: 9, type: 'abarrote', quantity: 1, name: 'Porotos', price: 800,
         img:'@/assets/abarrote/abarrote9.jpg', cart: false},
        {id: 10, type: 'abarrote', quantity: 1, name: 'Mani', price: 500,
         img:'@/assets/abarrote/abarrote10.jpg', cart: false},
        {id: 11, type: 'abarrote', quantity: 1, name: 'Chia', price: 600,
         img:'@/assets/abarrote/abarrote11.jpg', cart: false},
        {id: 12, type: 'abarrote', quantity: 1, name: 'Lentejas', price: 400,
         img:'@/assets/abarrote/abarrote12.jpg', cart: false}
        ],

    }
 },
 methods:{
     addtocart(product){
         let cart=[]
         if(JSON.parse(localStorage.getItem('products'))){
             cart = JSON.parse(localStorage.getItem('products'))
         }else{
             cart=[]
         }
         cart.push(product);
         localStorage.setItem('products', JSON.stringify(cart))
         }         
    },
created(){
    let cart=[]
         if(JSON.parse(localStorage.getItem('products'))){
             cart = JSON.parse(localStorage.getItem('products'))
         }else{
             cart=[]
         }
         for(let index = 0; index < cart.length; index++){
            for(let index2 = 0; index2 < this.fruits.length; index2++){
            if(cart[index].id == this.fruits[index2].id){
            this.fruits[index2].cart = true}
            }
        }
          for(let index = 0; index < cart.length; index++){
                for(let index3 = 0; index3 < this.verduras.length; index3++){
                if(cart[index].id == this.verduras[index3].id){
                this.verduras[index3].cart = true}
            }
        }
            for(let index = 0; index < cart.length; index++){
                for(let index4 = 0; index4 < this.abarrotes.length; index4++){
                if(cart[index].id == this.abarrotes[index4].id){
                this.abarrotes[index4].cart = true}
            }
        }
    }
}
</script>