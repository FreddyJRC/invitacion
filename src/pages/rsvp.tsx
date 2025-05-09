import Menu from "../menu"

export default function Rsvp() {

  return (
    <>
      <Menu name="RSVP" />
      <div className="flex flex-1 flex-col items-center justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdK7TPESa5DWcXaIYVdQAqyRk_UFxcw9YEp9k-IehyAvzQFTg/viewform?embedded=true"
          style={{ width: '100%', height: '80vh' }}
        >Cargando…</iframe>
      </div>
    </>
  )
}