(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = "is-active";
  const navLen = $nav.length;

  //初期化
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  // クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();

    // クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    // 対象外のnav, content全て一旦リセットする
    let navIndex = 0;
    while (navIndex < navLen) {
      $content[navIndex].style.display = "none";
      $nav[navIndex].classList.remove(ACTIVE_CLASS);
      navIndex++;
    }

    // 対象のコンテンツをアクティブ化する
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $nav[targetVal].classList.add(ACTIVE_CLASS);
    console.log("$nav[targetVal].classList", $nav[targetVal].classList);
  };

  // 全navに対して関数を適応・発火
  let navIndex = 0;
  while (navIndex < navLen) {
    $nav[navIndex].addEventListener("click", (e) => handleClick(e));
    navIndex++;
  }

  // ＊＊＊＊＊＊＊＊＊＊＊＊

  class Accordion {
    // 初期化
    constructor(obj) {
      console.log("obj", obj.hookName);

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }
    // クリックしたら実行される処理
    clickHandler = (e) => {
      e.preventDefault();

      const $target = e.currentTarget;
      const $contents = $target.nextElementSibling;

      if ($contents.style.display === "block") {
        $contents.style.display = "none";
      } else {
        $contents.style.display = "block";
      }
    };
  }

  const fuckingAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "p",
  });
  const dummyAccordion = new Accordion({
    hookName: "#js-accordion",
    tagName: "dd",
  });
  const miniAccordion = new Accordion({
    hookName: "#js-faq2",
    tagName: "dt",
  });
  const mini3Accordion = new Accordion({
    hookName: "#js-faq3",
    tagName: "dl",
  });
})();
