
const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { collection } = this.props

        return (
            <DefaultLayout title="edit a collection" gemGroup="collections">
                <h1>Edit Page</h1>
                <form action={`/collections/${collection._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={fruit.name} />

                    <label htmlFor="">Color:</label>
                    <input type="text" id="color" name="color" defaultValue={fruit.color} />

                    <label htmlFor="readyToEat">Is Ready To Eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" defaultChecked={fruit.readyToEat} />

                    <input type="submit" value="Edit Fruit"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;