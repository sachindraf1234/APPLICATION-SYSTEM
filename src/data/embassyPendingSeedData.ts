export interface EmbassyPendingCandidate {
  no: number;
  full_name: string;
  passport_number: string;
  se_number: string;
  company_name: string;
  embassy_applied_date: string;
  e_number: string;
  se_group: string; // e.g. "SE240", "SE241", "SE243", etc.
}

export const EMBASSY_PENDING_PDF_DATA: EmbassyPendingCandidate[] = [
  // SE240 (1 person)
  { no: 1, full_name: "SEMINA GANGANATHA", passport_number: "N11412407", se_number: "SE2405951", company_name: "CLEVER", embassy_applied_date: "12/06/2026", e_number: "", se_group: "SE240" },

  // SE241 (11 persons)
  { no: 2, full_name: "LAKMAL SANJEEWA", passport_number: "N9849716", se_number: "SE2410392", company_name: "INSTAL IMPULS", embassy_applied_date: "05/06/2026", e_number: "E24404457566611", se_group: "SE241" },
  { no: 3, full_name: "THARMASEELAN", passport_number: "N11030886", se_number: "SE2411171", company_name: "RETEX GREEN", embassy_applied_date: "06/06/2026", e_number: "E24412258081885", se_group: "SE241" },
  { no: 4, full_name: "THARUSHIKA NADEESHANI", passport_number: "P0355570", se_number: "SE2414143", company_name: "HOLIDAY TOUR SRL", embassy_applied_date: "09/06/2026", e_number: "E24442028052167", se_group: "SE241" },
  { no: 5, full_name: "LAHIRU MADURANGA", passport_number: "N9755246", se_number: "SE2414195", company_name: "INSTAL IMPULS", embassy_applied_date: "09/06/2026", e_number: "E24442547813016", se_group: "SE241" },
  { no: 6, full_name: "PRAMAL SACHINTHA", passport_number: "N11099972", se_number: "SE2414220", company_name: "CLEVER", embassy_applied_date: "02/07/2026", e_number: "", se_group: "SE241" },
  { no: 7, full_name: "USHAN THIWANKA", passport_number: "N10458714", se_number: "SE2414247", company_name: "CLEVER", embassy_applied_date: "02/07/2026", e_number: "", se_group: "SE241" },
  { no: 8, full_name: "DILANI DELKA", passport_number: "N11416857", se_number: "SE2417472", company_name: "DUNNAREA HOTEL", embassy_applied_date: "11/06/2026", e_number: "E24475331227696", se_group: "SE241" },
  { no: 9, full_name: "NISHADINI PRASANGIKA", passport_number: "N10561109", se_number: "SE2417476", company_name: "DUNNAREA HOTEL", embassy_applied_date: "11/06/2026", e_number: "E24475376056353", se_group: "SE241" },
  { no: 10, full_name: "SHASHINI NIMASHA", passport_number: "N10554442", se_number: "SE2417520", company_name: "DUNNAREA HOTEL", embassy_applied_date: "11/06/2026", e_number: "E24475812169090", se_group: "SE241" },
  { no: 11, full_name: "RANDUNU JAYASHAN", passport_number: "P0524955", se_number: "SE2419253", company_name: "CLEVER", embassy_applied_date: "23/07/2026", e_number: "", se_group: "SE241" },
  { no: 12, full_name: "HESHAN MADHUWANTHA", passport_number: "N10570262", se_number: "SE2419533", company_name: "CLEVER", embassy_applied_date: "23/07/2026", e_number: "", se_group: "SE241" },

  // SE243 (15 persons)
  { no: 13, full_name: "MALEESHA SANKALPA", passport_number: "N9852624", se_number: "SE2430377", company_name: "RETEX GREEN", embassy_applied_date: "22/06/2026", e_number: "E24604522677814", se_group: "SE243" },
  { no: 14, full_name: "SEWWANDI THAKSHILA", passport_number: "N11332516", se_number: "SE2430387", company_name: "RETEX GREEN", embassy_applied_date: "22/06/2026", e_number: "E24604621683534", se_group: "SE243" },
  { no: 15, full_name: "SACHINTHA MALSHAN", passport_number: "N9176018", se_number: "SE2430404", company_name: "RETEX GREEN", embassy_applied_date: "22/06/2026", e_number: "E24604795323688", se_group: "SE243" },
  { no: 16, full_name: "MALEESHA NETHMINI", passport_number: "P0606617", se_number: "SE2430419", company_name: "RETEX GREEN", embassy_applied_date: "22/06/2026", e_number: "E24604944240255", se_group: "SE243" },
  { no: 17, full_name: "MADUSHAN KAVINDA", passport_number: "N11118998", se_number: "SE2430454", company_name: "RETEX GREEN", embassy_applied_date: "22/06/2026", e_number: "E24605292236483", se_group: "SE243" },
  { no: 18, full_name: "MADHUSHANI THARAKA", passport_number: "N9855973", se_number: "SE2430476", company_name: "RETEX GREEN", embassy_applied_date: "22/06/2026", e_number: "E24605514329408", se_group: "SE243" },
  { no: 19, full_name: "SANDUN CHAMARA", passport_number: "N8548880", se_number: "SE2430495", company_name: "RETEX GREEN", embassy_applied_date: "22/06/2026", e_number: "E24605706191140", se_group: "SE243" },
  { no: 20, full_name: "SUMUDITHA SANJEEWA", passport_number: "P0703909", se_number: "SE2430501", company_name: "RETEX GREEN", embassy_applied_date: "22/06/2026", e_number: "E24605764875104", se_group: "SE243" },
  { no: 21, full_name: "ISHAN MADHUSHA", passport_number: "N10891797", se_number: "SE2432000", company_name: "ANALKO ALUMINIUM", embassy_applied_date: "23/06/2026", e_number: "E24620755697626", se_group: "SE243" },
  { no: 22, full_name: "CHANAKA ISHARA", passport_number: "P0461310", se_number: "SE2433137", company_name: "CLEVER", embassy_applied_date: "20/07/2026", e_number: "", se_group: "SE243" },
  { no: 23, full_name: "NIRASHA HIRUNI", passport_number: "P0906633", se_number: "SE2436794", company_name: "RETEX GREEN", embassy_applied_date: "27/06/2026", e_number: "E24668858508005", se_group: "SE243" },
  { no: 24, full_name: "SALANI MANEESHA", passport_number: "N10092149", se_number: "SE2436913", company_name: "RETEX GREEN", embassy_applied_date: "27/06/2026", e_number: "E24670046116493", se_group: "SE243" },
  { no: 25, full_name: "SAMADHI SHASHIPRABHA", passport_number: "P0919870", se_number: "SE2436948", company_name: "RETEX GREEN", embassy_applied_date: "27/06/2026", e_number: "E24670392438663", se_group: "SE243" },
  { no: 26, full_name: "SANSALA THARUSHI", passport_number: "N10951465", se_number: "SE2436971", company_name: "RETEX GREEN", embassy_applied_date: "27/06/2026", e_number: "E24670624157650", se_group: "SE243" },
  { no: 27, full_name: "DAMMIKA PRIYADARSHANI", passport_number: "N11390907", se_number: "SE2436990", company_name: "RETEX GREEN", embassy_applied_date: "27/06/2026", e_number: "E24670819898687", se_group: "SE243" },

  // SE244 (56 persons)
  { no: 28, full_name: "RASHMIKA HESHAN", passport_number: "N10094734", se_number: "SE2440235", company_name: "RETEX GREEN", embassy_applied_date: "30/06/2026", e_number: "E24703369980587", se_group: "SE244" },
  { no: 29, full_name: "SANDUNI MADHUSHIKA", passport_number: "P0622357", se_number: "SE2440257", company_name: "RETEX GREEN", embassy_applied_date: "30/06/2026", e_number: "E24703582655350", se_group: "SE244" },
  { no: 30, full_name: "PIYUMI IMASHI", passport_number: "P0400583", se_number: "SE2440273", company_name: "RETEX GREEN", embassy_applied_date: "30/06/2026", e_number: "E24703741047981", se_group: "SE244" },
  { no: 31, full_name: "MANEESHA NETHMINI", passport_number: "N9802838", se_number: "SE2440278", company_name: "RETEX GREEN", embassy_applied_date: "30/06/2026", e_number: "E24703793014077", se_group: "SE244" },
  { no: 32, full_name: "MALKI IMASHA", passport_number: "N9230295", se_number: "SE2440337", company_name: "RETEX GREEN", embassy_applied_date: "30/06/2026", e_number: "E24704402864783", se_group: "SE244" },
  { no: 33, full_name: "NETHULI PRAVINDAYA", passport_number: "N11329094", se_number: "SE2440342", company_name: "RETEX GREEN", embassy_applied_date: "30/06/2026", e_number: "E24704455801991", se_group: "SE244" },
  { no: 34, full_name: "KAVISHI SANJANA", passport_number: "P0625157", se_number: "SE2441137", company_name: "RETEX GREEN", embassy_applied_date: "01/07/2026", e_number: "E24712428433358", se_group: "SE244" },
  { no: 35, full_name: "CHANCHALA KAVINDI", passport_number: "N8226796", se_number: "SE2441145", company_name: "RETEX GREEN", embassy_applied_date: "01/07/2026", e_number: "E24712502281412", se_group: "SE244" },
  { no: 36, full_name: "ASHITHA RANGA FERNANDO", passport_number: "N7381255", se_number: "SE2443804", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24739112116908", se_group: "SE244" },
  { no: 37, full_name: "MANUSHA NETHMIKA", passport_number: "N9939432", se_number: "SE2443812", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24739195562840", se_group: "SE244" },
  { no: 38, full_name: "THARINDU CHAMIKARA", passport_number: "N9688571", se_number: "SE2443821", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24739286504938", se_group: "SE244" },
  { no: 39, full_name: "RAVIN PRAMANGA", passport_number: "P0924885", se_number: "SE2443824", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24739315562840", se_group: "SE244" },
  { no: 40, full_name: "KAVINDA SURAJ PERERA", passport_number: "N10488470", se_number: "SE2443838", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24739452849572", se_group: "SE244" },
  { no: 41, full_name: "RAVISHKA PASINDU", passport_number: "N9233631", se_number: "SE2443845", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24739523485126", se_group: "SE244" },
  { no: 42, full_name: "DULAKSHANA KAUSHALYA", passport_number: "P0780073", se_number: "SE2443854", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24739615338900", se_group: "SE244" },
  { no: 43, full_name: "HASUN LAKSHAN", passport_number: "N9449128", se_number: "SE2443875", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24739823059006", se_group: "SE244" },
  { no: 44, full_name: "NAVEEN PRIYADARSHANA", passport_number: "N11399386", se_number: "SE2443902", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24740096646978", se_group: "SE244" },
  { no: 45, full_name: "CHANUKA DULSHAN", passport_number: "N9256562", se_number: "SE2443941", company_name: "RETEX GREEN", embassy_applied_date: "03/07/2026", e_number: "E24740487902874", se_group: "SE244" },
  { no: 46, full_name: "GAYAN PRADEEP", passport_number: "N11091607", se_number: "SE2444779", company_name: "RETEX GREEN", embassy_applied_date: "04/07/2026", e_number: "E24748876886129", se_group: "SE244" },
  { no: 47, full_name: "DUMIDU PRIYANKARA", passport_number: "P0435213", se_number: "SE2444781", company_name: "RETEX GREEN", embassy_applied_date: "04/07/2026", e_number: "E24748898881943", se_group: "SE244" },
  { no: 48, full_name: "IMALI HANSIKA", passport_number: "N11540139", se_number: "SE2444786", company_name: "RETEX GREEN", embassy_applied_date: "04/07/2026", e_number: "E24748943163370", se_group: "SE244" },
  { no: 49, full_name: "DAMITH PRASAD", passport_number: "P0893183", se_number: "SE2444795", company_name: "RETEX GREEN", embassy_applied_date: "04/07/2026", e_number: "E24749031332061", se_group: "SE244" },
  { no: 50, full_name: "LAHIRU MADHUSHAN", passport_number: "N9204453", se_number: "SE2444798", company_name: "RETEX GREEN", embassy_applied_date: "04/07/2026", e_number: "E24749062887248", se_group: "SE244" },
  { no: 51, full_name: "SHEHANI NISANSALA", passport_number: "P0784910", se_number: "SE2446101", company_name: "RETEX GREEN", embassy_applied_date: "06/07/2026", e_number: "E24762097020916", se_group: "SE244" },
  { no: 52, full_name: "KOSHALA DANANJAYA", passport_number: "P0706674", se_number: "SE2447390", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24775002729997", se_group: "SE244" },
  { no: 53, full_name: "HIRUNI SAVINDI", passport_number: "N11453656", se_number: "SE2447405", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24775159734183", se_group: "SE244" },
  { no: 54, full_name: "GIHAN RUKMAL FONSEKA", passport_number: "N11507348", se_number: "SE2447423", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24775332274159", se_group: "SE244" },
  { no: 55, full_name: "HIRUNI NISANSALA", passport_number: "N10559083", se_number: "SE2447451", company_name: "RETEX GREEN", embassy_applied_date: "08/07/2026", e_number: "E24775616213604", se_group: "SE244" },
  { no: 56, full_name: "SHERONI AVISHKA", passport_number: "N11486858", se_number: "SE2447476", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24775876205646", se_group: "SE244" },
  { no: 57, full_name: "DIMUTHU NUWAN SRILAL", passport_number: "N10897667", se_number: "SE2447483", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24775945181648", se_group: "SE244" },
  { no: 58, full_name: "THEEKSHANA SANKALPA", passport_number: "P0732060", se_number: "SE2447510", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24776211750928", se_group: "SE244" },
  { no: 59, full_name: "DINITHI KAVINDYA", passport_number: "P0082250", se_number: "SE2447555", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24776669375456", se_group: "SE244" },
  { no: 60, full_name: "NALAKA MIHIRANGA", passport_number: "P0695124", se_number: "SE2447559", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24776705107002", se_group: "SE244" },
  { no: 61, full_name: "SENURA DIMAL FERNANDO", passport_number: "P0927378", se_number: "SE2447584", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24776958239136", se_group: "SE244" },
  { no: 62, full_name: "HARITH NAWIN", passport_number: "P0742493", se_number: "SE2447599", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24777109988545", se_group: "SE244" },
  { no: 63, full_name: "SUDESH PRIYANTHA", passport_number: "N10642344", se_number: "SE2447608", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24777197409360", se_group: "SE244" },
  { no: 64, full_name: "ANTANI NISHANTHA", passport_number: "N11121324", se_number: "SE2447637", company_name: "RETEX GREEN", embassy_applied_date: "08/07/2026", e_number: "E24777482274159", se_group: "SE244" },
  { no: 65, full_name: "THAKSHILA WIJAYAMALE JAYALATH", passport_number: "N10749923", se_number: "SE2447639", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24777507364431", se_group: "SE244" },
  { no: 66, full_name: "LEHAN KAVINDU", passport_number: "N8892900", se_number: "SE2447691", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24778022887248", se_group: "SE244" },
  { no: 67, full_name: "SUMUDU PRIYADARSHANA", passport_number: "P1231469", se_number: "SE2447739", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24605764875104", se_group: "SE244" },
  { no: 68, full_name: "PRADEEP RANGA KUMAR", passport_number: "N10920996", se_number: "SE2447778", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24778892461128", se_group: "SE244" },
  { no: 69, full_name: "PRAKASH LAKSHAN", passport_number: "N10551950", se_number: "SE2447786", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24778978732649", se_group: "SE244" },
  { no: 70, full_name: "RUCHIRA MADUSHAN", passport_number: "N10752402", se_number: "SE2447820", company_name: "RETEX GREEN", embassy_applied_date: "08/07/2026", e_number: "E24779314180115", se_group: "SE244" },
  { no: 71, full_name: "RASHINTHA KAUSHAN", passport_number: "N11238403", se_number: "SE2447827", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24779387850691", se_group: "SE244" },
  { no: 72, full_name: "SENARA DINITHI", passport_number: "P0037317", se_number: "SE2447849", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24779617461542", se_group: "SE244" },
  { no: 73, full_name: "DILMI CHATHURIKA", passport_number: "N8147004", se_number: "SE2447880", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24779928650045", se_group: "SE244" },
  { no: 74, full_name: "GIMES KALHARA", passport_number: "N9439614", se_number: "SE2448517", company_name: "RETEX GREEN", embassy_applied_date: "08/07/2026", e_number: "E24786318500751", se_group: "SE244" },
  { no: 75, full_name: "KAVEESHA GEESHAN", passport_number: "N10989590", se_number: "SE2448519", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24786339308063", se_group: "SE244" },
  { no: 76, full_name: "SHANAKA CRISHAN FERNANDO", passport_number: "N9065976", se_number: "SE2448523", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24786376288251", se_group: "SE244" },
  { no: 77, full_name: "DHANANJAYA DILRUK", passport_number: "N8143809", se_number: "SE2448531", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24786457154998", se_group: "SE244" },
  { no: 78, full_name: "ROMAL NIDUKTHA", passport_number: "P0400581", se_number: "SE2448534", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24786481690788", se_group: "SE244" },
  { no: 79, full_name: "WASALA KASUN", passport_number: "P0771452", se_number: "SE2448543", company_name: "RETEX GREEN", embassy_applied_date: "08/07/2026", e_number: "E24786574613488", se_group: "SE244" },
  { no: 80, full_name: "SHALANI CRISENTA", passport_number: "N9307513", se_number: "SE2448553", company_name: "RETEX GREEN", embassy_applied_date: "07/07/2026", e_number: "E24786676220858", se_group: "SE244" },
  { no: 81, full_name: "CHAMATH RASHMIKA", passport_number: "N7376377", se_number: "SE2448929", company_name: "RETEX GREEN", embassy_applied_date: "08/07/2026", e_number: "E24790441272625", se_group: "SE244" },
  { no: 82, full_name: "CHAMIL SHIWANKA", passport_number: "N8525768", se_number: "SE2449126", company_name: "RETEX GREEN", embassy_applied_date: "08/07/2026", e_number: "E24792428889196", se_group: "SE244" },
  { no: 83, full_name: "ASHAN THARUKA LAKMAL", passport_number: "P0627607", se_number: "SE2449992", company_name: "RETEX GREEN", embassy_applied_date: "09/07/2026", e_number: "E24801104628699", se_group: "SE244" },

  // SE245 (8 persons)
  { no: 84, full_name: "CHATHUMIKA LAKSHAN", passport_number: "P0820298", se_number: "SE2451298", company_name: "INSTAL IMPULS", embassy_applied_date: "10/07/2026", e_number: "E24814191593676", se_group: "SE245" },
  { no: 85, full_name: "KAVINDU MILINDA LAKSHAN", passport_number: "N11014704", se_number: "SE2455275", company_name: "RETEX GREEN", embassy_applied_date: "14/07/2026", e_number: "E24854034538842", se_group: "SE245" },
  { no: 86, full_name: "RANJIVE SANJAYA", passport_number: "P0461310", se_number: "SE2455995", company_name: "CLEVER", embassy_applied_date: "20/07/2026", e_number: "", se_group: "SE245" },
  { no: 87, full_name: "PUBUDITHA SENAHAS", passport_number: "N10482846", se_number: "SE2455996", company_name: "CLEVER", embassy_applied_date: "20/07/2026", e_number: "", se_group: "SE245" },
  { no: 88, full_name: "RANIDU SHEHARA", passport_number: "N10491928", se_number: "SE2456016", company_name: "CLEVER", embassy_applied_date: "20/07/2026", e_number: "", se_group: "SE245" },
  { no: 89, full_name: "NIMESHA PRIYASANI", passport_number: "N8579238", se_number: "SE2458166", company_name: "RETEX GREEN", embassy_applied_date: "16/07/2026", e_number: "E24882963485126", se_group: "SE245" },
  { no: 90, full_name: "THARUSHI DIMITHRIKA", passport_number: "N10800983", se_number: "SE2459404", company_name: "RETEX GREEN", embassy_applied_date: "18/07/2026", e_number: "E24895349091376", se_group: "SE245" },
  { no: 91, full_name: "SUDESHIKA LAKSHANI", passport_number: "P0296531", se_number: "SE2459408", company_name: "RETEX GREEN", embassy_applied_date: "18/07/2026", e_number: "E24895388971800", se_group: "SE245" },

  // SE246 (7 persons)
  { no: 92, full_name: "PUNYALATHA", passport_number: "N10276271", se_number: "SE2462164", company_name: "ALEXIS PROD PAN SRL", embassy_applied_date: "20/07/2026", e_number: "E24922974920033", se_group: "SE246" },
  { no: 93, full_name: "ANTON RUPAS", passport_number: "N10613285", se_number: "SE2464742", company_name: "DARIAN ERIC BUSINESS SRL", embassy_applied_date: "22/07/2026", e_number: "E24948776228111", se_group: "SE246" },
  { no: 94, full_name: "DUSHMINDA DILSHAN", passport_number: "N9623841", se_number: "SE2464836", company_name: "DARIAN ERIC BUSINESS SRL", embassy_applied_date: "22/07/2026", e_number: "E24949718642791", se_group: "SE246" },
  { no: 95, full_name: "CHAMOD UDAYANGA", passport_number: "N9159544", se_number: "SE2464863", company_name: "DARIAN ERIC BUSINESS SRL", embassy_applied_date: "22/07/2026", e_number: "E24949989682001", se_group: "SE246" },
  { no: 96, full_name: "BINAL SACHINTHA", passport_number: "N9095537", se_number: "SE2464908", company_name: "DARIAN ERIC BUSINESS SRL", embassy_applied_date: "22/07/2026", e_number: "E24950431915432", se_group: "SE246" },
  { no: 97, full_name: "PASINDU IROSHAN", passport_number: "P0870537", se_number: "SE2466674", company_name: "RETEX GREEN", embassy_applied_date: "23/07/2026", e_number: "E24968094763486", se_group: "SE246" },
  { no: 98, full_name: "LAKMAL SANDARUWAN SANJEEWA", passport_number: "N8893841", se_number: "SE2469969", company_name: "RETEX GREEN", embassy_applied_date: "27/07/2026", e_number: "E25001062714786", se_group: "SE246" },

  // SE248 (1 person)
  { no: 99, full_name: "CHANAKA PRADEEP KUMARA", passport_number: "N10327424", se_number: "SE2489422", company_name: "DARIAN ERIC BUSINESS SRL", embassy_applied_date: "14/08/2026", e_number: "E25195943156117", se_group: "SE248" },

  // SE249 (1 person)
  { no: 100, full_name: "NIRASH SEHARA", passport_number: "N9739849", se_number: "SE2491861", company_name: "RETEX GREEN", embassy_applied_date: "17/08/2026", e_number: "E25220344598982", se_group: "SE249" },

  // SE250 (3 persons)
  { no: 101, full_name: "SUPUN SANJALA", passport_number: "N10573758", se_number: "SE2503684", company_name: "CLEVER", embassy_applied_date: "09/09/2026", e_number: "", se_group: "SE250" },
  { no: 102, full_name: "DAMITH NIDUSHAN", passport_number: "N8678889", se_number: "SE2504903", company_name: "MADA MATCON SRL", embassy_applied_date: "28/08/2026", e_number: "E25350968112307", se_group: "SE250" },
  { no: 103, full_name: "HESHAN LAKSHITHA", passport_number: "P0273576", se_number: "SE2505643", company_name: "RETEX GREEN", embassy_applied_date: "29/08/2026", e_number: "E25358388732649", se_group: "SE250" },

  // SE251 (1 person)
  { no: 104, full_name: "KAVINDU LAKSHEN", passport_number: "P0107976", se_number: "SE2519224", company_name: "CLEVER", embassy_applied_date: "10/09/2026", e_number: "", se_group: "SE251" },

  // SE252 (2 persons)
  { no: 105, full_name: "CHAMITH LAKSHITHA", passport_number: "P0490936", se_number: "SE2521284", company_name: "MADA MATCON SRL", embassy_applied_date: "10/09/2026", e_number: "E25514993350339", se_group: "SE252" },
  { no: 106, full_name: "BALASUBRAMANIYAM NAGESWARAN", passport_number: "N10959477", se_number: "SE2525003", company_name: "RETEX GREEN", embassy_applied_date: "16/09/2026", e_number: "E25552219958123", se_group: "SE252" }
];
