
//cria a interface do item
interface RepositoryItemProps {
    repository: {
        name: string;
        script: string;
        runtime: string;
        value: string;
        created_at: string;
    }
}
//coloca o item em td
export function RepositoryItem (props : RepositoryItemProps) {
    return (
        
        <tr>
            <td>{props.repository?.name}</td>
            <td>{props.repository.script}</td>
            <td>{props.repository.runtime}</td>
            <td>{props.repository.value}</td>
            <td>{props.repository.created_at}</td>
        </tr>   
    
    );
}