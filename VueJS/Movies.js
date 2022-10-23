export default class {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.fullTitle = obj.fullTitle;
        this.year = obj.year;
        this.img = obj.image;
        this.rated = obj.imDbRating;
        this.length = obj.runtimeStr;
        this.director = obj.directors;
        this.date = obj.releaseDate;
        this.type = obj.genres;
        this.recap = obj.plot
    }
}