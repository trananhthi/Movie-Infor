import store from "./Store.js"

export default
    {
        data() {
            return {
                search_str: ""
            }
        },
        methods: {
            searchHandle() {
                this.$emit("search", this.search_str);
            },
            homeHandle() {
                this.$emit("home")
            }
        },

        template: `
        <nav class="navbar navbar-expand-lg bg-light rounded">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" @click = "homeHandle">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    </ul>
                    <form class="d-flex" role="search">
                    <input v-model = "search_str" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <div class="btn btn-outline-success" input="submit"  @click = "searchHandle">Search</div>
                    </form>
                </div>
            </div>
        </nav>
    `
    }