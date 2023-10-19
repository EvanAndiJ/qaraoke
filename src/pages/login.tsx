import React, {
    useState,
}from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

//@ts-expect-error
const BlogPage = ({ data }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function handleLogin () {
        console.log('handle login')
    }

    return (
        <Layout pageTitle="Log In">

            <input type="text" name="username" id="username" placeholder='Username'
                value={username} onChange={(e)=>setUsername(e.target.value)}/>

            <input type="password" name="password" id="password" placeholder='password'
                value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={handleLogin}>log in</button>

            <p>Don't have an account yet?{' '}
                <Link to="/signup">Sign up!</Link>
            </p>

        </Layout>
    )
}

export const Head = () => <Seo title="Log In" />

export default BlogPage