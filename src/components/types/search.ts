export interface MovieResponseList {
  docId: string;
  title: string;
  poster: string;
  prodYear: string;
  janre: string[];
  country: string;
}

export interface searchMovieBar {
  message: string;
  data: MovieResponseList[];
}
