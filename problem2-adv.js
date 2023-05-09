const timeFromTheThird = () => {
  const weAlreadywonTheThird = new Date("2022-12-18T14:15:00").getTime();
  const today = new Date().getTime();
  const result = today - weAlreadywonTheThird;
  const resultOfDay = Math.round(result / (1000 * 60 * 60 * 24));
  const resultOfHours = Math.round((result / (1000 * 60 * 60)) % 24);
  const resultOfMinutes = Math.round((result / (1000 * 60)) % 60);
  return `Pasaron ${resultOfDay} días, ${resultOfHours} horas y ${resultOfMinutes} minutos desde el Domingo, 18 de diciembre de 2022`;
};