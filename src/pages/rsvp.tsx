import Menu from "../menu"

export default function Rsvp() {
  let query = new URLSearchParams(window.location.search)

  return (
    <>
      <Menu name="RSVP" />
      <div className="flex flex-1 flex-col items-center justify-center">
        {query.get("p") === "2" ?
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdK7TPESa5DWcXaIYVdQAqyRk_UFxcw9YEp9k-IehyAvzQFTg/viewform?embedded=true"
            style={{ width: '100%', height: '90vh' }}
          >Cargando…</iframe>
        : 
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdRK2PrNEWEtwbo0gVdreA75ACQx8stwR8mivefCxZlVIszaQ/viewform?embedded=true" 
            style={{ width: '100%', height: '90vh' }}
          >Cargando…</iframe>
        }
      </div>
    </>
  )
}