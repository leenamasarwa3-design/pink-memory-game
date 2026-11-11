const SYMBOLS_DATA = [
    {
        id: 1,
        name: "الشريط الوردي",
        info: "الشريط الوردي هو الرمز العالمي للتوعية بسرطان الثدي. يرمز إلى الأمل والتكاتف ودعم كل امرأة في رحلتها نحو الوقاية والتعافي.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 fill-current"><path d="M32 4C24 4 18 10 18 18c0 9 10 22 14 38 1 3 3 3 4 0 4-16 14-29 14-38 0-8-6-14-14-14zm0 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/></svg>`
    },
    {
        id: 2,
        name: "جهاز الماموغرام",
        info: "الماموغرام هو فحص شعاعي بسيط وآمن قادر على اكتشاف التغيرات أو الكتل الصغرى قبل ظهور أي أعراض بسنوات، مما يزيد فرص الشفاء التام بشكل كبير.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-600 fill-current"><rect x="12" y="10" width="40" height="44" rx="6" fill="#fbcfe8"/><rect x="18" y="16" width="28" height="20" rx="3" fill="#e11d48"/><circle cx="32" cy="26" r="6" fill="#ffffff" opacity="0.8"/><circle cx="32" cy="44" r="4" fill="#be123c"/></svg>`
    },
    {
        id: 3,
        name: "السماعة الطبية",
        info: "الفحص الطبي الدائم والمتابعة الدورية مع الطبيب المختص تضمن الاطمئنان المبكر وتساعد على اتخاذ الخطوات الصحية الصحيحة برعاية طبية موثوقة.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-600 fill-current"><path d="M16 8v16c0 8.8 7.2 16 16 16s16-7.2 16-16V8h-6v16c0 5.5-4.5 10-10 10s-10-4.5-10-10V8h-6z"/><circle cx="32" cy="48" r="7" fill="#be123c"/><circle cx="13" cy="8" r="4"/><circle cx="51" cy="8" r="4"/></svg>`
    },
    {
        id: 4,
        name: "يدان تحتضنان قلبًا",
        info: "الدعم النفسي والأسري والمساندة المجتمعية تلعب دورًا جوهريًا في رفع المعنويات وزيادة استجابة الجسم للعلاج والتعافي.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-rose-500 fill-current"><path d="M32 16c-4-5-12-5-16 0s-2 12 16 26c18-14 20-21 16-26s-12-5-16 0z"/><path d="M10 40c4 6 12 10 22 10s18-4 22-10c-4-2-12 2-22 2s-18-4-22-2z" fill="#fda4af"/></svg>`
    },
    {
        id: 5,
        name: "تقويم موعد الفحص",
        info: "تحديد موعد سنوي ثابت للفحص الدوري (تذكير وردي) يضمن عدم إهمال صحتكِ ويجعل الاطمئنان جزءاً من روتينكِ السنوي.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-600 fill-current"><rect x="10" y="14" width="44" height="42" rx="6" fill="#fff0f3" stroke="#e11d48" stroke-width="4"/><path d="M10 14h44v10H10z" fill="#e11d48"/><circle cx="20" cy="10" r="3" fill="#be123c"/><circle cx="44" cy="10" r="3" fill="#be123c"/><path d="M32 32l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" fill="#fb7185"/></svg>`
    },
    {
        id: 6,
        name: "عدسة الكشف المبكر",
        info: "ملاحظة أي تغيرات طفيفة في الشكل أو الملمس ومراجعة الطبيب فوراً تضمن التعامل المبكر والدقيق مع أي مستجدات صحية.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 fill-current"><circle cx="28" cy="28" r="18" fill="none" stroke="#e11d48" stroke-width="6"/><path d="M41 41l15 15" stroke="#be123c" stroke-width="7" stroke-linecap="round"/><path d="M28 20c-4.4 0-8 3.6-8 8" fill="none" stroke="#fda4af" stroke-width="3" stroke-linecap="round"/></svg>`
    },
    {
        id: 7,
        name: "زهرة الأمل",
        info: "التفاؤل والروح الإيجابية تمنح القوة والإرادة. سرطان الثدي في مراحله الأولى يحقق نسب شفاء تتجاوز 95% بإذن الله.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 fill-current"><circle cx="32" cy="32" r="8" fill="#f59e0b"/><path d="M32 8c4 8 4 14 0 16-4-2-4-8 0-16zm17 7c-2 8-6 12-11 11 2-4 6-9 11-11zm7 17c-8 4-14 4-16 0 2-4 8-4 16 0zm-7 17c-8-2-12-6-11-11 4 2 9 6 11 11zm-17 7c-4-8-4-14 0-16 4 2 4 8 0 16zm-17-7c2-8 6-12 11-11-2 4-6 9-11 11zm-7-17c8-4 14-4 16 0-2 4-8 4-16 0zm7-17c8 2 12 6 11 11-4-2-9-6-11-11z"/></svg>`
    },
    {
        id: 8,
        name: "درع الحماية",
        info: "الوعي الصحي والمعرفة الصحيحة هما خط الدفاع الأول لحماية نفسكِ وعائلتكِ من الشائعات والمفاهيم الخاطئة.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-600 fill-current"><path d="M32 6S12 12 12 28c0 16 20 28 20 28s20-12 20-28c0-16-20-22-20-22z" fill="#f43f5e"/><path d="M32 18c-3-4-8-4-11 0s-1 8 11 17c12-9 14-13 11-17s-8-4-11 0z" fill="#ffffff"/></svg>`
    },
    {
        id: 9,
        name: "النشاط البدني",
        info: "ممارسة الرياضة المعتدلة مثل المشي لمدة 30 دقيقة يومياً تساهم في تنظيم الهرمونات وتقليل خطر الإصابة بالعديد من الأمراض.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 fill-current"><circle cx="36" cy="12" r="5"/><path d="M42 22l-8 4-4-6-8 4v8h4v-5l5-2-3 10-6 10h5l4-7 5 7h5v-3l-5-7 2-8 5 2z"/></svg>`
    },
    {
        id: 10,
        name: "الغذاء الصحي",
        info: "تناول الخضراوات والفواكه والأغذية الغنية بمضادات الأكسدة يعزز مناعة الجسم ويحمي الخلايا.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-600 fill-current"><path d="M32 14c-12 0-20 10-20 24 0 12 8 18 20 18s20-6 20-18c0-14-8-24-20-24z" fill="#f43f5e"/><path d="M32 8c2 2 4 6 2 8-3-1-5-4-2-8z" fill="#10b981"/><path d="M26 24c4-2 8 2 12 0" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`
    },
    {
        id: 11,
        name: "الطبيبة المختصة",
        info: "الاستشارة الطبية من أهل الاختصاص هي المصدر الوحيد الموثوق للحصول على التشخيص الدقيق والنصائح الصحية السليمة.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-600 fill-current"><circle cx="32" cy="18" r="9" fill="#fecdd3"/><path d="M18 54c0-10 6-16 14-16s14 6 14 16v2H18v-2z" fill="#e11d48"/><path d="M28 27h8v12h-8z" fill="#ffffff"/></svg>`
    },
    {
        id: 12,
        name: "نشر الوعي",
        info: "حديثكِ مع قريباتكِ وصديقاتكِ عن أهمية الفحص ينقذ أرواحاً. كوني سبباً في تشجيع من تحبين على الاطمئنان.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 fill-current"><path d="M12 14h40v26H24L12 50V14z" fill="#fda4af"/><path d="M32 22c-2-3-6-3-8 0s-1 6 8 12c9-6 10-9 8-12s-6-3-8 0z" fill="#e11d48"/></svg>`
    },
    {
        id: 13,
        name: "أكتوبر الوردي",
        info: "شهر أكتوبر هو الشهر العالمي للتوعية بسرطان الثدي، فرصة لتجديد التزامنا بالصحة وتكثيف حملات التثقيف والفحص المبكر.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-rose-600 fill-current"><rect x="10" y="12" width="44" height="44" rx="8" fill="#fff0f3" stroke="#be123c" stroke-width="4"/><path d="M10 12h44v14H10z" fill="#be123c"/><text x="32" y="44" font-size="14" font-weight="bold" text-anchor="middle" fill="#be123c">OCT</text></svg>`
    },
    {
        id: 14,
        name: "امرأة قوية",
        info: "الإرادة والعزيمة والصبر هما وقود رحلة الشفاء. كل امرأة تواجه التحديات بشجاعة هي مصدر إلهام حقيقي لمجتمعها.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-600 fill-current"><circle cx="32" cy="16" r="8"/><path d="M20 52l4-20h16l4 20h-6l-2-12h-8l-2 12h-6z"/><path d="M16 28l6 4 4-4M48 28l-6 4-4-4" stroke="#e11d48" stroke-width="4" stroke-linecap="round"/></svg>`
    },
    {
        id: 15,
        name: "حمامة الأمل",
        info: "مع الوعي والفحص المبكر والتطور الطبي المستمر، يشرق الأمل بغدٍ أكثر صحة وأماناً لجميع النساء.",
        svg: `<svg viewBox="0 0 64 64" class="w-8 h-8 sm:w-10 sm:h-10 text-pink-400 fill-current"><path d="M12 28c8-12 22-14 32-6 4 3 12 2 14 0-2 8-8 14-16 16-8 2-16-2-20-6l-10-4z"/><path d="M28 32c-3-4-8-4-10 0s0 7 10 12c10-5 12-8 10-12s-7-4-10 0z" fill="#e11d48"/></svg>`
    }
];

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let score = 0;
let timerInterval = null;
let secondsElapsed = 0;
let isBoardLocked = false;

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function startGame() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('win-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('game-screen').classList.add('flex');
    document.getElementById('header-stats').classList.remove('hidden');

    resetGameState();
    buildBoard();
    startTimer();
}

function resetGameState() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    moves = 0;
    score = 0;
    matchedPairs = 0;
    flippedCards = [];
    isBoardLocked = false;
    updateStatsDisplay();
}

function buildBoard() {
    const gridContainer = document.getElementById('game-grid');
    gridContainer.innerHTML = '';

    const deck = [...SYMBOLS_DATA, ...SYMBOLS_DATA];
    cards = shuffle(deck);

    cards.forEach((item, index) => {
        const cardEl = document.createElement('div');
        // تم إضافة h-24 sm:h-32 لضمان ارتفاع ملموس ودائم للبطاقة، و pointer-events موحدة
        cardEl.className = 'card-container h-24 sm:h-32 cursor-pointer w-full relative select-none';
        cardEl.dataset.index = index;

        cardEl.innerHTML = `
            <div class="card-inner w-full h-full" id="card-inner-${index}">
                <div class="card-back flex flex-col items-center justify-center p-1">
                    ${item.svg}
                    <span class="text-[10px] sm:text-xs font-bold mt-1 text-center leading-tight px-1 text-pink-900 pointer-events-none">${item.name}</span>
                </div>
                <div class="card-front flex items-center justify-center">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/40 flex items-center justify-center text-white shadow-sm border border-white/40 pointer-events-none">
                        <i class="fa-solid fa-ribbon text-base sm:text-xl"></i>
                    </div>
                </div>
            </div>
        `;

        // استخدام حدث الضغط المباشر 
        cardEl.addEventListener('click', (e) => {
            e.stopPropagation();
            handleCardClick(index, item, cardEl);
        });
        
        gridContainer.appendChild(cardEl);
    });
}

function handleCardClick(index, item, cardEl) {
    if (isBoardLocked) return;
    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched-card')) return;

    cardEl.classList.add('flipped');
    flippedCards.push({ index, item, cardEl });

    if (flippedCards.length === 2) {
        moves++;
        updateStatsDisplay();
        checkMatch();
    }
}

function checkMatch() {
    isBoardLocked = true;
    const [card1, card2] = flippedCards;

    if (card1.item.id === card2.item.id) {
        setTimeout(() => {
            card1.cardEl.classList.add('matched-card');
            card2.cardEl.classList.add('matched-card');
            
            matchedPairs++;
            score += 100;
            
            updateStatsDisplay();
            showInfoModal(card1.item);

            flippedCards = [];
            isBoardLocked = false;

            if (matchedPairs === SYMBOLS_DATA.length) {
                setTimeout(triggerWinScreen, 800);
            }
        }, 400);
    } else {
        setTimeout(() => {
            card1.cardEl.classList.remove('flipped');
            card2.cardEl.classList.remove('flipped');
            flippedCards = [];
            isBoardLocked = false;
        }, 1000);
    }
}

function updateStatsDisplay() {
    document.getElementById('stat-score').innerText = score;
    document.getElementById('stat-moves').innerText = moves;
    document.getElementById('pairs-count').innerText = `${matchedPairs} / ${SYMBOLS_DATA.length}`;
    
    const progressPercent = (matchedPairs / SYMBOLS_DATA.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        secondsElapsed++;
        const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
        const secs = String(secondsElapsed % 60).padStart(2, '0');
        document.getElementById('stat-timer').innerText = `${mins}:${secs}`;
    }, 1000);
}

function showInfoModal(symbolItem) {
    document.getElementById('modal-icon-container').innerHTML = symbolItem.svg;
    document.getElementById('modal-title').innerText = symbolItem.name;
    document.getElementById('modal-body').innerText = symbolItem.info;
    document.getElementById('info-modal').classList.remove('hidden');
}

function closeInfoModal() {
    document.getElementById('info-modal').classList.add('hidden');
}

function triggerWinScreen() {
    clearInterval(timerInterval);
    
    let bonusScore = 0;
    if (moves <= 20) bonusScore = 500;
    else if (moves <= 25) bonusScore = 300;
    else if (moves <= 30) bonusScore = 150;

    const finalTotalScore = score + bonusScore;

    const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const secs = String(secondsElapsed % 60).padStart(2, '0');
    const timeString = `${mins}:${secs}`;

    document.getElementById('final-score').innerText = finalTotalScore;
    document.getElementById('final-time').innerText = timeString;
    document.getElementById('final-moves').innerText = moves;

    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('win-screen').classList.remove('hidden');

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#f43f5e', '#fb7185', '#fda4af', '#f59e0b', '#ffffff']
        });
    }
}

function shareResult() {
    const timeText = document.getElementById('final-time').innerText;
    const movesText = document.getElementById('final-moves').innerText;
    const scoreText = document.getElementById('final-score').innerText;

    const shareMessage = `أنهيتُ تحدي الذاكرة الوردية 🎀 بنتيجة ${scoreText} نقطة، خلال ${timeText} و ${movesText} محاولة وأصبحتُ سفيرة للوعي!\nانضمي إليّ في نشر الوعي بأهمية الكشف المبكر عن سرطان الثدي 🌸`;

    if (navigator.share) {
        navigator.share({
            title: 'الذاكرة الوردية 🎀',
            text: shareMessage,
            url: window.location.href
        }).catch(() => {});
    } else {
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage + '\n' + window.location.href)}`;
        window.open(whatsappUrl, '_blank');
    }
}

function restartGame() {
    startGame();
}

function restartGameConfirm() {
    if (matchedPairs > 0 && matchedPairs < SYMBOLS_DATA.length) {
        if (!confirm('هل ترغبين في إعادة بدء الجولة من جديد؟')) return;
    }
    startGame();
}

function showStartScreen() {
    clearInterval(timerInterval);
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('win-screen').classList.add('hidden');
    document.getElementById('header-stats').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}