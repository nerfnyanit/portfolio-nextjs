import ToolTipButton from "./ToolTipButton";

export default async function Fetch() {
    const res = await fetch("https://ja.wikipedia.org/api/rest_v1/page/summary/React");
    const data = await res.json();

    return (
        <div className="mt-20 mb-20 flex flex-col items-center">
            {data.thumbnail && (
                <img className="w-48 hover:scale-105" src={data.thumbnail.source} alt={data.title} />
            )}
            {data.title && (
                <p className="text-3xl font-semibold">{data.title}</p>
            )}
            <ToolTipButton showtext="aaa"/>
        </div>
    );
}
