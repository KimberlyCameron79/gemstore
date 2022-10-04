const react = require('react');
const { Link } = require('react-router-dom');





const ShopSection = () => {
    return (
        <>
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col-lg-12 col-md-12 article">
                        <div className="shopcontainer row">
                         {collections.map((collection) => (
                            <div
                                className="shop col-lg-4 col-md-6 col-sm-6"
                                key={collection._id}

                            >
                                <div className="border=collection">
                                    <Link to={`/collections/${collection._id}`}>
                                        <div className="shopBack">
                                            <img src={collection.image} alt={collection.name} />
                                        </div>
                                    </Link>
                                </div>

                                <div className="shoptext">
                                    <p>
                                    <Link to={`/collections/${collection._id}`}>
                                        {collection.name}
                                    </Link>
                                    </p>


                                    <Rating
                          value={collection.rating}
                          text={`${collection.numReviews} reviews`}
                        />
                        <h3>${collection.price}</h3>
                      </div>
                    </div>
                  </div>

                ))}

                               {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
    
    </div>
  );
};

                       

    module.export = ShopSection;    
