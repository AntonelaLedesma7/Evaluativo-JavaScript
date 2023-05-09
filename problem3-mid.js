const listUsersWithMovie = (users, movies) => {
  const newListOfUsersWithMovie = [];

  users.forEach((user) => {
    const userWithMovie = {};

    userWithMovie.name = user.name;
    userWithMovie.email = user.email;
    userWithMovie.address = `${user.address.street}, ${user.address.suite}, ${user.address.city}`;
    userWithMovie.company = user.company.name;

    const seenMovies = movies.filter((movie) => movie.userId === user.id);

    userWithMovie.movies = seenMovies.map((seenMovie) => seenMovie.movie);

    const rateOfMovies = seenMovies.map((movie) => movie.rate);

    userWithMovie.rate = rateOfMovies.reduce((totalRate, rate) => totalRate + rate, 0) /rateOfMovies.length

    newListOfUsersWithMovie.push(userWithMovie);
  });

  return newListOfUsersWithMovie;
};
