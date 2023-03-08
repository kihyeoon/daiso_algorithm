function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];

  if (cacheSize === 0) return cities.length * 5;

  while (cities.length) {
    const city = cities.shift().toLowerCase();
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      time += 1;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      time += 5;
    }
    cache.push(city);
  }
  return time;
}
