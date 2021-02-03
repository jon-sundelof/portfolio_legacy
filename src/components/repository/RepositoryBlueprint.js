import React from 'react'
import { Text } from './RepositoryElements'

const RepositoryBlueprint = ({ id, url }) => {
    return (
        <>
            <Text>
                {url}
            </Text>
        </>
    )
}

export default RepositoryBlueprint
