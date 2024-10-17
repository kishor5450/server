import express from "express";
import nonSeatingRoutes from "./services/theatre-non-sitting-sapce.js";
import theaterRouter from "./services/theatre-names.js";
import theatreRowseats from "./services/theatre-row-seats.js";
import theatreseats from "./services/theatre-seats.js";
import promisePool from "./database.js";
import cors from "cors";
import movieRouter from "./services/movies.js";
import TheaterMovie from "./T&M/theaterANDmovie.js";
import movieBookingRoutes from "./Booking/MovieBooking.js";
import ShowsRouter from "./Shows/Shows.js";
import Phonepay from "./Phone_Pay/Phonepay.js";
// import adminRoutes from "./AdminPage/AdminPage.js";
import StripeRoute from "./STRIPE/Stripe.js";

const app = express();
const PORT = 9001;

app.use(cors());
app.use(express.json());
nonSeatingRoutes(app);
theaterRouter(app);
theatreRowseats(app);
theatreseats(app);
movieRouter(app);
TheaterMovie(app);
movieBookingRoutes(app);
ShowsRouter(app);
Phonepay(app);
StripeRoute(app);

promisePool;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
