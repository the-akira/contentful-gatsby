import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Welcome</h1>
            <h2>My name is Gabriel Felippe</h2>
            <p>Blog posts managed by <a href="https://www.contentful.com">Contentful</a>
            </p>
            <p>Thank you <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM">Andrew Mead</a></p>
            <p>Need a developer? <Link to="/contact">Contact</Link> <a href="https://www.twitter.com/akirascientist">Twitter</a></p>
        </Layout>
    )
}

export default IndexPage