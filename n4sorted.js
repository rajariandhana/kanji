/*
TEMPLATE
english
kanji
[
    [kanji, hiragana, english]
]

['','',[]],
kurang lebih ini formatnya
['kanji','english',[['kanji1','hiragana1','english1'],['kanji2','hiragana2','english2'],]],
['','',''],
*/
const library_n4 = [

    ['親','parent',[['親','おや','parents'],['両親', 'りょうしん', 'parents'],['親しい','したしい','close (friend)'],]],
    ['家','house',[['家族','かぞく','family'],['作家','さっか','writer'],]],
    ['族','family',[['家族', 'かぞく', 'family'],['民族','みんぞく','people'],['王族','おうぞく','royalty'],]],

    ['兄','older brother',[['兄', 'あに', 'older brother'],['父兄','ふけい','guardians'],]],
    ['弟','younger brother',[['弟','おとうと','younger brother'],]],
    ['姉','older sister',[['お姉さん','おねえさん','older sister'],]],
    ['妹','younger sister',[['姉妹','しまい','sisters'],]],

    ['春','spring',[['春','はる','spring'],['青春', 'せいしゅん', 'spring'],]],
    ['夏','summer',[['夏休み','なつやすみ','summer holiday'],['夏時間','なつじかん','summertime'],]],
    ['秋','autumn',[['秋','あき','autumn'],['秋風','あきかぜ','autumn breeze'],['春秋','しゅんじゅう','spring and autumn'],]],
    ['冬','winter',[['冬場','ふゆば','winter season'],['冬物','ふゆもの','winter clothing'],]],

    ['朝','morning',[['朝','あさ','morning'],['朝食', 'ちょうしょく', 'breakfast'],['今朝','けさ','this morning'],]],
    ['昼','daytime',[['昼間', 'ひるま', 'daytime'],['昼食','ちゅうしょく','lunch'],]],
    ['夕','evening',[['夕食', 'ゆうしょく', 'evening'],['七夕','たなばた','Star Festival'],]],
    ['夜','night',[['今夜', 'こんや', 'night'],['夜空','よそら','night sky'],]],

    ['体','body',[['本体', 'ほんたい', 'substance'],['死下','したい','corpse'],]],
    ['頭','head',[['頭','あたま','head'],]],
    ['顔','face',[['笑顔','えがお','smiling face'],['顔色','かおいろ','complexion'],['新顔','しんがお','newcomer, newface'],]],
    ['首','neck',[['足首','あしくび','ankle'],['手首','てくび','wrist'],['自首','じしゅ','to surrender'],]],
    ['心','heart',[['安心','あんしん','relief'],['心臓','しんぞう','heart'],]],


    ['借','borrow',[['借りる', 'かりる', 'to borrow'],['借り物','かりもの','borrowed thing'],['借金','しゃっきん','debt'],]],


    ['写','copy',[['写真', 'しゃしん', 'photograph'],['写す','うつす','to copy'],]],
    ['真','true',[['写真','しゃしん','photograph'],['真中','まんなか','centre, mid-way'],['真理','しんり','truth'],]],
    ['画','picture',[['映画','えいが','movie'],['計画', 'けいかく', 'plan'],['区画','くかく','division'],]],

    ['薬','medicine',[['薬','くすり','medicine'],['火薬','かやく','gun powder'],['薬学','やくがく','study of pharmacy'],]],
    ['医','doctor',[['医者', 'いしゃ', 'doctor'],['医学','いがく','medical science'],['医大','いだい','medical university'],]],
    ['病','sick',[['病院', 'びょういん', 'hospital'],['病気','びょうき','sick'],['病死','びょうし','dying'],]],
    ['院','institution',[['病院','びょういん','hospital'],['学院','がくいん','institute'],['大学院','だいがくいん','graduate school'],]],

    ['場','place',[['場所', 'ばしょ', 'place'],['工場','こうじょう','factory'],['広場','ひろば','plaza'],]],
    ['所','place',[['場所', 'ばしょ', 'place'],['研究所','けんきゅじょ','laboratory'],['住所','じゅうしょ','address'],]],
    ['住','dwell',[['住所', 'じゅうしょ', 'address'],['安住','あんじゅう','live in peace'],]],
    ['区','ward',[['区別','くべつ','distinction'],['区切る', 'くぎる', 'to cut off'],]],
    ['町','town',[['町','まち','town'],['町中','まちなか','downtown'],]],
    ['市','city',[['市民','しみん','citizen'],]],
    ['県','prefecture',[['県','けん','prefecture'],['県内','けんない','within prefecture'],['県外','けんがい','outside the prefecture'],]],
    ['都','metropolis',[['都','みやこ','capital'],['京都','きょうと','Kyoto'],['都会','とかい','city'],]],

    ['室','room',[['教室', 'きょうしつ', 'classroom'],]],
    ['屋','premise',[['屋上','おくじょう','rooftop'],['居酒屋', 'いざかや', 'bar'],]],

    ['声','voice',[['小声','こごえ','whisper'],['話し声','はなしごえ','speaking voice'],]],
    ['歌','song',[['歌','うた','song'],['歌手','かしゅ','singer'],['歌声','うたごえ','singing voice'],]],
    ['音','sound',[['音楽', 'おんがく', 'music'],['音質','おんしつ','tone quality'],['足音','あしおと','sound of footsteps'],]],

    ['池','pond',[['池','いけ','pond'],['電池','でんち','battery'],]],
    ['海','sea',[['海', 'うみ', 'sea'],['海外','かいがい','abroad'],['北海道','ほっかいどう','Hokkaido'],]],
    ['洋','ocean',[['海洋','かいよう','ocean'],['西洋','せいよう','western country'],['洋食', 'ようしょく', 'western meal'],]],
    ['風','wind',[['台風', 'たいふう', 'typhoon'],['洋風','ようふう','western style'],['風習','ふうしゅう','custom'],]],

    ['飯','meal',[['赤飯','せきはん','red rice'],['夕飯','ゆうはん','evening meal'],['朝ご飯','あさごはん','breakfast'],]],
    ['肉','meat',[['肉しゃ','にくしゃ','butcher'],['豚肉', 'ぶたにく', 'pork'],['肉親','にくしん','blood relative'],]],
    ['菜','vegetable',[['野菜','やさい','vegetables'],['白菜','はくさい','Chinese cabbage'],['菜食','さいしょく','vegetable diet'],]],

    ['牛','cow',[['牛','うし','cow'],['牛肉', 'ぎゅうにく', 'beef'],['和牛','わぎゅう','Japanese beef'],]],
    ['犬','dog',[['犬','いぬ','dog'],['野犬','やけん','stray dog'],]],
    ['鳥','bird',[['白鳥', 'はくちょう', 'swan'],['小鳥','ことり','small bird'],['野鳥','やちょう','wild bird'],]],

    ['色','color',[['特色','とくしょく','characteristic'],['黄色','きいろ','yellow'],['色々','いろいろ','various'],]],
    ['赤','red',[['赤い','あかい','red'],['赤ちゃん','あかちゃん','baby'],['赤道','せきどう','equator'],]],
    ['青','blue',[['青空','あおぞら','blue sky'],]],
    ['茶','tea',[['お茶','おちゃ','green tea'],['茶色', 'ちゃいろ', 'tea'],['茶道','さどう','Tea Ceremony'],]],
    ['銀','silver',[['銀行', 'ぎんこう', 'bank'],['銀色','ぎんいろ','silver (color)'],['水銀','すいぎん','mercury'],]],
    ['黒','black',[['黒字', 'こくじ', 'to be in the black'],['白黒','しろくろ','black and white'],['黒っぽい','くろっぽい','dark'],]],

    ['村','village',[['村','むら','village'],['山村', 'さんそん', 'mountain village'],['村人','むらびと','villager'],]],
    ['林','woods',[['林','はやし','woods, forest'],['森林','しんりん','forest'],['林業','りんぎょう','forestry'],]],
    ['森','forest',[['森','もり','forest'],['森林','しんりん','forest'],]],

    ['服','clothes',[['服', 'ふく', 'clothes'],['洋服','ようふく','western clothes'],]],
    ['着','wear / arrive',[['着る','きる','to wear'],['着く','つく','to arrive'],['着物', 'きもの', 'kimono'],]],

    ['送','send',[['送る', 'おくる', 'to send'],['先送り','さきおきる','postpone'],['送電','そうでん','electric supply'],]],
    ['運','transport',[['運ぶ','はこぶ','to transport'],['運','うん','fortune, luck'],['運動','うんどう','exercise'],]],
    ['通','pass through',[['通る','とおる','to pass'],['通う','かよう','to commute'],['通信社','つうしんしゃ','newsagency'],]],
    ['進','advance',[['進む','すすむ','to advance'],['進歩','しんぽ','progress'],]],

    ['私','me',[['私','わたし','me, I'],['私学', 'しがく', 'private school'],['私見','しけん','personal opinion'],]],
    ['自','oneself',[['自分', 'じぶん', 'oneself'],['自動','じどう','automatic'],['自転車','じてんしゃ','bicycle'],]],
    ['者','someone',[['者','もの','person'],['業者','ぎょうしゃ','trader'],['科学者','かがくしゃ','scientist'],]],



    ['暑','hot',[['暑い','あつい','hot'],['暑さ','あつさ','heat'],['暑中','しょちゅう','mid-summer'],]],
    ['寒','cold',[['寒い','さむい','cold'],['寒がり','さむがり','sensitive to cold'],]],
    
    ['始','begin',[['始める','はじめる','to start'],['年始','ねんし','new year'],]],
    ['終','end',[['終わる','おわる','to finish'],['終わり','おわり','the end'],['始終','しじゅう','from beginning to end'],]],

    ['動','move',[['動く','うごく','to move'],['動物','どうぶつ','animal'],['自動', 'じどう', 'automatic'],]],
    ['止','stop',[['止める','とめる','to stop'],['止まる', 'とまる', 'to stay'],['中止','ちゅうし','suspension'],]],

    ['弱','weak',[['弱い','よわい','weak'],['弱者','じゃくしゃ','the weak'],['弱虫','よわむし','weakling'],]],
    ['強','strong',[['強い','つよい','strong'],['勉強','べんきょう','study'],]],

    ['明','bright',[['明るい','あかるい','bright'],['不明','ふめい','unknown'],['発明','はつめい','invention'],]],
    ['暗','darkness',[['暗い', 'くらい', 'dark'],['真っ暗','まっくら','pitch black'],]],

    ['近','near',[['近い','ちかい','near'],['近所','きんじょ','neighbourhood'],['近道','ちかみち','shortcut'],]],
    ['遠','far',[['遠い','とおい','far'],['遠足','えんそく','trip'],['遠まわし','とおまわし','indirect'],]],
    
    ['軽','light',[['軽い','かるい','light'],['気軽','きがる','cheerful'],['軽々','かるがる','lightly'],]],
    ['重','heavy',[['重い','おもい','heavy'],['重大','じゅうだい','serious'],['体重','たいじゅう','one\'s body weight'],]],

    ['短','short',[['短い','みじかい','short'],['短気','たんき','short temper'],]],
    ['広','wide',[['広い','ひろい','spacious'],['広島', 'ひろしま', 'Hiroshima'],['広大','こうだい','huge'],]],


    ['漢','China',[['漢字','かんじ','Chinese character'],]],
    ['字','character',[['漢字', 'かんじ', 'character'],['名字','みょうじ','surname'],]],

    ['世','world',[['世界', 'せかい', 'world'],['世代','せだい','generation'],['世話','せわ','look after'],]],
    ['界','world',[['世界','せかい','world'],['学界','がっかい','academic world'],['外界','がいかい','physical world'],]],

    

    ['不','not',[['不思議','ふしぎ',''],['不安','ふあん','anxiety'],['不当','ふとう','injustive'],]],
    ['主','master',[['主人', 'しゅじん', 'master'],['主食','しゅしょく','staple food'],['主語','しゅご','subject'],]],
    ['事','abstract thing',[['食事', 'しょくじ', 'abstract thing'],]],
    ['乗','ride',[['乗る', 'のる', 'to ride'],['乗員','じょういん','crew'],]],
    ['京','capital',[['東京','とうきょ','Tokyo'],['京都', 'きょうと', 'Kyoto'],]],
    ['仕','serve',[['仕事', 'しごと', 'serve'],['仕える','つかえる','to serve'],]],
    ['代','generation',[['時代', 'じだい', 'era'],['代金','だいきん','payment'],['代わる','かわる','to take the place of'],]],
    ['以','since',[['以上', 'いじょう', 'since'],['以下','いか','less than'],]],
    ['低','low',[['低い', 'ひくい', 'low'],['低下','ていか','decline'],]],
    ['作','make',[['作る','つくる','to create'],['手作り', 'てづくり', 'handmade'],['作家','さっか','author'],]],
    ['使','use',[['使う','つかう','to use'],['天使', 'てんし', 'angel'],]],
    ['便','convenience',[['不便','ふべん','inconvenience'],['小便', 'しょうべん', 'urine'],]],
    ['働','work',[['働く','はたらく','to work'],['活動', 'かつどう', 'work'],]],

    ['元','origin',[['元気','げんき','health'],['地元', 'じもと', 'origin'],]],
    ['光','light',[['月光','げっこう','moonlight'],['電光','でんこう','lightning'],['観光', 'かんこう', 'light'],]],
    ['切','cut',[['大切', 'たいせつ', 'important'],['切手','きって','stamp'],]],
    ['別','separate',[['特別','とくべつ','special'],['送別', 'そうべつ', 'separate'],]],
    ['力','power',[['電力', 'でんりょく', 'power'],['全力','ぜんりょく','all ones power'],]],
    ['勉','diligence',[['勉強', 'べんきょう', 'study'],]],
    ['去','leave',[['去る','さる','to leave'],['去年', 'きょねん', 'last year'],]],
    ['合','fit',[['合う','あう','to fit'],['会合','かいごう','meeting'],]],
    ['台','base',[['台風','たいふう','typhoon'],['台所','だいどころ','kitchen'],]],
    ['同','same',[['同じ','おなじ','same'],['同時','どうじ','simultaneous'],]],
    ['味','flavor',[['意味', 'いみ', 'meaning'],['持ち味','もちあじ','unique flavour'],['味わう','あじわう','to taste'],]],
    ['品','goods',[['品物', 'しなもの', 'goods'],['部品','ぶひん','accesories'],['品名','ひんめい','product name'],]],
    ['員','member',[['店員','てんいん','employee'],['行員','こういん','factory worker'],['全員', 'ぜんいん', 'every member'],]],
    ['問','question',[['質問', 'しつもん', 'question'],['不問','ふもん','ignorance'],]],
    ['図','drawing',[['地図', 'ちず', 'map'],['意図','いと','intention'],]],
    ['地','ground',[['地下', 'ちか', 'basement'],['地味','じみ','simple'],]],
    ['堂','public chamber',[['会堂', 'かいどう', 'church'],['本堂','ほんどう','main temple'],]],
    ['売','sell',[['売る','うる','to sell'],['発売','はつばい','sale']['売り場','うりば','counter'],,]],
    
    ['太','fat',[['太い','ふとい','thick'],['太字','ふとじ','bold type'],]],
    ['好','like',[['好き', 'すき', 'to like'],['好色','こうしょく','lust'],]],
    
    ['工','craft',[['工学','こうがく','engineering'],['工事', 'こうじ', 'craft'],]],
    ['帰','return home',[['帰る', 'かえる', 'to return'],['持ち帰り','もちかえり','takeout'],]],

    ['度','degrees',[['度合い','どあい','degree'],['何度','なんど','how many times?'],]],
    ['建','build',[['建物', 'たてもの', 'build'],['建前','たてまえ','public position'],]],
    ['引','pull',[['引く', 'ひく', 'to pull'],['引き出す','ひきだす','to pull out'],]],
    
    
    ['待','wait',[['待つ','まつ','to wait'],['待合','まちあい','meeting place'],['待ち合わせ','まちあわせ','appointment'],]],
    ['思','think',[['思う','おもう','to think'],['思い出す','おもいだす','to remember'],]],
    ['急','hurry',[['急ぐ', 'いそぐ', 'to hurry'],['急行','きゅうこう','express train'],['急死','きゅうし','sudden death'],]],
    ['悪','bad',[['悪い','わるい','bad'],['最悪','さいあく','the worst'],['悪質','あくしつ','bad quality'],]],
    ['意','idea',[['意味','いみ','meaning'],['意見', 'いけん', 'opinion'],['意外','いがい','unexpected'],]],

    ['持','hold',[['持つ','もつ','to hold'],['気持ち','きもち','feeling'],['持ち出す','もちだす','to take out'],]],
    ['教','teach',[['教える', 'おしえる', 'to teach'],['文教','ぶんきょう','education'],]],
    ['文','writing',[['作文', 'さくぶん', 'writing'],['文学','ぶんがく','literature'],['注文','ちゅうもん','order'],]],
    ['料','fee',[['料金', 'りょうきん', 'fee'],['料理','りょうり','cooking'],['試料','しりょう','sample'],]],
    ['方','direction',[['考え方', 'かんがえかた', 'way of thinking'],['味方','みかた','friend'],]],
    ['旅','travel',[['旅行', 'りょこう', 'travel'],['旅館','りょかん','Japanese hotel'],['旅人','たびびと','traveller'],]],
    ['早','early',[['早い','はやい','early'],['早口','はやくち','fast talk'],]],

    

    ['映','reflect',[['映画', 'えいが', 'movie'],['映る','うつる','to be reflected'],]],
    ['曜','weekday',[['曜日', 'ようび', 'day of week'],]],
    ['有','possess',[['有名', 'ゆうめい', 'famous'],['有用','ゆうよう','useful'],['有事','ゆうじ','emergency'],]],
    
    ['業','business',[['業者', 'ぎょうしゃ', 'trader'],['工業','こうぎょう','manufacturing'],['休業','きゅうぎょう','closed'],]],
    ['楽','pleasure',[['楽','らく','comfort, ease'],['音楽','おんがく','music'],['楽しい','たのしい','enjoyable'],]],

    ['死','death',[['死ぬ','しぬ','to die'],['病死','びょうし','natural death'],['安楽死','あんらくし','euthanasia'],]],
    ['民','people',[['民','たみ','nation, people'],['民間','みんかん','private'],['民族','みんぞく','people, race'],]],
    ['注','pour',[['注ぐ','そそぐ','to pour'],['注文', 'ちゅうもん', 'order'],['注意','ちゅうい','attention'],]],
    ['洗','wash',[['洗う','あらう','to wash'],['洗濯', 'せんたく', 'laundry'],['手洗い','てあらい','washroom'],]],

    ['物','thing',[['物', 'もの', 'thing'],['建物','たてもの','building'],['物語','ものがたり','story'],]],
    ['特','special',[['特別', 'とくべつ', 'special'],['特集','とくしゅう','special feature'],['特急','とっきゅう','limited express train'],]],
    ['理','reason',[['料理','りょうり','cooking'],['物理','ぶつり','physics'],['地理','ちり','geography'],]],
    ['産','products',[['産業','さんぎょう','industry'],['不動産','ふどうさん','real estate'],['産む','うむ','to produce'],]],
    ['用','use',[['用','よう','task, business'],['信用','しんよう','confidence'],['起用','きよう','appointment'],]],
    ['田','rice field',[['田','た','rice field'],['新田','しんでん','new rice field'],]],
    
    ['発','departure',[['出発', 'しゅっぱつ', 'departure'],['発表','はっぴょう','announcement'],['発見','はっけん','discovery'],]],
    ['知','know',[['知る','しる','to know'],['知らせる','しらせる','to notice'],['人見知り','ひとみしり','shyness'],]],

    ['研','study',[['研究者','けんきゅうしゃ','researcher'],['研ぐ','とぐ','to sharpen'],]],
    ['究','research',[['学究','がっきゅう','scholar'],['究朝','きゅうめい','scientific investigation'],['研究員','けんきゅういん','researcher'],]],
    ['答','answer',[['答え', 'こたえ', 'answer'],['問答','もんどう','q and a'],['口答え','くちごたえ','retort'],]],
    ['紙','paper',[['紙', 'かみ', 'paper'],['手紙','てがみ','letter'],['用紙','ようし','answer sheet'],]],

    ['習','learn',[['習う','ならう','to learn'],['見習う','みならう','to follow'],]],
    ['考','think about',[['考える','かんがえる','to think'],['考え','かんがえ','thought'],['考え方','かんがえかた','way of thinking'],]],
    ['英','England',[['英語', 'えいご', 'English'],['英文','えいぶん','English sentence'],['英明','えいめい','intelligent'],]],

    ['計','measure',[['計画','けいかく','plan'],['時計','とけい','clock'],['計る','はかる','to measure'],]],
    ['試','test',[['試合','しあい','match'],['試験','しけん','test'],['試食','ししょく','sampling food'],]],
    ['説','theory',[['説明','せつめい','explanation'],['小説', 'しょうせつ', 'novel'],['学説','がくせつ','theory'],]],
    ['貸','lend',[['貸す','かす','to lend'],['貸し','かし','loan'],]],

    ['質','quality',[['質','しつ','quality'],['質問','しつもん','question'],['悪質','あくしつ','bad quality'],]],
    ['走','run',[['走る','はしる','to run'],['走り書き','はしりがき','scribble'],]],
    ['起','wake up',[['起きる','おきる','to wake up'],['起こる','おこる','to occur'],]],
    ['転','revolve',[['転じる','てんじる','to turn'],['自転車','じてんしゃ','bic'],['転ぶ','ころぶ','to fall down'],]],

    ['野','field',[['野菜','やさい','vegetable'],['野生','やせい','wild'],['野外','やがい','suburbs'],]],

    ['門','gates',[['門下','もんか','one\s follower'],['門外漢','もんがいかん','amateur'],['入門','にゅうもん','manual'],]],
    ['開','open',[['開ける','あける','open'],['開く','あく','to open'],]],
    ['集','collect',[['集まる','あつまる','to collect'],['集中','しゅうちゅう','concentration'],]],
    ['題','topic',[['問題','もんだい','problem, question'],['宿題','しゅくだい','homework'],]],
    ['館','building',[['図書館','としょかん','library'],['旅館','りょかん','Japanese-style inn'],['映画館','えいがかん','cinema'],]],
    ['験','test',[['試験','しけん','exam'],['体験','たいけん','personal experience'],]],
    ];
    