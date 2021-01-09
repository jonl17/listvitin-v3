import React from "react"
import { PageWrap } from "../components/PageWrap"

const ABOUT =
  "Listvitinn er vefsíða sem geymir yfirlit yfir flestar myndlistarsýningar á Íslandi. Markmið verkefnisins er að búa til þægilegt tól fyrir myndlistarunnendur á Íslandi til að sjá hvaða sýningar eru í gangi hverju sinni. Síðunni er einnig ætlað að hjálpa fólki að forgangsraða hvaða sýningar það þurfi að sjá fyrr en aðrar, eftir því hve margir dagar eru eftir af sýningunum. Síðan geymir einnig sýningar sem eru framundan og afstaðnar. Þar að auki er hægt að sjá yfirlit yfir helstu sýningarstaði."

const UmListvitann = () => {
  return (
    <PageWrap>
      <div className="about-text">
        <p>{ABOUT}</p>
      </div>
    </PageWrap>
  )
}

export default UmListvitann
