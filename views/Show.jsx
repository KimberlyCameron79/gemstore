const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { collection } = this.props

        return (
            <DefaultLayout title={`${collection.name} details`} gemGroup="fruits">
                <h1>Show Page</h1>
                <p>
                    The {collection.name} is {collection.price}.
                </p>
                <p>
                    {collection.readyToPurchase ? "Ready to Purchase!" : "Not ready at this time... :("}
                </p>

                <button>
                    <a href={`/seed/${collection._id}/edit`}>Edit</a>
                </button>

                <form action={`/seed/${collection._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/seed">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;