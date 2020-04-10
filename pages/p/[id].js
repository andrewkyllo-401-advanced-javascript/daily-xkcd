import Layout from "../../components/MyLayout";
const axios = require('axios').default;


const Post = props => {

  return (
    <Layout>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.image.alt}/>
    </Layout>
  );
}

Post.getInitialProps = async function(context) {

  const res = await axios(`http://xkcd.com/${context.query.id}/info.0.json`)
  return {
    title: res.data.title,
    image: res.data.img,
    alt: res.data.alt
  }
}

export default Post;
