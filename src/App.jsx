const cats = [
  {
    name: 'Noir',
    breed: 'British Shorthair',
    note: '静かな窓辺を好む、落ち着いた黒猫。初めての方にもゆっくり寄り添います。',
    image: '/images/noir-british-shorthair.png',
    detailTarget: '#noir-detail',
  },
  {
    name: 'Luna',
    breed: 'Ragdoll',
    note: 'やわらかな毛並みと穏やかな表情が魅力。午後のラウンジでよく眠っています。',
    image: '/images/luna-ragdoll.png',
    detailTarget: '#luna-detail',
  },
  {
    name: 'Sui',
    breed: 'Russian Blue',
    note: '凛とした佇まいの甘え上手。静かな時間帯にそっと近づいてきます。',
    image: '/images/sui-russian-blue.png',
    detailTarget: '#sui-detail',
  },
];

const menu = [
  {
    name: 'Single Origin Coffee',
    price: '820円',
    image: '/images/single-origin-coffee-cat.png',
    imageAlt: '猫カフェらしい上品なシングルオリジンコーヒーの写真',
    href: '#single-origin-coffee-detail',
  },
  {
    name: 'Organic Earl Grey',
    price: '780円',
    image: '/images/organic-earl-grey-detail.png',
    imageAlt: '上品なオーガニックアールグレイの写真',
    href: '#organic-earl-grey-detail',
  },
  {
    name: 'Seasonal Tart',
    price: '920円',
    image: '/images/seasonal-tart-detail.png',
    imageAlt: '季節のフルーツを使った上品なタルトの写真',
    href: '#seasonal-tart-detail',
  },
  {
    name: 'Champagne Grape Soda',
    price: '880円',
    image: '/images/champagne-grape-soda-detail.png',
    imageAlt: '高級感のあるシャンパングレープソーダの写真',
    href: '#champagne-grape-soda-detail',
  },
];

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">Maison Neko</a>
        <nav aria-label="ページ内メニュー">
          <a className="nav-button" href="#concept">Concept</a>
          <a className="nav-button" href="#cats">Cats</a>
          <a className="nav-button" href="#menu">Menu</a>
          <a className="nav-button" href="#access">Access</a>
          <a className="nav-button" href="#reservation">Reserve</a>
        </nav>
        <a className="header-cta" href="#reservation">来店予約をする</a>
      </header>

      <section className="hero" id="top" aria-label="Maison Nekoの紹介">
        <div className="hero-copy">
          <p className="eyebrow">Private Cat Lounge</p>
          <h1>猫と過ごす、静かな午後。</h1>
          <p>
            白い光が差し込むラウンジで、気ままな猫たちと上質なひとときを。
            Maison Nekoは、大人のための予約制猫カフェです。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#reservation">来店予約をする</a>
            <a className="button button-secondary" href="#concept">詳しく見る</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="白を基調とした猫カフェの店内写真" />
      </section>

      <section className="status-strip" aria-label="基本情報">
        <a href="#access">
          <span>Open</span>
          <strong>11:00 - 20:00</strong>
          <small>火曜定休 / 最終受付 19:00</small>
        </a>
        <a href="#menu">
          <span>Price</span>
          <strong>30分 1,200円</strong>
          <small>ワンドリンク制 / 延長10分 300円</small>
        </a>
        <a href="#reservation">
          <span>Style</span>
          <strong>完全予約制</strong>
          <small>静かな滞在のため人数を制限しています</small>
        </a>
      </section>

      <section className="section concept" id="concept">
        <div>
          <p className="eyebrow">Concept</p>
          <h2>猫の気配を感じながら、自分の時間に戻る場所。</h2>
        </div>
        <p>
          Maison Nekoは、猫との距離感を大切にしたラウンジ型の猫カフェです。
          触れ合いを急がず、猫たちが選ぶ距離で過ごすことを心地よさと考えています。
          白を基調にした店内には、自然光、リネン、静かな音楽を整えました。
        </p>
      </section>

      <section className="section mockup-section" aria-label="前回生成したWebサイトUI画像">
        <div className="mockup-frame">
          <img
            className="ui-mockup"
            src="/images/maison-neko-ui-mockup.png"
            alt="Maison Nekoの日本語ランディングページUI画像"
          />
          <a className="mockup-hotspot hotspot-concept" href="#concept" aria-label="Conceptへ移動" />
          <a className="mockup-hotspot hotspot-cats-nav" href="#cats" aria-label="Catsへ移動" />
          <a className="mockup-hotspot hotspot-menu-nav" href="#menu" aria-label="Menuへ移動" />
          <a className="mockup-hotspot hotspot-access-nav" href="#access" aria-label="Accessへ移動" />
          <a className="mockup-hotspot hotspot-reserve-nav" href="#reservation" aria-label="Reserveへ移動" />
          <a className="mockup-hotspot hotspot-reserve-button" href="#reservation" aria-label="来店予約へ移動" />
          <a className="mockup-hotspot hotspot-cats-detail" href="#cats" aria-label="猫スタッフの詳細へ移動" />
          <a className="mockup-hotspot hotspot-menu-detail" href="#menu" aria-label="メニューへ移動" />
          <a className="mockup-hotspot hotspot-access-detail" href="#access" aria-label="来店案内へ移動" />
        </div>
      </section>

      <section className="section cats" id="cats">
        <div className="section-title">
          <p className="eyebrow">Resident Cats</p>
          <h2>猫スタッフ</h2>
        </div>
        <div className="cat-grid">
          {cats.map((cat) => (
            <article className="cat-card" key={cat.name}>
              {cat.image ? (
                <img className="cat-card__image" src={cat.image} alt={`${cat.name}の写真`} />
              ) : null}
              <span>{cat.breed}</span>
              <h3>{cat.name}</h3>
              <p>{cat.note}</p>
              <a className="card-link" href={cat.detailTarget || '#reservation'}>詳しく見る</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section cat-detail" id="noir-detail" aria-label="Noirの詳しい紹介">
        <div className="cat-detail__image-wrap">
          <img
            className="cat-detail__image"
            src="/images/noir-british-shorthair.png"
            alt="Noirの詳しい写真"
          />
        </div>
        <div className="cat-detail__content">
          <p className="eyebrow">Noir / British Shorthair</p>
          <h2>静けさに寄り添う、穏やかな黒猫。</h2>
          <p>
            Noirは窓辺のやわらかな光が好きな、落ち着いた性格のBritish Shorthairです。
            初対面では少し距離を置きますが、安心できる人だと分かると、ゆっくり近づいてそばで過ごしてくれます。
          </p>
          <ul className="cat-detail__list">
            <li>性格：穏やかで慎重、静かな環境が好き</li>
            <li>好きな場所：窓辺のクッション、午後のラウンジ席</li>
            <li>接し方：大きな声を出さず、Noirのペースを待つのがおすすめ</li>
          </ul>
          <a className="text-link" href="#cats">猫スタッフ一覧へ戻る</a>
        </div>
      </section>

      <section className="section cat-detail" id="luna-detail" aria-label="Lunaの詳しい紹介">
        <div className="cat-detail__image-wrap">
          <img
            className="cat-detail__image"
            src="/images/luna-ragdoll.png"
            alt="Lunaの詳しい写真"
          />
        </div>
        <div className="cat-detail__content">
          <p className="eyebrow">Luna / Ragdoll</p>
          <h2>やわらかな空気をまとう、午後の眠り姫。</h2>
          <p>
            Lunaはふんわりとした毛並みと穏やかな表情が印象的なRagdollです。
            人の気配には慣れていますが、にぎやかな時間よりも、午後の静かなラウンジでゆっくり眠る時間を好みます。
          </p>
          <ul className="cat-detail__list">
            <li>性格：おだやかで優しく、ゆったりした動きが特徴</li>
            <li>好きな場所：日差しの入るソファ、柔らかいブランケットの上</li>
            <li>接し方：眠っている時はそっと見守り、起きている時に静かに声をかけるのがおすすめ</li>
          </ul>
          <a className="text-link" href="#cats">猫スタッフ一覧へ戻る</a>
        </div>
      </section>

      <section className="section cat-detail" id="sui-detail" aria-label="Suiの詳しい紹介">
        <div className="cat-detail__image-wrap">
          <img
            className="cat-detail__image"
            src="/images/sui-russian-blue.png"
            alt="Suiの詳しい写真"
          />
        </div>
        <div className="cat-detail__content">
          <p className="eyebrow">Sui / Russian Blue</p>
          <h2>凛とした佇まいに、さりげない甘え方。</h2>
          <p>
            Suiは青みがかったグレーの毛並みが美しいRussian Blueです。
            少し控えめに見えますが、落ち着いた時間帯になると近くに来て、静かにそばで過ごしてくれます。
          </p>
          <ul className="cat-detail__list">
            <li>性格：繊細で賢く、慣れると甘え上手</li>
            <li>好きな場所：人通りの少ない席、明るすぎないラウンジの角</li>
            <li>接し方：急に手を伸ばさず、Suiから近づいてくるのを待つと安心してくれます</li>
          </ul>
          <a className="text-link" href="#cats">猫スタッフ一覧へ戻る</a>
        </div>
      </section>

      <section className="section menu-section" id="menu">
        <div className="section-title">
          <p className="eyebrow">Cafe Menu</p>
          <h2>余韻を楽しむメニュー</h2>
        </div>
        <div className="menu-list">
          {menu.map((item) => (
            <a className={`menu-row ${item.image ? 'menu-row--featured' : ''}`} href={item.href} key={item.name}>
              {item.image ? (
                <img className="menu-row__image" src={item.image} alt={item.imageAlt} />
              ) : null}
              <span>{item.name}</span>
              <strong>{item.price}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section menu-detail" id="single-origin-coffee-detail" aria-label="Single Origin Coffeeの詳しい紹介">
        <div className="menu-detail__image-wrap">
          <img
            className="menu-detail__image"
            src="/images/single-origin-coffee-detail.png"
            alt="美味しそうなシングルオリジンコーヒーの大きな写真"
          />
        </div>
        <div className="menu-detail__content">
          <p className="eyebrow">Single Origin Coffee</p>
          <h2>香りまで楽しむ、静かな一杯。</h2>
          <p>
            深いコクとやわらかな酸味を持つ豆を、注文ごとに丁寧に抽出します。
            ラウンジの静けさに合うよう、余韻が長く、甘さを感じる飲み口に仕上げました。
          </p>
          <ul className="cat-detail__list">
            <li>味わい：カカオ、ナッツ、ほのかな果実味</li>
            <li>おすすめ：猫スタッフを眺めながら、午後のゆっくりした時間に</li>
            <li>価格：820円</li>
          </ul>
          <a className="button button-primary" href="#reservation">このメニューで予約する</a>
        </div>
      </section>

      <section className="section menu-detail" id="organic-earl-grey-detail" aria-label="Organic Earl Greyの詳しい紹介">
        <div className="menu-detail__image-wrap">
          <img
            className="menu-detail__image"
            src="/images/organic-earl-grey-detail.png"
            alt="上品なオーガニックアールグレイの大きな写真"
          />
        </div>
        <div className="menu-detail__content">
          <p className="eyebrow">Organic Earl Grey</p>
          <h2>ベルガモットが香る、澄んだ余韻。</h2>
          <p>
            香り高い茶葉を使い、やわらかな渋みと柑橘の余韻を引き出しました。
            猫たちの静かな気配を感じながら、ゆっくり味わいたい一杯です。
          </p>
          <ul className="cat-detail__list">
            <li>味わい：ベルガモット、淡い甘み、すっきりした後味</li>
            <li>おすすめ：午後の読書や、落ち着いた席で過ごす時間に</li>
            <li>価格：780円</li>
          </ul>
          <a className="button button-primary" href="#reservation">このメニューで予約する</a>
        </div>
      </section>

      <section className="section menu-detail" id="seasonal-tart-detail" aria-label="Seasonal Tartの詳しい紹介">
        <div className="menu-detail__image-wrap">
          <img
            className="menu-detail__image"
            src="/images/seasonal-tart-detail.png"
            alt="季節のタルトの大きな写真"
          />
        </div>
        <div className="menu-detail__content">
          <p className="eyebrow">Seasonal Tart</p>
          <h2>季節の果実を、静かな甘さで。</h2>
          <p>
            旬の果実と軽やかなクリームを合わせた、上品な甘さのタルトです。
            コーヒーや紅茶と一緒に楽しむことで、ラウンジでの時間に特別感を添えます。
          </p>
          <ul className="cat-detail__list">
            <li>味わい：果実の酸味、なめらかなクリーム、香ばしいタルト生地</li>
            <li>おすすめ：猫スタッフを眺めながら過ごす、少し贅沢な休憩に</li>
            <li>価格：920円</li>
          </ul>
          <a className="button button-primary" href="#reservation">このメニューで予約する</a>
        </div>
      </section>

      <section className="section menu-detail" id="champagne-grape-soda-detail" aria-label="Champagne Grape Sodaの詳しい紹介">
        <div className="menu-detail__image-wrap">
          <img
            className="menu-detail__image"
            src="/images/champagne-grape-soda-detail.png"
            alt="シャンパングレープソーダの大きな写真"
          />
        </div>
        <div className="menu-detail__content">
          <p className="eyebrow">Champagne Grape Soda</p>
          <h2>きらめく泡と、白ぶどうの余韻。</h2>
          <p>
            白ぶどうの華やかな香りと、きめ細かな炭酸が心地よいノンアルコールドリンクです。
            明るいラウンジに似合う、軽やかで高級感のある一杯に仕上げました。
          </p>
          <ul className="cat-detail__list">
            <li>味わい：白ぶどう、すっきりした甘み、上品な炭酸</li>
            <li>おすすめ：写真に残したくなる、華やかなカフェ時間に</li>
            <li>価格：880円</li>
          </ul>
          <a className="button button-primary" href="#reservation">このメニューで予約する</a>
        </div>
      </section>

      <section className="section access" id="access">
        <div>
          <p className="eyebrow">Access</p>
          <h2>Maison Neko Omotesando</h2>
          <p>
            表参道駅 A2出口から徒歩5分。白いファサードと真鍮のサインが目印です。
          </p>
          <a className="text-link" href="#reservation">詳しく見る</a>
        </div>
        <dl className="access-list">
          <div>
            <dt>住所</dt>
            <dd>東京都港区南青山3-12-8 Maison Neko 2F</dd>
          </div>
          <div>
            <dt>電話</dt>
            <dd>03-4321-7788</dd>
          </div>
          <div>
            <dt>お願い</dt>
            <dd>猫の体調を優先するため、抱っこはご遠慮いただいています。</dd>
          </div>
        </dl>
      </section>

      <section className="reservation" id="reservation">
        <p className="eyebrow">Reservation</p>
        <h2>静けさを保つため、ご予約制です。</h2>
        <p>少人数でのご案内により、猫にも人にも落ち着いた時間を整えています。</p>
        <a className="button button-primary" href="tel:0343217788">電話で予約する</a>
      </section>
    </main>
  );
}
