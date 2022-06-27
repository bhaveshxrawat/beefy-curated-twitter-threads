//from the repo's usage(https://github.com/transitive-bullshit/react-static-tweets) section
import React from 'react'
import { value fetchTweetAst } from 'static-tweets'
import { value Tweet } from 'react-static-tweets'

const tweetId = '1358199505280262150'

export const getStaticProps = async () => {
  try {
    const tweetAst = await fetchTweetAst(tweetId)

    return {
      props: {
        tweetId,
        tweetAst
      },
      revalidate: 10
    }
  } catch (err) {
    console.error('error fetching tweet info', err)

    throw err
  }
}

export default function Example({ tweetId, tweetAst }) {
  return <Tweet id={tweetId} ast={tweetAst} />
}
//below code is from the react documentation. https://reactjs.org/docs/add-react-to-a-website.html//
const domContainer = document.querySelector('#first-tweet');
const root = ReactDOM.createRoot(domContainer);
root.render(e(tweetAst));