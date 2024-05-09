<template>
    <div>
        <div class="mt-4 p-4">Products</div>
        <div v-for="(item,index) in products" :key="index">
            <a  :href="`/products/${item.id}`">
                <div class="cursor-pointer border-2 border-white m-4 p-4"> 
                    {{ item.title }}
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    {   id: "121",
                        title: "Iphone 13 pro",
                        price: 87000,
                        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi ea facilis dignissimos rem eligendi dolor quam dolorum unde. Numquam, maiores expedita! Commodi consectetur impedit, quisquam eius dicta aperiam enim!x'
                    },
                    {   
                        id: "122",
                        title: "Iphone 14 pro",
                        price: 97000,
                        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi ea facilis dignissimos rem eligendi dolor quam dolorum unde. Numquam, maiores expedita! Commodi consectetur impedit, quisquam eius dicta aperiam enim!x'
                    },
                    {
                        id: "123",
                        title: "Iphone 15 pro",
                        price:117000,
                        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi ea facilis dignissimos rem eligendi dolor quam dolorum unde. Numquam, maiores expedita! Commodi consectetur impedit, quisquam eius dicta aperiam enim!x'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>