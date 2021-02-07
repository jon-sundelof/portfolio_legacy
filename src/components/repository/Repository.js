import React, { useEffect, useState } from 'react'
import RepositoryBlueprint from './RepositoryBlueprint'
import { SectionWrapper } from '../ReusableElements'
import { RepoCardsContainer } from './RepositoryElements'


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
                console.log(data)
            })
    }, [])

    return (
        <>
            <SectionWrapper id="repository-wrapper">
                <RepoCardsContainer>
                    {repo.map(function (item, i) {
                        return <RepositoryBlueprint key={i} id={item.id} name={item.name} language={item.language} url={item.html_url} description={item.description} />
                    })}
                </RepoCardsContainer>
            </SectionWrapper>
        </>
    )
}

export default Repository
