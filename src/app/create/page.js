"use client";

import {useRouter} from "next/navigation";

export default function Create() {
    const router = useRouter();
    return (
        <form onSubmit={async (event) => {
            event.preventDefault();
            const form = event.target;
            const title = form?.title.value;
            const body = form?.body.value;
            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}` + "/topics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title, body})
            });
            const topic = await resp.json();
            const lastId = topic.id;

            router.push(`/read/${lastId}`);
            router.refresh()
        }}>

            <p>
                <input type="text" name="title" placeholder="title"/>
            </p>
            <p>
                <textarea name="body" placeholder="body"></textarea>
            </p>
            <p>
                <input type='submit' value='create'/>
            </p>

        </form>
    )
}