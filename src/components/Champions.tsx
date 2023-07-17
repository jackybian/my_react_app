import React, {useState} from 'react'

interface IChampion{
    id: number;
    name: string;
    type: string;
}

export default function Champions(){
    const [champions, setChampions] = useState<IChampion[]>(
        [{
            id:1,
            name:'蔡文姬',
            type: '辅助'
        },
        {
            id:2,
            name:'后裔',
            type: '射手'
        },
        {
            id:3,
            name:'鲁班7号',
            type: '射手'
        }]
    )

    return (
        <div>
            <ul>
             {champions.map(champion=>(
                <li key={champion.id}>{champion.name} - {champion.type}</li>
             )
             )}
            </ul>
        </div>
    )
}