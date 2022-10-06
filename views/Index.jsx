
const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { seed } = this.props

        return (
            <div>
          
          <style>{'body {background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG25RKS_mQuOjcY7q2fpQEi3k0rrdm3MUY-Q&usqp=CAU) }'}</style>
          <style>{'body{background-repeat: no-repeat}'}</style>
          <style>{'body{background-size: cover}'}</style>
          <style>{'body{font-size: 15px}'} </style>
          <style>{'body{font-color: white}'} </style>
         
            <DefaultLayout title="All Gems" gemGroup="seed">
                    <center><h1>2022 Healing GemStone collection</h1></center>
                    <ul id="seed-index">
                        {seed.map((collection) => {
                            return (

                                <li key={collection._id}>
                              <center>  <img src={collection.image}></img></center>
                              <center>{`${collection.description}`}</center>
                                    <center> The <a href={`/seed/${collection._id}`}>{collection.name}</a> is {collection.price} </center>
                                    <button>Buy Now</button>
                                </li>

                                                           )
                        })}
                    </ul>
                   

                    <nav>
                        <a href="/New">Create a new GemStone</a>
                    </nav>
            </DefaultLayout>
            </div>
        )
    }
}

module.exports = Index;