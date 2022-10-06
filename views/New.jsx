const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component {
    render() {

        return(
            
        <DefaultLayout title="create a gem" gemGroup="seed">
            <h1> New Page </h1>
            <form action="/seed" method="POST">

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="price">Price:</label>
                <input type="text" id="price" price="price" />

                <label htmlFor="readyToPurchase"> Ready to Purchase!</label>
                <input type="checkbox" id="readyToPurchase" name="readyToPurchase"/>

                <input type="submit" value="Create Gem"/>


            </form>

        </DefaultLayout>
        )
    }
}

module.exports = New;