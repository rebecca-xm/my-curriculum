import pic from './nX3711L7.jpeg';
import './App.css';

function App() {
  return (
<div className="wrapper">
    <img src={pic} className="cv_pic" alt="foto CV" height="150px"></img>
    <h1>Rebecca Mollica</h1>
        <div className="myCv">
            <div className="cv__wrapper">
                <div className="description">
                    <h2>Descrizione</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit rerum labore consequuntur
                        blanditiis,
                        ducimus dolorem obcaecati delectus natus beatae? Id recusandae ea cumque eaque consectetur
                        quisquam
                        sunt ipsa sapiente itaque!</p>
                </div>
                <div className="job">
                    <h2>Esperienze lavorative</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, labore? Veniam, sed
                        asperiores
                        voluptatibus perferendis, eum adipisci quam, accusamus quae ex tenetur eos fugiat!
                        Exercitationem
                        optio praesentium rem velit earum.</p>
                </div>
                <div className="language">
                    <h2>Lingue</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus tempore vel corporis
                        debitis
                        temporibus, excepturi voluptatibus itaque, accusantium veniam nisi dolores, fuga facilis ullam!
                        Unde
                        architecto voluptates laudantium sed voluptatibus!</p>
                </div>
                <div className="hobby">
                    <h2>Hobby</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit commodi praesentium?
                        Perferendis laudantium dolor quis non odio optio eveniet consequatur asperiores consequuntur,
                        dolore
                        id quasi et iusto, ex autem!</p>
                </div>
            </div>
        </div>
        <form>
          <h3>Contattami</h3>
          <label for="oggetto">Oggetto</label>
          <input type="text" name="oggetto" id="oggetto"/>
          <label for="messaggio">Messaggio</label>
          <input type="text" name="messaggio" id="messaggio"/>
        </form>
        <a href="mailto:contatto@email.com">Scrivi una mail</a>
    </div>
  );
}

export default App;
