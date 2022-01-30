import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: 'unform5',
    description: 'Form in React',
    link: 'www.google.com'
}


export function RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Lista de repositórios teste</h1>

            <ul>
                <RepositoryItem 
                repository={repository}
                />
            </ul>
        </section>
    )
}