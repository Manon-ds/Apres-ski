import React from "react";
import "./Pres.css"

export default function(){
  return(
    <div>
      <div className="top-cont flex flex-row  text-center bg-red-50">
        <div className="soir px-2 py-3">
          <p className="pres-day text-xl font-bold ">Le Soir</p>
          <p className="text-lg">Raclettes, fondues, & planches de charcuterie</p>
        </div>
        <div className="px-2 py-3">
          <p className="pres-day text-xl font-bold ">Le Midi</p>
          <p className="text-lg">Nos plats cuisinés (à emporter ou sur place)</p>
        </div>
      </div>
      <div className="bottom-cont  text-center bg-red-50 px-2 py-3">
        <p className="bar text-xl font-bold">Bar lounge</p>
        <p className="text-lg">Vin chaud et gourmandises</p>
        <p className="text-lg">Planches apéro pour l'happy hour</p>
        <p className="text-lg">Pub en soirée</p>
      </div>
    </div>
  )
}