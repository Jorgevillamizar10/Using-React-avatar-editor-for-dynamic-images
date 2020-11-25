import * as React from "react"

export const SvgComponent = ({Ruta,Ruta2,Ruta3}) => {
  return (
    <svg viewBox="0 0 1920 1080">
      <image
        width={1920}
        height={1080}
        id="prefix__Capa_1"
        data-name="Capa 1"
      />

      <image
        x="721.5"
        y="710"
        d="M721.5 714.7h149v155h-149z"
        width={150}
        height={165}
        xlinkHref={Ruta2}
        preserveAspectRatio="xMinYMin slice"
      />

      <image
        x="1046.36"
        y="315"
        d="M1047 299h209v480h-209z"
        width={210}
        height={490}
        xlinkHref={Ruta}
        preserveAspectRatio="xMinYMin slice"
      />

      <image
        x="1553"
        y="376"
        d="M1555 320h209v380h-209z"
        width={215}
        height={390}
        xlinkHref={Ruta3}
        preserveAspectRatio="xMinYMin slice"
      />
    </svg>
  )
}