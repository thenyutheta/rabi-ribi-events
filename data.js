var event_data = [
  "1&&Tile&&Wood block&&break with hammer",
  "2&&Tile&&Bomb block",
  "3&&Tile&&Bomb chain block",
  "4&&Tile&&FAIRY BLK&&魔法で破壊可能、連鎖しない",
  "5&&Tile&&FAIRY BLUE BLK&&青色ショットで破壊可能",
  "6&&Tile&&Fairy block&&break with magic",
  "7&&Tile&&Ice block&&break by touch with Fire Orb&&",
  "8&&Tile&&Cracked block&&break when stepped on",
  "9&&Tile&&Low difficulty block&&Normal and below only",
  "30&&Tile&&Low Item % block&&disappears at >10% item collection",
  "31&&Tile&&LIB FLASH&&図書館で使われている青い明かり。",
  "43&&Tile&&PATH TO COCOA2&&prologue終了後に壊れるブロック。",
  "64&&Tile&&MUL TILE&&タイルが薄くなる(?)",
  "65&&Tile&&DARK TILE&&タイルが暗くなる",
  "66&&Tile&&SUB TILE&&タイルの色がネガになる(?)",
  "67&&Tile&&ADD TILE&&タイルが光る(白くなる)",
  "68&&Tile&&DGRE TILE&&タイルが緑色っぽくなる",
  "106&&Tile&&NO LEFT hway&&右からは通れない",
  "107&&Tile&&NO RIGHT&&左からは通れない",
  "108&&Tile&&Rainbow Crystal gate&&solid until crystal boss is defeated",
  "109&&Tile&&Ignore spikes",
  "110&&Tile&&Pandora gate&&solid until Pandora is defeated",
  "160&&Tile&&Boss gate&&blocks exit during boss fight",
  "192&&Tile&&Reset breakable blocks",
  "197&&Tile&&Spike block",
  "237&&Tile&&Timer block",
  "238&&Tile&&Timer item&&use type to set duration",
  "32&&Misc&&Warp stone&&$移動先の.mapファイルは固定されていて指定不可$5000: Starting Forest$5001: Golden Pyramid$5002: Spectral Cave$5003: Exotic Laboratory$5004: Volcanic Canerss$5005: Rabi Rabi Town$5006: Natural Aquarium$5007: Sky-High Bridge$5008: Azure Snow Land$5009: Evernight Peak$5010: Golden Riverbank$5011: Floating Graveyard$5012: Hall of Memory$5013: Forgotten Cave II$5014: Rabi Rabi Beach$5015: Rabi Rabi Park$5016: Aurora Place$5017: Rabi Rabi Ravine$5018: Isy Summit$5019: Sky Island Town",
  "34&&Misc&&Start point",
  "37&&Misc&&Loop Back Y&&$踏んで部屋移動すると9 Screen上のマップの上端に飛ぶ$ID:304は条件が揃わないと使えない(?)",
  "42&&Misc&&Auto save trigger",
  "44&&Misc&&Auto save reenable&&allows auto save to trigger again",
  "45&&Misc&&Heal point",
  "74&&Misc&&MakeBoss&&roomcolor 6 が必要",
  "80&&Misc&&Door&&goes upward 2 screens on map",
  "81&&Misc&&Door&&goes downward 2 screens on map",
  "100&&Misc&&Dark Zone",
  "101&&Misc&&No Dark Zone",
  "102&&Misc&&Remove water",
  "103&&Misc&&Add water&&level below",
  "104&&Misc&&Water level marker",
  "105&&Misc&&Add water&&level above",
  "193&&Misc&&Hide layers 2 and 6",
  "194&&Misc&&Show layers 2 and 6",
  "224&&Misc&&Save point",
  "250&&Misc&&Easter egg",
  "483&&Misc&&Fall damage and reset&&渓谷2等",
  "128&&Music&&No Music&&disable currently playing music",
  "129&&Music&&Adventure Starts Here",
  "130&&Music&&Spectral Cave",
  "131&&Music&&Forgotten Cave",
  "132&&Music&&Underwater Ambient",
  "133&&Music&&Library Ambient",
  "134&&Music&&Forgotten Cave II",
  "135&&Music&&Starting Forest Night / Nightwalker",
  "136&&Music&&Bounce Bounce",
  "137&&Music&&Rabi Rabi Beach",
  "138&&Music&&Pandora's Palace",
  "139&&Music&&Rabi Rabi Ravine",
  "140&&Music&&Home Sweet Home",
  "141&&Music&&Rabi Rabi Park",
  "142&&Music&&Inside UPRPRC",
  "143&&Music&&Sky Island Town",
  "144&&Music&&Winter Wonderland",
  "145&&Music&&Cyberspace.exe",
  "146&&Music&&Evernight Peak",
  "147&&Music&&Exotic Laboratory",
  "148&&Music&&Golden Riverbank",
  "149&&Music&&Floating Graveyard",
  "150&&Music&&System Interior II",
  "151&&Music&&Aurora Palace",
  "152&&Music&&Speicher Galerie",
  "153&&Music&&Deep Under The Sea&&Natural Aquarium",
  "154&&Music&&Sky-High Bridge",
  "155&&Music&&Warp Destination",
  "156&&Music&&Volcanic Caverns",
  "157&&Music&&Plurkwood",
  "158&&Music&&Another D&&Hall of Memories",
  "159&&Music&&Icy Summit",
  "209&&Warp&&TeleID 0",
  "210&&Warp&&TeleID 1",
  "211&&Warp&&TeleID 2",
  "212&&Warp&&TeleID 3",
  "213&&Warp&&TeleID 4",
  "214&&Warp&&TeleID 5",
  "215&&Warp&&TeleID 6",
  "216&&Warp&&TeleID 7",
  "217&&Warp&&TeleID 8",
  "218&&Warp&&TeleID 9",
  "219&&Warp&&TeleID 10",
  "220&&Warp&&TeleID 11",
  "241&&Warp&&Warp cross-map off",
  "242&&Warp&&Warp cross-map to map 0",
  "243&&Warp&&Warp cross-map to map 1",
  "244&&Warp&&Warp cross-map to map 2",
  "245&&Warp&&Warp cross-map to map 3",
  "246&&Warp&&Warp cross-map to map 4",
  "247&&Warp&&Warp cross-map to map 5",
  "248&&Warp&&Warp cross-map to map 6",
  "249&&Warp&&Warp cross-map to map 7",
  "250&&Warp&&Warp cross-map to map 8&&EasterEggと重なっている為、表面上はEasterEggとして機能するが、ちゃんとwarpEVとしてつかえる。",
  "251&&Warp&&Warp cross-map to map 9",
  "208&&Warp&&Warp entrance",
  "240&&Warp&&Warp exit",
  "112&&Warp&&Warp stone graphic&&3 tiles below",
  "161&&Warp&&Set transition target to area0.map",
  "162&&Warp&&Set transition target to area1.map",
  "163&&Warp&&Set transition target to area2.map",
  "164&&Warp&&Set transition target to area3.map",
  "165&&Warp&&Set transition target to area4.map",
  "166&&Warp&&Set transition target to area5.map",
  "167&&Warp&&Set transition target to area6.map",
  "168&&Warp&&Set transition target to area7.map",
  "169&&Warp&&Set transition target to area8.map",
  "170&&Warp&&Set transition target to area9.map",
  "200&&Warp&&Trigger transition to target #0",
  "201&&Warp&&Trigger transition to target #1",
  "202&&Warp&&Trigger transition to target #2",
  "203&&Warp&&Trigger transition to target #3",
  "204&&Warp&&Trigger transition to target #4",
  "205&&Warp&&Trigger transition to target #5",
  "206&&Warp&&Trigger transition to target #6",
  "207&&Warp&&Trigger transition to target #7",
  "227&&Warp&&Transition target #0",
  "228&&Warp&&Transition target #1",
  "229&&Warp&&Transition target #2",
  "230&&Warp&&Transition target #3",
  "231&&Warp&&Transition target #4",
  "232&&Warp&&Transition target #5",
  "176&&Warp&&Transition target #6",
  "177&&Warp&&Transition target #7",
  "256&&MainEV&&EV_FIRSTBOSS&&VS COCOA.部屋を横に長くする必要がある。",
  "257&&MainEV&&EV_MEETFAIRY&&Initial Ribbon encounter. Triggers Ribbon boss fight.",
  "258&&MainEV&&EV_REACHMANA",
  "259&&MainEV&&EV_SECONDBOSS",
  "260&&MainEV&&EV_3RDBOSS&&VS ASHURI",
  "261&&MainEV&&EV_1STRUMI&&prologueを終了させる。txt:30,31,32,33,35,36,37,38,39,40",
  "262&&MainEV&&EV_4THBOSS&&VS RITA",
  "263&&MainEV&&EV_FAIRYBOSS",
  "264&&MainEV&&EV_FIRSTBOSSII&&VS COCOA2",
  "265&&MainEV&&EV_PCBOSS&&VS CICINI",
  "266&&MainEV&&EV_VVVVVV&&System Interior II",
  "267&&MainEV&&EV_PYBOSS&&VS SHADOW PANDORA",
  "268&&MainEV&&EV_HILLBOSS&&VS SAYA",
  "269&&MainEV&&EV_MAIDBOSS&&VS SYARO",
  "270&&MainEV&&EV_REACHISLANDTOTOWER",
  "271&&MainEV&&EV_SNOWBOSS&&VS NIEVE",
  "272&&MainEV&&EV_SNOWBOSSII&&VS NIXIE",
  "273&&MainEV&&EV_SNOWRM",
  "274&&MainEV&&EV_PCTALKAFTERMAID",
  "275&&MainEV&&EV_MAIDTELEPORT",
  "276&&MainEV&&EV_GOTORUMI",
  "277&&MainEV&&EV_SPIKE",
  "278&&MainEV&&EV_SEABOSS&&VS SEANA",
  "279&&MainEV&&EV_AFTERVVVVVV",
  "280&&MainEV&&EV_PCCALLBACK",
  "281&&MainEV&&EV_DJPC&&Activates Warp Stones in-game.",
  "282&&MainEV&&EV_FAIRYEXPLAIN",
  "283&&MainEV&&EV_CAVELORR",
  "284&&MainEV&&EV_FORESTBOSS&&VS ARURAUNE",
  "285&&MainEV&&EV_CRYSTALBOSS",
  "286&&MainEV&&EV_CRYSTALOPENED",
  "287&&MainEV&&EV_CITYS1",
  "288&&MainEV&&EV_CITYS2",
  "289&&MainEV&&EV_SCBBOSS&&VS LILITH",
  "290&&MainEV&&EV_BRIDGEBOSS&&VS VANILLA",
  "291&&MainEV&&EV_BRIDGEBOSSII",
  "292&&MainEV&&EV_3RDBOSSII",
  "293&&MainEV&&EV_BBUNNY",
  "294&&MainEV&&EV_DOUBLECAT",
  "295&&MainEV&&EV_FIREBOSS&&VS KOTORI RED",
  "296&&MainEV&&EV_MAZEBOSS",//&&VS MIRIAM",
  "297&&MainEV&&EV_TELEPORT",
  "298&&MainEV&&EV_TELEPORT2",
  "299&&MainEV&&EV_GODOWN",
  "300&&MainEV&&EV_FIRSTPY&&prologue中は通れない。txt:5201",
  "301&&MainEV&&EV_NOLEFT",
  "302&&MainEV&&EV_SHOPOUT",
  "303&&MainEV&&EV_EDFLAG",
  "304&&MainEV&&EV_LOOPED",
  "307&&MainEV&&EV_BUNNY2&&prologue VS UPRPRC 1",
  "308&&MainEV&&EV_HOSP1",
  "309&&MainEV&&EV_HOSPBACK",
  "310&&MainEV&&EV_HOSP2",
  "311&&MainEV&&EV_HOSP3",
  "312&&MainEV&&EV_HIGHWAY",
  "313&&MainEV&&EV_HIGHWAYBOSS&&WARP DESTINATION",
  "314&&MainEV&&EV_FINALBOSSX",
  "315&&MainEV&&EV_RITA&&VS SHADOW RITA",
  "316&&MainEV&&EV_STG1&&VS LILITH2",
  "317&&MainEV&&EV_NOMORESTG1",
  "318&&MainEV&&EV_GOLEM&&VS GOLEM",
  "319&&MainEV&&EV_ALPHATEST&&$defaultにはtxtが無いので、Errorが出る。$txt:50000にemotとtxtを設定すると使える。",
  "320&&MainEV&&EV_BEFOREGOLEM",
  "321&&MainEV&&EV_MEETRITAP",
  "322&&MainEV&&EV_MEETFIRE&&VS KOTORI GREEN",
  "323&&MainEV&&EV_BUNNY2B&&prologue VS UPRPRC 2",
  "324&&MainEV&&EV_CATMINI&&VS CHOCOLATE",
  "325&&MainEV&&EV_PRPRTEAM",
  "326&&MainEV&&EV_SEELAB",
  "327&&MainEV&&EV_INLAB",
  "328&&MainEV&&EV_LASERLAB",
  "329&&MainEV&&EV_CAVELAB",
  "330&&MainEV&&EV_FINALLAB",
  "331&&MainEV&&EV_REDBOT&&VS REDBOT",
  "332&&MainEV&&EV_SPRINGLAB",
  "333&&MainEV&&EV_MAIDTEAM&&SYSTEM INTERIOR",
  "334&&MainEV&&EV_RUINDOWN",
  "335&&MainEV&&EV_RUINWRONG",
  "336&&MainEV&&EV_RUINNEAR",
  "337&&MainEV&&EV_IRISUSTALK1",
  "338&&MainEV&&EV_CANENTERCYBER",
  "339&&MainEV&&EV_PRPRBASEENTER",
  "340&&MainEV&&EV_CYBERCOUNTER",
  "341&&MainEV&&EV_BEFORECYBER",
  "342&&MainEV&&EV_WATERWARNING",
  "343&&MainEV&&EV_BOSS3B&&VS ASHURI",
  "344&&MainEV&&EV_IRISUBOSS&&VS IRISU&&上に空間が必要。撃破後の注意はID:411と同じ。",
  "345&&MainEV&&EV_CAVECRYSTALBOSS&&VS CAVECRYSTALBOSS",
  "346&&MainEV&&EV_ENTERLIBRARY",
  "347&&MainEV&&EV_SHOPPINGCENTER",
  "348&&MainEV&&EV_FIRSTCITY",
  "349&&MainEV&&EV_FINALCITY",
  "350&&MainEV&&EV_SHOPPINGCENTERBOSS",
  "351&&MainEV&&EV_STREETBOSS&&WARP DESTINATION",
  "352&&MainEV&&EV_BEFOREFIRSTWARP",
  "353&&MainEV&&EV_ENOUGH2",
  "354&&MainEV&&EV_ENOUGH4",
  "355&&MainEV&&EV_ENOUGH7",
  "356&&MainEV&&EV_ENOUGH10",
  "357&&MainEV&&EV_TOWNPC",
  "358&&MainEV&&EV_PCMEETMAID",
  "359&&MainEV&&EV_FIRSTBOSSIII",
  "360&&MainEV&&EV_COCOA&&Fogetten Cave入り口でのやり取り。txt:26",
  "361&&MainEV&&EV_SNOWBLOCK",
  "362&&MainEV&&EV_LIBRARYNOTYET",
  "363&&MainEV&&EV_NOVOIDYET",
  "364&&MainEV&&EV_COCOAFLAG&&COCOA2と戦う為のflag(?)",
  "365&&MainEV&&EV_TOWNASHLEY",
  "366&&MainEV&&EV_ASHLEYCRYSTAL",
  "367&&MainEV&&EV_OPENBOTTLE",
  "368&&MainEV&&EV_BEFOREFINALBOSS1",
  "369&&MainEV&&EV_BEFOREFINALBOSS2",
  "370&&MainEV&&EV_FINALBOSS&&VS MIRU",
  "371&&MainEV&&EV_FIRSTPYB&&VS PANDORA",
  "372&&MainEV&&EV_FIRSTPYC",
  "373&&MainEV&&EV_1STSHOP",
  "374&&MainEV&&EV_1STSHOPB",
  "375&&MainEV&&EV_ICELAND",
  "376&&MainEV&&EV_TOWNPC2",
  "377&&MainEV&&EV_MAIDBOT&&VS MAIDBOD",
  "378&&MainEV&&EV_GIVEKICK",
  "379&&MainEV&&EV_DANCERB&&VS KOTORI BLUE",
  "380&&MainEV&&EV_RABITOWNOUT",
  "381&&MainEV&&EV_RABITOWNIN",
  "382&&MainEV&&EV_SEEHIGHJUMP",
  "383&&MainEV&&EV_OLDHOME&&昔の家を発見",
  "384&&MainEV&&EV_RUMISHOP&&ITEM(Space key)が使用できるようになる。ID:525を使うとケーキ類は貰えない。",
  "385&&MainEV&&EV_PRPRBOT1&&UPRPRC基地の中ボス",
  "386&&MainEV&&EV_PRPRBOT2&&UPRPRC基地の中ボス",
  "387&&MainEV&&EV_PRPRBOT3&&UPRPRC基地の中ボス",
  "388&&MainEV&&EV_COCOACAVE",
  "389&&MainEV&&EV_NOTRIGHTBEFORERUMI",
  "390&&MainEV&&EV_SNOWBOSSSAVE",
  "391&&MainEV&&EV_RIBIFRIEND",
  "392&&MainEV&&EV_RIBIFRIEND2",
  "393&&MainEV&&EV_FORESTHELP1&&ARURAUNEの声",
  "394&&MainEV&&EV_FORESTHELP2&&ARURAUNEの声",
  "395&&MainEV&&EV_CRYSTALDANCER",
  "396&&MainEV&&EV_SEANASAVE",
  "397&&MainEV&&EV_OPENING2",
  "398&&MainEV&&EV_HILLBOSS2&&SAYA2",
  "399&&MainEV&&EV_SEANASING&&VS SEANA2",
  "400&&MainEV&&EV_FINDBOX",
  "401&&MainEV&&EV_CANNOTLEAVEHOSP",
  "402&&MainEV&&EV_FIRSTBADGE",
  "403&&MainEV&&EV_FIRSTTYPE",
  "404&&MainEV&&EV_MIRUBLACKOFF",
  "405&&MainEV&&EV_NONO&&VS NOAH",
  "406&&MainEV&&EV_CANCARROT",
  "407&&MainEV&&EV_GIVECARROT",
  "408&&MainEV&&EV_3TYPE",
  "409&&MainEV&&EV_CCC",
  "410&&MainEV&&EV_TOWNPPL",
  "411&&MainEV&&EV_CREDIT&&$最低でもarea5とarea8が必要で可能なら全.mapを用意すること。$必要な.mapがない場合、END時に空間の狭間に嵌って死ぬ。",
  "412&&MainEV&&EV_RUMIBOSS",
  "413&&MainEV&&EV_OTAKUF&&VS FAT OTAKU",
  "414&&MainEV&&EV_OTAKUS&&VS SKINNY OTAKU",
  "415&&MainEV&&EV_USERITA",
  "416&&MainEV&&EV_RITATOWN1",
  "417&&MainEV&&EV_RITATOWN2",
  "418&&MainEV&&EV_RITATOWN3",
  "419&&MainEV&&EV_POSTGAME1",
  "420&&MainEV&&EV_RITASAYA",
  "421&&MainEV&&EV_ERINA&&VS ERINA",
  "422&&MainEV&&EV_NONOFORM2",
  "423&&MainEV&&EV_NONOFORM2B",
  "424&&MainEV&&EV_NOTLAB",
  "425&&MainEV&&EV_PIT",
  "426&&MainEV&&EV_GOWEST",
  "427&&MainEV&&EV_UPRPRC3&&Night Forest",
  "428&&MainEV&&EV_UPRPRC4&&Evernight Peak",
  "429&&MainEV&&EV_DARKAREA",
  "430&&MainEV&&EV_DARKAREA2",
  "431&&MainEV&&EV_NOEVENT",
  "432&&MainEV&&EV_ALLJOINED&&Break after post game clear. 直接触れると、タウンメンバーが大体そろう。",
  "433&&MainEV&&EV_ENTERVOID",
  "434&&MainEV&&EV_VOIDBLOCK",
  "435&&MainEV&&EV_REDCYBER",
  "436&&MainEV&&EV_NOCICINI",
  "437&&MainEV&&EV_BEFORERED",
  "438&&MainEV&&EV_AFTERRED",
  "439&&MainEV&&EV_FOUNDEXIT",
  "440&&MainEV&&EV_AFTERRED2",
  "441&&MainEV&&EV_AFTERRED3",
  "442&&MainEV&&EV_IRISUEVENTD",
  "443&&MainEV&&EV_IRISUCG",
  "444&&MainEV&&EV_LIBRARY",
  "445&&MainEV&&EV_IRISUEVENTD2",
  "446&&MainEV&&EV_LIBBLOCK",
  "447&&MainEV&&EV_FINDIRISU",
  "448&&MainEV&&EV_PLURKMEAT",
  "449&&MainEV&&EV_PLURKENTER",
  "450&&MainEV&&EV_PLURKTAKO",
  "451&&MainEV&&EV_PLURKMIDBOSS&&VS PLURKMIDBOSS",
  "452&&MainEV&&EV_PLURKBOSS&&VS KEKE BUNNY",
  "453&&MainEV&&EV_PLURKTAKO2",
  "454&&MainEV&&EV_FPS",
  "455&&MainEV&&EV_PLURKBLOCK&&Keke Bunny Gate, used in Keke Bunny fight",
  "456&&MainEV&&EV_REFLECTED99",
  "457&&MainEV&&EV_REFLECTED300",
  "458&&MainEV&&EV_WATERAREA",
  "459&&MainEV&&EV_DIFFICULTY",
  "460&&MainEV&&EV_NEWGAME",
  "461&&MainEV&&EV_COCOA1EX&&VS COCOA EX",
  "462&&MainEV&&EV_RIBBONEX&&VS RIBBON EX",
  "463&&MainEV&&EV_ASHURI1EX&&VS AHURI EX",
  "464&&MainEV&&EV_SAYAEX&&VS SAYAEX",
  "465&&MainEV&&EV_CATSEX&&VS HalloweenBOSS",
  "480&&MainEV&&EV_NODLCYET",
  "481&&MainEV&&EV_PLAYDLCBGM1",
  "482&&MainEV&&EV_PLAYDLCBGM2",
  "483&&MainEV&&EV_FALLHILL",
  "484&&MainEV&&EV_PIXIELILLI&&VS PIXIELILLI",
  "485&&MainEV&&EV_ESCAPE",
  "486&&MainEV&&EV_ESCAPEEND",
  "487&&MainEV&&EV_HILLENTER",
  "488&&MainEV&&EV_PUZZLECLEAR",
  "489&&MainEV&&EV_FOUNDQB",
  "490&&MainEV&&EV_CRYSTALEX&&VS CRYSTALEX",
  "491&&MainEV&&EV_BEFOREERINA",
  "492&&MainEV&&EV_FALLINTOERINA",
  "493&&MainEV&&EV_VSERINA&&VS BOSS ERINA EX. room bg 126が必要。",
  "494&&MainEV&&EV_DLC2START&&Initial dialog when entering Hall of Memories 2.",
  "495&&MainEV&&EV_LOSTITEM",
  "496&&MainEV&&EV_HW&&終了時に壊れる。txt:51110,51111",
  "497&&MainEV&&EV_NOHW",
  "498&&MainEV&&EV_STARTDLCIRISU&&Dialog with Irisu in Town to activate Is The Order a DLC? Advances game to Extra Chapter. Warps Erina to Rabi Ribi Ravine.",
  "499&&MainEV&&EV_CHANGECLOTH",
  "500&&MainEV&&EV_RIBIFRIENDDLC",
  "501&&MainEV&&EV_ERINAMEMORY1",
  "502&&MainEV&&EV_ERINAMEMORY2",
  "503&&MainEV&&EV_ERINAMEMORY3",
  "504&&MainEV&&EV_ERINAMEMORY4",
  "505&&MainEV&&EV_ERINAMEMORY5",
  "506&&MainEV&&EV_ERINAMEMORY6",
  "507&&MainEV&&EV_ERINAMEMORY7",
  "508&&MainEV&&EV_ERINAMEMORY8",
  "509&&MainEV&&EV_VSERINA_CHECKPOINT",
  "510&&MainEV&&EV_DLCBLOCK",
  "511&&MainEV&&EV_____________",
  "512&&MainEV&&EV_MEMORYRED&&Hall of Memory DLC area red blocks",
  "513&&MainEV&&EV_MEMORYBLUE&&Hall of Memory DLC area blue blocks",
  "514&&MainEV&&EV_MEMORYGREEN&&Hall of Memory DLC area green blocks",
  "515&&MainEV&&EV_MEMORYPURPLE&&Hall of Memory DLC area purple blocks",
  "516&&MainEV&&EV_B_MEMORYRED&&VS BOSS MEMORY RED",
  "517&&MainEV&&EV_B_MEMORYBLUE&&VS BOSS MEMORY BLUE",
  "518&&MainEV&&EV_B_MEMORYGREEN&&VS BOSS MEMORY GREEN",
  "519&&MainEV&&EV_B_MEMORYPURPLE&&VS BOSS MEMORY PURPLE",
  "520&&MainEV&&EV_UPDOWNRED",
  "521&&MainEV&&EV_ALLJOINED2&&Hall of Memory DLCで追加されるボスがタウンに加わる。",
  "522&&CustomEV&&EV_NOPFLAG0&&Disable 523, reenable checking event conditions",
  "523&&CustomEV&&EV_NOPFLAG1&&Always trigger events, even if conditions aren't met",
  "524&&CustomEV&&EV_NOEVENT0&&Disable 525 and 526, events trigger normally",
  "525&&CustomEV&&EV_NOEVENT1&&Event tiles just set their flag",
  "526&&CustomEV&&EV_NOEVENT2&&Event tiles just unset their flag",
  "527&&CustomEV&&EV_ITEMGETLV1&&Set items on map to level 1",
  "528&&CustomEV&&EV_ITEMGETLV2&&Set items on map to level 2",
  "529&&CustomEV&&EV_ITEMGETLV3&&Set items on map to level 3",
  "530&&CustomEV&&EV_ITEMGETLV4&&Set items on map to level 4",
  "531&&CustomEV&&EV_RESETFLAG&&Reset all event flags to zero",
  "532&&CustomEV&&EV_GIVESTATUS&&$it gives her buff ID m for n seconds.$m is the value of the X+1 tile (i.e. eventID: 5000 + m)$n is the value of the X+2 tile (i.e. eventID: 5000 + n)$n can be set to 0 to make this event remove the buff.",
  "533&&CustomEV&&EV_NOSPAWN0&&Enable normal entity spawning, disable 534 and 535",
  "534&&CustomEV&&EV_NOSPAWN1&&Disable entity spawning",
  "535&&CustomEV&&EV_NOSPAWN2&&$replace any future spawned entity with entity ID k$k is the value of the X+1 tile + 1000 (i.e. eventID: 5000 + k - 1000).$(for example, for entity ID 1096, the value of the X+1 tile is 5096)",
  "536&&CustomEV&&EV_GAMESPEED&&$change the game speed to k.$k is the value of the X+1 tile (i.e. eventID: 5000 + k)$If k=1, then 1x speed. If k=2, 2x speed, and so on.$If k>100, the game slows down instead",
  "537&&CustomEV&&EV_STORYMODE&&Set to Story mode",
  "538&&CustomEV&&EV_SPEEDRUN&&Set to Speedrun mode",
  "539&&CustomEV&&EV_STANDARD&&Set to Standard mode",
  "540&&CustomEV&&EV_ALTERNATIVE&&Set to Alternative mode",
  "541&&CustomEV&&EV_BUNNYHEAVEN&&Set to Bunny Heaven mode",
  "542&&CustomEV&&EV_BUNNYHELL&&Set to Bunny Hell mode",
  "543&&CustomEV&&EV_SETDIFFICULTY&&$Set Difficulty$k is the value of the X+1 tile (i.e. eventID: 5000+k)$5000: Casual$5001: Novice$5002: Normal$5003: Hard$5004: Hell$5005: Bunny Extinction$5006: Unknown$5007: Impossible$5008+: Extra",
  "544&&CustomEV&&EV_BOSSMODE&&Force boss mode to true",
  "545&&CustomEV&&EV_NOBOSSMODE&&Disable boss mode and remove scroll lock",
  "546&&CustomEV&&EV_NOBOSSMODE2&&Remove boss mode scroll lock",
  "547&&CustomEV&&EV_DISABLEEVENT0&&Disable 548, reenable events starting",
  "548&&CustomEV&&EV_DISABLEEVENT1&&$Disable any events from starting$(to prevent event that unrelated to event tile from starting, for example Cicini's dialog after Erina pick up Air Jump)",
  "549&&CustomEV&&EV_NOENDBOSSEVENT0&&Disable 550, reenable post-boss cutscenes",
  "550&&CustomEV&&EV_NOENDBOSSEVENT1&&Disable post-boss cutscenes for town member bosses",
  "551&&CustomEV&&EV_SETMUSICSPEED&&$change music speed to k%.$k is the value of the X+1 tile (i.e. eventID: 5000 + k).",
  "552&&CustomEV&&EV_FULLAP&&Refill bunny amulet charge",
  "553&&CustomEV&&EV_FULLBPMP&&Refill boost points and MP",
  "554&&CustomEV&&EV_MOVEDOWN&&Move down four screens",
  "555&&CustomEV&&EV_MOVEUP&&Move up four screens",
  "556&&CustomEV&&EV_SETSPIKEDMG&&$set all spikes damage to k.$k is the value of the X+1 tile. (i.e. eventID: 5000 + k)$If k = 0, disable this effect.",
  "557&&CustomEV&&EV_PLAYMUSIC&&$play music ID k. (useful for playing music with ID>31)$k is the value of the X+1 tile. (i.e. eventID: 5000 + k)",
  "558&&CustomEV&&EV_CHANGEITEM&&$set item ID k's Level to n.$k is the value of the X+1 tile. (i.e. eventID: 5000 + k)$n is the value of the X+2 tile. (i.e. eventID: 5000 + n)$(If n is 0, remove the item)$This can be used to set the levels of plus necklace(23), bunny amulet(33), donuts(37), cakes(38), golden carrots(39), and cocoa bombs(40) above their normal values.",
  "559&&CustomEV&&EV_SETHAMMEREXP&&$set hammer exp to k.$k is the value of the X+1 tile * 100 (i.e. eventID: 5000 + k/100)",
  "560&&CustomEV&&EV_SETFAIRYEXP&&$set Ribbon relationship exp to k.$k is the value of the X+1 tile * 100 (i.e. eventID: 5000 + k/100)",
  "561&&CustomEV&&EV_SETBOMBEXP&&$set carrot bomb exp to k.$k is the value of the X+1 tile * 100 (i.e. eventID: 5000 + k/100)",
  "562&&EV_SETUPWIND0&&CustomEV&&IF Erina passes this event, turn off upward wind (status will not save to save file)",
  "563&&EV_SETUPWIND1&&CustomEV&&$IF Erina passes this event, turn on upward wind (status will not save to save file)$Upward wind is the effect during the Pixie & Lilli boss fight",
  "195&&Dir&&Right direction modifier",
  "196&&Dir&&Left direction modifier",
  "198&&Dir&&Up direction modifier",
  "199&&Dir&&Down direction modifier",
  "1001&&Entity&&Small Slime&&本編未使用。",
  "1002&&Entity&&Rush thing&&本編未使用。",
  "1003&&Entity&&Four-way fire bar",
  "1004&&Entity&&Three-way fire bar",
  "1005&&Entity&&Spike ball",
  "1006&&Entity&&Super spike ball",
  "1007&&Entity&&Wall climber&&白い毛玉",
  "1008&&Entity&&Blue death laser",
  "1009&&Entity&&Prologue Cocoa",
  "1010&&Entity&&Pixel face&&Cave 2 emoji boss. Invisible unless activated through a boss event, but will still do collision damage.",
  "1011&&Entity&&Rumi",
  "1012&&Entity&&Ashuri",
  "1013&&Entity&&Rita",
  "1014&&Entity&&Ribbon",
  "1015&&Entity&&Forgotten Cave Cocoa",
  "1016&&Entity&&Computer Cicini",
  "1017&&Entity&&Various objects&&$5000: Cicini's desk$5001: 猫のトロフィー$5002: 浮いてるレンガ(?)*2$5003: 赤い屋根の家$5004: ミリアムの店$5005: 木$5006: 赤茶色屋根の家$5007: ルミの家$5008: 青い屋根の2階建て$5009: 緑屋根の2階建て$5010: 青い家$5011: 茶色屋根の家、レイヤ最前列$5012: Spring$5013: 石碑$5014: Lili/Pixieを閉じ込める機器",
  "1018&&Entity&&Cicini",
  "1019&&Entity&&Red laser&&$下にID:200~205を置くとtimingを変更可能$Laser hitbox is wider when used in map 9. (area9.map)",
  "1020&&Entity&&Saya",
  "1021&&Entity&&Syaro",
  "1022&&Entity&&Pandora&&$5000: Regular$5001: Shadow",
  "1023&&Entity&&Nieve",
  "1024&&Entity&&Nixie",
  "1025&&Entity&&Aruraune",
  "1026&&Entity&&FakeErina&&本編未使用。敵意が無い。BOSS用の空きデータ",
  "1027&&Entity&&'Into Town'",
  "1028&&Entity&&Interactable NPC&&needs type",
  "1030&&Entity&&Seana",
  "1031&&Entity&&Lilith",
  "1032&&Entity&&Vanilla&&$5000: Normal$5001: acts like Chocolate",
  "1033&&Entity&&Chocolate&&$5000: acts like Vanilla$5001: Normal",
  "1035&&Entity&&Illusion Alius&&$5000: Illusion Alius I$5001: Illusion Alius II$5002: Illusion Alius III$5003: Illusion Alius IV",
  "1036&&Entity&&Kotri&&$5000: Pink$5001: Blue$5002: Red",
  "1037&&Entity&&Noah",
  "1038&&Entity&&Irisu",
  "1039&&Entity&&Miriam",
  "1043&&Entity&&Miru&&area5以外では覇気を帯びる。",
  "1045&&Entity&&Rita 2&&$5000: Normal$5005: Shadow",
  "1046&&Entity&&Lili/Pixie&&$5000: Lili$5001: Pixie",
  "1047&&Entity&&Cat Golem Head&&本編未使用。",
  "1048&&Entity&&Cat Golem Hand&&本編未使用。",
  "1053&&Entity&&Noah 3",
  "1054&&Entity&&Keke Bunny",
  "1055&&Entity&&Mr. Tako&&$5000: Sitting$5003: Standing",
  "1056&&Entity&&Ordinary Cat&&$5000: Blue$5001: Red",
  "1057&&Entity&&LittleFakeErina&&本編未使用。敵用の空きデータ。~ID:1095まで",
  "1096&&Entity&&Pink bunny slime&&$5000: Normal$5005: Big$5006: Large$5007: Huge",
  "1097&&Entity&&Flower&&$ID:298(EV_TELEPORT2)以降$5000: Normal$5001: Blue, shoots bubbles$5002: Red, shoots lasers$5005: Big$5006: Large$5007: Huge",
  "1098&&Entity&&Ball mouse&&ID:298(EV_TELEPORT2)以降",
  "1099&&Entity&&Bee&&$5000: Red$5001: Green",
  "1100&&Entity&&Rafflesia&&$5000: Red$5001: Green",
  "1101&&Entity&&Wisp&&$5000: Wisp$5002: Exploding Pumpkin",
  "1102&&Entity&&Duck&&ID:298(EV_TELEPORT2)以降",
  "1103&&Entity&&Mushroom&&$5000: Normal$5005: Big$5006: Large$5007: Huge",
  "1104&&Entity&&Dog",
  "1105&&Entity&&Brown Mushroom&&$5000: Normal$5005: Big$5006: Large$5007: Huge",
  "1106&&Entity&&Worm&&$5000: Normal$5001: Shoots",
  "1107&&Entity&&Cactus",
  "1108&&Entity&&Eagle&&$5000: Normal$5001: Shoots",
  "1109&&Entity&&Blob charger&&$5000: Blue$5001: Pink",
  "1110&&Entity&&UPRPRC member with overalls & pink hair",
  "1111&&Entity&&Purple bunny slime&&$5000: Normal, shoots$5005: Big$5006: Large$5007: Huge",
  "1112&&Entity&&Egg&&$5000: Yellow$5001: Blue, shoots$5002: Yellow, shoots",
  "1113&&Entity&&Dice&&$5000: 1 pip?$5001: 2 pips?$5002: 3 pips?$5003: 4 pips?$5004: 5 pips?$5005: 6 pips?",
  "1114&&Entity&&UPRPRC fairy&&$5000: Blue$5001: Red$5002: Yellow$5003: Green$5004: Purple$5005: Gray",
  "1115&&Entity&&Card soldier",
  "1116&&Entity&&Bunny thwomp&&$ドッスン$5000: Down$5001: Left$5002: Up$5003: Right$5004: No movement",
  "1117&&Entity&&UPRPRC hugger&&$5000: Red$5001: Green$5002: Blue$5003: Yellow",
  "1118&&Entity&&UPRPRC swimsuit gunner&&$5000: Red$5001: Blue$5002: Yellow$5003: Green",
  "1119&&Entity&&UPRPRC debuff mage&&$5000: Blue$5001: Red$5002: Green$5003: Yellow",
  "1120&&Entity&&UPRPRC bomber&&$忘れられた洞窟等$5000: Red$5001: Blue$5002: Purple$5003: Green",
  "1124&&Entity&&Open box&&エリナの箱",
  "1125&&Entity&&Vehicle",
  "1126&&Entity&&Skinny otaku&&$5000: Green$5001: Yellow$5002: Blue",
  "1127&&Entity&&Fat otaku&&$5000: Red$5001: Black",
  "1128&&Entity&&Sandbag",
  "1129&&Entity&&STG fairy",
  "1130&&Entity&&Fake rock&&$5000: Rock$5001: Snow rock",
  "1131&&Entity&&Rock-tossing mole",
  "1132&&Entity&&Five-way lab turret&&$5000: Down$5001: Left$5002: Right$5003: Up",
  "1133&&Entity&&Tall lab bot&&$5000: Normal$5001: Mr. Big Box$5005: Fires lasers that turn",
  "1134&&Entity&&Flying lab bot",
  "1135&&Entity&&Small lab bot&&$5000: Normal$5001: Mini lab bot",
  "1136&&Entity&&Robot maid&&$5000: Pink$5001: Blue$5002: Yellow$5003: Green$5004: Rainbow Maid",
  "1137&&Entity&&Spider&&$5000: Drops down when close$5001: Already dropped down",
  "1138&&Entity&&Riverbank running swarmers&&$5000: Normal$5001: Halloween",
  "1139&&Entity&&Hug fairy&&$5000: Blue$5001: Yellow$5002: Red$5003: Green",
  "1140&&Entity&&Cyber Cube&&$5000: Blue$5001: Green$5002: Yellow$5003: Red$5004: Silver",
  "1141&&Entity&&Irisu clone",
  "1142&&Entity&&Rainbow Crystal boss core",
  "1143&&Entity&&Rainbow Crystal boss part",
  "1144&&Entity&&UPRPRC tank&&$5000: Yellow$5001: Blue$5002: Green",
  "1145&&Entity&&Bouncy cat&&$5000: Gray$5001: Blue$5002: Halloween",
  "1146&&Entity&&Spark ball&&$5000: Rainbow$5001: Blue$5002: Yellow$5003: Green$5004: Rainbow, slow",
  "1147&&Entity&&UPRPRC mage&&$ツインテール$5000: Blue$5001: Red$5002: Green$5003: Yellow",
  "1148&&Entity&&Snow ball&&$5000: Normal$5001: Fragment",
  "1149&&Entity&&Elemental magic ball&&$覇気を回転させる敵$5000: Light blue$5001: Dark blue$5002: Red",
  "1150&&Entity&&UPRPRC fairy, white suit/ears&&$5000: Blue$5001: Red$5002: Yellow$5003: Green$5004: Purple$5005: Gray",
  "1151&&Entity&&Pyramid eye",
  "1152&&Entity&&Pyramid laser&&$5000: Moves horizontally$5001: Moves vertically",
  "1153&&Entity&&UPRPRC speed-up mage",
  "1154&&Entity&&City NPC&&$type affects appearance$5000: Salary man",
  "1155&&Entity&&Aurora Palace laser",
  "1156&&Entity&&Meaty bone&&$5000: Boomerang shot$5001: Exploding shot$5005: Large$5006: Huge",
  "1157&&Entity&&Plurkwood bullet spitter",
  "1158&&Entity&&Plurkwood mouth slime&&$5000: Normal$5005: Large$5006: Huge",
  "1159&&Entity&&Plurkwood bat &&$5000: Movement pattern 1$5001: Movement pattern 2$5002: Movement pattern 3$5003: Movement pattern 4$5004: Stationary",
  "1160&&Entity&&Fish&&$5000: Yellow$5001: Blue$5002: Green$5003: bunny ghost gfx$5004: Bouncy cat gfx$5005: ExplosionPumpkin gfx$5006: Invisible",
  "1161&&Entity&&Mummy ball",
  "1162&&Entity&&Five floating energy swords",
  "1163&&Entity&&Library crystal&&$5000: Red$5001: Orange$5002: Yellow$5003: Green$5004: Cyan$5005: Blue$5006: Purple$5007: Silver",
  "1164&&Entity&&Bunny ghost&&type affects damage",
  "1165&&Entity&&クロちゃん&&使用できない(?)",
  "1166&&Entity&&BrokenFakeErina&&本編未使用。animationする。",
  "1167&&Entity&&常時Laserを出すLittleFakeErina&&$本編未使用。えげつない攻撃力を誇る。$defaultの体は左向き、変更可。$5000: Right Laser$5001: Down Laser$5002: Left Laser$5003: Up Laser",
  "1168&&Entity&&浮遊するLittleFakeErina&&本編未使用。敵意が無い。",
  "1169&&Entity&&Hall of Memories DLC area blue orb obstacle",
  "1170&&Entity&&Halloween DLC 看板",
  "1171&&Entity&&Halloween DLC BOSS's Pumpkin&&$5000: 流れる$5001: 弾幕を張る",
  "1172&&Entity&&Hall of Memories DLC Big Cyber Cube&&$5000: Red$5001: Blue$5002: Green$5003: Purple$5004: Bomb",
  "1173&&Entity&&Hall of Memories DLC dead bunny&&$5000: Red$5001: Blue$5002: Green$5003: Purple",
  "1174&&Entity&&Hall of Memories DLC area purple laser",
  "1175&&Entity&&Hall of Memories DLC area blue laser&&$5000: Four-way 反時計回り$5001: Four-way 時計回り$5002:  Four-way 不動$5003: 上向き、高速横11マス移動$5004: 下向き、高速横11マス移動$5005: 右向き、縦5マス移動$5006: 左向き、縦5マス移動$5007: 上向き、横15マス移動$5008: 下向き、横15マス移動$5009、5010:  Four-way 不動$5011、5012: Three-way 反時計回り横13マス移動$5013、5014: Three-way 時計回り横13マス移動$5015: twelve(?)-way 時計回り$5016～:  Four-way 不動",
  "1898&&Entity&&LittleFakeErina&&本編未使用。area3の右端で使用されている。",
  "5500&&Environment&&Palm tree&&place 3 tiles above ground",
  "5501&&Environment&&Palm tree&&place 3 tiles above ground",
  "5502&&Environment&&Rock",
  "5503&&Environment&&Blue sales cart&&place 2 tiles above ground",
  "5504&&Environment&&Red sales cart&&place 2 tiles above ground",
  "5505&&Environment&&Green sales cart&&place 2 tiles above ground",
  "5506&&Environment&&Yellow umbrella&&place 2 tiles above ground",
  "5507&&Environment&&Blue umbrella&&place 2 tiles above ground",
  "5508&&Environment&&Red umbrella&&place 2 tiles above ground",
  "5509&&Environment&&Green umbrella&&place 2 tiles above ground",
  "5510&&Environment&&Blue/Red town signpost&&place 2 tiles above ground",
  "5511&&Environment&&Green/Purple town signpost&&place 2 tiles above ground",
  "5512&&Environment&&Window",
  "5515&&Environment&&Shop desk",
  "5516&&Environment&&Snowy tree&&place 3 tiles above ground",
  "5517&&Environment&&Rock pile&&place 1 tile above ground",
  "5518&&Environment&&Small rock pile&&place 1 tile above ground",
  "5519&&Environment&&Rock pile&&place 1 tile above ground",
  "5520&&Environment&&Crystal",
  "5521&&Environment&&Crystal",
  "5522&&Environment&&Crystal",
  "5523&&Environment&&Crystal",
  "5524&&Environment&&Crystal",
  "5525&&Environment&&Crystal",
  "5526&&Environment&&Crystal",
  "5527&&Environment&&Crystal",
  "5528&&Environment&&Crystal",
  "5529&&Environment&&Crystal",
  "5530&&Environment&&Tombstone&&place 1 tile above ground",
  "5531&&Environment&&Tombstone&&place 1 tile above ground",
  "5532&&Environment&&Tombstone&&place 1 tile above ground",
  "5533&&Environment&&Tombstone&&place 1 tile above ground",
  "5534&&Environment&&Tombstone&&place 1 tile above ground",
  "5535&&Environment&&Tombstone&&place 1 tile above ground",
  "5536&&Environment&&Tombstone&&place 1 tile above ground",
  "5537&&Environment&&Tombstone&&place 1 tile above ground",
  "5538&&Environment&&Tombstone&&place 1 tile above ground",
  "5539&&Environment&&Tombstone&&place 1 tile above ground",
  "5541&&Environment&&Bookshelf&&place 2 tiles above ground",
  "5542&&Environment&&Wide bookshelf&&place 2 tiles above ground",
  "5543&&Environment&&Couch&&place 2 tiles above ground",
  "5544&&Environment&&Lamp",
  "5545&&Environment&&Small table&&place 2 tiles above ground",
  "5546&&Environment&&Stacked books&&place 2 tiles above ground",
  "5547&&Environment&&Desk&&place 2 tiles above ground",
  "5548&&Environment&&Bunny picture&&place 2 tiles above",
  "5549&&Environment&&Bunny picture&&place 2 tiles above",
  "5550&&Environment&&Bunny picture&&place 2 tiles above",
  "5551&&Environment&&Bunny picture&&place 2 tiles above",
  "5552&&Environment&&Door&&place 2 tiles above ground",
  "5553&&Environment&&Bunny statue&&place 2 tiles above ground",
  "5554&&Environment&&Potted plant&&place 2 tiles above ground",
  "5556&&Environment&&Lightpost&&place 2 tiles above ground",
  "5557&&Environment&&Casket&&place 2 tiles above ground",
  "5558&&Environment&&Lit candle",
  "5559&&Environment&&Pyramid door&&place 2 tiles above ground",
  "5560&&Environment&&Lit candle on stand&&place 2 tiles above ground",
  "5561&&Environment&&Large tree&&place 4 tiles above ground",
  "5562&&Environment&&Bushes&&place 2 tiles above ground",
  "5568&&Environment&&Rumi's house&&place 3 tiles above ground",
  "5569&&Environment&&Mr. Tako's desk",
  "5572&&Environment&&HealPointGfx&&効果は無い。",
  "5573&&Environment&&Bed&&イリス撃破後にキャラクターが現れる。",
  "10&&Unknown&&FINAL FORM BREAK&&NOAH2のフィールドで使用されている。",
  "33&&Unknown&&Reset flag",
  "35&&Unknown&&Move Left ←",
  "36&&Unknown&&Move R →",
  "38&&Unknown&&Alpha Block",
  "39&&Unknown&&-Light-BG L1&&マップ各所に散らばっている",
  "40&&Unknown&&-Light-BG L2",
  "41&&Unknown&&LIGHT",
  "69&&Unknown&&black edge&&BOSS RUSH ZONE手前等。",
  "70&&Unknown&&cyan edge",
  "71&&Unknown&&NO OUT-LINE&&海のタイルに重なっている",
  "75&&Unknown&&START BOSS RUSH&&ID:74と一緒に使用されているがID:74は単体で動く",
  "76&&Unknown&&NO BOSS RUSH",
  "77&&Unknown&&FLASH TILE",
  "78&&Unknown&&IN TOWN&&",
  "79&&Unknown&&OUT TOWN",
  "82&&Unknown&&GO -OUT- Build",
  "96&&Unknown&&NOR LIGHT",
  "97&&Unknown&&DARK LIGHT",
  "98&&Unknown&&VERY DARK LIGHT",
  "99&&Unknown&&BLUE CAVE LIGHT",
  "225&&Unknown&&YES MUL BG&&area0の左端で使用されている",
  "226&&Unknown&&NO MUL BG&&area0の左端で使用されている",
  "233&&Unknown&&Fairy Bcind L2",
  "234&&Unknown&&Fairy Infront L2",
  "5563&&Unknown&&?&&area5で使われている。",
  "5571&&Unknown&&?&&ルミの家に使われている。closetはcodeによって完全に固定されているので無関係。",
]