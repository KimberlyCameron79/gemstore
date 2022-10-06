const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
          <html>
          <head>
             
              {/* <title>{this.props.title}</title> */}
              <link rel="stylesheet" href="public/style.css" />
          </head>
          <body>
          <div className="container">
          
              <nav>
                  {/* <a href={`/${this.props.gemGroup}`}>{this.props.gemGroup}</a> */}
              </nav>
              <div className="inner-container">
              {this.props.children}
              </div>
              </div>
          </body>
      </html>

        );     
    }
}

module.exports = DefaultLayout;