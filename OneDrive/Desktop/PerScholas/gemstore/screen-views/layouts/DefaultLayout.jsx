const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/public/styles.css" />

                </head>
            <body>
                <nav>
      <ul className=" justify-content-center">
        <li className={`page-item active`}>
          <Link className="page-link" to={"#"}>
            1
          </Link>
        </li>
        <li className={`page-item`}>
          <Link className="page-link" to={"#"}>
            2
          </Link>
        </li>
        <li className={`page-item`}>
          <Link className="page-link" to={"#"}>
            3
          </Link>
        </li>
        <li className={`page-item`}>
          <Link className="page-link" to={"#"}>
            4
          </Link>
        </li>
        <li className={`page-item`}>
          <Link className="page-link" to={"#"}>
            5
          </Link>
        </li>
      </ul>
    </nav>
  );
  {'}'};
  </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;