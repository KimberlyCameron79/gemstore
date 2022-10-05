
const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { seed } = this.props

        return (
            <DefaultLayout title="All Gems" gemGroup="seed">
                    <h1>Healing GemStone Page</h1>
                    <ul id="seed-index">
                        {seed.map((collection) => {
                            return (
                                <li key={collection._id}>
                                <img src={collection.image}></img>
                                    The <a href={`/seed/${collection._id}`}>{collection.name}</a> is {collection.price}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/seed/new">Create a new GemStone</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;