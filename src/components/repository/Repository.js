import React, { useEffect, useState } from 'react'
import RepositoryBlueprint from './RepositoryBlueprint'
import { SectionWrapper } from '../ReusableElements'


const Repository = () => {
    const user = 'jon-sundelof'
    const userRepo = 'jon-sundelof/repos'

    const [repo, setRepo] = useState([])
    const [gitUser, setGitUser] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${user}`)
            .then(res => res.json())
            .then(data => {
                setGitUser(data)
            })
    }, [])

    useEffect(() => {
        fetch(`https://api.github.com/users/${userRepo}`)
            .then(res => res.json())
            .then(data => {
                setRepo(data)
            })
    }, [])

    return (
        <>
            <SectionWrapper>
                {repo.map(function (item, i) {
                    return <RepositoryBlueprint key={i} id={item.id} name={item.name} language={item.language} url={item.url} />
                })}
            </SectionWrapper>
        </>
    )
}

export default Repository
