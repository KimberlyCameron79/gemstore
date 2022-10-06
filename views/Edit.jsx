
const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { collection } = this.props

        return (
            <DefaultLayout title="edit a collection" gemGroup="seed">
                <h1>Edit Page</h1>
                <form action={`/seed/${collection._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={collection.name} />

                    <label htmlFor="">Price:</label>
                    <input type="text" id="price" name="price" defaultValue={collection.price} />

                    <label htmlFor="readyToPurchase">Is Ready To Purchase:</label>
                    <input type="checkbox" id="readyToPurchase" name="readyToPurchase" defaultChecked={collection.readyToPurchase} />

                    <input type="submit" value="Edit Gem"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;