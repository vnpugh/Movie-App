export class Movie {
	constructor(public title: string, public director: string, 
        public genre: string, 
        public summary: string,
        public releaseDate: Date, //new Date(2023, 10, 15); November 15, 2023
        public duration:string, //2 hours 15 minutes
        public actors: string,
        public rating: string,
        public country: string,
        public language: string,
        public boxOffice: string, //$1,000,000.50
        public coverImagePath: string) {}
}