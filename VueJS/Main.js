import H from './Header.js'
import Navbar from './Navbar.js'
import New_movie from './New_movie.js'
import Most_popular from './Most_popular.js'
import Top_rating from './Top_rating.js'
import F from './Footer.js'
import Home_page from './Home_page.js'
import Search_page from './Search_page.js'
import Detail_infor from './Detail_infor.js'

import store from './Store.js'
import Movie from './Movies.js'
import Actor from './Actor.js'


$(document).ready(function () {
  $('.form-check-input').click(function () {
    if ($('.form-check-input').is(':checked')) {
      $("*").addClass("text-light");
      $(".form-control, .btn").removeClass("text-light")
      $(".alert").removeClass("alert-light");
      $("body").css("background-color", "#141414");
      $(".alert").addClass("bg-dark border")
      $(".navbar").addClass("bg-dark border")


    }
    else {
      $("*").removeClass("text-light");
      $(".alert").addClass("alert-light");
      $("body").css("background-color", "#cccccc");
      $(".alert").removeClass("bg-dark border")
      $(".navbar").removeClass("bg-dark border")
      console.log('v')
    }
  });


  console.log(tt)

});

export default {
  data() {
    return {
      store,
      Current_page: "Home_page"
    }
  },
  components: {
    H,
    Navbar,
    New_movie,
    Most_popular,
    Top_rating,
    F,
    Home_page,
    Search_page,
    Detail_infor
  },

  methods: {
    async search_movie(search_str) {
      const xhttp = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_p8k5mqh2/${search_str}`)
      const movie = await xhttp.json();
      store.array_search = movie.results.map(obj => new Movie(obj));



      this.Current_page = "Search_page"

    },
    async return_home() {
      this.Current_page = "Home_page"
    },

    async detail_infor1(id) {
      const xhttp = await fetch(`https://imdb-api.com/en/API/Title/k_p8k5mqh2/${id}`)
      const movie = await xhttp.json();

      store.current_movie = new Movie(movie);
      store.array_actor = movie.starList.map(obj => new Actor(obj));

      this.Current_page = "Detail_infor"
    }
  },

  template: `
    <div class="row">
        <H/>
      </div>
      
      <!-- NavBar -->
      <div class="row">
        <Navbar @search = "search_movie" @home = "return_home"/>
      </div>

    <!-- Main content -->
    <div class="row">
      <component :is = "Current_page" @select1 = "detail_infor1"></component>
    </div>

    <!-- Footer -->
    <div class="row">
      <F/>
    </div>
    `
}
