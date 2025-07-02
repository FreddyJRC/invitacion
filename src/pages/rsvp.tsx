import { useState } from "react";
import { href, useNavigate } from "react-router";
import Menu from "../menu"

type Values = {
    name : string,
    assistance : string,
    number : string,
}

export default function Rsvp() {
  let navigate = useNavigate();

  const [values, setValues] = useState<Values>({
    name : "",
    assistance : "",
    number : "1",
  });

  const [submiting, setSubmiting] = useState(false);
  const [onNo, setOnNo] = useState(false);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values,[event.target.name] : event.target.value});
  }

  const doPost = async (event : React.FormEvent<HTMLFormElement>)  => {
    event.preventDefault();
    setSubmiting(true);
    let url = new URL("https://script.google.com/macros/s/AKfycbyb__bF8BeMpykJZMi1rNd-N1FUtJBorIquJfF6LvBwSeu4iROJN2MMwdSZ2FVB1lZKgQ/exec");
    url.searchParams.append("name", values.name);
    url.searchParams.append("assistance", values.assistance);
    url.searchParams.append("number", values.number);

    await fetch(url.toString(), { method: "POST" });
    if (values.assistance === "si") {
      localStorage.setItem("c", "1");
      navigate({
        pathname: "/invitacion"
      }, {
        replace: true
      })
    } else {
      setOnNo(true);
    }
  }

  return (
    <>
      <Menu name="RSVP" />
      <form onSubmit={(e) => doPost(e)}>
        <div className="flex flex-1 flex-col items-center justify-center text-olive-dark font-serif">
          <div className="w-3/4 sm:w-1/4 pb-6">
            <label htmlFor="name" className="block mb-2 text-lg sm:text-xl font-semibold">Tu nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={values.name}
              onChange={handleChange}
              className="border border-olive-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              required
            />
          </div>
          <div className="w-3/4 sm:w-1/4">
            <label htmlFor="assistance" className="block mb-2 text-lg sm:text-xl font-semibold">¿Puedes asistir?</label>
              {/* <input type="text" id="name" className="border border-olive-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required /> */}
            <input type="radio" id="si" name="assistance" value="si" onChange={handleChange} required />
            <label htmlFor="si" className="ml-2 text-lg sm:text-xl">Sí, asistiré</label>
          </div>
          <div className="w-3/4 sm:w-1/4 pb-6">
            <input type="radio" id="no" name="assistance" value="no" onChange={handleChange} required />
            <label htmlFor="no" className="ml-2 text-lg sm:text-xl">No podré asistir</label>
          </div>
          {(localStorage.getItem("p") === "2" && values.assistance === "si" ? 
            <>
              <div className="w-3/4 sm:w-1/4">
                <label htmlFor="number" className="block mb-2 text-lg sm:text-xl font-semibold">¿Cuantos asistirán?</label>
                  {/* <input type="text" id="name" className="border border-olive-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required /> */}
                <input type="radio" id="uno" name="number" value="1" onChange={handleChange} required />
                <label htmlFor="uno" className="ml-2 text-lg sm:text-xl">1</label>
              </div>
              <div className="w-3/4 sm:w-1/4 pb-6">
                <input type="radio" id="dos" name="number" value="2" onChange={handleChange} required />
                <label htmlFor="dos" className="ml-2 text-lg sm:text-xl">2</label>
              </div>
            </>
          :
            <></>
          )}
          <div className="w-3/4 sm:w-1/4 pb-6">
            <input 
              type="submit" 
              value="confirmar" 
              disabled={submiting}
              className='px-4 py-2 mb-10 bg-olive text-white w-full hover:bg-olive-dark disabled:bg-olive-500' />
          </div>
        </div>
      </form>
      {(onNo) && <div className="flex flex-1 flex-col text-olive-dark mx-auto max-w-xl px-8 sm:px-6 lg:px-8">
        <h2 className="font-serif group relative pt-10 pb-4 text-center text-4xl">
            ¡Gracias!
        </h2>
        <p className="font-serif group relative pb-8 text-lg sm:text-xl text-justify">
            Nos llena de tristeza no poder contar contigo en este día tan especial, agradecemos mucho que te hayas tomado el tiempo para hacérnoslo saber
        </p>
      </div>}
    </>
  )
}