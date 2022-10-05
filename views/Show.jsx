const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { collection } = this.props

        return (
            <DefaultLayout title={`${collection.name} details`} gemGroup="collections">
                <center><h1>2022 Healing Gemstone Collection </h1></center>
                
               
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
                  
                ))

                               
                
                         }
                         </div>
            </div>
          </div>
        </div>
    
    </div>
  )&rbrace;
                           
            
            </DefaultLayout>
        )
    }
}

module.exports = Show;
