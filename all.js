// sélectionnez L'ID en html
const flagImage = document.getElementById('flag-image');
const questionText = document.getElementById('question-text');
const timer = document.getElementById('timer');
const answerInput = document.getElementById('answer-input');
const scoreElement = document.getElementById('score');

const flags = [
  {
    name: "Afghanistan",
    code: "AF",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/af.png"
  },
  {
    name: "Albanie",
    code: "AL",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/al.png"
  },
  {
    name: "Algérie",
    code: "DZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/dz.png" 
  },
  {
    name: "Andorre",
    code: "AD",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ad.png"
  },
  {
    name: "Angola",
    code: "AO",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ao.png"
  },
  {
    name: "Antigua-et-Barbuda",
    code: "AG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ag.png"
  },
  {
    name: "Argentine",
    code: "AR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ar.png"
  },
  {
    name: "Arménie",
    code: "AM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/am.png"
  },
  {
    name: "Australie",
    code: "AU",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/au.png"
  },
  {
    name: "Autriche",
    code: "AT",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/at.png"
  },
  {
    name: "Azerbaïdjan",
    code: "AZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/az.png"
  },
  {
    name: "Allemagne",
    code: "DE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/de.png"
  },
  {
    name: "Bahamas",
    code: "BS",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bs.png"
  },
  {
    name: "Bahrein",
    code: "BH",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bh.png"
  },
  {
    name: "Bangladesh",
    code: "BD",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bd.png"
  },
  {
    name: "Barbade",
    code: "BB",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bb.png"
  },
  {
    name: "Bielorussie",
    code: "BY",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/by.png"
  }, //a voir !
  {
    name: "Belgique",
    code: "BE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/be.png"
  },
  {
    name: "Belize",
    code: "BZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bz.png"
  },
  {
    name: "benin",
    code: "BJ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bj.png"
  },
  {
    name: "Bhoutan",
    code: "BT",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bt.png"
  },
  {
    name: "Bolivie",
    code: "BO",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bo.png"
  },
  {
    name: "Bosnie-Herzégovine",
    code: "BA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ba.png"
  },
  {
    name: "Botswana",
    code: "BW",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bw.png"
  },
  {
    name: "Brésil",
    code: "BR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/br.png"
  },
  {
    name: "Brunéi Darussalam",
    code: "BN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bn.png"
  },
  {
    name: "Bulgarie",
    code: "BG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bg.png"
  },
  {
    name: "Burkina Faso",
    code: "BF",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bf.png"
  },
  {
    name: "Burundi",
    code: "BI",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/bi.png"
  },
  {
    name: "Cabo Verde",
    code: "CV",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cv.png"
  },
  {
    name: "Cambodge",
    code: "KH",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/kh.png"
  },
  {
    name: "Cameroun",
    code: "CM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cm.png"
  },
  {
    name: "Canada",
    code: "CA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ca.png"
  },
  {
    name: "République centrafricaine",
    code: "CF",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cf.png"
  },
  {
    name: "Tchad",
    code: "TD",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/td.png"
  },
  {
    name: "Chili",
    code: "CL",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cl.png"
  },
  {
    name: "Chine",
    code: "CN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cn.png"
  },
  {
    name: "Colombie",
    code: "CO",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/co.png"
  },
  {
    name: "Comores",
    code: "KM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/km.png"
  },
  {
    name: "Congo",
    code: "CG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cg.png"
  },
  {
    name: "Costa Rica",
    code: "CR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cr.png"
  },
  {
    name: "Cote d'ivoire",
    code: "CI",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ci.png"
  },
  {
    name: "Croatie",
    code: "HR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/hr.png"
  },
  {
    name: "Cuba",
    code: "CU",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cu.png"
  },
  {
    name: "Chypre",
    code: "CY",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cy.png"
  },
  {
    name: "République tchèque",
    code: "CZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cz.png"
  },
  {
    name: "Corée du Nord",
    code: "KP",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/kp.png"
  },
  {
    name: "République démocratique du Congo",
    code: "CD",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/cd.png"
  },
  {
    name: "Danemark",
    code: "DK",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/dk.png"
  },
  {
    name: "Djibouti",
    code: "DJ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/dj.png"
  },
  {
    name: "Dominique",
    code: "DM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/dm.png"
  },
  {
    name: "République dominicaine",
    code: "DO",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/do.png"
  },
  {
    name: "Equateur",
    code: "EC",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ec.png"
  },
  {
    name: "Egypte",
    code: "EG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/eg.png"
  },
  {
    name: "El Salvador",
    code: "SV",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sv.png"
  },
  {
    name: "Guinée équatoriale",
    code: "GQ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gq.png"
  },
  {
    name: "Erythrée",
    code: "ER",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/er.png"
  },
  {
    name: "Estonie",
    code: "EE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ee.png"
  },
  {
    name: "Eswatini",
    code: "SZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sz.png"
  },
  {
    name: "Ethiopie",
    code: "ET",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/et.png"
  },
  {
    name: "Fidji",
    code: "FJ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/fj.png"
  },
  {
    name: "Finlande",
    code: "FI",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/fi.png"
  },
  {
    name: "France",
    code: "FR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/fr.png"
  },
  {
    name: "Gabon",
    code: "GA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ga.png"
  },
  {
    name: "Gambie",
    code: "GM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gm.png"
  },
  {
    name: "Géorgie",
    code: "GE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ge.png"
  },
  {
    name: "Ghana",
    code: "GH",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gh.png"
  },
  {
    name: "Gréce",
    code: "GR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gr.png"
  },
  {
    name: "Grenade",
    code: "GD",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gd.png"
  },
  {
    name: "Guatemala",
    code: "GT",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gt.png"
  },
  {
    name: "Guinée",
    code: "GN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gn.png"
  },
  {
    name: "Guinée-Bissau",
    code: "GW",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gw.png"
  },
  {
    name: "Guyana",
    code: "GY",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gy.png"
  },
  {
    name: "Haiti",
    code: "HT",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ht.png"
  },
  {
    name: "Honduras",
    code: "HN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/hn.png"
  },
  {
    name: "Hongrie",
    code: "HU",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/hu.png"
  },
  {
    name: "Islande",
    code: "IS",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/is.png"
  },
  {
    name: "Inde",
    code: "IN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/in.png"
  },
  {
    name: "Indonésie",
    code: "ID",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/id.png"
  },
  {
    name: "Iran",
    code: "IR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ir.png"
  },
  {
    name: "Irak",
    code: "IQ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/iq.png"
  },
  {
    name: "Irlande",
    code: "IE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ie.png"
  },
  {
    name: "Israel",
    code: "IL",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/il.png"
  },
  {
    name: "Italie",
    code: "IT",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/it.png"
  },
  {
    name: "Jamaique",
    code: "JM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/jm.png"
  },
  {
    name: "Japon",
    code: "JP",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/jp.png"
  },
  {
    name: "Jordanie",
    code: "JO",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/jo.png"
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/kz.png"
  },
  {
    name: "Kenya",
    code: "KE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ke.png"
  },
  {
    name: "Kiribati",
    code: "KI",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ki.png"
  },
  {
    name: "Koweit",
    code: "KW",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/kw.png"
  },
  {
    name: "Kirghizistan",
    code: "KG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/kg.png"
  },
  {
    name: "Laos",
    code: "LA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/la.png"
  },
  {
    name: "Lettonie",
    code: "LV",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/lv.png"
  },
  {
    name: "Liban",
    code: "LB",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/lb.png"
  },
  {
    name: "Lesotho",
    code: "LS",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ls.png"
  },
  {
    name: "Liberia",
    code: "LR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/lr.png"
  },
  {
    name: "Libye",
    code: "LY",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ly.png"
  },
  {
    name: "Liechtenstein",
    code: "LI",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/li.png"
  },
  {
    name: "Lituanie",
    code: "LT",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/lt.png"
  },
  {
    name: "Luxembourg",
    code: "LU",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/lu.png"
  },
  {
    name: "Magdagascar",
    code: "MG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mg.png"
  },
  {
    name: "Malawi",
    code: "MW",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mw.png"
  },
  {
    name: "Malaisie",
    code: "MY",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/my.png"
  },
  {
    name: "Maldives",
    code: "MV",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mv.png"
  },
  {
    name: "Mali",
    code: "ML",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ml.png"
  },
  {
    name: "Malte",
    code: "MT",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mt.png"
  },
  {
    name: "Iles Marshall",
    code: "MH",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mh.png"
  },
  {
    name: "Mauritanie",
    code: "MR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mr.png"
  },
  {
    name: "Maurice",
    code: "MU",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mu.png"
  },
  {
    name: "Mexique",
    code: "MX",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mx.png"
  },
  {
    name: "Micronésie",
    code: "FM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/fm.png"
  },
  {
    name: "Monaco",
    code: "MC",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mc.png"
  },
  {
    name: "Mongolie",
    code: "MN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mn.png"
  },
  {
    name: "Monténégro",
    code: "ME",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/me.png"
  },
  {
    name: "Maroc",
    code: "MA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ma.png"
  },
  {
    name: "Mozambique",
    code: "MZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mz.png"
  },
  {
    name: "Myanmar",
    code: "MM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mm.png"
  },
  {
    name: "Namibie",
    code: "NA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/na.png"
  },
  {
    name: "Nauru",
    code: "NR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/nr.png"
  },
  {
    name: "Népal",
    code: "NP",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/np.png"
  },
  {
    name: "Pays-Bas",
    code: "NL",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/nl.png"
  },
  {
    name: "Nouvelle-Zélande",
    code: "NZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/nz.png"
  },
  {
    name: "Nicaragua",
    code: "NI",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ni.png"
  },
  {
    name: "Niger",
    code: "NE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ne.png"
  },
  {
    name: "Nigeria",
    code: "NG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ng.png"
  },
  {
    name: "Macédoine du Nord",
    code: "MK",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/mk.png"
  },
  {
    name: "Norvége",
    code: "NO",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/no.png"
  },
  {
    name: "Oman",
    code: "OM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/om.png"
  },
  {
    name: "Pakistan",
    code: "PK",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/pk.png"
  },
  {
    name: "Palaos",
    code: "PW",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/pw.png"
  },
  {
    name: "Panama",
    code: "PA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/pa.png"
  },
  {
    name: "Papouasie-Nouvelle-Guinée",
    code: "PG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/pg.png"
  },
  {
    name: "Paraguay",
    code: "PY",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/py.png"
  },
  {
    name: "Pérou",
    code: "PE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/pe.png"
  },
  {
    name: "Philippines",
    code: "PH",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ph.png"
  },
  {
    name: "Pologne",
    code: "PL",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/pl.png"
  },
  {
    name: "Portugal",
    code: "PT",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/pt.png"
  },
  {
    name: "Qatar",
    code: "QA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/qa.png"
  },
  {
    name: "Corée du Sud",
    code: "KR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/kr.png"
  },
  {
    name: "Roumanie",
    code: "RO",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ro.png"
  },
  {
    name: "Russie",
    code: "RU",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ru.png"
  },
  {
    name: "Rwanda",
    code: "RW",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/rw.png"
  },
  {
    name: "Saint-Kitts-et-Nevis",
    code: "KN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/kn.png"
  },
  {
    name: "Sainte-Lucie",
    code: "LC",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/lc.png"
  },
  {
    name: "Saint-Vincent-et-les Grenadine",
    code: "VC",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/vc.png"
  },
  {
    name: "Samoa",
    code: "WS",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ws.png"
  },
  {
    name: "Saint-Marin",
    code: "SM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sm.png"
  },
  {
    name: "Sao Tomé-et-Principe",
    code: "ST",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/st.png"
  },
  {
    name: "Arabie Saoudite",
    code: "SA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sa.png"
  },
  {
    name: "Sénégal",
    code: "SN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sn.png"
  },
  {
    name: "Serbie",
    code: "RS",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/rs.png"
  },
  {
    name: "Seychelles",
    code: "SC",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sc.png"
  },
  {
    name: "Sierra Leone",
    code: "SL",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sl.png"
  },
  {
    name: "Singapour",
    code: "SG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sg.png"
  },
  {
    name: "Slovaquie",
    code: "SK",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sk.png"
  },
  {
    name: "Slovénie",
    code: "SI",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/si.png"
  },
  {
    name: "Iles Salomon",
    code: "",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/.png"
  },
  {
    name: "Somalie",
    code: "SO",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/so.png"
  },
  {
    name: "Afrique du Sud",
    code: "ZA",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/za.png"
  },
  {
    name: "Sud-Soudan",
    code: "SS",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ss.png"
  },
  {
    name: "Espagne",
    code: "ES",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/es.png"
  },
  {
    name: "Sri Lanka",
    code: "LK",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/lk.png"
  },
  {
    name: "Soudan",
    code: "SD",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sd.png"
  },
  {
    name: "Suriname",
    code: "SR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sr.png"
  },
  {
    name: "Suède",
    code: "SE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/se.png"
  },
  {
    name: "Suisse",
    code: "CH",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ch.png"
  },
  {
    name: "Syrie",
    code: "SY",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/sy.png"
  },
  {
    name: "Tadjikistan",
    code: "TJ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/tj.png"
  },
  {
    name: "Tanzanie",
    code: "TZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/tz.png"
  },
  {
    name: "Thailande",
    code: "TH",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/th.png"
  },
  {
    name: "Timor-Leste",
    code: "TL",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/tl.png"
  },
  {
    name: "Togo",
    code: "TG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/tg.png"
  },
  {
    name: "Tonga",
    code: "TO",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/to.png"
  },
  {
    name: "Trinité-et-Tobago",
    code: "TT",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/tt.png"
  },
  {
    name: "Tunisie",
    code: "TN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/tn.png"
  },
  {
    name: "Turquie",
    code: "TR",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/tr.png"
  },
  {
    name: "Turkménistan",
    code: "TM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/tm.png"
  },
  {
    name: "Tuvalu",
    code: "TV",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/tv.png"
  },
  {
    name: "Ouganda",
    code: "UG",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ug.png"
  },
  {
    name: "Ukraine",
    code: "UK",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ua.png"
  },
  {
    name: "Emirats arabes unis",
    code: "AE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ae.png"
  },
  {
    name: "Royaume-Uni",
    code: "GB",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/gb.png"
  },
  {
    name: "états Unis",
    code: "US",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/us.png"
  },
  {
    name: "Uruguay",
    code: "UY",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/uy.png"
  },
  {
    name: "Ouzbékistan",
    code: "UZ",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/uz.png"
  },
  {
    name: "Vanuatu",
    code: "VU",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/vu.png"
  },
  {
    name: "Venezuela",
    code: "VE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ve.png"
  },
  {
    name: "Vietnam",
    code: "VN",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/vn.png"
  },
  {
    name: "Yémen",
    code: "YE",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/ye.png"
  },
  {
    name: "Zambie",
    code: "ZM",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/zm.png"
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    difficulty: "Difficile",
    image: "https://flagcdn.com/h240/zw.png"
  }
];


let score = 0;
let currentFlag;
let currentDifficulty;
let secondsLeft;

// posé la question
function generateQuestion() {
  questionText.textContent = `Niveau ${currentDifficulty} : Quel est ce drapeau ?`;
  flagImage.src = currentFlag.image;
}

// éviter d'avoir deux fois le meme drapeau d'affilée
let lastFlagIndex = -1;

function getNextFlag() {
  let nextFlagIndex;

  do {
    nextFlagIndex = Math.floor(Math.random() * flags.length);
  } while (nextFlagIndex === lastFlagIndex);

  lastFlagIndex = nextFlagIndex;

  return flags[nextFlagIndex];
}

// ne pas compté comme faux si on a oublié un accent ou autre et mettre a jour le score
function checkAnswer() {
  const answer = answerInput.value
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
  const correctAnswer = currentFlag.name
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
  if (answer === correctAnswer) {
    alert("Bravo, c'est la bonne réponse !");
    updateScore();
    chooseFlag();
  } else {
    alert(`Dommage, la réponse était ${currentFlag.name}.`);
    chooseFlag();
  }
  answerInput.value = "";
}

function countdown() {
  secondsLeft--;
  timer.textContent = secondsLeft;
  if (secondsLeft === 0) {
    alert(`Temps Écoulé ! La Bonne Réponse était ${currentFlag.name}.`);
    chooseFlag();
  }
}

//géré la quantité de point gagné selon la difficulté
function updateScore() {
  switch (currentDifficulty) {
    case 'Facile':
      score += 10;
      break;
      
    case 'Moyen':
      score += 100;
      break;
      
    case 'Difficile':
      score += 200;
      break;
      
    case 'Extreme':
      score += 400;
      break;
      
    case 'Impossible':
      score += 1600;
      break;
      
    default:
      score += 10;
      break;
  }
  scoreElement.textContent = score;
}


// compteur d'éléments actif
document.addEventListener("DOMContentLoaded", function(event) {
  const actifElements = document.querySelectorAll('.actif');
  const nbActifElements = actifElements.length;
  const resultElement = document.getElementById('result');
  if (resultElement) {
    resultElement.textContent = `Nombre de pays ajouté dans le jeu : ${nbActifElements}`;
  } else {
    console.error("L'élément avec l'ID 'result' n'existe pas.");
  }
});

// compter le nombre d'éléments.noadd
document.addEventListener("DOMContentLoaded", function(event) {
  const actifElements = document.querySelectorAll('.noadd');
  const nbActifElements = actifElements.length;
  const resultElement = document.getElementById('resultno');
  if (resultElement) {
    resultElement.textContent = `Nombre de pays qui ne sont pas encore dans le jeu : ${nbActifElements}`;
  } else {
    console.error("L'élément avec l'ID 'resultno' n'existe pas.");
  }
});

//compteurs de nombre total de pays 
document.addEventListener("DOMContentLoaded", function(event) {
  const actifElements = document.querySelectorAll('li');
  const nbActifElements = actifElements.length;
  const resultElement = document.getElementById('resulttotal');
  if (resultElement) {
    resultElement.textContent = `Nombre de pays total dans le jeu : ${nbActifElements}`;
  } else {
    console.error("L'élément avec l'ID 'resulttotal' n'existe pas.");
  }
});

// géré la difficulté des drapeau
function chooseFlag() {
  const flagIndex = Math.floor(Math.random() * flags.length);
  currentFlag = flags[flagIndex];
  currentDifficulty = currentFlag.difficulty;
  switch (currentDifficulty) {
    case 'Facile':
      secondsLeft = 21;
      break;
      
    case 'Moyen':
      secondsLeft = 31;
      break;
      
    case 'Difficile':
      secondsLeft = 36;
      break;
      
    case 'Extreme':
      secondsLeft = 41;
      break;
      
    case 'Impossible':
      secondsLeft = 61;
      break;
      
    default:
      secondsLeft = 21;
      break;
  }
  generateQuestion();
}

// détecter si la touche Entrée et appuyez ou non
chooseFlag();
setInterval(countdown, 1000);
answerInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});