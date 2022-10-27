const React = require("react");
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap'


function Default(html) {
  return (
        <html>
          <head>
            <title>{html.title || 'Default'}</title>
            <link rel="stylesheet" href=""/>
            <link rel="stylesheet" href=""/>
            <link rel="stylesheet" href="/style.css"/>
          </head>
          <body>
            <div className="wrapper">
              <header>
                <h1><a href="/treats">Tricky Treats</a></h1>
              </header>
              <div className="container">
                {html.children}
              </div>
            </div>
          </body>
        </html>
      );
    }


module.exports = Default
