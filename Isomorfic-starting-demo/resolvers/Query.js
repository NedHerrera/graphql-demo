

exports.Query = {
    hello: () => {
        return 'Hey bro!'
    },
    bye: () => {
        return 'Bye bro!'
    },
    hellos: () => {
        return ['hey', 'bye', 'hellos']
    },
    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products;
        if (filter) {
          const { onSale, avgRating } = filter;
          if (onSale) {
            filteredProducts = filteredProducts.filter((product) => {
              return product.onSale;
            });
          }
          if ([1, 2, 3, 4, 5].includes(avgRating)) {
            let { reviews } = db
            filteredProducts = filteredProducts.filter((product) => {
              let sumRating = 0;
              let numberOfReviews = 0;
              reviews.forEach((review) => {
                if (review.productId === product.id) {
                  sumRating += review.rating;
                  numberOfReviews++;
                }
              });
              const avgProductRating = sumRating / numberOfReviews;
    
              return avgProductRating >= avgRating;
            });
          }
        }
    
        return filteredProducts;
    },
    product: (parent, { id }, { db }) => {
        return db.products.find((product) => product.id === id);
      },
      categories: (parent, args, { db }) => db.categories,
      category: (parent, { id }, { db }) => {
        return db.categories.find((category) => category.id === id);
      },
};