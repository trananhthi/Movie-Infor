import New_movie from './New_movie.js'
import Most_popular from './Most_popular.js'
import Top_rating from './Top_rating.js'

export default
    {
        data() {
            return {
            }
        },

        components: {
            New_movie,
            Most_popular,
            Top_rating
        },

        methods: {
            detail_infor(id) {
                this.$emit("select1", id);
            }

        },
        template: `
        <!-- New movies -->
        <div class="row h-100 mt-1">
            <New_movie @select = "detail_infor"/>
        </div>
  
        <!-- Most popular -->
        <div class="row mt-3">
          <div class="fw-bold fs-4 my-2">Most Popular</div>
            <Most_popular @select = "detail_infor"/>
        </div>
  
        <!-- Top rating -->
        <div class="row mt-4">
          <div class="fw-bold fs-4 my-2">Top Rating</div>
            <Top_rating @select = "detail_infor"/>
        </div>
    `
    }