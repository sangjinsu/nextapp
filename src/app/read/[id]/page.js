export default async function Read({params: {id}}) {
    const resp = await fetch(`http://localhost:9999/topics/${id}`, {cache: 'no-cache'});
    const topic = await resp.json();
    return <>
        <h2>{topic.title}</h2>
        {topic.body}
    </>
}