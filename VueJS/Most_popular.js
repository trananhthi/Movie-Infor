import store from './Store.js'
import MostPopular from '../../../db/MostPopular.json' assert { type: 'json' }
import Movie from './Movies.js'

const xhttp = await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_p8k5mqh2")
const most_popular = await xhttp.json();
store.array_most_popular = most_popular.items.map(obj => new Movie(obj))



const index = [3, 6, 9, 12]


export default
    {
        data() {
            return {
                store, index,
            }
        },
        methods: {
            over() {
                $('[data-bs-toggle="popover"]').popover({ trigger: "hover", html: true, container: "#carouselExampleIndicators" });
            },

        },
        template: `
        <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="false">
        <div class="carousel-indicators indica">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="">
            <div class="carousel-item active">
                <div class="d-grid-col text-center">
                    <div style = "display:inline">
                        <img :src="store.array_most_popular[0].img" width="320" height="180" class="rounded zoom me-1 mb-1" alt="..." 
                        :data-bs-content = "store.array_most_popular[0].fullTitle" data-bs-toggle="popover" data-bs-placement="bottom" 
                        data-bs-custom-class="custom-popover" data-bs-offset = "[0,45]"
                        @click = "$emit('select',store.array_most_popular[0].id)"
                        @mouseenter = "over"
                        >
                    </div>
                    <div style = "display:inline"> 
                        <img :src="store.array_most_popular[1].img" width="320" height="180" class="rounded zoom me-1 mb-1" alt="..." 
                        :data-bs-content = "store.array_most_popular[1].fullTitle" data-bs-toggle="popover" data-bs-placement="bottom" 
                        data-bs-custom-class="custom-popover" data-bs-offset = "[0,45]"
                        @click = "$emit('select',store.array_most_popular[1].id)" @mouseenter = "over"
                        >
                    </div>
                    <div style = "display:inline">
                        <img :src="store.array_most_popular[2].img" width="320" height="180" class="rounded zoom me-1" alt="..." 
                        :data-bs-content = "store.array_most_popular[2].fullTitle" data-bs-toggle="popover" data-bs-placement="bottom" 
                        data-bs-custom-class="custom-popover" data-bs-offset = "[0,45]"
                        @click = "$emit('select',store.array_most_popular[2].id)" @mouseenter = "over">

                    </div>
                </div>
            </div>

            <div class="carousel-item" v-for=" i in index">
                <div class="d-grid-col text-center">
                    <img :src="store.array_most_popular[i].img" width="320" height="180" class="rounded zoom me-1" alt="..."
                    :data-bs-content = "store.array_most_popular[i].fullTitle" data-bs-toggle="popover" data-bs-placement="bottom" 
                        data-bs-custom-class="custom-popover" data-bs-offset = "[0,45]"
                        @click = "$emit('select',store.array_most_popular[i].id)" @mouseenter = "over">
                    <img :src="store.array_most_popular[i+1].img" width="320" height="180" class="rounded zoom" alt="..."
                    :data-bs-content = "store.array_most_popular[i+1].fullTitle" data-bs-toggle="popover" data-bs-placement="bottom" 
                        data-bs-custom-class="custom-popover" data-bs-offset = "[0,45]"
                        @click = "$emit('select',store.array_most_popular[i+1].id)" @mouseenter = "over">
                    <img :src="store.array_most_popular[i+2].img" width="320" height="180" class="rounded zoom ms-1" alt="..."
                    :data-bs-content = "store.array_most_popular[i+2].fullTitle" data-bs-toggle="popover" data-bs-placement="bottom" 
                        data-bs-custom-class="custom-popover" data-bs-offset = "[0,45]"
                        @click = "$emit('select',store.array_most_popular[i+2].id)" @mouseenter = "over">
                </div>
            </div>

        </div>

        <button class="carousel-control-prev" style="width:fit-content; margin-left: 6%;" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" style="width:fit-content; margin-right: 6%;" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    `
    }