import store from './Store.js'

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
        <div class="card mt-1 mb-0 bg-transparent border-0" style="max-width: 1200px; height: 100%;">
            <div class="row g-0">
            <div class="col-6 text-end">
                <img :src="store.current_movie.img"
                class="img-fluid rounded-start" alt="..." style="width:300px;height:400px">
            </div>
            <div class="col-6">
                <div class="card-body">
                <h5 class="card-title fw-bold fs-3">{{store.current_movie.title}}</h5>
                <p class="card-text"><small class="text-muted">{{store.current_movie.fullTitle}}</small></p>
                <p class="card-text">Đạo diễn: {{store.current_movie.director}}</p>
                <p class="card-text">Ngày phát hành: {{store.current_movie.date}}</p>
                <p class="card-text">Thời lượng: {{store.current_movie.length}}</p>
                <p class="card-text">Thể loại: {{store.current_movie.type}}</p>
                <p class="card-text">IMDB: {{store.current_movie.rated}}</p>
                <p class="card-text" >Diễn viên:
                    <small class="actor" v-for = "actor in store.array_actor">{{actor.name}}, </small>
                </p>
                <p class="card-text">Tóm tắt: {{store.current_movie.recap}}</p>
                </div>
            </div>
            </div>
        </div>
    `
    }