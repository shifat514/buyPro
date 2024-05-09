<template>
    <div >
        <div>
            {{ product.title }}
        </div>
        <div>
            {{ product.description }}
        </div>
        <div>
            {{ product.price }} BDT
        </div>
        <div class="flex justify-end">
            <a href="/products/">
                <div class="border-2 border-white p-2 m-2">
                    Go back
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                default: ""
            }
        },
        watch: {
            id: {
                handler(newVal) {
                    if(newVal) {
                        this.products.map((el)=>{
                            if(el.id == this.id) {
                                this.product = el
                            }
                        })  
                    }
                },
                deep: true,
                immediate: true,
            }
        },
        data() {
            return {
                product: null,
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

<style>
	main {
		margin: auto;
		padding: 1rem;
		width: 800px;
		max-width: calc(100% - 2rem);
		color: white;
		font-size: 20px;
		line-height: 1.6;
	}
	.astro-a {
		position: absolute;
		top: -32px;
		left: 50%;
		transform: translatex(-50%);
		width: 220px;
		height: auto;
		z-index: -1;
	}
	h1 {
		font-size: 4rem;
		font-weight: 700;
		line-height: 1;
		text-align: center;
		margin-bottom: 1em;
	}
	.text-gradient {
		background-image: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
	}
	.instructions {
		margin-bottom: 2rem;
		border: 1px solid rgba(var(--accent-light), 25%);
		background: linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%));
		padding: 1.5rem;
		border-radius: 8px;
	}
	.instructions code {
		font-size: 0.8em;
		font-weight: bold;
		background: rgba(var(--accent-light), 12%);
		color: rgb(var(--accent-light));
		border-radius: 4px;
		padding: 0.3em 0.4em;
	}
	.instructions strong {
		color: rgb(var(--accent-light));
	}
	.link-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
		gap: 2rem;
		padding: 0;
	}
</style>