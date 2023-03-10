# Colornames.org API
Updated `07212022-140338`

- [Original Reference](https://colornames.org/download/)
- [**Gist**](https://gist.github.com/3e3fc2e93334e532cc7cadc3ae29ffb3)
- [Colornames.org API](drafts://open?uuid=CB53592F-F12F-461E-8F6A-A94992749AA9)
- [WTF](https://davidblue.wtf/drafts/CB53592F-F12F-461E-8F6A-A94992749AA9.html)
- [Simplenote Local](simplenote://note/355959168e2044ab8b0daac25e2e7dad)
- [Simplenote Publish](http://simp.ly/publish/KwnCRC)
- [Telegraph](https://telegra.ph/Colornamesorg-API-07-21)
- [Things](things:///show?id=5RuUwi1hpaLaoNzswXWPL4)

---
<script src="https://gist.github.com/3e3fc2e93334e532cc7cadc3ae29ffb3.js"></script>
---

**JSON feed of the latest 100 submissions:**  
`https://colornames.org/fresh/json/`

Returns:  
`[{"nameId":1944061,"hexCode":"4c72f2","name":"Roneria"},{"nameId":1944060,"hexCode":"7ce0ef","name":"Puffy"}, ... ]`

---

**JSON lookup of hex to color name:**
`https://colornames.org/search/json/?hex=00006B`

Returns:  
`{"hexCode":"00006b","name":"David Blue"}`

---

**JSON request for a random color name:**
`https://colornames.org/random/json/`

Returns:  
`{"hexCode":"f7ff85","name":"Panic Urine"}`