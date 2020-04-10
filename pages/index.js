import Layout from '../components/MyLayout';
import Link from 'next/link';
const axios = require('axios').default;

const Index = props => (
  <Layout>
    <h1>XKCD</h1>
    <h2>{props.current.title}</h2>
    <img src={props.current.img} alt={props.current.alt} />
    <h2>Previous 10</h2>
    <ul>
      {props.previous.map(comic => (
        <li key={comic}>
          <Link href="/p/[id]" as={`/p/${comic}`}>
            <a>{comic}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await axios('http://xkcd.com/info.0.json')
  let previous = []
  for (let i = res.data.num - 1; i > res.data.num - 11; i--) {
    previous.push(i)
  }

  return {
    current: res.data,
    previous: previous
  }
}

export default Index;