import { useState, useEffect } from 'react'
import { song } from '../api/songs'

const useMusic = (ids: number[]) => {
    const [state, setState] = useState(null)
    let list = []
    useEffect(() => {
        ids.map(id => {
            song(id).then((res) => {
                // state.id = res[0].id
                let { al, dt, name } = res[0]
                console.log('state');
                console.log(res);
                list.push({
                    ...res[0],
                    id,
                    name,
                    duration: dt / 1000,
                    picUrl: al?.picUrl
                })
                // setState()
            })

        }

        );
    }, [ids])
    return list
}

export default useMusic