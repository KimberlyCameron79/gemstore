const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component {
    render() {
        <DefaultLayout title="create a gem" gemGroup="Collections">
            <h1> New Page </h1>
            <form action="/collections" method="POST">

                <label htmlFor="name">Name:</label>
            </form>

        </DefaultLayout>
    }
}