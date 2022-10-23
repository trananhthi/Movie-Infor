import store from "./Store.js"


export default
    {
        data() {
            return {
                store
            }
        },
        template: `
        <div class="grid mt-1">

            <div class="g-col-3" v-for ="item in store.array_search" >
                <div class="card" style="width: 17rem; height:100%">
                    <img :src="item.img"
                    class="card-img-top" alt="..." width="auto" height="250">
                    <div class="card-body">
                    <p class="card-text text-center fw-bolder">{{item.title}}</p>
                    </div>
                </div>
            </div>
    
        </div>
    `
    }