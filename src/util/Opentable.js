const opentable = {
  search(name, address, city) {
    return fetch(
      `https://opentable.herokuapp.com/api/restaurants?name=${name}&address=${address}&city=${city}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.restaurants) {
          return jsonResponse.restaurants.map((restaurant) => {
            return {
              id: restaurant.id,
              price: restaurant.price,
              name: restaurant.name,
              address: restaurant.address,
              state: restaurant.state,
              area: restaurant.area,
              city: restaurant.city,
              postal_code: restaurant.postal_code,
              country: restaurant.country,
              phone: restaurant.phone,
              image_url: restaurant.image_url,
              reserve_url: restaurant.reserve_url,
            };
          });
        }
      });
  },
};

export default opentable;
