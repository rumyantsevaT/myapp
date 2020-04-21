import React from 'react';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <main>
          <article>
            <header>
              <h1>Article 1</h1>
              <h2>Article 2</h2>
            </header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae reiciendis corporis omnis eum, aspernatur quam. Id, natus veniam officiis deleniti ducimus, vitae ex reprehenderit ratione aut consequuntur blanditiis rem doloribus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae reiciendis corporis omnis eum, aspernatur quam. Id, natus veniam officiis deleniti ducimus, vitae ex reprehenderit ratione aut consequuntur blanditiis rem doloribus.</p>
          </article>
        </main>
      </div>
    )
  }
}

export default Main;