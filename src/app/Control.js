"use client"
import Link from 'next/link';
import {useParams, useRouter} from 'next/navigation';

export function Control() {
    const params = useParams();
    const router = useRouter();

    const id = params.id;

    const onDelete = async () => {
        const resp = await fetch(`http://localhost:9999/topics/${id}`, {
            method: 'DELETE'
        });
        await resp.json();
        router.push('/');
        router.refresh();
    }

    return (
        <ul>
            {id ? <>
                <li><Link href={"/update/" + id}>Update</Link></li>
                <li><input onClick={onDelete} type="button" value="delete"/></li>
            </> : <li><Link href="/create">Create</Link></li>}
        </ul>
    );
}