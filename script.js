// この行を追加
console.log("JavaScriptファイルが読み込まれました！");

document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 要素が画面内に入ったら
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 一度表示したら、監視を停止する
                observer.unobserve(entry.target);
            }
        });
    });

    // 各要素の監視を開始
    targets.forEach(target => {
        observer.observe(target);
    });

        // --- ここからタイピングアニメーションのコード ---
    new Typed('.job-title', {
        strings: ['情報系学生', 'SE志望', '大学院進学予定'], // 表示させたい文字列を配列で
        typeSpeed: 70,  // タイピングの速さ
        backSpeed: 40,  // バックペースの速さ
        backDelay: 1500, // タイピングしてから消すまでの待ち時間
        loop: true      // ループさせる
    });

    // --- ここからダークモードのコード ---
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    // ページ読み込み時に、保存されたテーマ設定を反映する
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = '☀️';
    }

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // 現在のテーマをlocalStorageに保存し、ボタンのアイコンを切り替える
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleButton.textContent = '🌙';
        }
    });
});