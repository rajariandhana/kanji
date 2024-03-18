/*
TEMPLATE
english
kanji
[
    [kanji, hiragana, english]
]

['','',[['','',''],]],
kurang lebih ini formatnya
['kanji','english',[['kanji1','hiragana1','english1'],['kanji2','hiragana2','english2'],]],

*/
const library_n4 = [
    ['不','not',[['不思議','ふしぎ',''],['不安','ふあん','anxiety'],['不当','ふとう','injustive'],]],
    ['世','world',[['世界', 'せかい', 'world'],['世代','せだい','generation'],['世話','せわ','look after'],]],
    ['主','master',[['主人', 'しゅじん', 'master'],['主食','しゅしょく','staple food'],['主語','しゅご','subject'],]],
    ['事','abstract thing',[['食事', 'しょくじ', 'abstract thing'],]],
    ['乗','ride',[['乗る', 'のる', 'to ride'],['乗員','じょういん','crew'],]],
    ['京','capital',[['東京','とうきょ','Tokyo'],['京都', 'きょうと', 'Kyoto'],]],
    ['仕','serve',[['仕事', 'しごと', 'serve'],['仕える','つかえる','to serve'],]],
    ['代','generation',[['時代', 'じだい', 'era'],['代金','だいきん','payment'],['代わる','かわる','to take the place of'],]],
    ['以','since',[['以上', 'いじょう', 'since'],['以下','いか','less than'],]],
    ['低','low',[['低い', 'ひくい', 'low'],['低下','ていか','decline'],]],
    ['作','make',[['作る','つくる','to create'],['手作り', 'てづくり', 'handmade'],['作家','さっか','author'],]],
    ['体','body',[['本体', 'ほんたい', 'substance'],['死下','したい','corpse'],]],
    ['住','dwell',[['住所', 'じゅうしょ', 'address'],['安住','あんじゅう','live in peace'],]],
    ['使','use',[['使う','つかう','to use'],['天使', 'てんし', 'angel'],]],
    ['便','convenience',[['不便','ふべん','inconvenience'],['小便', 'しょうべん', 'urine'],]],
    ['借','borrow',[['借りる', 'かりる', 'to borrow'],['借り物','かりもの','borrowed thing'],['借金','しゃっきん','debt'],]],
    ['働','work',[['働く','はたらく','to work'],['活動', 'かつどう', 'work'],]],

    ['元','origin',[['元気','げんき','health'],['地元', 'じもと', 'origin'],]],
    ['兄','older brother',[['兄', 'あに', 'older brother'],['父兄','ふけい','guardians'],]],
    ['光','light',[['月光','げっこう','moonlight'],['電光','でんこう','lightning'],['観光', 'かんこう', 'light'],]],
    ['写','copy',[['写真', 'しゃしん', 'photograph'],['写す','うつす','to copy'],]],
    ['冬','winter',[['冬場','ふゆば','winter season'],['冬物','ふゆもの','winter clothing'],]],
    ['切','cut',[['大切', 'たいせつ', 'important'],['切手','きって','stamp'],]],
    ['別','separate',[['特別','とくべつ','special'],['送別', 'そうべつ', 'separate'],]],
    ['力','power',[['電力', 'でんりょく', 'power'],['全力','ぜんりょく','all ones power'],]],
    ['勉','diligence',[['勉強', 'べんきょう', 'study'],]],
    ['動','move',[['動く','うごく','to move'],['動物','どうぶつ','animal'],['自動', 'じどう', 'automatic'],]],
    ['区','ward',[['区別','くべつ','distinction'],['区切る', 'くぎる', 'to cut off'],]],
    ['医','doctor',[['医者', 'いしゃ', 'doctor'],['医学','いがく','medical science'],['医大','いだい','medical university'],]],
    ['去','leave',[['去る','さる','to leave'],['去年', 'きょねん', 'last year'],]],
    ['合','fit',[['合う','あう','to fit'],['会合','かいごう','meeting'],]],
    ['台','base',[['台風','たいふう','typhoon'],['台所','だいどころ','kitchen'],]],
    ['同','same',[['同じ','おなじ','same'],['同時','どうじ','simultaneous'],]],
    ['味','flavor',[['意味', 'いみ', 'meaning'],['持ち味','もちあじ','unique flavour'],['味わう','あじわう','to taste'],]],
    ['品','goods',[['品物', 'しなもの', 'goods'],['部品','ぶひん','accesories'],['品名','ひんめい','product name'],]],
    ['員','member',[['店員','てんいん','employee'],['行員','こういん','factory worker'],['全員', 'ぜんいん', 'every member'],]],
    ['問','question',[['質問', 'しつもん', 'question'],['不問','ふもん','ignorance'],]],
    ['図','drawing',[['地図', 'ちず', 'map'],['意図','いと','intention'],['','',''],]],
    ['地','ground',[['地下', 'ちか', 'basement'],['地味','じみ','simple'],]],
    ['堂','public chamber',[['会堂', 'かいどう', 'church'],['本堂','ほんどう','main temple'],]],
    ['場','place',[['場所', 'ばしょ', 'place'],['工場','こうじょう','factory'],['広場','ひろば','plaza'],]],
    ['声','voice',[['小声','こごえ','whisper'],['話し声','はなしごえ','speaking voice'],]],
    ['売','sell',[['売る','うる','to sell'],['発売','はつばい','sale']['売り場','うりば','counter'],,]],
    ['夏','summer',[['夏休み','なつやすみ','summer holiday'],['夏時間','なつじかん','summertime'],]],
    ['夕','evening',[['夕食', 'ゆうしょく', 'evening'],['七夕','たなばた','Star Festival'],]],
    ['夜','night',[['今夜', 'こんや', 'night'],['夜空','よそら','night sky'],]],
    ['太','fat',[['太い','ふとい','thick'],['太字','ふとじ','bold type'],]],
    ['好','like',[['好き', 'すき', 'to like'],['好色','こうしょく','lust'],]],
    ['妹','younger sister',[['姉妹','しまい','sisters'],]],
    ['姉','older sister',[['お姉さん','おねえさん','older sister'],]],
    ['始','begin',[['始める','はじめる','to start'],['年始','ねんし','new year'],]],
    ['字','character',[['漢字', 'かんじ', 'character'],['名字','みょうじ','surname'],]],

    ['室','room',[['教室', 'きょうしつ', 'classroom'],]],
    ['家','house',[['家族','かぞく','family'],['作家','さっか','writer'],]],
    ['寒','cold',[['寒い','さむい','cold'],['寒がり','さむがり','sensitive to cold'],]],
    ['屋','premise',[['屋上','おくじょう','rooftop'],['居酒屋', 'いざかや', 'bar'],]],
    ['工','craft',[['工学','こうがく','engineering'],['工事', 'こうじ', 'craft'],]],
    ['市','city',[['市民','しみん','citizen'],]],
    ['帰','return home',[['帰る', 'かえる', 'to return'],['持ち帰り','もちかえり','takeout'],]],
    ['広','wide',[['広い','ひろい','spacious'],['広島', 'ひろしま', 'Hiroshima'],['広大','こうだい','huge'],]],

    ['度','degrees',[['度合い','どあい','degree'],['何度','なんど','how many times?'],]],
    ['建','build',[['建物', 'たてもの', 'build'],['建前','たてまえ','public position'],]],
    ['引','pull',[['引く', 'ひく', 'to pull'],['引き出す','ひきだす','to pull out'],]],
    ['弟','younger brother',[['弟','おとうと','younger brother'],]],
    
    ['弱','weak',[]],
    ['強','strong',[]],
    ['待','wait',[]],
    ['心','heart',[]],
    ['思','think',[]],
    ['急','hurry',[['特急', 'とっきゅう', 'hurry'],]],
    ['悪','bad',[]],
    ['意','idea',[['意見', 'いけん', 'idea'],]],
    ['所','place',[['休憩所', 'きゅうけいじょ', 'place'],]],
    ['持','hold',[]],
    ['教','teach',[['教育', 'きょういく', 'teach'],]],
    ['文','writing',[['作文', 'さくぶん', 'writing'],]],
    ['料','fee',[['料金', 'りょうきん', 'fee'],]],
    ['方','direction',[['夕方', 'ゆうがた', 'direction'],]],
    ['旅','trip',[['旅行', 'りょこう', 'trip'],]],
    ['族','tribe',[['家族', 'かぞく', 'tribe'],]],
    ['早','early',[]],
    ['明','bright',[]],
    ['映','reflect',[['映画', 'えいが', 'reflect'],]],
    ['春','spring',[['青春', 'せいしゅん', 'spring'],]],
    ['昼','daytime',[['昼間', 'ひるま', 'daytime'],]],
    ['暑','hot',[]],
    ['暗','dark',[['暗記', 'あんき', 'dark'],]],
    ['曜','weekday',[['月曜日', 'げつようび', 'weekday'],]],
    ['有','be',[['有名', 'ゆうめい', 'be'],]],
    ['服','clothes',[['洋服', 'ようふく', 'clothes'],]],
    ['朝','morning',[['朝食', 'ちょうしょく', 'morning'],]],
    ['村','village',[['山村', 'さんそん', 'village'],]],
    ['林','woods',[]],
    ['森','forest',[]],
    ['業','business',[['営業', 'えいぎょう', 'business'],]],
    ['楽','pleasure',[]],
    ['歌','song',[]],
    ['止','stop',[['禁止', 'きんし', 'stop'],]],
    ['死','death',[]],
    ['民','people',[]],
    ['池','pond',[]],
    ['注','pour',[['注文', 'ちゅうもん', 'pour'],]],
    ['洋','ocean, western',[['洋食', 'ようしょく', 'ocean, western'],]],
    ['洗','wash',[['洗濯', 'せんたく', 'wash'],]],
    ['海','sea',[['海岸', 'かいがん', 'sea'],]],
    ['漢','China',[]],
    ['牛','cow',[['牛肉', 'ぎゅうにく', 'cow'],]],
    ['物','thing',[['博物館', 'はくぶつかん', 'thing'],]],
    ['特','special',[['特別', 'とくべつ', 'special'],]],
    ['犬','dog',[]],
    ['理','reason',[]],
    ['産','give birth',[]],
    ['用','use',[]],
    ['田','rice paddy',[]],
    ['町','town',[]],
    ['画','picture',[['計画', 'けいかく', 'picture'],]],
    ['界','world',[]],
    ['病','sick',[['病院', 'びょういん', 'sick'],]],
    ['発','departure',[['出発', 'しゅっぱつ', 'departure'],]],
    ['県','prefecture',[]],
    ['真','true',[]],
    ['着','wear / arrive',[['到着', 'とうちゃく', 'wear / arrive'],]],
    ['知','know',[]],
    ['短','short',[]],
    ['研','sharpen',[]],
    ['私','me',[['私立', 'しりつ', 'me'],]],
    ['秋','autumn',[]],
    ['究','research',[]],
    ['答','answer',[['解答欄', 'かいとうらん', 'answer'],]],
    ['紙','paper',[['紙袋', 'かみふくろ', 'paper'],]],
    ['終','end',[]],
    ['習','learn',[]],
    ['考','think about',[]],
    ['者','someone',[]],
    ['肉','meat',[['豚肉', 'ぶたにく', 'meat'],]],
    ['自','oneself',[['自分', 'じぶん', 'oneself'],]],
    ['色','color',[]],
    ['英','England',[['英語', 'えいご', 'England'],]],
    ['茶','tea',[['茶色', 'ちゃいろ', 'tea'],]],
    ['菜','vegetable',[]],
    ['薬','medicine',[]],
    ['親','parent',[['両親', 'りょうしん', 'parent'],]],
    ['計','measure',[]],
    ['試','test',[]],
    ['説','theory',[['小説', 'しょうせつ', 'theory'],]],
    ['貸','lend',[]],
    ['質','quality',[]],
    ['赤','red',[]],
    ['走','run',[]],
    ['起','wake up',[]],
    ['転','revolve',[]],
    ['軽','light',[]],
    ['近','near',[]],
    ['送','send',[['回送', 'かいそう', 'send'],]],
    ['進','advance',[]],
    ['運','carry',[]],
    ['遠','far',[]],
    ['都','metropolis',[]],
    ['重','heavy',[]],
    ['野','field',[]],
    ['銀','silver',[['銀行', 'ぎんこう', 'silver'],]],
    ['門','gates',[]],
    ['開','open',[]],
    ['院','institution',[]],
    ['集','collect',[]],
    ['青','blue',[]],
    ['音','sound',[['音節', 'おんせつ', 'sound'],]],
    ['頭','head',[]],
    ['題','topic',[]],
    ['顔','face',[]],
    ['風','wind',[['台風', 'たいふう', 'wind'],]],
    ['飯','meal',[]],
    ['館','public building',[]],
    ['首','neck',[]],
    ['験','test',[]],
    ['鳥','bird',[['七面鳥', 'しちめんちょう', 'bird'],]],
    ['黒','black',[['黒板', 'こくばん', 'black'],]],
    ];