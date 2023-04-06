import { Schema, model } from "mongoose";

interface IMovie {
  plot: String;
  genres: [String];
  runtime: Number;
  cast: [String];
  num_mflix_comments: Number;
  poster: String;
  title: String;
  fullplot: String;
  countries: [String];
  language: [String];
  released: Date;
  directors: [String];
  rated: String;
  awards: { wins: Number; nominations: Number; text: String };
  lastupdated: String;
  year: Date;
  imbd: { rating: Number; votes: Number; id: Number };
  type: String;
  tomatoes: {
    viewer: { rating: Number; numReviews: Number; meter: Number };
    fresh: Number;
    lastUpdated: Date;
    critic: { rating: Number; numReviews: Number; meter: Number };
    rotten: Number;
  };
}

const moviesSchema = new Schema<IMovie>({});

const movie = model("Movie", moviesSchema);

export default movie;
