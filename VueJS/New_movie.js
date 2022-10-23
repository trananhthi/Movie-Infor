import store from './Store.js'
import intheater from '../../../db/InTheaters.json' assert { type: 'json' }
import Movie from './Movies.js'

const xhttp = await fetch("https://imdb-api.com/en/API/InTheaters/k_p8k5mqh2")
const new_movies = await xhttp.json();
store.array_new_movies = new_movies.items.map(obj => new Movie(obj))






export default
    {
        data() {
            return {
                store
            }
        },
        methods: {

        },
        template: `
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true" >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="text-center">
                        <img :src="store.array_new_movies[0].img"
                        width="340" height="500" class="rounded new_movies" alt="..." @click = "$emit('select',store.array_new_movies[0].id)">
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                        <div>{{store.array_new_movies[0].fullTitle}}</div>
                        <div>IMDB Rating : {{store.array_new_movies[0].rated}}</div>
                        <div>Amount of time : {{store.array_new_movies[0].length}}</div>
                    </div>
                </div>

                <div class="carousel-item" v-for="item in store.array_new_movies.slice(1, 5)">
                    <div class="text-center">
                        <img :src="item.img"
                        width="340" height="500" class="rounded new_movies" alt="..." @click = "$emit('select',item.id)">
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                        <div>{{item.fullTitle}}</div>
                        <div>IMDB Rating : {{item.rated}}</div>
                        <div>Amount of time : {{item.length}}</div>
                    </div>
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `
    }