import { useGetMarketRatesQuery, useGetPortsQuery } from 'store/api/market';

function App() {
  const { data: ports, isLoading } = useGetPortsQuery({});

  const { data } = useGetMarketRatesQuery({
    destination: 'NLRTM',
    origin: 'CNSGH',
  });

  console.log(data, 'MARKET RATES');
  console.log(ports, isLoading, 'PORTS');

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, iusto
        praesentium, dolorem excepturi fugit minus veniam in beatae id, possimus
        laboriosam! Dolores aliquid totam saepe numquam commodi magni nisi
        repudiandae. At necessitatibus ad praesentium odio cupiditate
        consequuntur veniam dolor possimus eum minima iusto cum explicabo nulla
        voluptas expedita, esse culpa dolore suscipit natus magnam! Eum neque
        repellat esse accusamus ex. Molestiae saepe fugiat sed officia, itaque
        ut, quibusdam est eos, omnis numquam odio reprehenderit asperiores
        molestias consectetur. Possimus eligendi, non sed illum atque veritatis
        veniam recusandae mollitia, reiciendis assumenda culpa. Quo sit odio
        commodi asperiores, porro eaque hic reiciendis deleniti inventore
        repudiandae necessitatibus cum facilis, consectetur nam eum mollitia
        natus deserunt ea fuga soluta harum! Totam magnam deserunt eaque
        voluptate! Cupiditate nemo sunt maxime quaerat corporis amet neque,
        debitis doloremque veniam aliquam repudiandae optio beatae consectetur
        at placeat sequi nobis, laudantium, modi alias non earum suscipit
        possimus commodi. Nulla, alias. Cum magnam eveniet delectus nostrum
        explicabo harum voluptas obcaecati ipsam laborum officia dolor deserunt
        officiis, animi quas, tenetur ex maiores, temporibus voluptates atque
        veniam? Tempore voluptatem temporibus quibusdam harum! Vel! Corporis
        fugiat nulla temporibus labore quaerat quisquam optio distinctio
        mollitia, voluptatibus quasi fuga nesciunt maiores suscipit aliquid
        veniam reprehenderit velit repudiandae laborum, natus ipsum? Soluta
        consectetur exercitationem voluptates reprehenderit beatae? Ipsa quae
        aspernatur fuga explicabo, dolor optio veritatis rerum a delectus
        consequuntur reiciendis reprehenderit quasi illum consectetur
        praesentium repellendus architecto ad corrupti quibusdam? Consequatur
        est quibusdam inventore blanditiis, praesentium cum! Deleniti
        perferendis accusamus sit pariatur porro? Illum pariatur ex ipsam
        dolores blanditiis, impedit animi reiciendis vero totam sapiente
        accusamus. Minus vel aspernatur tenetur mollitia exercitationem nihil
        quo, perferendis vero natus! Doloribus facere quae quasi cum est
        laudantium fugit similique a earum, itaque qui. Architecto debitis
        tenetur officiis, sequi vero quibusdam impedit minima neque rerum ex
        pariatur, doloribus earum deserunt magnam.
      </p>
    </div>
  );
}

export default App;
