import Counter from "../components/Counter"
import NameInput from "../components/NameInput"


export default function page() {
  return (
   <>
    <div className="fixed top-0 w-full text-center top-10">
        <h1 className="text-4xl font-bold mb-2 ">Projectへ、ようこそ</h1>
        <p className="text-lg font-semibold">ここでは私が作った作品が並べられています</p>
    </div>

    <main className="pt-40 text-center flex flex-col items-center">
        <Counter label="one" step={1}/>
        <hr className="w-3/4 border-t border-gray-300 my-6" />
        <NameInput />
        <hr className="w-3/4 border-t border-gray-300 my-6" />
        <h2 className="text-3xl font-semibold">追加予定</h2>
    </main>
   </>
  )
}
