import type { SymbolPrice } from '~/types/api.types'

const coinsMock: SymbolPrice[] = [
  { symbol: 'ETHBTC', price: '0.06114000' },
  { symbol: 'LTCBTC', price: '0.00239500' },
  { symbol: 'BNBBTC', price: '0.00776700' },
  { symbol: 'NEOBTC', price: '0.00026950' },
  { symbol: 'QTUMETH', price: '0.00138400' },
  { symbol: 'EOSETH', price: '0.00034800' },
  { symbol: 'SNTETH', price: '0.00001387' },
  { symbol: 'BNTETH', price: '0.00024280' },
  { symbol: 'BCCBTC', price: '0.07908100' },
  { symbol: 'GASBTC', price: '0.00008590' },
  { symbol: 'BNBETH', price: '0.12690000' },
  { symbol: 'BTCUSDT', price: '28273.93000000' },
  { symbol: 'ETHUSDT', price: '1729.05000000' },
  { symbol: 'HSRBTC', price: '0.00041400' },
  { symbol: 'OAXETH', price: '0.00017780' },
  { symbol: 'DNTETH', price: '0.00002801' },
  { symbol: 'MCOETH', price: '0.00577200' },
  { symbol: 'ICNETH', price: '0.00166300' },
  { symbol: 'MCOBTC', price: '0.00021140' },
  { symbol: 'WTCBTC', price: '0.00000592' },
  { symbol: 'WTCETH', price: '0.00023700' },
  { symbol: 'LRCBTC', price: '0.00000670' },
  { symbol: 'LRCETH', price: '0.00010958' },
  { symbol: 'QTUMBTC', price: '0.00008470' },
  { symbol: 'YOYOBTC', price: '0.00000008' },
  { symbol: 'OMGBTC', price: '0.00003080' },
  { symbol: 'OMGETH', price: '0.00079100' },
  { symbol: 'ZRXBTC', price: '0.00000687' },
  { symbol: 'ZRXETH', price: '0.00009940' },
  { symbol: 'STRATBTC', price: '0.00003085' },
  { symbol: 'STRATETH', price: '0.00105300' },
  { symbol: 'SNGLSBTC', price: '0.00000013' },
  { symbol: 'SNGLSETH', price: '0.00005306' },
  { symbol: 'BQXBTC', price: '0.00008703' },
  { symbol: 'BQXETH', price: '0.00126350' },
  { symbol: 'KNCBTC', price: '0.00002466' },
  { symbol: 'KNCETH', price: '0.00039410' },
  { symbol: 'FUNBTC', price: '0.00000029' },
  { symbol: 'FUNETH', price: '0.00000252' },
  { symbol: 'SNMBTC', price: '0.00000057' },
  { symbol: 'SNMETH', price: '0.00004986' },
  { symbol: 'NEOETH', price: '0.00440700' },
  { symbol: 'IOTABTC', price: '0.00000552' },
  { symbol: 'IOTAETH', price: '0.00009020' },
  { symbol: 'LINKBTC', price: '0.00028470' },
  { symbol: 'LINKETH', price: '0.00465700' },
  { symbol: 'XVGBTC', price: '0.00000015' },
  { symbol: 'XVGETH', price: '0.00000218' },
  { symbol: 'SALTBTC', price: '0.00004250' },
  { symbol: 'SALTETH', price: '0.00113800' },
  { symbol: 'MDABTC', price: '0.00000382' },
  { symbol: 'MDAETH', price: '0.00181150' },
  { symbol: 'MTLBTC', price: '0.00004636' },
  { symbol: 'MTLETH', price: '0.00068340' },
  { symbol: 'SUBBTC', price: '0.00000457' },
  { symbol: 'SUBETH', price: '0.00012334' },
  { symbol: 'EOSBTC', price: '0.00002126' },
  { symbol: 'SNTBTC', price: '0.00000085' },
  { symbol: 'ETCETH', price: '0.00966000' },
  { symbol: 'ETCBTC', price: '0.00059200' },
  { symbol: 'MTHBTC', price: '0.00000023' },
  { symbol: 'MTHETH', price: '0.00004135' },
  { symbol: 'ENGBTC', price: '0.00006200' },
  { symbol: 'ENGETH', price: '0.00186480' },
  { symbol: 'DNTBTC', price: '0.00000186' },
  { symbol: 'ZECBTC', price: '0.00099600' },
  { symbol: 'ZECETH', price: '0.01627000' },
  { symbol: 'BNTBTC', price: '0.00001490' },
  { symbol: 'ASTBTC', price: '0.00000325' },
  { symbol: 'ASTETH', price: '0.00006960' },
  { symbol: 'DASHBTC', price: '0.00100400' },
  { symbol: 'DASHETH', price: '0.01635000' },
  { symbol: 'OAXBTC', price: '0.00000589' },
  { symbol: 'ICNBTC', price: '0.00005742' },
  { symbol: 'BTGBTC', price: '0.00091300' },
  { symbol: 'BTGETH', price: '0.05274500' },
  { symbol: 'EVXBTC', price: '0.00000274' },
  { symbol: 'EVXETH', price: '0.00062490' },
  { symbol: 'REQBTC', price: '0.00000237' },
  { symbol: 'REQETH', price: '0.00004995' },
  { symbol: 'VIBBTC', price: '0.00000171' },
  { symbol: 'VIBETH', price: '0.00003450' },
  { symbol: 'HSRETH', price: '0.01247400' },
  { symbol: 'TRXBTC', price: '0.00000318' },
  { symbol: 'TRXETH', price: '0.00005204' },
  { symbol: 'POWRBTC', price: '0.00000556' },
  { symbol: 'POWRETH', price: '0.00009140' },
  { symbol: 'ARKBTC', price: '0.00001679' },
  { symbol: 'ARKETH', price: '0.00104600' },
  { symbol: 'YOYOETH', price: '0.00005828' },
  { symbol: 'XRPBTC', price: '0.00001848' },
  { symbol: 'XRPETH', price: '0.00030230' },
  { symbol: 'MODBTC', price: '0.00004280' },
  { symbol: 'MODETH', price: '0.00116700' },
  { symbol: 'ENJBTC', price: '0.00000819' },
  { symbol: 'ENJETH', price: '0.00013400' },
  { symbol: 'STORJBTC', price: '0.00001704' },
  { symbol: 'STORJETH', price: '0.00029910' },
  { symbol: 'BNBUSDT', price: '219.70000000' },
  { symbol: 'VENBNB', price: '0.14920000' },
  { symbol: 'YOYOBNB', price: '0.00059800' },
  { symbol: 'POWRBNB', price: '0.00385000' },
  { symbol: 'VENBTC', price: '0.00013928' },
  { symbol: 'VENETH', price: '0.00325194' },
  { symbol: 'KMDBTC', price: '0.00000790' },
  { symbol: 'KMDETH', price: '0.00020970' },
  { symbol: 'NULSBNB', price: '0.01257000' },
  { symbol: 'RCNBTC', price: '0.00000074' },
  { symbol: 'RCNETH', price: '0.00037604' },
  { symbol: 'RCNBNB', price: '0.00347300' },
  { symbol: 'NULSBTC', price: '0.00000664' },
  { symbol: 'NULSETH', price: '0.00051926' },
  { symbol: 'RDNBTC', price: '0.00000447' },
  { symbol: 'RDNETH', price: '0.00071530' },
  { symbol: 'RDNBNB', price: '0.00623000' },
  { symbol: 'XMRBTC', price: '0.00529300' },
  { symbol: 'XMRETH', price: '0.08633000' },
  { symbol: 'DLTBNB', price: '0.00240000' },
  { symbol: 'WTCBNB', price: '0.00180500' },
  { symbol: 'DLTBTC', price: '0.00000071' },
  { symbol: 'DLTETH', price: '0.00016807' },
  { symbol: 'AMBBTC', price: '0.00000040' },
  { symbol: 'AMBETH', price: '0.00004100' },
  { symbol: 'AMBBNB', price: '0.00068500' },
  { symbol: 'BCCETH', price: '2.47246000' },
  { symbol: 'BCCUSDT', price: '448.70000000' },
  { symbol: 'BCCBNB', price: '54.29000000' },
  { symbol: 'BATBTC', price: '0.00000652' },
]

export default coinsMock
