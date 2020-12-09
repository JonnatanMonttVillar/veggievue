<template>
    <div>
        <navbar />
        <b-container fluid class="mt-4">

            <b-row>
                <b-col>
                    <h2> Carrito De Compra </h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="text-center">
                    <b-table bordered hover :items="cart" :fields="fields">

                        <template v-slot:cell(#)="data">
                            {{data.index+1}}
                        </template>                    

                        <template v-slot:cell(quitar)="data">
                            <b-button @click="quitar(data.item.id)" variant="danger" class="mr-2">
                                    X </b-button>
                        </template>

                        <template v-slot:cell(cantidad)="data">
                            <b-row>
                                <b-col cols="3" class="text-center">
                                    <b-button :disable="data.item.quantity <=1" variant="primary" @click="decrement(data.item.id)" class="mr-2"> - </b-button>
                                </b-col>

                                <b-col cols="6" class="text-center">
                                    <h4>{{data.item.quantity}}</h4> 
                                </b-col>
                                
                                <b-col cols="3" class="text-center">
                                    <b-button variant="primary" @click="increment(data.item.id)" class="mr-2"> 
                                            + </b-button>
                                </b-col>
                            </b-row>
                        </template>

                        <template v-slot:cell(imagen)="data">
                            <b-col class="text-center">
                                <b-img style="max-width: 5rem;" 
                                :src="require(`@/assets/${data.item.type}/${data.item.type}${data.item.id}.jpg`)" fluid alt="Responsive image"> </b-img>
                            </b-col>
                        </template>

                           <template v-slot:cell(precio)="data">
                            {{ data.item.price * data.item.quantity }}
                        </template>

                              <template v-slot:cell(nombre)="data">
                            {{ data.item.name}}
                        </template>
                    </b-table>
                </b-col>
            </b-row>
        
            <b-row class="text-center" v-if="cart.length > 0">
                <b-col> </b-col>
                <b-col> </b-col>
                <b-col> </b-col>
                <b-col> </b-col>
                <b-col> <h3>Total</h3></b-col>
                <b-col> <h3>${{total}}</h3></b-col>
            </b-row>

            <b-row class="mt-4 text-center" v-if="cart.length > 0">
                <b-col>
                    <b-button @click="clean" variant="info" block class="mr-2">
                        Clean
                    </b-button>
                </b-col>
                <b-col> </b-col>
                <b-col cols="4"> Veggie Fresh </b-col>
                <b-col> </b-col>
                <b-col> 
                    <b-button @click="buy" variant="success" block class="mr-2"> Comprar </b-button>
                </b-col>
            </b-row>

            <b-modal hide-header-close no-close-on-esc no-close-on-backdrop ref="modal-1" 
                    centered tittle="Purchase Completed">
                <template slot="modal-footer">
                    <b-button class="mt-3" variant="info" block @click="clean"> Close </b-button>
                </template>

                <p class="mb-4"> Productos: </p>
                <ul v-for="productFinal in ticket.products" :key="productFinal.id">
                    <li>
                        Nombre: {{ productFinal.name}}
                    </li>
                    <li>
                        Cantidad: {{ productFinal.quantity}}
                    </li>
                    <li>
                        Precio: {{ productFinal.price}}
                    </li>
                    <li>
                        Total: {{ productFinal.price * productFinal.quantity}}
                    </li>
                    <hr>
                </ul>
                <h2 class="my-4 text-center">Total a Pagar: ${{ticket.total}}</h2>
            </b-modal>
        </b-container>
    </div>
</template>

<script>
import {db} from '@/firebase'
import navbar from '@/components/Navbar.vue'
export default {
    name: 'cart',
    components:{
    navbar
    },
    data(){
        return{
            ticket:{
            products: null,
            total: 0
            },
            counter: 0,
        cart:[],
        fields: ['#', 'quitar', 'imagen', 'nombre', 'cantidad', 'precio']
        }
    },
    methods:{
        clean(){
            this.cart=[];

            for(const key in this.cart){
                this.cart[key].cart=false
                this.cart[key].quantity=1
            }
            localStorage.setItem('products', JSON.stringify(this.cart))
            this.$refs['modal-1'].hide()
        },
        quitar(id){

            for(let index = 0; index < this.cart.length; index++){
                if(this.cart[index].id == id){
                    this.cart.splice(index, 1);
                    localStorage.setItem('products', JSON.stringify(this.cart))
                }
            }

        },
        buy(){
            this.ticket={
                products: this.cart,
                total: this.total
            }        
        db.collection('vue').add(this.ticket);
        this.$refs['modal-1'].show()
        },
        increment(id){
            for(let index = 0; index < this.cart.length; 
            index++){
                if(this.cart[index].id == id){
                   this.cart[index].quantity++
                   localStorage.setItem('products', JSON.stringify(this.cart))
                }
            }
        },
        decrement(id){
              for(let index = 0; index < this.cart.length; index++){
                if(this.cart[index].id == id){
                   this.cart[index].quantity--
                   localStorage.setItem('products', JSON.stringify(this.cart))
                }
            }
        }    
    },
    computed: {
        total(){
            let t = 0;
            for(let index = 0; index < this.cart.length; index++){
             t += this.cart[index].price*this.cart[index].quantity
            }   
            return t 
        }
    },
    created(){
        if(JSON.parse(localStorage.getItem('products'))){
            this.cart = JSON.parse(localStorage.getItem('products'))
            }else{
            this.cart = []
            }        
    },
        
}
</script>