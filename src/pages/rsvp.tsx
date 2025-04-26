

import Menu from "../menu"

export default function Home() {
    return (
        <>
            <Menu />
            <div className="flex flex-1 flex-col items-center justify-center">
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdK7TPESa5DWcXaIYVdQAqyRk_UFxcw9YEp9k-IehyAvzQFTg/viewform?embedded=true" 
                    width="640" 
                    height="552" 
                >Cargando…</iframe>
            </div>
        </>
    )
}