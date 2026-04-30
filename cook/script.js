//ДАННЫЕ РЕЦЕПТОВ
const recipes = [
    //ЗАВТРАК
    { id: 1, 
    name: "Лепешка Роти с начинкой", 
    category: "завтрак", 
    time: 10, 
    ingredientsShort: "лепешка роти, яйца, крабовые палочки", 
    ingredientsFull: ["1 яйцо", "Лепешка Роти", "2 помидора", "200 г крабовых палочек", "200 г творожного сыра", "Соль, перец по вкусу"], 
    steps: "Крабовые палочки размять вилкой в чашке. К ним добавить мелко нарезанные томаты, яйцо и творожный сыр." +
    " Солим, перчим и хорошенько все разминаем. Далее эту массу выкладываем на лепешку роти и отправляем лепешку"+ 
    " с начинкой в печь на 10 минут на 180 °C (время приготовления может меняться в зависимости от мощности вашей печи).", 
    image: "images/roti.jpg", 
    video: "videos/roti.mp4" },
    
    { id: 2, 
    name: "Сырники с начинкой", 
    category: "завтрак", 
    time: 20, 
    ingredientsShort: "творог, желток, мука, мед", 
    ingredientsFull: ["250 г пластового творога", "1 желток", "2 ст.л муки", "2 ч.л меда", "100-150 г вишни", "3 ч.л сахара", "1 ч.л муки"], 
    steps: "1. Ягоду выложить на сковородку, добавить сахар. Довести до кипения."+ 
    " Включить средний огонь и томить 5 минут, после чего добавить муку. Хорошо перемешать. Держать массу на плите до загустения."+
    "\n2. Выложить творог в миску и промять вилкой. Добавить желток и мед. Перемешать. Добавить муку. Перемешать."+
    "\n3. Выложить тесто на присыпанный мукой стол, размять его руками. Отрывая по кусочку теста формировать сырники, добавляя в середину ягоду."+
    "\n4. На разогретую сковородку с капелькой масла выложить сырники. Жарить до золотисто-коричневой корки с каждой стороны. Сырники готовы!"+
    "\nДля сервировки можно посыпать сырники сахарной пудрой и добавить ягоды в тарелку.", 
    image: "images/syrniki.jpg", 
    video: "videos/syrniki.mp4" },
    
    { id: 11, 
    name: "Творожный хачапури", 
    category: "завтрак", 
    time: 30, 
    ingredientsShort: "творог, яйцо, мука, сыр", 
    ingredientsFull: ["150 г мелкозернистого творога", "1 яйцо", "2-3 ст.л муки", "1/2 ч.л разрыхлителя", "соль", "60 г сыр сулугуни"], 
    steps: "1. Отделите белки от желтков. Желтки накройте плёнкой, чтобы не заветрились и не повредились при выкладке в хачапури."+
    "\n2. Смешайте творог, белки, муку, разрыхлитель и соль. Хорошо перемешать."+
    "\n3. Сформируйте лодочки влажными руками и ложкой. Выпекайте 15–25 минут при 180 °C. Затем добавьте в центр сыр и желток, и запеките ещё 5 минут."+
    " Если хотите жидкий желток — сначала запеките только с сыром, а желток добавьте в конце и допеките 1 минуту.",
    image: "images/hachapyri.jpg", 
    video: "videos/hachapyri.mp4" },

    { id: 12, 
    name: "Хрустящий лаваш с курицей", 
    category: "завтрак", 
    time: 15, 
    ingredientsShort: "куриное филе, лаваш", 
    ingredientsFull: ["Лаваш", "150 г куриного филе", "1 ст.л сметаны", "1/2 ст.л майонеза", "1 помидор", "яйцо", "150 г сыра", "соль", "100 г панировачных сухарей"], 
    steps: "Куриное филе отварить, измельчить, смешать с помидорами, майонезом и сметаной, посолить по вкусу."+
    " Выложить начинку на лаваш, добавить сыр и свернуть. Взбить яйцо и немного посолить. Обмакнуть лаваш сначало в яйцо, затем в сухари и посыпать сыром."+
    " Запекать при 180 °C, 10-15 минут.", 
    image: "images/lavah.jpg", 
    video: "videos/lavah.mp4" },

    { id: 13, 
    name: "Морковная лепешка с сырной корочкой", 
    category: "завтрак", 
    time: 15, 
    ingredientsShort: "морковь, сыр, яйцо", 
    ingredientsFull: ["средняя морковка (100-130 г)", "100 г сыра", "1 яйцо", "соль", "1 ст.л сметаны", "горсть рукколы", "2 помидорки черри"], 
    steps: "Натереть морковь и сыр. Добавить к ним яйцо и соль, перемешать. На разогретую сковороду с капелькой масла выложить смесь и сформировать лепешку."+
    " Жарить на среднем огне. Намазать на лепешку сметану, выложить рукколу и помидоры.", 
    image: "images/morkov.jpg", 
    video: "videos/morkov.mp4" },

    //ОБЕД
    { id: 3, 
    name: "Ленивая лазанья", 
    category: "обед", 
    time: 40, 
    ingredientsShort: "фарш, сыр, листы лазанья", 
    ingredientsFull: ["400 г фарша", "1 помидор", "2 ст.л томатной пасты", "Морковь", "Лук", "1 зубчик чеснока", "100 г сливок", "100 г воды", "200 г сыра", "Пучок зеленого лука", "Листы лазанья", "Перец, соль по вкусу"], 
    steps: "Обжарить фарш, пока он не станет светлым. Добавить томатную пасту, соль и перец по вкусу, мелко нарезанные морковку, лук,"+
    " помидоры, все хорошо перемешать. Добавить воду, чеснок, сливки, перемешать. В полученную смесь вставить листы лазанья, закрыть крышкой и тушить"+
    " до приготовления листов. Добавить сыр и зеленый лук.", 
    image: "images/lazania.jpg", 
    video: "videos/lazania.mp4" },

    { id: 4, 
    name: "Макароны по-флотски", category: "обед", 
    time: 30, 
    ingredientsShort: "макароны, фарш, лук", 
    ingredientsFull: ["200 г макарон", "250 г фарша", "2 луковицы", "Соль, приправа по вкусу", "2 моркови", "100 г томатной пасты", "1 кубик бульона", "600 г кипятка", "Зелень"], 
    steps: "Обжарить фарш на сковороде. Добавляем мелко нарезанный лук и натертую морковь. Обжариваем и добавляем томатную пасту, неваренные макароны."+
    " Разбавляем кубик бульона в воде и добавляем к макаронам. Добавляем соль и приправы по вкусу, перемешать. Томить под крышкой 10 минут."+
    " Добавить зелень, перемешать. Выключить плиту и оставить настояться макароны на 10 минут.", 
    image: "images/navy_pasta.jfif", 
    video: "videos/navy_pasta.mp4" },
    
    
    //УЖИН 
    { id: 5, 
    name: "Куриные рулетики с картошкой", 
    category: "ужин", 
    time: 50, 
    ingredientsShort: "курица, сыр, картошка", 
    ingredientsFull: ["400 г куриного филе", "200 г сыра", "180 г творожного сыра", "Зелень", "Специи по вкусу", "4 картофилины"], 
    steps: "1. Отварить картошку, сделать толченку."+
    "\n2. Отбить куриное филе и обсыпать специями. С одно стороны намазать творожным сыром, завернуть в рулетик."+
    "\n3. Выложить рулетики в форму для запекания. Смешать творожный сыр с зеленью и намазать рулетики. Сверху посыпать сыром."+
    "\n4. Поставить рулетики в духовку 180 °C на 30 минут.", 
    image: "images/chikenrolls.jpg", 
    video: "videos/chikenrolls.mp4" },

    { id: 6, 
    name: "Фрикасе с рисом", 
    category: "ужин", 
    time: 35, 
    ingredientsShort: "курица, сливки, шампиньоны, рис", 
    ingredientsFull: ["400 г куриного филе", "1 красный лук", "2 зубчика чеснока", "250 г шампиньонов", "200 мл сливок", "Горсть горошка", "Небольшая морковка", "2 ст.л муки", "Рис", "Соль, перец по вкусу"], 
    steps: "1. Разрезать курица на небольшие кубики, посолить. Добавить муку и хорошо перемешать. Выложить курицу в разогретую сковородку,"+
    " жарить до румяной корочки. Переложить курицу в чашку."+
    "\n2. В ту же сковородку выложить мелконарубленный лук, чеснок и шампиньоны. Тушить под крышкой 10 минут, после чего добавить сливки,"+
    " морковку мелким кубиком, горошек и молотый перец по вкусу."+
    "\n3. В соус выложить курицу. Тушить 5 минут."+
    "\n4. Отварить рис."+
    " Выложить рис и фрикасе в тарелку. Блюдо готово!", 
    image: "images/fricassee.jpg", 
    video: "videos/fricassee.mp4" },
    
    //ДЕСЕРТЫ 
    { id: 7, 
    name: "Мороженое", 
    category: "десерты", 
    time: 10, 
    ingredientsShort: "сливки, сгущенка", 
    ingredientsFull: ["750 мл 33% сливок", "360 г сгущенки", "200 г бананов", "200 г малины", "80 г молочного шоколада"], 
    steps: "1. Взбить сливки."+
    "\n2. Добавить сгущенку."+
    "\n3. Измельчить добавки и перемешать с основой."+
    "\n4. Разложить по контейнерам и убрать на 5 часов в морозилку, периодически помешивая.", 
    image: "images/ice.jpg", 
    video: "videos/ice.mp4" },

    { id: 8, 
    name: "Панакота", 
    category: "десерты", 
    time: 15, 
    ingredientsShort: "малина, желатин, ряженка", 
    ingredientsFull: ["20 г желатина", "100 мл молока", "400 мл ряженки", "Сахар по вкусу", "Горсть малины"], 
    steps: "1. Желатин высыпать в чашечку, добавить холодное молоко. Даем набухнуть"+
    "\n2. Набухшие желатин растопить в микроволновой печи."+
    "\n3. Ряженку перемешать с сахаром, желатином и ягодами."+
    "\n4. Разлить смесь по формам. Поставить в холодильник до полного остывания.", 
    image: "images/panacota.jfif", 
    video: "videos/panacota.mp4" },
    
    //ЗАКУСКИ 
    { id: 9, 
    name: "Эноки с беконом", 
    category: "закуски", 
    time: 10, 
    ingredientsShort: "грибы эноки, бекон", 
    ingredientsFull: ["300 г грибов эноки", "400 г бекона"], 
    steps: "Разделить эноки на небольшие пучки и обернуть в бекон. Выложить получившиеся рулетики на разогретую сковородку."+
    " Обжарить до золотой корочки.", 
    image: "images/enoki.jpg", 
    video: "videos/enoki.mp4" },

    { id: 10, 
    name: "Брускета с желтками", 
    category: "закуски", 
    time: 10, 
    ingredientsShort: "батон, желтки, масло", 
    ingredientsFull: ["Батон", "5 желтков", "200 мл оливкового масла", "100 г пармизана", "Перец горошком", "Цедра половины лимона", "Веточка розмарина"], 
    steps: "В миску до запекания налить масло, в него добавть 4-5 горошин перца, цедру лимона, розмарин."+
    " Аккуратно извлечь желток из яйца и тоже добавить в масло. Накрыть фольгой миску и отправить в разогретую духовку до 200 °C на 5 минут."+
    " Разрезать батон и поджарить кусочки на сковороде до золотой корочки. Намазать желток по кусочку батона. Сверху натереть на мелкой терке пармизан.", 
    image: "images/bruschetta.jpg", 
    video: "videos/bruschetta.mp4" }
];

// ---- Логика работы ----
let currentCategory = "all";
let currentSearchQuery = "";

function renderRecipes() {
    let filtered = [...recipes];
    
    // Фильтр по категории (если не all)
    if (currentCategory !== "all") {
        filtered = filtered.filter(r => r.category === currentCategory);
    }
    
    // Фильтр по поиску (по продукту)
    if (currentSearchQuery.trim() !== "") {
        const query = currentSearchQuery.trim().toLowerCase();
        filtered = filtered.filter(r => {
            const ingredientsFullText = r.ingredientsFull.join(" ").toLowerCase();
            const ingredientsShortText = r.ingredientsShort.toLowerCase();
            return ingredientsFullText.includes(query) || ingredientsShortText.includes(query);
        });
    }
    
    const container = document.getElementById("recipesContainer");
    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center; width:100%; padding:3rem;">🍽️ Рецептов не найдено. Попробуйте изменить поиск или категорию.</p>`;
        return;
    }
    
    container.innerHTML = filtered.map(recipe => `
        <div class="recipe-card" data-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Нет+фото'">
            <div class="recipe-card-content">
                <h3>${recipe.name}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} мин</span>
                    <span>📌 ${recipe.category}</span>
                </div>
                <div class="ingredients-short">📋 ${recipe.ingredientsShort}</div>
            </div>
        </div>
    `).join("");
    
    // Добавить обработчики клика на карточки
    document.querySelectorAll(".recipe-card").forEach(card => {
        card.addEventListener("click", (e) => {
            const id = parseInt(card.dataset.id);
            const recipe = recipes.find(r => r.id === id);
            if (recipe) openModal(recipe);
        });
    });
}

function openModal(recipe) {
    const modal = document.getElementById("recipeModal");
    const modalContent = document.getElementById("modalContent");
    
    const hasVideo = recipe.video && recipe.video !== "";
    const videoHtml = hasVideo ? `
            <video controls src="${recipe.video}" class="modal-video">Ваш браузер не поддерживает видео.</video>
    ` : `<p>🎬 Видео-рецепт временно отсутствует</p>`;
    
    modalContent.innerHTML = `
        <h2 class="modal-title">${recipe.name}</h2>
        <div class="recipe-meta modal-meta">⏱️ ${recipe.time} мин | 🍽️ ${recipe.category}</div>
        <div class="full-ingredients">
            <strong>Ингредиенты:</strong>
            <ul>${recipe.ingredientsFull.map(i => `<li>${i}</li>`).join("")}</ul>
        </div>
        <div class="steps">
            <strong>Пошаговый рецепт:</strong>
            <p>${recipe.steps.replace(/\n/g, '<br>')}</p>
        </div>
        ${videoHtml}
    `;
    modal.style.display = "flex";
}

// Закрытие модального окна
document.querySelector(".close-modal").addEventListener("click", () => {
    document.getElementById("recipeModal").style.display = "none";
});
window.addEventListener("click", (e) => {
    const modal = document.getElementById("recipeModal");
    if (e.target === modal) modal.style.display = "none";
});

// Навигация
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        renderRecipes();
    });
});

// Поиск
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value;
    renderRecipes();
});

// Первоначальная отрисовка
renderRecipes();