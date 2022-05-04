import React, { useEffect, useState } from 'react';
import RepositoryBlueprint from './RepositoryBlueprint';
import { SectionWrapper, SectionHeader } from '../ReusableElements';
import { RepoCardsContainer, RepositoryWrapper } from './RepositoryElements';

const Repository = () => {
  const user = 'jon-sundelof';
  const userRepo = 'jon-sundelof/repos';

  const [repo, setRepo] = useState([]);
  const [gitUser, setGitUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setGitUser(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userRepo}`)
      .then((res) => res.json())
      .then((data) => {
        setRepo(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <SectionWrapper height='140vh' id='repository-wrapper'>
        <RepositoryWrapper>
          <SectionHeader color='var(--secondary-color)'>
            Github Repository
          </SectionHeader>
          <RepoCardsContainer>
            {repo.slice(0, 10).map(function (item, i) {
              return (
                <RepositoryBlueprint
                  key={i}
                  id={item.id}
                  name={item.name}
                  language={item.language}
                  url={item.html_url}
                  description={item.description}
                />
              );
            })}
          </RepoCardsContainer>
        </RepositoryWrapper>
      </SectionWrapper>
    </>
  );
};

export default Repository;
