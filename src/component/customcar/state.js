import { proxy } from 'valtio'

export const shoeColor = proxy({
  current: null,
  shoes: {
    left: false,
    right: false,
  },
  item: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  }
})

export const shoeLang = {
  laces: "шнурки",
  mesh: "основа",
  caps: "кольца",
  inner: "внутри",
  sole: "подошва",
  stripes: "полосы",
  band: "лента",
  patch: "накладка",
}