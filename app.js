// =====================================================================
// Tout le fichier est enfermé dans cette fonction pour que ses variables
// (let/const) ne soient jamais dans la portée globale. Si un outil de
// live-reload réinjecte ce script sans recharger toute la page, ça ne
// provoquera plus d'erreur "already been declared".
// =====================================================================
(function () {

  const country_list = [
  { code: "AF", name: "Afghanistan", flag: "🇦🇫" },
  { code: "ZA", name: "Afrique du Sud", flag: "🇿🇦" },
  { code: "AL", name: "Albanie", flag: "🇦🇱" },
  { code: "DZ", name: "Algérie", flag: "🇩🇿" },
  { code: "DE", name: "Allemagne", flag: "🇩🇪" },
  { code: "AD", name: "Andorre", flag: "🇦🇩" },
  { code: "AO", name: "Angola", flag: "🇦🇴" },
  { code: "SA", name: "Arabie saoudite", flag: "🇸🇦" },
  { code: "AR", name: "Argentine", flag: "🇦🇷" },
  { code: "AM", name: "Arménie", flag: "🇦🇲" },
  { code: "AU", name: "Australie", flag: "🇦🇺" },
  { code: "AT", name: "Autriche", flag: "🇦🇹" },
  { code: "AZE", name: "Azerbaïdjan", flag: "🇦🇿" },
  { code: "BE", name: "Belgique", flag: "🇧🇪" },
  { code: "BJ", name: "Bénin", flag: "🇧🇯" },
  { code: "BR", name: "Brésil", flag: "🇧🇷" },
  { code: "BG", name: "Bulgarie", flag: "🇧🇬" },
  { code: "BF", name: "Burkina Faso", flag: "🇧🇫" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "CL", name: "Chili", flag: "🇨🇱" },
  { code: "CN", name: "Chine", flag: "🇨🇳" },
  { code: "CY", name: "Chypre", flag: "🇨🇾" },
  { code: "CO", name: "Colombie", flag: "🇨🇴" },
  { code: "CG", name: "Congo", flag: "🇨🇬" },
  { code: "KR", name: "Corée du Sud", flag: "🇰🇷" },
  { code: "CI", name: "Côte d'Ivoire", flag: "🇨🇮" },
  { code: "HR", name: "Croatie", flag: "🇭🇷" },
  { code: "DK", name: "Danemark", flag: "🇩🇰" },
  { code: "EG", name: "Égypte", flag: "🇪🇬" },
  { code: "AE", name: "Émirats arabes unis", flag: "🇦🇪" },
  { code: "ES", name: "Espagne", flag: "🇪🇸" },
  { code: "EE", name: "Estonie", flag: "🇪🇪" },
  { code: "US", name: "États-Unis", flag: "🇺🇸" },
  { code: "FI", name: "Finlande", flag: "🇫🇮" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "GA", name: "Gabon", flag: "🇬🇦" },
  { code: "GR", name: "Grèce", flag: "🇬🇷" },
  { code: "HU", name: "Hongrie", flag: "🇭🇺" },
  { code: "IN", name: "Inde", flag: "🇮🇳" },
  { code: "IE", name: "Irlande", flag: "🇮🇪" },
  { code: "IS", name: "Islande", flag: "🇮🇸" },
  { code: "IL", name: "Israël", flag: "🇮🇱" },
  { code: "IT", name: "Italie", flag: "🇮🇹" },
  { code: "JP", name: "Japon", flag: "🇯🇵" },
  { code: "LU", name: "Luxembourg", flag: "🇱🇺" },
  { code: "MA", name: "Maroc", flag: "🇲🇦" },
  { code: "MX", name: "Mexique", flag: "🇲🇽" },
  { code: "NO", name: "Norvège", flag: "🇳🇴" },
  { code: "NZ", name: "Nouvelle-Zélande", flag: "🇳🇿" },
  { code: "NL", name: "Pays-Bas", flag: "🇳🇱" },
  { code: "PL", name: "Pologne", flag: "🇵🇱" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "RO", name: "Roumanie", flag: "🇷🇴" },
  { code: "GB", name: "Royaume-Uni", flag: "🇬🇧" },
  { code: "RU", name: "Russie", flag: "🇷🇺" },
  { code: "SN", name: "Sénégal", flag: "🇸🇳" },
  { code: "SE", name: "Suède", flag: "🇸🇪" },
  { code: "CH", name: "Suisse", flag: "🇨🇭" },
  { code: "TUN", name: "Tunisie", flag: "🇹🇳" },
  { code: "TR", name: "Turquie", flag: "🇹🇷" },
  { code: "VN", name: "Viêt Nam", flag: "🇻🇳" }
];

// Aliments courants pour le sélecteur visuel d'ingrédients (étape 2 du formulaire)
const COMMON_FOODS = [
  // Légumes
  {name:"Tomate", emoji:"🍅", cat:"Légumes"}, {name:"Oignon", emoji:"🧅", cat:"Légumes"},
  {name:"Ail", emoji:"🧄", cat:"Légumes"}, {name:"Carotte", emoji:"🥕", cat:"Légumes"},
  {name:"Poivron", emoji:"🫑", cat:"Légumes"}, {name:"Pomme de terre", emoji:"🥔", cat:"Légumes"},
  {name:"Patate douce", emoji:"🍠", cat:"Légumes"}, {name:"Courgette", emoji:"🥒", cat:"Légumes"},
  {name:"Concombre", emoji:"🥒", cat:"Légumes"}, {name:"Aubergine", emoji:"🍆", cat:"Légumes"},
  {name:"Champignon", emoji:"🍄", cat:"Légumes"}, {name:"Brocoli", emoji:"🥦", cat:"Légumes"},
  {name:"Chou-fleur", emoji:"🥦", cat:"Légumes"}, {name:"Chou", emoji:"🥬", cat:"Légumes"},
  {name:"Chou rouge", emoji:"🥬", cat:"Légumes"}, {name:"Chou de Bruxelles", emoji:"🥬", cat:"Légumes"},
  {name:"Salade", emoji:"🥬", cat:"Légumes"}, {name:"Roquette", emoji:"🥬", cat:"Légumes"},
  {name:"Épinard", emoji:"🥬", cat:"Légumes"}, {name:"Blette", emoji:"🥬", cat:"Légumes"},
  {name:"Cresson", emoji:"🥬", cat:"Légumes"}, {name:"Endive", emoji:"🥬", cat:"Légumes"},
  {name:"Maïs", emoji:"🌽", cat:"Légumes"}, {name:"Petit pois", emoji:"🟢", cat:"Légumes"},
  {name:"Haricot vert", emoji:"🫛", cat:"Légumes"}, {name:"Fève", emoji:"🫘", cat:"Légumes"},
  {name:"Citrouille", emoji:"🎃", cat:"Légumes"}, {name:"Potiron", emoji:"🎃", cat:"Légumes"},
  {name:"Betterave", emoji:"🟣", cat:"Légumes"}, {name:"Radis", emoji:"🔴", cat:"Légumes"},
  {name:"Navet", emoji:"⚪", cat:"Légumes"}, {name:"Panais", emoji:"⚪", cat:"Légumes"},
  {name:"Céleri", emoji:"🥬", cat:"Légumes"}, {name:"Fenouil", emoji:"🥬", cat:"Légumes"},
  {name:"Artichaut", emoji:"🌿", cat:"Légumes"}, {name:"Asperge", emoji:"🌱", cat:"Légumes"},
  {name:"Poireau", emoji:"🥬", cat:"Légumes"}, {name:"Cornichon", emoji:"🥒", cat:"Légumes"},
  {name:"Igname", emoji:"🍠", cat:"Légumes"}, {name:"Manioc", emoji:"🍠", cat:"Légumes"},
  // Fruits
  {name:"Pomme", emoji:"🍎", cat:"Fruits"}, {name:"Poire", emoji:"🍐", cat:"Fruits"},
  {name:"Banane", emoji:"🍌", cat:"Fruits"}, {name:"Citron", emoji:"🍋", cat:"Fruits"},
  {name:"Citron vert", emoji:"🍈", cat:"Fruits"}, {name:"Orange", emoji:"🍊", cat:"Fruits"},
  {name:"Mandarine", emoji:"🍊", cat:"Fruits"}, {name:"Clémentine", emoji:"🍊", cat:"Fruits"},
  {name:"Pamplemousse", emoji:"🍊", cat:"Fruits"}, {name:"Fraise", emoji:"🍓", cat:"Fruits"},
  {name:"Framboise", emoji:"🍇", cat:"Fruits"}, {name:"Myrtille", emoji:"🫐", cat:"Fruits"},
  {name:"Groseille", emoji:"🍇", cat:"Fruits"}, {name:"Cassis", emoji:"🍇", cat:"Fruits"},
  {name:"Raisin", emoji:"🍇", cat:"Fruits"}, {name:"Ananas", emoji:"🍍", cat:"Fruits"},
  {name:"Pêche", emoji:"🍑", cat:"Fruits"}, {name:"Nectarine", emoji:"🍑", cat:"Fruits"},
  {name:"Abricot", emoji:"🍑", cat:"Fruits"}, {name:"Prune", emoji:"🍑", cat:"Fruits"},
  {name:"Mirabelle", emoji:"🍑", cat:"Fruits"}, {name:"Avocat", emoji:"🥑", cat:"Fruits"},
  {name:"Mangue", emoji:"🥭", cat:"Fruits"}, {name:"Papaye", emoji:"🥭", cat:"Fruits"},
  {name:"Cerise", emoji:"🍒", cat:"Fruits"}, {name:"Melon", emoji:"🍈", cat:"Fruits"},
  {name:"Pastèque", emoji:"🍉", cat:"Fruits"}, {name:"Kiwi", emoji:"🥝", cat:"Fruits"},
  {name:"Noix de coco", emoji:"🥥", cat:"Fruits"}, {name:"Figue", emoji:"🟣", cat:"Fruits"},
  {name:"Datte", emoji:"🟤", cat:"Fruits"}, {name:"Grenade", emoji:"🔴", cat:"Fruits"},
  {name:"Litchi", emoji:"⚪", cat:"Fruits"}, {name:"Fruit de la passion", emoji:"🟡", cat:"Fruits"},
  {name:"Rhubarbe", emoji:"🌱", cat:"Fruits"}, {name:"Kaki", emoji:"🟠", cat:"Fruits"},
  // Viandes & Poissons
  {name:"Poulet", emoji:"🍗", cat:"Viandes & Poissons"}, {name:"Dinde", emoji:"🦃", cat:"Viandes & Poissons"},
  {name:"Canard", emoji:"🦆", cat:"Viandes & Poissons"}, {name:"Lapin", emoji:"🐇", cat:"Viandes & Poissons"},
  {name:"Bœuf haché", emoji:"🥩", cat:"Viandes & Poissons"}, {name:"Steak", emoji:"🥩", cat:"Viandes & Poissons"},
  {name:"Rôti de bœuf", emoji:"🥩", cat:"Viandes & Poissons"}, {name:"Agneau", emoji:"🍖", cat:"Viandes & Poissons"},
  {name:"Porc", emoji:"🥓", cat:"Viandes & Poissons"}, {name:"Bacon", emoji:"🥓", cat:"Viandes & Poissons"},
  {name:"Jambon", emoji:"🍖", cat:"Viandes & Poissons"}, {name:"Lardons", emoji:"🥓", cat:"Viandes & Poissons"},
  {name:"Saucisse", emoji:"🌭", cat:"Viandes & Poissons"}, {name:"Chorizo", emoji:"🌭", cat:"Viandes & Poissons"},
  {name:"Merguez", emoji:"🌭", cat:"Viandes & Poissons"}, {name:"Boudin", emoji:"🌭", cat:"Viandes & Poissons"},
  {name:"Foie gras", emoji:"🍖", cat:"Viandes & Poissons"}, {name:"Poisson blanc", emoji:"🐟", cat:"Viandes & Poissons"},
  {name:"Saumon", emoji:"🐟", cat:"Viandes & Poissons"}, {name:"Thon", emoji:"🐟", cat:"Viandes & Poissons"},
  {name:"Cabillaud", emoji:"🐟", cat:"Viandes & Poissons"}, {name:"Truite", emoji:"🐟", cat:"Viandes & Poissons"},
  {name:"Sardine", emoji:"🐟", cat:"Viandes & Poissons"}, {name:"Maquereau", emoji:"🐟", cat:"Viandes & Poissons"},
  {name:"Anchois", emoji:"🐟", cat:"Viandes & Poissons"}, {name:"Dorade", emoji:"🐟", cat:"Viandes & Poissons"},
  {name:"Crevette", emoji:"🍤", cat:"Viandes & Poissons"}, {name:"Calamar", emoji:"🦑", cat:"Viandes & Poissons"},
  {name:"Poulpe", emoji:"🐙", cat:"Viandes & Poissons"}, {name:"Moule", emoji:"🦪", cat:"Viandes & Poissons"},
  {name:"Huître", emoji:"🦪", cat:"Viandes & Poissons"}, {name:"Crabe", emoji:"🦀", cat:"Viandes & Poissons"},
  {name:"Homard", emoji:"🦞", cat:"Viandes & Poissons"},
  // Laitier & Œufs
  {name:"Œuf", emoji:"🥚", cat:"Laitier & Œufs"}, {name:"Blanc d'œuf", emoji:"🥚", cat:"Laitier & Œufs"},
  {name:"Jaune d'œuf", emoji:"🥚", cat:"Laitier & Œufs"}, {name:"Lait", emoji:"🥛", cat:"Laitier & Œufs"},
  {name:"Lait de coco", emoji:"🥥", cat:"Laitier & Œufs"}, {name:"Lait d'amande", emoji:"🥛", cat:"Laitier & Œufs"},
  {name:"Beurre", emoji:"🧈", cat:"Laitier & Œufs"}, {name:"Crème fraîche", emoji:"🥛", cat:"Laitier & Œufs"},
  {name:"Crème liquide", emoji:"🥛", cat:"Laitier & Œufs"}, {name:"Fromage blanc", emoji:"🥛", cat:"Laitier & Œufs"},
  {name:"Petit-suisse", emoji:"🥛", cat:"Laitier & Œufs"}, {name:"Yaourt", emoji:"🥛", cat:"Laitier & Œufs"},
  {name:"Fromage", emoji:"🧀", cat:"Laitier & Œufs"}, {name:"Mozzarella", emoji:"🧀", cat:"Laitier & Œufs"},
  {name:"Parmesan", emoji:"🧀", cat:"Laitier & Œufs"}, {name:"Comté", emoji:"🧀", cat:"Laitier & Œufs"},
  {name:"Gruyère", emoji:"🧀", cat:"Laitier & Œufs"}, {name:"Cheddar", emoji:"🧀", cat:"Laitier & Œufs"},
  {name:"Chèvre", emoji:"🧀", cat:"Laitier & Œufs"}, {name:"Feta", emoji:"🧀", cat:"Laitier & Œufs"},
  {name:"Ricotta", emoji:"🧀", cat:"Laitier & Œufs"}, {name:"Mascarpone", emoji:"🧀", cat:"Laitier & Œufs"},
  {name:"Roquefort", emoji:"🧀", cat:"Laitier & Œufs"}, {name:"Brie", emoji:"🧀", cat:"Laitier & Œufs"},
  {name:"Camembert", emoji:"🧀", cat:"Laitier & Œufs"},
  // Céréales & Féculents
  {name:"Farine", emoji:"🌾", cat:"Céréales & Féculents"}, {name:"Riz", emoji:"🍚", cat:"Céréales & Féculents"},
  {name:"Pâtes", emoji:"🍝", cat:"Céréales & Féculents"}, {name:"Nouilles", emoji:"🍜", cat:"Céréales & Féculents"},
  {name:"Vermicelles", emoji:"🍜", cat:"Céréales & Féculents"}, {name:"Pain", emoji:"🍞", cat:"Céréales & Féculents"},
  {name:"Tortilla", emoji:"🫓", cat:"Céréales & Féculents"}, {name:"Avoine", emoji:"🌾", cat:"Céréales & Féculents"},
  {name:"Flocons d'avoine", emoji:"🌾", cat:"Céréales & Féculents"}, {name:"Quinoa", emoji:"🌾", cat:"Céréales & Féculents"},
  {name:"Semoule", emoji:"🌾", cat:"Céréales & Féculents"}, {name:"Couscous", emoji:"🌾", cat:"Céréales & Féculents"},
  {name:"Boulgour", emoji:"🌾", cat:"Céréales & Féculents"}, {name:"Sarrasin", emoji:"🌾", cat:"Céréales & Féculents"},
  {name:"Orge", emoji:"🌾", cat:"Céréales & Féculents"}, {name:"Polenta", emoji:"🌽", cat:"Céréales & Féculents"},
  {name:"Gnocchi", emoji:"🥔", cat:"Céréales & Féculents"}, {name:"Chapelure", emoji:"🍞", cat:"Céréales & Féculents"},
  {name:"Lentilles", emoji:"🟤", cat:"Céréales & Féculents"}, {name:"Pois cassés", emoji:"🟢", cat:"Céréales & Féculents"},
  {name:"Pois chiches", emoji:"🟡", cat:"Céréales & Féculents"}, {name:"Haricots rouges", emoji:"🔴", cat:"Céréales & Féculents"},
  {name:"Haricots blancs", emoji:"⚪", cat:"Céréales & Féculents"},
  // Épices & Condiments
  {name:"Sel", emoji:"🧂", cat:"Épices & Condiments"}, {name:"Poivre", emoji:"⚫", cat:"Épices & Condiments"},
  {name:"Piment", emoji:"🌶️", cat:"Épices & Condiments"}, {name:"Paprika", emoji:"🌶️", cat:"Épices & Condiments"},
  {name:"Curry", emoji:"🍛", cat:"Épices & Condiments"}, {name:"Curcuma", emoji:"🟡", cat:"Épices & Condiments"},
  {name:"Cumin", emoji:"🌿", cat:"Épices & Condiments"}, {name:"Cannelle", emoji:"🟤", cat:"Épices & Condiments"},
  {name:"Muscade", emoji:"🌰", cat:"Épices & Condiments"}, {name:"Cardamome", emoji:"🌿", cat:"Épices & Condiments"},
  {name:"Safran", emoji:"🌼", cat:"Épices & Condiments"}, {name:"Gingembre", emoji:"🫚", cat:"Épices & Condiments"},
  {name:"Ail en poudre", emoji:"🧄", cat:"Épices & Condiments"}, {name:"Basilic", emoji:"🌿", cat:"Épices & Condiments"},
  {name:"Persil", emoji:"🌿", cat:"Épices & Condiments"}, {name:"Thym", emoji:"🌿", cat:"Épices & Condiments"},
  {name:"Romarin", emoji:"🌿", cat:"Épices & Condiments"}, {name:"Laurier", emoji:"🌿", cat:"Épices & Condiments"},
  {name:"Origan", emoji:"🌿", cat:"Épices & Condiments"}, {name:"Ciboulette", emoji:"🌿", cat:"Épices & Condiments"},
  {name:"Coriandre", emoji:"🌿", cat:"Épices & Condiments"}, {name:"Menthe", emoji:"🌿", cat:"Épices & Condiments"},
  {name:"Huile d'olive", emoji:"🫒", cat:"Épices & Condiments"}, {name:"Huile de tournesol", emoji:"🫙", cat:"Épices & Condiments"},
  {name:"Vinaigre", emoji:"🍶", cat:"Épices & Condiments"}, {name:"Moutarde", emoji:"🟡", cat:"Épices & Condiments"},
  {name:"Mayonnaise", emoji:"🥫", cat:"Épices & Condiments"}, {name:"Ketchup", emoji:"🥫", cat:"Épices & Condiments"},
  {name:"Sauce soja", emoji:"🍶", cat:"Épices & Condiments"}, {name:"Sauce tomate", emoji:"🥫", cat:"Épices & Condiments"},
  {name:"Tabasco", emoji:"🌶️", cat:"Épices & Condiments"}, {name:"Miel", emoji:"🍯", cat:"Épices & Condiments"},
  {name:"Sirop d'érable", emoji:"🍁", cat:"Épices & Condiments"}, {name:"Levure boulangère", emoji:"🟤", cat:"Épices & Condiments"},
  {name:"Bicarbonate", emoji:"⚪", cat:"Épices & Condiments"},
  // Fruits secs & Oléagineux
  {name:"Amande", emoji:"🌰", cat:"Fruits secs & Oléagineux"}, {name:"Noix", emoji:"🌰", cat:"Fruits secs & Oléagineux"},
  {name:"Noisette", emoji:"🌰", cat:"Fruits secs & Oléagineux"}, {name:"Cacahuète", emoji:"🥜", cat:"Fruits secs & Oléagineux"},
  {name:"Pistache", emoji:"🌰", cat:"Fruits secs & Oléagineux"}, {name:"Noix de cajou", emoji:"🌰", cat:"Fruits secs & Oléagineux"},
  {name:"Noix de pécan", emoji:"🌰", cat:"Fruits secs & Oléagineux"}, {name:"Pignon de pin", emoji:"🌰", cat:"Fruits secs & Oléagineux"},
  {name:"Graines de tournesol", emoji:"🌻", cat:"Fruits secs & Oléagineux"}, {name:"Graines de sésame", emoji:"⚪", cat:"Fruits secs & Oléagineux"},
  {name:"Graines de chia", emoji:"⚫", cat:"Fruits secs & Oléagineux"}, {name:"Graines de lin", emoji:"🟤", cat:"Fruits secs & Oléagineux"},
  {name:"Raisin sec", emoji:"🍇", cat:"Fruits secs & Oléagineux"}, {name:"Abricot sec", emoji:"🍑", cat:"Fruits secs & Oléagineux"},
  {name:"Pruneau", emoji:"🟣", cat:"Fruits secs & Oléagineux"},
  // Sucré & Pâtisserie
  {name:"Sucre", emoji:"⬜", cat:"Sucré & Pâtisserie"}, {name:"Sucre roux", emoji:"🟤", cat:"Sucré & Pâtisserie"},
  {name:"Sucre glace", emoji:"⬜", cat:"Sucré & Pâtisserie"}, {name:"Sucre vanillé", emoji:"⬜", cat:"Sucré & Pâtisserie"},
  {name:"Vanille", emoji:"🌿", cat:"Sucré & Pâtisserie"}, {name:"Chocolat noir", emoji:"🍫", cat:"Sucré & Pâtisserie"},
  {name:"Chocolat au lait", emoji:"🍫", cat:"Sucré & Pâtisserie"}, {name:"Chocolat blanc", emoji:"🍫", cat:"Sucré & Pâtisserie"},
  {name:"Pépites de chocolat", emoji:"🍫", cat:"Sucré & Pâtisserie"}, {name:"Cacao en poudre", emoji:"🍫", cat:"Sucré & Pâtisserie"},
  {name:"Pâte à tartiner", emoji:"🍫", cat:"Sucré & Pâtisserie"}, {name:"Confiture", emoji:"🍓", cat:"Sucré & Pâtisserie"},
  {name:"Caramel", emoji:"🍮", cat:"Sucré & Pâtisserie"}, {name:"Gélatine", emoji:"⬜", cat:"Sucré & Pâtisserie"},
  {name:"Agar-agar", emoji:"⬜", cat:"Sucré & Pâtisserie"}, {name:"Levure chimique", emoji:"⬜", cat:"Sucré & Pâtisserie"},
  {name:"Biscuit", emoji:"🍪", cat:"Sucré & Pâtisserie"}, {name:"Spéculoos", emoji:"🍪", cat:"Sucré & Pâtisserie"},
  {name:"Pâte feuilletée", emoji:"🥐", cat:"Sucré & Pâtisserie"}, {name:"Pâte brisée", emoji:"🥧", cat:"Sucré & Pâtisserie"},
  // Boissons & Autres
  {name:"Eau", emoji:"💧", cat:"Boissons & Autres"}, {name:"Vin blanc", emoji:"🍷", cat:"Boissons & Autres"},
  {name:"Vin rouge", emoji:"🍷", cat:"Boissons & Autres"}, {name:"Cidre", emoji:"🍾", cat:"Boissons & Autres"},
  {name:"Bière", emoji:"🍺", cat:"Boissons & Autres"}, {name:"Rhum", emoji:"🥃", cat:"Boissons & Autres"},
  {name:"Café", emoji:"☕", cat:"Boissons & Autres"}, {name:"Thé", emoji:"🍵", cat:"Boissons & Autres"},
  {name:"Jus d'orange", emoji:"🧃", cat:"Boissons & Autres"}, {name:"Bouillon de légumes", emoji:"🍲", cat:"Boissons & Autres"},
  {name:"Bouillon de volaille", emoji:"🍲", cat:"Boissons & Autres"}, {name:"Lait concentré", emoji:"🥛", cat:"Boissons & Autres"}
];
const FOOD_CATEGORIES = [...new Set(COMMON_FOODS.map(f => f.cat))];

// =====================================================================
// Valeurs nutritionnelles + allergènes courants, pour 100g (ou 100ml pour les
// liquides). Ce ne sont PAS des valeurs de laboratoire certifiées — l'app n'a
// pas accès à une base nutritionnelle officielle ni à un service externe — mais
// des repères usuels raisonnables, suffisants pour donner une idée du profil
// nutritionnel d'une recette. k=kcal, p=protéines(g), c=glucides(g), f=lipides(g),
// a=allergènes. Vide/absent = aliment non couvert (traité comme 0).
const FOOD_NUTRITION = {
  'Tomate': {k:18, p:0.9, c:3.9, f:0.2, a:[]},
  'Oignon': {k:40, p:1.1, c:9.3, f:0.1, a:[]},
  'Ail': {k:149, p:6.4, c:33, f:0.5, a:[]},
  'Carotte': {k:41, p:0.9, c:10, f:0.2, a:[]},
  'Poivron': {k:31, p:1, c:6, f:0.3, a:[]},
  'Pomme de terre': {k:77, p:2, c:17, f:0.1, a:[]},
  'Patate douce': {k:86, p:1.6, c:20, f:0.1, a:[]},
  'Courgette': {k:17, p:1.2, c:3.1, f:0.3, a:[]},
  'Concombre': {k:15, p:0.7, c:3.6, f:0.1, a:[]},
  'Aubergine': {k:25, p:1, c:6, f:0.2, a:[]},
  'Champignon': {k:22, p:3.1, c:3.3, f:0.3, a:[]},
  'Brocoli': {k:34, p:2.8, c:7, f:0.4, a:[]},
  'Chou-fleur': {k:25, p:1.9, c:5, f:0.3, a:[]},
  'Chou': {k:25, p:1.3, c:6, f:0.1, a:[]},
  'Chou rouge': {k:31, p:1.4, c:7, f:0.2, a:[]},
  'Chou de Bruxelles': {k:43, p:3.4, c:9, f:0.3, a:[]},
  'Salade': {k:15, p:1.4, c:2.9, f:0.2, a:[]},
  'Roquette': {k:25, p:2.6, c:3.7, f:0.7, a:[]},
  'Épinard': {k:23, p:2.9, c:3.6, f:0.4, a:[]},
  'Blette': {k:19, p:1.8, c:3.7, f:0.2, a:[]},
  'Cresson': {k:11, p:2.3, c:1.3, f:0.1, a:[]},
  'Endive': {k:17, p:0.9, c:3.4, f:0.1, a:[]},
  'Maïs': {k:86, p:3.3, c:19, f:1.4, a:[]},
  'Petit pois': {k:81, p:5.4, c:14, f:0.4, a:[]},
  'Haricot vert': {k:31, p:1.8, c:7, f:0.2, a:[]},
  'Fève': {k:88, p:7.9, c:17.6, f:0.4, a:[]},
  'Citrouille': {k:26, p:1, c:6.5, f:0.1, a:[]},
  'Potiron': {k:26, p:1, c:6.5, f:0.1, a:[]},
  'Betterave': {k:43, p:1.6, c:10, f:0.2, a:[]},
  'Radis': {k:16, p:0.7, c:3.4, f:0.1, a:[]},
  'Navet': {k:28, p:0.9, c:6.4, f:0.1, a:[]},
  'Panais': {k:75, p:1.2, c:18, f:0.3, a:[]},
  'Céleri': {k:16, p:0.7, c:3, f:0.2, a:['celeri']},
  'Fenouil': {k:31, p:1.2, c:7, f:0.2, a:[]},
  'Artichaut': {k:47, p:3.3, c:10, f:0.2, a:[]},
  'Asperge': {k:20, p:2.2, c:3.9, f:0.1, a:[]},
  'Poireau': {k:61, p:1.5, c:14, f:0.3, a:[]},
  'Cornichon': {k:11, p:0.8, c:1.8, f:0.2, a:[]},
  'Igname': {k:118, p:1.5, c:28, f:0.2, a:[]},
  'Manioc': {k:160, p:1.4, c:38, f:0.3, a:[]},
  'Pomme': {k:52, p:0.3, c:14, f:0.2, a:[]},
  'Poire': {k:57, p:0.4, c:15, f:0.1, a:[]},
  'Banane': {k:89, p:1.1, c:23, f:0.3, a:[]},
  'Citron': {k:29, p:1.1, c:9, f:0.3, a:[]},
  'Citron vert': {k:30, p:0.7, c:11, f:0.2, a:[]},
  'Orange': {k:47, p:0.9, c:12, f:0.1, a:[]},
  'Mandarine': {k:53, p:0.8, c:13, f:0.3, a:[]},
  'Clémentine': {k:47, p:0.9, c:12, f:0.2, a:[]},
  'Pamplemousse': {k:42, p:0.8, c:11, f:0.1, a:[]},
  'Fraise': {k:32, p:0.7, c:7.7, f:0.3, a:[]},
  'Framboise': {k:52, p:1.2, c:12, f:0.7, a:[]},
  'Myrtille': {k:57, p:0.7, c:14, f:0.3, a:[]},
  'Groseille': {k:56, p:1.4, c:13, f:0.2, a:[]},
  'Cassis': {k:63, p:1.4, c:15, f:0.4, a:[]},
  'Raisin': {k:69, p:0.7, c:18, f:0.2, a:[]},
  'Ananas': {k:50, p:0.5, c:13, f:0.1, a:[]},
  'Pêche': {k:39, p:0.9, c:10, f:0.3, a:[]},
  'Nectarine': {k:44, p:1.1, c:10, f:0.3, a:[]},
  'Abricot': {k:48, p:1.4, c:11, f:0.4, a:[]},
  'Prune': {k:46, p:0.7, c:11, f:0.3, a:[]},
  'Mirabelle': {k:46, p:0.7, c:11, f:0.3, a:[]},
  'Avocat': {k:160, p:2, c:8.5, f:15, a:[]},
  'Mangue': {k:60, p:0.8, c:15, f:0.4, a:[]},
  'Papaye': {k:43, p:0.5, c:11, f:0.3, a:[]},
  'Cerise': {k:63, p:1.1, c:16, f:0.2, a:[]},
  'Melon': {k:34, p:0.8, c:8, f:0.2, a:[]},
  'Pastèque': {k:30, p:0.6, c:8, f:0.2, a:[]},
  'Kiwi': {k:61, p:1.1, c:15, f:0.5, a:[]},
  'Noix de coco': {k:354, p:3.3, c:15, f:33, a:[]},
  'Figue': {k:74, p:0.8, c:19, f:0.3, a:[]},
  'Datte': {k:282, p:2.5, c:75, f:0.4, a:[]},
  'Grenade': {k:83, p:1.7, c:19, f:1.2, a:[]},
  'Litchi': {k:66, p:0.8, c:17, f:0.4, a:[]},
  'Fruit de la passion': {k:97, p:2.2, c:23, f:0.4, a:[]},
  'Rhubarbe': {k:21, p:0.9, c:4.5, f:0.2, a:[]},
  'Kaki': {k:70, p:0.6, c:18, f:0.2, a:[]},
  'Poulet': {k:165, p:31, c:0, f:3.6, a:[]},
  'Dinde': {k:135, p:30, c:0, f:1, a:[]},
  'Canard': {k:337, p:19, c:0, f:28, a:[]},
  'Lapin': {k:173, p:29, c:0, f:8, a:[]},
  'Bœuf haché': {k:254, p:17, c:0, f:20, a:[]},
  'Steak': {k:172, p:26, c:0, f:7, a:[]},
  'Rôti de bœuf': {k:158, p:28, c:0, f:5, a:[]},
  'Agneau': {k:294, p:25, c:0, f:21, a:[]},
  'Porc': {k:242, p:27, c:0, f:14, a:[]},
  'Bacon': {k:541, p:37, c:1.4, f:42, a:[]},
  'Jambon': {k:145, p:21, c:1, f:6, a:[]},
  'Lardons': {k:400, p:24, c:0, f:34, a:[]},
  'Saucisse': {k:300, p:12, c:3, f:28, a:[]},
  'Chorizo': {k:455, p:24, c:2, f:38, a:[]},
  'Merguez': {k:300, p:17, c:2, f:25, a:[]},
  'Boudin': {k:305, p:13, c:3, f:26, a:[]},
  'Foie gras': {k:462, p:8, c:4, f:45, a:[]},
  'Poisson blanc': {k:82, p:18, c:0, f:0.7, a:['poisson']},
  'Saumon': {k:208, p:20, c:0, f:13, a:['poisson']},
  'Thon': {k:132, p:28, c:0, f:1, a:['poisson']},
  'Cabillaud': {k:82, p:18, c:0, f:0.7, a:['poisson']},
  'Truite': {k:148, p:21, c:0, f:6.6, a:['poisson']},
  'Sardine': {k:208, p:25, c:0, f:11, a:['poisson']},
  'Maquereau': {k:205, p:19, c:0, f:14, a:['poisson']},
  'Anchois': {k:131, p:20, c:0, f:5, a:['poisson']},
  'Dorade': {k:96, p:20, c:0, f:1.5, a:['poisson']},
  'Crevette': {k:99, p:24, c:0.2, f:0.3, a:['crustaces']},
  'Calamar': {k:92, p:16, c:3, f:1.4, a:['crustaces']},
  'Poulpe': {k:82, p:15, c:2.2, f:1, a:['crustaces']},
  'Moule': {k:86, p:12, c:3.7, f:2.2, a:['crustaces']},
  'Huître': {k:68, p:9, c:4, f:2.5, a:['crustaces']},
  'Crabe': {k:97, p:19, c:0, f:1.5, a:['crustaces']},
  'Homard': {k:89, p:19, c:0, f:0.9, a:['crustaces']},
  'Œuf': {k:155, p:13, c:1.1, f:11, a:['oeufs']},
  'Blanc d\'œuf': {k:52, p:11, c:0.7, f:0.2, a:['oeufs']},
  'Jaune d\'œuf': {k:322, p:16, c:3.6, f:27, a:['oeufs']},
  'Lait': {k:42, p:3.4, c:5, f:1, a:['lactose']},
  'Lait de coco': {k:230, p:2.3, c:6, f:24, a:[]},
  'Lait d\'amande': {k:17, p:0.6, c:0.6, f:1.1, a:['fruits_a_coque']},
  'Beurre': {k:717, p:0.9, c:0.1, f:81, a:['lactose']},
  'Crème fraîche': {k:292, p:2.2, c:3, f:30, a:['lactose']},
  'Crème liquide': {k:340, p:2.1, c:3, f:35, a:['lactose']},
  'Fromage blanc': {k:75, p:8, c:4, f:3, a:['lactose']},
  'Petit-suisse': {k:120, p:8, c:4, f:8, a:['lactose']},
  'Yaourt': {k:61, p:3.5, c:4.7, f:3.3, a:['lactose']},
  'Fromage': {k:380, p:27, c:1.5, f:29, a:['lactose']},
  'Mozzarella': {k:280, p:22, c:2.2, f:17, a:['lactose']},
  'Parmesan': {k:392, p:35, c:3.2, f:26, a:['lactose']},
  'Comté': {k:412, p:28, c:0, f:32, a:['lactose']},
  'Gruyère': {k:413, p:29, c:0.4, f:32, a:['lactose']},
  'Cheddar': {k:404, p:25, c:1.3, f:33, a:['lactose']},
  'Chèvre': {k:364, p:22, c:0.5, f:30, a:['lactose']},
  'Feta': {k:264, p:14, c:4, f:21, a:['lactose']},
  'Ricotta': {k:174, p:11, c:3, f:13, a:['lactose']},
  'Mascarpone': {k:429, p:5, c:3, f:45, a:['lactose']},
  'Roquefort': {k:369, p:22, c:2, f:31, a:['lactose']},
  'Brie': {k:334, p:21, c:0.5, f:28, a:['lactose']},
  'Camembert': {k:300, p:20, c:0.5, f:24, a:['lactose']},
  'Farine': {k:364, p:10, c:76, f:1, a:['gluten']},
  'Riz': {k:365, p:7, c:80, f:0.7, a:[]},
  'Pâtes': {k:371, p:13, c:75, f:1.5, a:['gluten']},
  'Nouilles': {k:371, p:12, c:74, f:2, a:['gluten']},
  'Vermicelles': {k:364, p:6, c:83, f:0.3, a:[]},
  'Pain': {k:265, p:9, c:49, f:3.2, a:['gluten']},
  'Tortilla': {k:218, p:6, c:36, f:5, a:['gluten']},
  'Avoine': {k:389, p:17, c:66, f:7, a:['gluten']},
  'Flocons d\'avoine': {k:389, p:17, c:66, f:7, a:['gluten']},
  'Quinoa': {k:368, p:14, c:64, f:6, a:[]},
  'Semoule': {k:360, p:12, c:73, f:1, a:['gluten']},
  'Couscous': {k:376, p:13, c:77, f:0.6, a:['gluten']},
  'Boulgour': {k:342, p:12, c:76, f:1.3, a:['gluten']},
  'Sarrasin': {k:343, p:13, c:71, f:3.4, a:[]},
  'Orge': {k:354, p:12, c:73, f:2.3, a:['gluten']},
  'Polenta': {k:361, p:8, c:77, f:1.3, a:[]},
  'Gnocchi': {k:150, p:3, c:24, f:3, a:['gluten']},
  'Chapelure': {k:395, p:13, c:72, f:5, a:['gluten']},
  'Lentilles': {k:353, p:25, c:60, f:1.1, a:[]},
  'Pois cassés': {k:341, p:25, c:60, f:1.2, a:[]},
  'Pois chiches': {k:364, p:19, c:61, f:6, a:[]},
  'Haricots rouges': {k:333, p:24, c:60, f:0.8, a:[]},
  'Haricots blancs': {k:333, p:23, c:60, f:0.8, a:[]},
  'Sel': {k:0, p:0, c:0, f:0, a:[]},
  'Poivre': {k:251, p:10, c:64, f:3.3, a:[]},
  'Piment': {k:40, p:1.9, c:9, f:0.4, a:[]},
  'Paprika': {k:282, p:14, c:54, f:13, a:[]},
  'Curry': {k:325, p:14, c:58, f:14, a:[]},
  'Curcuma': {k:354, p:8, c:65, f:10, a:[]},
  'Cumin': {k:375, p:18, c:44, f:22, a:[]},
  'Cannelle': {k:247, p:4, c:81, f:1.2, a:[]},
  'Muscade': {k:525, p:6, c:49, f:36, a:[]},
  'Cardamome': {k:311, p:11, c:68, f:6.7, a:[]},
  'Safran': {k:310, p:11, c:65, f:6, a:[]},
  'Gingembre': {k:80, p:1.8, c:18, f:0.8, a:[]},
  'Ail en poudre': {k:331, p:17, c:73, f:0.7, a:[]},
  'Basilic': {k:23, p:3.2, c:2.7, f:0.6, a:[]},
  'Persil': {k:36, p:3, c:6, f:0.8, a:[]},
  'Thym': {k:101, p:5.6, c:24, f:1.7, a:[]},
  'Romarin': {k:131, p:3.3, c:20, f:5.9, a:[]},
  'Laurier': {k:313, p:7.6, c:75, f:8.4, a:[]},
  'Origan': {k:265, p:9, c:69, f:4.3, a:[]},
  'Ciboulette': {k:30, p:3.3, c:4.4, f:0.7, a:[]},
  'Coriandre': {k:23, p:2.1, c:3.7, f:0.5, a:[]},
  'Menthe': {k:70, p:3.8, c:15, f:0.9, a:[]},
  'Huile d\'olive': {k:884, p:0, c:0, f:100, a:[]},
  'Huile de tournesol': {k:884, p:0, c:0, f:100, a:[]},
  'Vinaigre': {k:18, p:0, c:0.4, f:0, a:[]},
  'Moutarde': {k:66, p:4, c:5, f:3.5, a:['moutarde']},
  'Mayonnaise': {k:680, p:1, c:1, f:75, a:['oeufs']},
  'Ketchup': {k:101, p:1.2, c:26, f:0.1, a:[]},
  'Sauce soja': {k:53, p:8, c:5, f:0.1, a:['soja', 'gluten']},
  'Sauce tomate': {k:82, p:1.6, c:19, f:0.4, a:[]},
  'Tabasco': {k:12, p:0.9, c:0.8, f:0.8, a:[]},
  'Miel': {k:304, p:0.3, c:82, f:0, a:[]},
  'Sirop d\'érable': {k:260, p:0, c:67, f:0.2, a:[]},
  'Levure boulangère': {k:325, p:40, c:38, f:2, a:[]},
  'Bicarbonate': {k:0, p:0, c:0, f:0, a:[]},
  'Amande': {k:579, p:21, c:22, f:50, a:['fruits_a_coque']},
  'Noix': {k:654, p:15, c:14, f:65, a:['fruits_a_coque']},
  'Noisette': {k:628, p:15, c:17, f:61, a:['fruits_a_coque']},
  'Cacahuète': {k:567, p:26, c:16, f:49, a:['arachides']},
  'Pistache': {k:560, p:20, c:28, f:45, a:['fruits_a_coque']},
  'Noix de cajou': {k:553, p:18, c:30, f:44, a:['fruits_a_coque']},
  'Noix de pécan': {k:691, p:9, c:14, f:72, a:['fruits_a_coque']},
  'Pignon de pin': {k:673, p:14, c:13, f:68, a:['fruits_a_coque']},
  'Graines de tournesol': {k:584, p:21, c:20, f:51, a:[]},
  'Graines de sésame': {k:573, p:18, c:23, f:50, a:['sesame']},
  'Graines de chia': {k:486, p:17, c:42, f:31, a:[]},
  'Graines de lin': {k:534, p:18, c:29, f:42, a:[]},
  'Raisin sec': {k:299, p:3.1, c:79, f:0.5, a:[]},
  'Abricot sec': {k:241, p:3.4, c:63, f:0.5, a:['sulfites']},
  'Pruneau': {k:240, p:2.2, c:64, f:0.4, a:[]},
  'Sucre': {k:387, p:0, c:100, f:0, a:[]},
  'Sucre roux': {k:380, p:0, c:98, f:0, a:[]},
  'Sucre glace': {k:389, p:0, c:100, f:0, a:[]},
  'Sucre vanillé': {k:387, p:0, c:99, f:0, a:[]},
  'Vanille': {k:288, p:0.1, c:13, f:0.1, a:[]},
  'Chocolat noir': {k:546, p:7.8, c:46, f:31, a:[]},
  'Chocolat au lait': {k:535, p:7.6, c:59, f:30, a:['lactose']},
  'Chocolat blanc': {k:539, p:5.9, c:59, f:32, a:['lactose']},
  'Pépites de chocolat': {k:480, p:4.5, c:60, f:28, a:['lactose']},
  'Cacao en poudre': {k:228, p:20, c:58, f:14, a:[]},
  'Pâte à tartiner': {k:539, p:6, c:58, f:31, a:['fruits_a_coque', 'lactose']},
  'Confiture': {k:278, p:0.3, c:70, f:0.1, a:[]},
  'Caramel': {k:382, p:2, c:77, f:6.5, a:['lactose']},
  'Gélatine': {k:335, p:86, c:0, f:0, a:[]},
  'Agar-agar': {k:26, p:0, c:6.8, f:0, a:[]},
  'Levure chimique': {k:53, p:0, c:28, f:0, a:[]},
  'Biscuit': {k:450, p:6, c:65, f:18, a:['gluten', 'oeufs', 'lactose']},
  'Spéculoos': {k:470, p:6, c:70, f:18, a:['gluten', 'oeufs', 'lactose']},
  'Pâte feuilletée': {k:558, p:7, c:45, f:38, a:['gluten', 'lactose']},
  'Pâte brisée': {k:450, p:7, c:50, f:24, a:['gluten', 'lactose']},
  'Eau': {k:0, p:0, c:0, f:0, a:[]},
  'Vin blanc': {k:82, p:0.1, c:2.6, f:0, a:['sulfites']},
  'Vin rouge': {k:85, p:0.1, c:2.6, f:0, a:['sulfites']},
  'Cidre': {k:50, p:0, c:5, f:0, a:['sulfites']},
  'Bière': {k:43, p:0.5, c:3.6, f:0, a:['gluten']},
  'Rhum': {k:231, p:0, c:0, f:0, a:[]},
  'Café': {k:2, p:0.1, c:0, f:0, a:[]},
  'Thé': {k:1, p:0, c:0.3, f:0, a:[]},
  'Jus d\'orange': {k:45, p:0.7, c:10, f:0.2, a:[]},
  'Bouillon de légumes': {k:5, p:0.3, c:0.8, f:0.1, a:['celeri']},
  'Bouillon de volaille': {k:7, p:0.6, c:0.6, f:0.2, a:['celeri']},
  'Lait concentré': {k:135, p:7.5, c:10, f:8, a:['lactose']},
};

const ALLERGEN_INFO = {
  gluten: { label: 'Gluten', icon: 'fa-wheat-awn' },
  lactose: { label: 'Lactose', icon: 'fa-cheese' },
  oeufs: { label: 'Œufs', icon: 'fa-egg' },
  fruits_a_coque: { label: 'Fruits à coque', icon: 'fa-seedling' },
  arachides: { label: 'Arachides', icon: 'fa-leaf' },
  soja: { label: 'Soja', icon: 'fa-seedling' },
  poisson: { label: 'Poisson', icon: 'fa-fish' },
  crustaces: { label: 'Crustacés & mollusques', icon: 'fa-shrimp' },
  sesame: { label: 'Sésame', icon: 'fa-circle-dot' },
  moutarde: { label: 'Moutarde', icon: 'fa-pepper-hot' },
  celeri: { label: 'Céleri', icon: 'fa-carrot' },
  sulfites: { label: 'Sulfites', icon: 'fa-wine-glass' },
};

// Poids estimé (g) d'une "unité" pour les aliments comptés à la pièce plutôt qu'au poids —
// une approximation courante, pas une pesée réelle, utilisée uniquement pour le calcul
// nutritionnel quand la quantité est en "unité(s)".
const UNIT_ITEM_WEIGHT_G = {
  "blanc d'œuf": 33, "jaune d'œuf": 17, 'œuf': 50,
  'citron vert': 65, 'citron': 100, 'orange': 150, 'mandarine': 80, 'clémentine': 70,
  'pamplemousse': 350, 'banane': 120, 'pomme': 180, 'poire': 170, 'avocat': 200,
  'tomate': 120, 'oignon': 110, 'poivron': 150, 'courgette': 200, 'concombre': 300,
  'aubergine': 250, 'pêche': 150, 'abricot': 45, 'prune': 65, 'kiwi': 75, 'gousse': 5
};
function unit_item_weight_g(food_name) {
  const n = normalize_for_search(food_name);
  for (const key in UNIT_ITEM_WEIGHT_G) {
    if (n.includes(normalize_for_search(key))) return UNIT_ITEM_WEIGHT_G[key];
  }
  return 100; // pas d'estimation connue pour cet aliment : repère par défaut
}

// Convertit une quantité+unité en grammes pour pouvoir calculer une valeur nutritionnelle
// (les tables de FOOD_NUTRITION sont pour 100g/100ml). Approximatif par nature : une
// cuillère à soupe ou un "au goût" n'ont pas de poids universel exact.
function unit_to_grams(unit, amount, food_name) {
  switch (unit) {
    case 'g': return amount;
    case 'kg': return amount * 1000;
    case 'ml': return amount; // densité ~1 pour la plupart des liquides de cuisine
    case 'cl': return amount * 10;
    case 'l': return amount * 1000;
    case 'cas': return amount * 15;
    case 'cac': return amount * 5;
    case 'pincée': return amount * 0.5;
    case 'unité': return amount * unit_item_weight_g(food_name);
    default: return amount;
  }
}

// Retrouve les valeurs nutritionnelles d'un ingrédient de recette : correspondance exacte
// d'abord, sinon on cherche la clé FOOD_NUTRITION la plus longue qui préfixe son nom — un
// produit généré par une étape (ex : "Pomme de terre coupé(e)(s)") commence toujours par
// le nom de l'aliment d'origine, donc ce préfixe suffit à retrouver le bon aliment brut.
function find_nutrition_for_ingredient(name) {
  if (FOOD_NUTRITION[name]) return FOOD_NUTRITION[name];
  let best_key = null;
  for (const key in FOOD_NUTRITION) {
    if (name.startsWith(key) && (!best_key || key.length > best_key.length)) best_key = key;
  }
  return best_key ? FOOD_NUTRITION[best_key] : null;
}

// Additionne kcal/protéines/glucides/lipides + allergènes sur tous les ingrédients
// réellement utilisés dans les étapes d'une recette (via compute_steps_total_ingredient_quantities,
// définie plus bas). Un ingrédient "au goût" ou sans quantité ne contribue à rien (on ne
// peut pas calculer une valeur sur une quantité non précisée) ; un ingrédient totalement
// inconnu de FOOD_NUTRITION (aliment personnalisé exotique) est simplement ignoré.
function compute_recipe_nutrition(steps, ratio) {
  const totals_qty = compute_steps_total_ingredient_quantities(steps, ratio);
  const result = { kcal: 0, protein: 0, carbs: 0, fat: 0, allergens: new Set(), has_unknown: false };
  totals_qty.forEach((entry, name) => {
    const nutrition = find_nutrition_for_ingredient(name);
    if (!nutrition) { result.has_unknown = true; return; }
    (nutrition.a || []).forEach(al => result.allergens.add(al));
    entry.units.forEach((sum, unit) => {
      const grams = unit_to_grams(unit, sum, name);
      const factor = grams / 100;
      result.kcal += nutrition.k * factor;
      result.protein += nutrition.p * factor;
      result.carbs += nutrition.c * factor;
      result.fat += nutrition.f * factor;
    });
  });
  return result;
}

// Ustensiles/matériel courants pour le sélecteur visuel (étape 4 du formulaire)
const COMMON_TOOLS = [
  {name:"Four", emoji:"🔥"}, {name:"Plaque de cuisson", emoji:"🍳"}, {name:"Micro-ondes", emoji:"📦"},
  {name:"Grille-pain", emoji:"🍞"}, {name:"Barbecue", emoji:"🔥"}, {name:"Friteuse", emoji:"🍟"},
  {name:"Mixeur / Blender", emoji:"🌀"}, {name:"Robot pâtissier", emoji:"🧁"}, {name:"Batteur électrique", emoji:"🥣"},
  {name:"Fouet", emoji:"🥄"}, {name:"Couteau de chef", emoji:"🔪"}, {name:"Économe", emoji:"🔪"},
  {name:"Râpe", emoji:"🧀"}, {name:"Planche à découper", emoji:"🪵"}, {name:"Rouleau à pâtisserie", emoji:"🪵"},
  {name:"Casserole", emoji:"🍲"}, {name:"Poêle", emoji:"🍳"}, {name:"Cocotte / Faitout", emoji:"🍲"},
  {name:"Autocuiseur", emoji:"🍲"}, {name:"Wok", emoji:"🍲"}, {name:"Saladier", emoji:"🥣"},
  {name:"Passoire / Tamis", emoji:"🧺"}, {name:"Balance de cuisine", emoji:"⚖️"}, {name:"Verre doseur", emoji:"🥤"},
  {name:"Thermomètre de cuisine", emoji:"🌡️"}, {name:"Moule à gâteau", emoji:"🎂"}, {name:"Moule à muffins", emoji:"🧁"},
  {name:"Emporte-pièces", emoji:"🍪"}, {name:"Papier cuisson", emoji:"📄"}, {name:"Presse-agrumes", emoji:"🍋"},
  {name:"Mortier et pilon", emoji:"🥣"}, {name:"Cuillère en bois", emoji:"🥄"}, {name:"Spatule", emoji:"🍳"},
  {name:"Louche", emoji:"🥣"}, {name:"Papier aluminium", emoji:"🧻"}, {name:"Poche à douille", emoji:"🎂"},
  {name:"Essoreuse à salade", emoji:"🥬"}, {name:"Réfrigérateur", emoji:"❄️"}, {name:"Congélateur", emoji:"🧊"}
];

// Outil suggéré automatiquement selon le type d'étape choisi
const STEP_TYPE_DEFAULT_TOOL = {
  oven: "Four",
  stovetop: "Plaque de cuisson",
  fryer: "Friteuse",
  rest: "Réfrigérateur"
};
function find_tool_by_name(name) {
  return COMMON_TOOLS.find(t => t.name === name);
}

// Types d'étape : chacun a son icône, son libellé, et le libellé du champ temps
const STEP_TYPES = {
  prep:      { label: "Préparation",      icon: "fa-utensils",     time_label: "Temps (min)" },
  oven:      { label: "Four",             icon: "fa-fire-burner",  time_label: "Temps au four (min)" },
  stovetop:  { label: "Cuisson (plaque)", icon: "fa-fire",         time_label: "Temps de cuisson (min)" },
  fryer:     { label: "Friture",          icon: "fa-oil-can",      time_label: "Temps de friture (min)" },
  rest:      { label: "Repos / Frigo",    icon: "fa-snowflake",    time_label: "Temps de repos (min)" }
};

// =====================================================================
// Suggestion "intelligente" du produit obtenu par une étape — PAS une IA :
// de simples règles (mots-clés de la description + type d'étape) qui devinent un nom
// plausible, toujours modifiable par l'utilisateur. Honnête sur ses limites : elle ne
// comprend pas vraiment la recette, elle reconnaît juste des motifs courants.
// =====================================================================
const OUTPUT_PRODUCT_RULES = [
  { words: ['assaisonn', 'sal', 'poivr', 'epice', 'marinad', 'marin'], suffix: 'assaisonné(e)(s)' },
  { words: ['frit', 'friture'], suffix: 'frit(e)(s)', step_types: ['fryer'] },
  { words: ['cuit', 'cuiss', 'rot', 'gratin', 'grill'], suffix: 'cuit(e)(s)', step_types: ['oven', 'stovetop'] },
  { words: ['coup', 'decoup', 'tranch', 'emince', 'hach', 'dic', 'eplu', 'rap'], suffix: 'coupé(e)(s)' },
  // Combiner (mélanger) plusieurs ingrédients différents donne un résultat qui n'est
  // plus vraiment "l'ingrédient A" — voir generic_when_multiple ci-dessous.
  { words: ['melang', 'fouet', 'incorpor', 'petri'], suffix: 'mélangé(e)(s)', generic_when_multiple: true, generic_name: 'Préparation mélangée' },
  { words: ['repos', 'frigo', 'refrig', 'congel'], suffix: 'reposé(e)(s)', step_types: ['rest'] }
];

// Marqueurs indiquant qu'un ingrédient lié n'est pas un aliment brut mais déjà le
// résultat (généré ou renommé) d'une étape précédente — signe qu'on est en train
// d'enchaîner des mélanges (ex : une pâte déjà "mélangée" à laquelle on rajoute du
// lait et de la farine), donc que le nom ne doit plus dépendre d'un seul aliment.
const GENERATED_PRODUCT_MARKERS = ['mélangé', 'coupé', 'frit', 'cuit', 'assaisonné', 'reposé', 'tranché', 'haché', 'préparation'];
function looks_like_generated_product(name) {
  const n = normalize_for_search(name);
  return GENERATED_PRODUCT_MARKERS.some(m => n.includes(normalize_for_search(m)));
}

function suggest_output_product_name(step_type, description, linked_ingredient_names) {
  if (!linked_ingredient_names.length) return '';
  const desc = normalize_for_search(description || '');

  // Priorité à une règle qui correspond à la fois au type d'étape ET à un mot-clé de la
  // description, sinon un mot-clé seul, sinon le type d'étape seul (friture/four/repos
  // ont un suffixe assez évident même sans description détaillée).
  let matched = OUTPUT_PRODUCT_RULES.find(r => r.step_types?.includes(step_type) && r.words.some(w => desc.includes(w)));
  if (!matched) matched = OUTPUT_PRODUCT_RULES.find(r => r.words.some(w => desc.includes(w)));
  if (!matched) matched = OUTPUT_PRODUCT_RULES.find(r => r.step_types?.includes(step_type));
  if (!matched) return '';

  // Mélanger 3 ingrédients ou plus, ou rajouter des ingrédients à un mélange déjà
  // préparé lors d'une étape précédente, donne un résultat trop composite pour être
  // nommé d'après un seul d'entre eux — on utilise un nom générique à la place (ex :
  // "Préparation mélangée" plutôt que "Oeufs mélangés" une fois qu'on y a aussi mis
  // du lait et de la farine).
  if (matched.generic_when_multiple && linked_ingredient_names.length > 1) {
    const has_generated_input = linked_ingredient_names.some(looks_like_generated_product);
    if (linked_ingredient_names.length >= 3 || has_generated_input) return matched.generic_name;
  }

  return `${linked_ingredient_names[0]} ${matched.suffix}`;
}

// Devine une unité de départ raisonnable selon la nature de l'aliment
// (pas une vraie IA, une heuristique par mots-clés — mais ça évite de remettre "g" à la main à chaque fois)
const LIQUID_FOOD_KEYWORDS = ['lait', 'huile', 'eau', 'vin', 'bouillon', 'jus', 'crème liquide', 'vinaigre', 'sirop', 'café', 'thé', 'cidre', 'bière', 'rhum', 'whisky'];
const COUNTABLE_FOOD_KEYWORDS = ['œuf', 'citron', 'orange', 'mandarine', 'clémentine', 'pamplemousse', 'banane', 'pomme', 'poire', 'avocat', 'tomate', 'oignon', 'poivron', 'courgette', 'concombre', 'aubergine', 'pêche', 'abricot', 'prune', 'kiwi', 'gousse'];
function guess_default_unit(food_name) {
  const normalized = normalize_for_search(food_name);
  if (LIQUID_FOOD_KEYWORDS.some(k => normalized.includes(normalize_for_search(k)))) return 'ml';
  if (COUNTABLE_FOOD_KEYWORDS.some(k => normalized.includes(normalize_for_search(k)))) return 'unité';
  return 'g';
}

const UNIT_OPTIONS = [
  {value:'g', label:'g'}, {value:'kg', label:'kg'}, {value:'ml', label:'ml'}, {value:'cl', label:'cl'},
  {value:'l', label:'L'}, {value:'cas', label:'c. à soupe'}, {value:'cac', label:'c. à café'},
  {value:'pincée', label:'pincée'}, {value:'unité', label:'unité(s)'}, {value:'au_gout', label:'Au goût'}
];
const TO_TASTE_UNIT = 'au_gout';
function unit_label(unit) {
  if (!unit) return '';
  if (UNIT_OPTIONS.some(u => u.value === unit)) return I18N.td('units', unit);
  return unit;
}
// Une quantité doit toujours être explicite : un nombre+unité, ou "Au goût" par défaut si
// l'utilisateur ne renseigne rien — plus jamais de quantité silencieusement non précisée.
function normalize_ingredient_quantity(entry) {
  if (!entry.amount && entry.unit !== TO_TASTE_UNIT) {
    entry.unit = TO_TASTE_UNIT;
    entry.amount = '';
  }
}

const recipe_badge_list = [
  { id: "rec_5", name: "Apprenti Cuisinier", icon: "🍳", count: 5 },
  { id: "rec_10", name: "Chef à Domicile", icon: "🔪", count: 10 },
  { id: "rec_15", name: "Cordon Bleu", icon: "👨‍🍳", count: 15 },
  { id: "rec_20", name: "Maître des Fourneaux", icon: "🌟", count: 20 },
  { id: "rec_25", name: "Légende Culinaire", icon: "👑", count: 25 }
];

const like_badge_list = [
  { id: "like_15", name: "Première Étoile", icon: "❤️", count: 15 },
  { id: "like_50", name: "Coup de Cœur", icon: "🔥", count: 50 },
  { id: "like_150", name: "Sur les Devants", icon: "🚀", count: 150 },
  { id: "like_700", name: "Incontournable", icon: "🏆", count: 700 },
  { id: "like_2000", name: "Chef Étoilé", icon: "💎", count: 2000 }
];

const level_badge_list = [
  { id: "lvl_5", name: "Gourmet Novice", icon: "🌱", count: 5 },
  { id: "lvl_10", name: "Fin Gourmet", icon: "⚡", count: 10 },
  { id: "lvl_20", name: "Expert Culinaire", icon: "🔥", count: 20 },
  { id: "lvl_50", name: "Grand Maître", icon: "💎", count: 50 }
];

// =====================================================================
// INIT & ONGLET PROFIL
// =====================================================================

// 1. Remplissage des nationalités
function populate_nationality_select() {
  const nationality_select = document.getElementById("profile_nationality");
  if (!nationality_select) return;

  nationality_select.innerHTML = `<option value="">${I18N.t('profile.nationality_placeholder')}</option>`;
  country_list.forEach((country) => {
    const country_option = document.createElement("option");
    country_option.value = country.code;
    country_option.textContent = `${country.flag} ${I18N.td('countries', country.name)}`;
    nationality_select.appendChild(country_option);
  });
}

// 2. Gestion des 3 sous-onglets du profil
function init_profile_subtabs() {
  // Scopé à #tab-profile : sinon ce sélecteur global attrape aussi les onglets du
  // profil PUBLIC (#tab-public-profile), qui partagent les mêmes classes .profile_tabs_nav/.tab_btn
  // mais utilisent data-ptab au lieu de data-tab -> les deux handlers se marchaient dessus.
  const tab_buttons = document.querySelectorAll("#tab-profile .profile_tabs_nav .tab_btn");
  const tab_contents = document.querySelectorAll("#tab-profile .tab_content");

  tab_buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target_tab_id = button.dataset.tab;

      tab_buttons.forEach((btn) => btn.classList.remove("active"));
      tab_contents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      const target_content = document.getElementById(target_tab_id);
      if (target_content) {
        target_content.classList.add("active");
      }
    });
  });
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  populate_nationality_select();
  init_profile_subtabs();
  document.getElementById("logout_btn_profile")?.addEventListener("click", async () => {
    if (supabase) await supabase.auth.signOut();
  });

  document.getElementById("brand_home_btn")?.addEventListener("click", () => switch_tab("feed"));

  document.getElementById("change_email_btn")?.addEventListener("click", () => {
    document.getElementById("change_email_form").classList.toggle("hidden");
    document.getElementById("new_email_input").value = "";
    document.getElementById("email_change_msg").textContent = "";
  });

  document.getElementById("confirm_email_change_btn")?.addEventListener("click", async () => {
    const msg = document.getElementById("email_change_msg");
    const new_email = document.getElementById("new_email_input").value.trim();
    if (!new_email) return;
    if (!supabase) { msg.className = "msg error"; msg.textContent = I18N.t('profile.supabase_unavailable'); return; }
    msg.className = "msg";
    msg.textContent = I18N.t('profile.sending_confirmation');
    const { error } = await supabase.auth.updateUser({ email: new_email });
    if (error) {
      msg.className = "msg error";
      msg.textContent = I18N.t('common.error_prefix') + error.message;
      return;
    }
    msg.className = "msg";
    msg.textContent = I18N.t('profile.email_confirm_sent');
    document.getElementById("change_email_form").classList.add("hidden");
  });

  document.getElementById("change_password_btn")?.addEventListener("click", () => {
    document.getElementById("change_password_form").classList.toggle("hidden");
    document.getElementById("new_password_input").value = "";
    document.getElementById("password_change_msg").textContent = "";
  });

  document.getElementById("confirm_password_change_btn")?.addEventListener("click", async () => {
    const msg = document.getElementById("password_change_msg");
    const new_password = document.getElementById("new_password_input").value;
    if (new_password.length < 6) { msg.className = "msg error"; msg.textContent = I18N.t('profile.password_too_short'); return; }
    if (!supabase) { msg.className = "msg error"; msg.textContent = I18N.t('profile.supabase_unavailable'); return; }
    msg.className = "msg";
    msg.textContent = I18N.t('profile.updating');
    const { error } = await supabase.auth.updateUser({ password: new_password });
    if (error) {
      msg.className = "msg error";
      msg.textContent = I18N.t('common.error_prefix') + error.message;
      return;
    }
    msg.className = "msg";
    msg.textContent = I18N.t('profile.saved_password_msg');
    document.getElementById("change_password_form").classList.add("hidden");
  });
});

// =====================================================================
// 0. UI THAT MUST WORK REGARDLESS OF SUPABASE
// =====================================================================

document.querySelectorAll('nav.tabs button').forEach(btn => {
  btn.addEventListener('click', () => switch_tab(btn.dataset.tab));
});

const auth_modal = document.getElementById('auth_modal');
document.getElementById('open_auth_btn').addEventListener('click', () => auth_modal.classList.remove('hidden'));
document.getElementById('close_auth_btn').addEventListener('click', () => auth_modal.classList.add('hidden'));

// =====================================================================
// 1. INIT SUPABASE
// =====================================================================
const supabase_url = 'https://eqrttdrfxcbficxkqjvl.supabase.co';
const supabase_key = 'sb_publishable_Cw4JZURRXj7jOyYo1a_JIQ_impRkROn';

let supabase = null;
if (window.supabase && typeof window.supabase.createClient === 'function') {
  supabase = window.supabase.createClient(supabase_url, supabase_key);
} else {
  console.error('[Dishful] La librairie Supabase ne s\'est pas chargée (script CDN bloqué ou hors ligne).');
  const banner = document.createElement('div');
  banner.textContent = "⚠️ Connexion à Supabase impossible (librairie non chargée). Vérifie ta connexion internet, puis recharge la page.";
  banner.style.cssText = 'background:#B8532F;color:#fff;padding:10px 20px;font-size:13px;text-align:center;';
  document.body.prepend(banner);
}

const CATEGORIES = ['Entrée','Plat','Dessert','Petit-déjeuner','Snack','Boisson'];

// Compte "Dishful Officiel" : des recettes de démonstration (illustrations, pas des
// photos) publiées par l'équipe pour peupler les onglets "Cette semaine"/"Idées de la
// semaine" avant que la communauté ait publié assez de recettes. Toujours identifiable
// via ce badge, pour ne jamais laisser croire que ce sont de vraies contributions.
const DISHFUL_OFFICIAL_ID = '00000000-0000-4000-8000-000000000001';
function official_badge_html(author_id) {
  return author_id === DISHFUL_OFFICIAL_ID
    ? `<span class="official-badge" title="${escape_html(I18N.t('common.demo_badge'))}"><i class="fa-solid fa-circle-check"></i> ${escape_html(I18N.t('common.official_badge'))}</span>`
    : '';
}

// Badge "CEO" réservé au compte du fondateur — vide (aucun compte réel créé pour
// l'instant, vérifié côté base de données). Dès que ce compte existe, remplacer
// cette valeur par son id réel (uuid de la table profiles) pour que le badge
// apparaisse automatiquement partout où son nom est affiché.
const CEO_ACCOUNT_ID = null;
function ceo_badge_html(author_id) {
  return (CEO_ACCOUNT_ID && author_id === CEO_ACCOUNT_ID)
    ? `<span class="ceo-badge" title="${escape_html(I18N.t('common.ceo_badge_title'))}"><i class="fa-solid fa-crown"></i> ${escape_html(I18N.t('common.ceo_badge'))}</span>`
    : '';
}
const SUGGESTED_TAGS = ['Étudiant / pas cher','Rendez-vous','Rapide','Healthy','Fête','Confort food'];

let current_user = null;
let current_profile = null;
let all_recipes = [];
let liked_recipe_ids = new Set();
let recipe_detail_return_tab = 'feed';
let editing_comment_id = null;
let current_user_own_comment = null;
let active_category_filter = null;

// Identifiant anonyme stable (stocké en local) pour dédupliquer les vues des visiteurs
// non connectés — une vue ne doit compter qu'une fois par visiteur différent, pas à chaque chargement.
function get_anon_viewer_id() {
  let id = null;
  try { id = localStorage.getItem('dishful_anon_id'); } catch (e) {}
  if (!id) {
    id = 'anon_' + (crypto.randomUUID ? crypto.randomUUID() : Date.now() + '_' + Math.random().toString(36).slice(2));
    try { localStorage.setItem('dishful_anon_id', id); } catch (e) {}
  }
  return id;
}
function get_viewer_key() {
  return current_user ? current_user.id : get_anon_viewer_id();
}

// état des champs dynamiques du formulaire de publication
let pending_images = []; // [{ file, previewUrl }] — nouvelles photos pas encore envoyées
let existing_gallery_urls = []; // URLs déjà en ligne (mode édition uniquement)
let editing_recipe_id = null; // non-null quand on modifie une recette existante au lieu d'en publier une nouvelle

let cover_image_file = null; // nouvelle photo de couverture choisie (File)
let cover_image_preview_url = null; // aperçu local (object URL) de cover_image_file
let existing_cover_image_url = null; // couverture déjà en ligne (mode édition)

let ingredient_pool = []; // [{ name, emoji }] — les aliments utilisés, sans quantité globale
// Les outils se choisissent maintenant par étape (voir recipe_steps[i].tools).
// Cette fonction calcule la liste globale dédupliquée pour l'affichage (aperçu, page recette).
// Normalise pour la recherche : minuscules, ligatures œ/æ dépliées, accents retirés
// (sans ça, taper "o" ne trouve jamais "œuf" puisque "œ" ne contient pas de "o" au sens Unicode)
function normalize_for_search(str) {
  return (str || '')
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const DISHFUL_LOGO_SVG = `<svg class="dishful-loading-icon" viewBox="0 0 48 48" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 25c0 9.4 7.6 15 17 15s17-5.6 17-15" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M5 25h38" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M17 13c-1.8-2.2-1.8-4.4 0-6.6M24 13c-1.8-2.2-1.8-4.4 0-6.6M31 13c-1.8-2.2-1.8-4.4 0-6.6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
</svg>`;
function dishful_loading_html(label) {
  return `<div class="dishful-loading">${DISHFUL_LOGO_SVG}<span>${escape_html(label || I18N.t('common.loading'))}</span></div>`;
}

function compute_recipe_total_time(recipe) {
  return (recipe.steps || []).reduce((sum, s) => sum + (typeof s === 'object' ? (Number(s.time_min) || 0) : 0), 0);
}

function compute_all_tools(steps_array) {
  const seen = new Set();
  const result = [];
  (steps_array || []).forEach(step => {
    (step && step.tools ? step.tools : []).forEach(tool => {
      if (!seen.has(tool.name)) { seen.add(tool.name); result.push(tool); }
    });
  });
  return result;
}
let recipe_steps = []; // [{ type, text, time_min, oven_temp, ingredients:[{name,amount,unit}], image_url, video_url, external_url, _image_file, _video_file }]
let active_food_category = null; // filtre catégorie dans la popup de sélection d'ingrédient
let step_editor_index = null; // null = nouvelle étape, sinon index de l'étape en cours d'édition dans recipe_steps
let step_editor_current_type = 'prep';
let step_editor_image_file = null;
let step_editor_video_file = null;

// =====================================================================
// 2. AUTH MODAL — onglets login/signup
// =====================================================================
const auth_tab_login = document.getElementById('auth_tab_login');
const auth_tab_signup = document.getElementById('auth_tab_signup');
const login_form = document.getElementById('login_form');
const signup_form = document.getElementById('signup_form');

auth_tab_login.addEventListener('click', () => {
  auth_tab_login.classList.add('active'); auth_tab_signup.classList.remove('active');
  login_form.classList.remove('hidden'); signup_form.classList.add('hidden');
});
auth_tab_signup.addEventListener('click', () => {
  auth_tab_signup.classList.add('active'); auth_tab_login.classList.remove('active');
  signup_form.classList.remove('hidden'); login_form.classList.add('hidden');
});

const message_text = document.getElementById('message_text');

login_form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!supabase) { message_text.className = 'msg error'; message_text.textContent = I18N.t('profile.supabase_unavailable'); return; }
  message_text.className = 'msg';
  message_text.textContent = I18N.t('auth.logging_in');
  const { error } = await supabase.auth.signInWithPassword({
    email: document.getElementById('login_email_input').value,
    password: document.getElementById('login_password_input').value
  });
  if (error) {
    message_text.className = 'msg error';
    message_text.textContent = I18N.t('common.error_prefix') + error.message;
    return;
  }
  message_text.textContent = I18N.t('auth.logged_in');
  setTimeout(() => auth_modal.classList.add('hidden'), 500);
});

signup_form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!supabase) { message_text.className = 'msg error'; message_text.textContent = I18N.t('profile.supabase_unavailable'); return; }
  message_text.className = 'msg';
  message_text.textContent = I18N.t('auth.creating_account');

  const email_val = document.getElementById('email_input').value;
  const password_val = document.getElementById('password_input').value;
  const first_name_val = document.getElementById('first_name_input').value.trim();
  const last_name_val = document.getElementById('last_name_input').value.trim();
  const nationality_val = document.getElementById('nationality_input').value.trim();

  const { data: auth_data, error: auth_error } = await supabase.auth.signUp({
    email: email_val,
    password: password_val,
    options: {
      data: {
        first_name: first_name_val || null,
        last_name: last_name_val || null,
        nationality: nationality_val || null
      }
    }
  });

  if (auth_error) {
    message_text.className = 'msg error';
    message_text.textContent = I18N.t('common.error_prefix') + auth_error.message;
    return;
  }

  // Le profil (username généré, prénom/nom/nationalité) est créé automatiquement
  // côté base de données par un trigger sur auth.users — pas besoin de l'insérer ici.
  message_text.className = 'msg';
  message_text.textContent = auth_data.session
    ? I18N.t('auth.account_created_session')
    : I18N.t('auth.account_created_confirm');
  setTimeout(() => auth_modal.classList.add('hidden'), 1200);
});

// =====================================================================
// 3. SESSION / PROFILE
// =====================================================================
async function refresh_session() {
  const { data: { user } } = await supabase.auth.getUser();
  current_user = user;

  if (user) {
    // 1. Récupération des recettes de l'utilisateur pour calculer son XP réel
    const { data: user_recipes } = await supabase
      .from("recipes")
      .select("id, likes_count, views_count")
      .eq("author_id", user.id);

    const total_published = user_recipes ? user_recipes.length : 0;
    const total_likes_received = user_recipes
      ? user_recipes.reduce((acc, r) => acc + (r.likes_count || 0), 0)
      : 0;
    const total_views_received = user_recipes
      ? user_recipes.reduce((acc, r) => acc + (r.views_count || 0), 0)
      : 0;

    // Calcul direct : 20 XP par recette + 3 XP par like reçu + 1 XP par tranche de 10 vues
    const computed_xp = (total_published * 20) + (total_likes_received * 3) + Math.floor(total_views_received / 10);
    const computed_level = Math.floor(computed_xp / 100) + 1;

    // 2. Mise à jour automatique des valeurs en base de données
    await supabase
      .from("profiles")
      .update({ xp_points: computed_xp, user_level: computed_level })
      .eq("id", user.id);

    // 3. Chargement du profil à jour
    const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
    current_profile = profile;

    const { data: my_likes } = await supabase.from("likes").select("recipe_id").eq("user_id", user.id);
    liked_recipe_ids = new Set((my_likes || []).map(l => l.recipe_id));
  } else {
    current_profile = null;
    liked_recipe_ids = new Set();
  }

  render_user_zone();
  render_profile_tab();
  render_recipes();
}

if (supabase) {
  supabase.auth.onAuthStateChange(() => refresh_session());
}

function render_user_zone() {
  const zone = document.getElementById('user_zone');

  if (current_user && current_profile) {
    const initials = (current_profile.first_name ? current_profile.first_name[0] : current_profile.username[0]).toUpperCase();
    const avatar_html = current_profile.avatar_url
      ? `<img src="${escape_attr(current_profile.avatar_url)}" alt="">`
      : initials;
    zone.innerHTML = `
      <div class="xp-pill"><i class="fa-solid fa-fire"></i> <span class="lvl">${escape_html(I18N.t('leaderboard.level_short'))} ${current_profile.user_level}</span> · ${current_profile.xp_points} XP</div>
      <button id="open_profile_btn" class="avatar avatar-header" title="${escape_attr(I18N.t('common.my_profile'))}">${avatar_html}</button>
    `;
    document.getElementById('open_profile_btn').addEventListener('click', () => switch_tab('profile'));
  } else {
    // si on était sur l'onglet profil en se déconnectant, on revient au feed
    if (!document.getElementById('tab-profile').classList.contains('hidden')) {
      switch_tab('feed');
    }
    zone.innerHTML = `<button id="open_auth_btn" class="text-btn"><i class="fa-solid fa-right-to-bracket"></i> ${escape_html(I18N.t('nav.login'))}</button>`;
    document.getElementById('open_auth_btn').addEventListener('click', () => auth_modal.classList.remove('hidden'));
  }
}

// =====================================================================
// 4. CATEGORY / TAG CHIPS
// =====================================================================
function build_chip_group(container, values, name, td_category) {
  container.innerHTML = values.map((v) => `
    <label class="chip" data-value="${escape_attr(v)}">
      <input type="checkbox" name="${name}" value="${escape_attr(v)}">${escape_html(td_category ? I18N.td(td_category, v) : v)}
    </label>
  `).join('');
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const input = chip.querySelector('input');
      input.checked = !input.checked;
      chip.classList.toggle('checked', input.checked);
    });
  });
}
build_chip_group(document.getElementById('category_chips'), CATEGORIES, 'cat', 'categories');
build_chip_group(document.getElementById('tag_chips'), SUGGESTED_TAGS, 'tag', 'tags');

let feed_search_query = '';
let active_country_filter = null;
let active_difficulty_filter = null;
let active_time_filter = null; // minutes max, ou null
let active_tag_filters = new Set();
let active_sort = 'newest';

function render_category_filters() {
  const container = document.getElementById('category_filters');
  container.innerHTML = `<button class="filter-chip ${!active_category_filter ? 'active' : ''}" data-cat="">${escape_html(I18N.t('common.all'))}</button>` +
    CATEGORIES.map(c => `<button class="filter-chip ${active_category_filter===c?'active':''}" data-cat="${escape_attr(c)}">${escape_html(I18N.td('categories', c))}</button>`).join('');
  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      active_category_filter = btn.dataset.cat || null;
      render_category_filters();
      update_active_filters_badge();
      render_recipes();
    });
  });
}
render_category_filters();

function render_tag_filters() {
  const container = document.getElementById('tag_filters');
  container.innerHTML = SUGGESTED_TAGS.map(t =>
    `<button class="filter-chip ${active_tag_filters.has(t) ? 'active' : ''}" data-tag="${escape_attr(t)}">${escape_html(I18N.td('tags', t))}</button>`
  ).join('');
  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      if (active_tag_filters.has(tag)) active_tag_filters.delete(tag);
      else active_tag_filters.add(tag);
      render_tag_filters();
      update_active_filters_badge();
      render_recipes();
    });
  });
}
render_tag_filters();

function render_difficulty_filters() {
  const options = [['', I18N.t('common.all')], ['facile', I18N.t('publish.difficulty_easy')], ['moyen', I18N.t('publish.difficulty_medium')], ['difficile', I18N.t('publish.difficulty_hard')]];
  const container = document.getElementById('difficulty_filters');
  container.innerHTML = options.map(([val, label]) =>
    `<button class="filter-chip ${active_difficulty_filter === (val || null) ? 'active' : ''}" data-diff="${val}">${escape_html(label)}</button>`
  ).join('');
  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      active_difficulty_filter = btn.dataset.diff || null;
      render_difficulty_filters();
      update_active_filters_badge();
      render_recipes();
    });
  });
}
render_difficulty_filters();

function render_time_filters() {
  const options = [[null, I18N.t('common.all')], [15, '≤ 15 min'], [30, '≤ 30 min'], [60, '≤ 1h'], [120, '≤ 2h']];
  const container = document.getElementById('time_filters');
  container.innerHTML = options.map(([val, label]) =>
    `<button class="filter-chip ${active_time_filter === val ? 'active' : ''}" data-time="${val ?? ''}">${escape_html(label)}</button>`
  ).join('');
  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      active_time_filter = btn.dataset.time ? Number(btn.dataset.time) : null;
      render_time_filters();
      update_active_filters_badge();
      render_recipes();
    });
  });
}
render_time_filters();

// Sélecteur de pays des filtres, réutilise country_list (déjà défini plus haut, avec emoji)
const filter_country_select = document.getElementById('filter_country_select');
populate_country_select(filter_country_select);
filter_country_select.addEventListener('change', () => {
  active_country_filter = filter_country_select.value || null;
  update_active_filters_badge();
  render_recipes();
});

document.getElementById('feed_sort_select').addEventListener('change', (e) => {
  active_sort = e.target.value;
  render_recipes();
});

document.getElementById('feed_search_input').addEventListener('input', (e) => {
  feed_search_query = normalize_for_search(e.target.value.trim());
  render_recipes();
});

document.getElementById('toggle_feed_filters_btn').addEventListener('click', () => {
  document.getElementById('feed_filters_panel').classList.toggle('hidden');
});

document.getElementById('reset_filters_btn').addEventListener('click', () => {
  active_category_filter = null;
  active_country_filter = null;
  active_difficulty_filter = null;
  active_time_filter = null;
  active_tag_filters.clear();
  active_sort = 'newest';
  document.getElementById('feed_sort_select').value = 'newest';
  filter_country_select.value = '';
  render_category_filters();
  render_tag_filters();
  render_difficulty_filters();
  render_time_filters();
  update_active_filters_badge();
  render_recipes();
});

function update_active_filters_badge() {
  const count = [active_category_filter, active_country_filter, active_difficulty_filter, active_time_filter]
    .filter(v => v !== null).length + active_tag_filters.size;
  const badge = document.getElementById('active_filters_badge');
  badge.textContent = count;
  badge.classList.toggle('hidden', count === 0);
}

// =====================================================================
// 5. PAYS / DRAPEAU
// (country_list, avec emoji, est défini tout en haut du fichier et sert
// à la fois pour la nationalité du profil et le pays d'une recette)
// =====================================================================
const country_select = document.getElementById('recipe_country_select');

// Repeuple un <select> de pays avec les noms traduits dans la langue courante, en
// conservant la valeur sélectionnée — réutilisé pour les 3 sélecteurs de pays de
// l'app (recette, filtres feed, filtres recherche) et relancé une fois I18N prêt.
function populate_country_select(select_el) {
  if (!select_el) return;
  const previous_value = select_el.value;
  const placeholder = select_el.querySelector('option[value=""]');
  select_el.innerHTML = '';
  if (placeholder) select_el.appendChild(placeholder);
  country_list
    .slice()
    .sort((a, b) => I18N.td('countries', a.name).localeCompare(I18N.td('countries', b.name), I18N.getLang()))
    .forEach((country) => {
      const opt = document.createElement('option');
      opt.value = country.code;
      opt.textContent = `${country.flag} ${I18N.td('countries', country.name)}`;
      select_el.appendChild(opt);
    });
  select_el.value = previous_value;
}
populate_country_select(country_select);

function country_name_from_code(code) {
  const found = country_list.find(c => c.code === code);
  return found ? found.name : code;
}
function country_display_name_from_code(code) {
  return I18N.td('countries', country_name_from_code(code));
}
function country_flag_from_code(code) {
  const found = country_list.find(c => c.code === code);
  return found ? found.flag : '';
}

// =====================================================================
// 6. INGRÉDIENTS (pool visuel) — popup de sélection
// =====================================================================
const ingredient_picker_modal = document.getElementById('ingredient_picker_modal');

function render_ingredient_pool_chips() {
  const container = document.getElementById('ingredient_pool_chips');
  if (ingredient_pool.length === 0) {
    container.innerHTML = `<p class="empty-hint">${escape_html(I18N.t('feed.no_ingredients_yet'))}</p>`;
    return;
  }
  container.innerHTML = ingredient_pool.map((ing, i) => `
    <span class="pool-chip" data-index="${i}">
      <span class="pool-chip-emoji">${ing.emoji}</span> ${escape_html(I18N.td('foods', ing.name))}
      <button type="button" class="pool-chip-remove" data-index="${i}"><i class="fa-solid fa-xmark"></i></button>
    </span>
  `).join('');
  container.querySelectorAll('.pool-chip-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      const removed_name = ingredient_pool[idx].name;
      ingredient_pool.splice(idx, 1);
      // retire aussi cet ingrédient de toutes les étapes qui l'utilisaient
      recipe_steps.forEach(step => { step.ingredients = step.ingredients.filter(si => si.name !== removed_name); });
      render_ingredient_pool_chips();
      render_steps_compact_list();
    });
  });
}

function add_ingredient_to_pool(name, emoji) {
  if (!name || ingredient_pool.some(p => p.name.toLowerCase() === name.toLowerCase())) return;
  ingredient_pool.push({ name, emoji: emoji || '🍽️' });
  render_ingredient_pool_chips();
}

function render_food_category_tabs() {
  const container = document.getElementById('food_category_tabs');
  container.innerHTML = `<button type="button" class="food-cat-tab ${!active_food_category ? 'active' : ''}" data-cat="">${escape_html(I18N.t('common.all'))}</button>` +
    FOOD_CATEGORIES.map(c => `<button type="button" class="food-cat-tab ${active_food_category === c ? 'active' : ''}" data-cat="${escape_attr(c)}">${escape_html(I18N.td('food_categories', c))}</button>`).join('');
  container.querySelectorAll('.food-cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      active_food_category = btn.dataset.cat || null;
      render_food_category_tabs();
      render_food_picker_grid();
    });
  });
}

let food_picker_selected = new Set(); // noms sélectionnés dans la grille, pas encore confirmés
// Aliments créés à la volée (pas dans COMMON_FOODS) : ils rejoignent la grille comme les autres
// au lieu d'être ajoutés directement à la recette, pour suivre le même circuit sélection -> confirmation.
let custom_food_entries = [];
function find_food_by_name(name) {
  return COMMON_FOODS.find(f => f.name === name) || custom_food_entries.find(f => f.name === name);
}

function render_food_picker_grid() {
  const search = document.getElementById('ingredient_search_input').value.trim().toLowerCase();
  const grid = document.getElementById('food_picker_grid');
  let list = [...COMMON_FOODS, ...custom_food_entries];
  if (active_food_category) list = list.filter(f => f.cat === active_food_category);
  if (search) list = list.filter(f => normalize_for_search(f.name).includes(normalize_for_search(search)) || normalize_for_search(I18N.td('foods', f.name)).includes(normalize_for_search(search)));

  if (list.length === 0) {
    grid.innerHTML = `<p class="empty-hint">${escape_html(I18N.t('common.no_results_add_manually'))}</p>`;
    update_confirm_add_button();
    return;
  }
  grid.innerHTML = list.map(f => {
    const already_added = ingredient_pool.some(p => p.name === f.name);
    const is_selected = food_picker_selected.has(f.name);
    return `<button type="button" class="food-tile ${already_added ? 'added' : ''} ${is_selected ? 'selected' : ''}" data-name="${escape_attr(f.name)}" data-emoji="${f.emoji}" ${already_added ? 'disabled' : ''}>
      <span class="food-tile-emoji">${f.emoji}</span>
      <span class="food-tile-name">${escape_html(I18N.td('foods', f.name))}</span>
      ${already_added ? '<i class="fa-solid fa-check food-tile-check"></i>' : (is_selected ? '<i class="fa-solid fa-circle-check food-tile-check selected-check"></i>' : '')}
    </button>`;
  }).join('');
  grid.querySelectorAll('.food-tile:not(.added)').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      if (food_picker_selected.has(name)) food_picker_selected.delete(name);
      else food_picker_selected.add(name);
      render_food_picker_grid();
    });
  });
  update_confirm_add_button();
}

function update_confirm_add_button() {
  const btn = document.getElementById('confirm_add_ingredients_btn');
  const count = food_picker_selected.size;
  // Le bouton reste toujours visible et à la même place : seul son état (actif/désactivé)
  // change, pour que la popup ne bouge jamais quand on sélectionne des aliments.
  btn.disabled = count === 0;
  document.getElementById('confirm_add_ingredients_count').textContent = count;
  render_ingredient_selection_cloud();
}

// Petit "nuage" à côté de la popup qui montre, en direct, les aliments en cours de sélection.
function render_ingredient_selection_cloud() {
  const cloud = document.getElementById('cloud_bubbles');
  if (!cloud) return;
  if (food_picker_selected.size === 0) {
    cloud.innerHTML = `<p class="cloud-empty-hint">${escape_html(I18N.t('modal.ingredient_picker.selection_empty'))}</p>`;
    return;
  }
  cloud.innerHTML = [...food_picker_selected].map(name => {
    const found = COMMON_FOODS.find(f => f.name === name);
    const emoji = found ? found.emoji : '🍽️';
    return `<button type="button" class="cloud-bubble" data-name="${escape_attr(name)}">
      <span>${emoji} ${escape_html(I18N.td('foods', name))}</span>
      <span class="cloud-bubble-remove"><i class="fa-solid fa-xmark"></i></span>
    </button>`;
  }).join('');
  cloud.querySelectorAll('.cloud-bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
      food_picker_selected.delete(bubble.dataset.name);
      render_food_picker_grid();
    });
  });
}

document.getElementById('confirm_add_ingredients_btn').addEventListener('click', () => {
  if (food_picker_selected.size === 0) return;
  const added_names = [...food_picker_selected];
  food_picker_selected.forEach(name => {
    const found = find_food_by_name(name);
    add_ingredient_to_pool(name, found ? found.emoji : '🍽️');
  });
  food_picker_selected.clear();
  render_food_picker_grid();
  // Clic sur "Ajouter" -> les aliments sont ajoutés ET la popup se ferme, comme on s'y attend.
  ingredient_picker_modal.classList.add('hidden');
  show_toast(added_names.length > 1
    ? I18N.t('modal.ingredient_picker.toast_added_multiple', { count: added_names.length })
    : I18N.t('modal.ingredient_picker.toast_added_single', { name: I18N.td('foods', added_names[0]) }));
});

document.getElementById('open_ingredient_picker_btn').addEventListener('click', () => {
  document.getElementById('ingredient_search_input').value = '';
  active_food_category = null;
  food_picker_selected.clear();
  render_food_category_tabs();
  render_food_picker_grid();
  document.getElementById('custom_ingredient_popover').classList.add('hidden');
  document.getElementById('custom_ingredient_input').value = '';
  ingredient_picker_modal.classList.remove('hidden');
});
document.getElementById('close_ingredient_picker_btn').addEventListener('click', () => ingredient_picker_modal.classList.add('hidden'));
document.getElementById('ingredient_search_input').addEventListener('input', render_food_picker_grid);

const custom_ingredient_popover = document.getElementById('custom_ingredient_popover');
document.getElementById('toggle_custom_ingredient_btn').addEventListener('click', () => {
  custom_ingredient_popover.classList.toggle('hidden');
  if (!custom_ingredient_popover.classList.contains('hidden')) {
    document.getElementById('custom_ingredient_input').focus();
  }
});
document.getElementById('create_custom_ingredient_btn').addEventListener('click', () => {
  const input = document.getElementById('custom_ingredient_input');
  const name = input.value.trim();
  if (!name) return;

  // Aucun aliment de ce nom nulle part -> on le crée et il rejoint la grille comme les autres.
  if (!find_food_by_name(name)) {
    custom_food_entries.push({ name, emoji: '🍽️' });
  }
  // Pré-sélectionné, mais pas encore ajouté à la recette : il faut toujours confirmer avec "Ajouter",
  // exactement comme pour un aliment choisi dans la liste — pas de raccourci qui l'ajoute directement.
  food_picker_selected.add(name);
  input.value = '';
  custom_ingredient_popover.classList.add('hidden');
  active_food_category = null; // le nouvel aliment n'a pas de catégorie : on revient sur "Tout" pour le voir
  render_food_category_tabs();
  render_food_picker_grid();
  show_toast(I18N.t('modal.ingredient_picker.toast_custom_added', { name }), 'fa-circle-plus');
});
document.getElementById('custom_ingredient_input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); document.getElementById('create_custom_ingredient_btn').click(); }
});

render_ingredient_pool_chips();

// =====================================================================
// 6quater. APERÇU (dernière étape, avant publication)
// =====================================================================
function render_recipe_preview() {
  const container = document.getElementById('recipe_preview_container');
  const title = document.getElementById('recipe_title_input').value.trim() || I18N.t('publish.no_title_placeholder');
  const description = document.getElementById('recipe_description_input')?.value.trim() || '';
  const categories = Array.from(document.querySelectorAll('#category_chips input:checked')).map(i => i.value);
  const tags = Array.from(document.querySelectorAll('#tag_chips input:checked')).map(i => i.value);
  const custom_tags = document.getElementById('custom_tags_input').value.split(',').map(t => t.trim()).filter(Boolean);
  const country_code_val = country_select.value;
  const country_display = country_code_val ? country_display_name_from_code(country_code_val) : null;
  const servings = document.getElementById('recipe_servings_input').value || 4;
  const difficulty = document.getElementById('recipe_difficulty_select')?.value || 'moyen';
  const total_time = compute_total_time();
  const cover_url = cover_image_preview_url || existing_cover_image_url;
  const gallery_urls = [...existing_gallery_urls, ...pending_images.map(p => p.previewUrl)];
  const all_tools = compute_all_tools(recipe_steps);
  const total_qty = compute_total_ingredient_quantities();

  // Média d'une étape : priorité au fichier local pas encore envoyé, sinon à l'URL déjà en ligne (mode édition)
  function step_preview_media(step) {
    if (step._image_file) return { type: 'image', url: URL.createObjectURL(step._image_file) };
    if (step._video_file) return { type: 'video', url: URL.createObjectURL(step._video_file) };
    if (step.image_url) return { type: 'image', url: step.image_url };
    if (step.video_url) return { type: 'video', url: step.video_url };
    return null;
  }

  container.innerHTML = `
    <article class="preview-card recipe_full_view">
      <div class="media_wrapper">
        ${cover_url
          ? `<img src="${escape_attr(cover_url)}" alt="">`
          : `<div class="preview-cover-empty"><i class="fa-solid fa-image"></i> ${escape_html(I18N.t('publish.no_cover_yet'))}</div>`}
      </div>
      ${gallery_urls.length ? `<div class="recipe_gallery">${gallery_urls.map(u => `<img src="${escape_attr(u)}" alt="">`).join('')}</div>` : ''}

      <div class="leaderboard-subtabs preview-subtab-nav">
        <button type="button" class="leaderboard-subtab-btn preview-subtab-btn active" data-ptab="info"><i class="fa-solid fa-circle-info"></i> ${escape_html(I18N.t('publish.preview_tab_info'))}</button>
        <button type="button" class="leaderboard-subtab-btn preview-subtab-btn" data-ptab="ingredients"><i class="fa-solid fa-carrot"></i> ${escape_html(I18N.t('publish.preview_tab_ingredients'))}</button>
        <button type="button" class="leaderboard-subtab-btn preview-subtab-btn" data-ptab="steps"><i class="fa-solid fa-list-ol"></i> ${escape_html(I18N.t('recipe_detail.steps_title'))}${recipe_steps.length ? ` (${recipe_steps.length})` : ''}</button>
      </div>

      <div class="preview-subtab-panel" data-ptab-panel="info">
        <div class="recipe_header">
          <div class="title_row">
            <h2>${escape_html(title)}</h2>
            ${country_display
              ? `<span class="country_badge">${country_flag_from_code(country_code_val) || '🌍'} ${escape_html(country_display)}</span>`
              : `<span class="country_badge preview-meta-missing"><i class="fa-solid fa-triangle-exclamation"></i> ${escape_html(I18N.t('publish.country_missing'))}</span>`}
          </div>
          ${description ? `<p class="recipe_description">${escape_html(description)}</p>` : `<p class="empty-hint">${escape_html(I18N.t('publish.no_description'))}</p>`}

          <div class="recipe_meta_bar">
            <div><i class="fa-solid fa-users"></i> ${escape_html(String(servings))} ${escape_html(I18N.t('common.servings'))}</div>
            <div><i class="fa-solid fa-gauge"></i> ${escape_html(I18N.td('difficulty', difficulty))}</div>
            <div><i class="fa-regular fa-clock"></i> ${escape_html(I18N.t('publish.total_time'))} ${total_time} ${escape_html(I18N.t('common.minutes_short'))}</div>
          </div>

          <div class="chips-row" style="margin-top:14px;">
            ${[...categories, ...tags, ...custom_tags].map(t => `<span class="tag-chip">${escape_html(I18N.td(CATEGORIES.includes(t) ? 'categories' : 'tags', t))}</span>`).join('') || `<span class="empty-hint">${escape_html(I18N.t('publish.no_tags_chosen'))}</span>`}
          </div>
        </div>
      </div>

      <div class="preview-subtab-panel hidden" data-ptab-panel="ingredients">
        <div class="prep_before_start">
          <h3 class="prep_before_start_title"><i class="fa-solid fa-list-check"></i> ${escape_html(I18N.t('publish.gather_title'))}</h3>
          <div class="prep_before_start_columns">
            <div class="prep_column">
              <h4><i class="fa-solid fa-carrot"></i> ${escape_html(I18N.t('recipe_detail.ingredients_title'))}</h4>
              ${render_product_list_html(ingredient_pool.filter(i => total_qty.has(i.name)), total_qty, I18N.t('recipe_detail.no_ingredients_used'))}
            </div>
            <div class="prep_column">
              <h4><i class="fa-solid fa-kitchen-set"></i> ${escape_html(I18N.t('recipe_detail.tools_title'))}</h4>
              ${render_product_list_html(all_tools, null, I18N.t('recipe_detail.no_tools_required'))}
            </div>
          </div>
        </div>
      </div>

      <div class="preview-subtab-panel hidden" data-ptab-panel="steps">
        <h3><i class="fa-solid fa-list-ol"></i> ${escape_html(I18N.t('recipe_detail.steps_title'))}</h3>
        ${recipe_steps.length ? `
          <ol class="steps_list">
            ${recipe_steps.map((s) => {
              const type_key = STEP_TYPES[s.type] ? s.type : 'prep';
              const type_info = STEP_TYPES[type_key];
              const ing_tags = (s.ingredients || []).map(ing => `<span class="tag-chip">${ing.amount || ''}${escape_html(unit_label(ing.unit))} ${escape_html(I18N.td('foods', ing.name))}</span>`).join('');
              const tool_tags = (s.tools || []).map(t => `<span class="tag-chip tool-tag-chip">${t.emoji || '🔧'} ${escape_html(I18N.td('tools', t.name))}</span>`).join('');
              const media = step_preview_media(s);
              const media_html = media
                ? (media.type === 'image'
                    ? `<img class="step_media_preview" src="${escape_attr(media.url)}" alt="">`
                    : `<video class="step_media_preview" src="${escape_attr(media.url)}" controls></video>`)
                : (s.external_url ? `<a href="${escape_attr(s.external_url)}" target="_blank" rel="noopener" class="step_external_link"><i class="fa-solid fa-link"></i> ${escape_html(I18N.t('recipe_detail.external_media'))}</a>` : '');
              return `<li class="type-${type_key}">
                <span class="step_type_badge type-${type_key}"><i class="fa-solid ${type_info.icon}"></i> ${escape_html(I18N.td('step_types', type_key))}${s.oven_temp ? ' · ' + s.oven_temp + '°C' : ''}</span>
                ${s.time_min ? `<span class="step_time_badge"><i class="fa-solid fa-stopwatch"></i> ${s.time_min} ${escape_html(I18N.t('common.minutes_short'))}</span>` : ''}
                <p>${escape_html(s.text || '')}</p>
                ${step_detail_blocks_html(ing_tags, tool_tags)}
                ${media_html}
              </li>`;
            }).join('')}
          </ol>
        ` : `<p class="empty-hint" style="margin:0 24px;">${escape_html(I18N.t('publish.no_steps_added'))}</p>`}
      </div>
    </article>
  `;

  container.querySelectorAll('.preview-subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.ptab;
      container.querySelectorAll('.preview-subtab-btn').forEach(b => b.classList.toggle('active', b === btn));
      container.querySelectorAll('.preview-subtab-panel').forEach(panel => {
        panel.classList.toggle('hidden', panel.dataset.ptabPanel !== target);
      });
    });
  });
}

// =====================================================================
// 6bis. ÉTAPES (liste compacte + popup d'édition)
// =====================================================================
const step_editor_modal = document.getElementById('step_editor_modal');

function compute_total_time() {
  return recipe_steps.reduce((sum, s) => sum + (Number(s.time_min) || 0), 0);
}

// Additionne, pour chaque ingrédient, les quantités utilisées à travers une liste d'étapes
// (regroupées par unité, puisqu'on ne peut pas additionner des grammes avec des unité(s)).
// `ratio` sert à mettre à l'échelle selon le nombre de portions choisi (page recette publiée).
function compute_steps_total_ingredient_quantities(steps, ratio) {
  const totals = new Map(); // name -> { units: Map(unit -> somme), unspecified: bool, to_taste: bool }
  (steps || []).forEach(step => {
    (step.ingredients || []).forEach(ing => {
      if (!ing.name) return;
      if (!totals.has(ing.name)) totals.set(ing.name, { units: new Map(), unspecified: false, to_taste: false });
      const entry = totals.get(ing.name);
      if (ing.unit === TO_TASTE_UNIT) { entry.to_taste = true; return; }
      const amount = parseFloat(ing.amount);
      if (!ing.amount || isNaN(amount)) { entry.unspecified = true; return; }
      const unit = ing.unit || 'g';
      entry.units.set(unit, (entry.units.get(unit) || 0) + amount * (ratio || 1));
    });
  });
  return totals;
}

function compute_total_ingredient_quantities() {
  return compute_steps_total_ingredient_quantities(recipe_steps, 1);
}

// Liste de produits propre (icône + nom + quantité), réutilisée partout où on affiche des
// ingrédients ou des outils : aperçu de publication ET page recette publiée. `total_qty`
// vaut null pour les outils (pas de quantité), sinon c'est la Map de compute_steps_total_ingredient_quantities.
function render_product_list_html(items, total_qty, empty_label) {
  if (!items.length) return `<p class="empty-hint">${escape_html(empty_label)}</p>`;
  const td_category = total_qty ? 'foods' : 'tools';
  return `<div class="product-list">${items.map(item => {
    const entry = total_qty ? total_qty.get(item.name) : null;
    const parts = entry ? [...entry.units.entries()].map(([unit, sum]) => {
      const unit_label = I18N.td('units', unit);
      const formatted = Number.isInteger(sum) ? sum : Math.round(sum * 100) / 100;
      return `${formatted} ${unit_label}`;
    }) : [];
    if (entry && entry.to_taste) parts.push(I18N.td('units', TO_TASTE_UNIT));
    const qty_html = parts.length
      ? `<span class="product-list-qty">${escape_html(parts.join(' + '))}</span>`
      : (entry && entry.unspecified ? `<span class="product-list-qty unspecified">${escape_html(I18N.t('recipe_detail.free_qty'))}</span>` : '');
    return `
      <div class="product-list-item">
        <span class="product-list-icon">${item.emoji || '🍽️'}</span>
        <span class="product-list-name">${escape_html(I18N.td(td_category, item.name))}</span>
        ${qty_html}
      </div>
    `;
  }).join('')}</div>`;
}

// Regroupe les ingrédients/outils d'une étape dans des sections étiquetées séparément,
// plutôt qu'un seul tas de tags mélangés où on ne distingue plus ce qui est un aliment
// de ce qui est un outil.
function step_detail_blocks_html(ing_tags, tool_tags) {
  let html = '';
  if (ing_tags) html += `<div class="step_detail_block"><span class="step_detail_label"><i class="fa-solid fa-carrot"></i> ${escape_html(I18N.t('recipe_detail.ingredients_title'))}</span><div class="step_ing_tags">${ing_tags}</div></div>`;
  if (tool_tags) html += `<div class="step_detail_block"><span class="step_detail_label"><i class="fa-solid fa-kitchen-set"></i> ${escape_html(I18N.t('recipe_detail.tools_title'))}</span><div class="step_ing_tags">${tool_tags}</div></div>`;
  return html;
}

// Met en avant ce qu'une étape produit (ex : "Frites coupées") quand elle en crée un,
// pour qu'on comprenne à quoi elle sert dans la suite de la recette — jusqu'ici ce nom
// n'était visible que dans l'éditeur, jamais sur la page de la recette elle-même.
function step_output_product_html(step) {
  if (!step.output_product) return '';
  return `<div class="step_output_product"><i class="fa-solid fa-wand-magic-sparkles"></i> ${escape_html(I18N.t('recipe_detail.gives'))} <strong>${escape_html(step.output_product)}</strong></div>`;
}

function render_steps_compact_list() {
  const container = document.getElementById('steps_compact_list');
  if (recipe_steps.length === 0) {
    container.innerHTML = `<p class="empty-hint">${escape_html(I18N.t('modal.step_editor.no_steps_yet'))}</p>`;
  } else {
    container.innerHTML = recipe_steps.map((step, i) => {
      const type_key = STEP_TYPES[step.type] ? step.type : 'prep';
      const type_info = STEP_TYPES[type_key];
      const preview_source = step.text || '';
      const preview_text = preview_source.slice(0, 70) + (preview_source.length > 70 ? '…' : '');
      return `
        <div class="step-compact-card" data-index="${i}">
          <div class="step-compact-icon"><i class="fa-solid ${type_info.icon}"></i></div>
          <div class="step-compact-body">
            <div class="step-compact-title">${escape_html(I18N.t('modal.step_editor.step_word'))} ${i + 1} · ${escape_html(I18N.td('step_types', type_key))}${step.oven_temp ? ' · ' + step.oven_temp + '°C' : ''}</div>
            <div class="step-compact-text">${preview_text ? escape_html(preview_text) : '<em>' + escape_html(I18N.t('modal.step_editor.no_description_yet')) + '</em>'}</div>
          </div>
          ${step.time_min ? `<div class="step-compact-time"><i class="fa-solid fa-stopwatch"></i> ${step.time_min} min</div>` : ''}
          <button type="button" class="step-compact-edit"><i class="fa-solid fa-pen"></i></button>
        </div>
      `;
    }).join('');
    container.querySelectorAll('.step-compact-card').forEach(card => {
      card.addEventListener('click', () => open_step_editor(Number(card.dataset.index)));
    });
  }
  const total_el = document.getElementById('total_time_value');
  if (total_el) total_el.textContent = compute_total_time();
}

function set_step_editor_type(type, auto_suggest_tool, previous_type) {
  step_editor_current_type = type;
  document.querySelectorAll('.step-type-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.type === type));
  const type_key = STEP_TYPES[type] ? type : 'prep';
  document.getElementById('step_editor_time_label').textContent = I18N.td('step_time_labels', type_key);
  document.getElementById('step_editor_temp_group').classList.toggle('hidden', type !== 'oven');

  if (auto_suggest_tool) {
    // retire l'outil auto-suggéré par le type précédent (ex: Four) si on quitte ce type,
    // pour ne pas le laisser traîner quand on repasse en Préparation ou un autre type.
    const previous_suggested_name = previous_type ? STEP_TYPE_DEFAULT_TOOL[previous_type] : null;
    if (previous_suggested_name && previous_suggested_name !== STEP_TYPE_DEFAULT_TOOL[type]) {
      step_editor_tools = step_editor_tools.filter(t => t.name !== previous_suggested_name);
    }
    const suggested_name = STEP_TYPE_DEFAULT_TOOL[type];
    if (suggested_name && !step_editor_tools.some(t => t.name === suggested_name)) {
      const found = find_tool_by_name(suggested_name);
      step_editor_tools.push({ name: suggested_name, emoji: found ? found.emoji : '🔧' });
    }
    render_step_editor_tools_list();
  }
  refresh_output_product_suggestion();
}
document.querySelectorAll('.step-type-btn').forEach(btn => {
  btn.addEventListener('click', () => set_step_editor_type(btn.dataset.type, true, step_editor_current_type));
});

// Régénère la suggestion de produit obtenu quand le type d'étape, la description ou les
// ingrédients liés changent — mais seulement si le champ contient encore la suggestion
// précédente (pas un nom que l'utilisateur a tapé lui-même, qu'on ne veut jamais écraser).
function refresh_output_product_suggestion() {
  const checkbox = document.getElementById('step_editor_creates_product');
  const input = document.getElementById('step_editor_output_product');
  if (!checkbox || !input || !checkbox.checked) return;
  const description = document.getElementById('step_editor_text').value;
  const names = step_editor_linked_ingredients.map(ing => ing.name);
  const suggestion = suggest_output_product_name(step_editor_current_type, description, names);
  if (!input.value || input.value === input.dataset.autoSuggested) {
    input.value = suggestion;
    input.dataset.autoSuggested = suggestion;
  }
}

// Copie de travail des ingrédients liés à l'étape en cours d'édition dans la popup
let step_editor_linked_ingredients = [];
// Index de la ligne actuellement en mode édition (quantité + unité visibles), ou null
// si toutes les lignes sont affichées en compact. Ça évite d'avoir en permanence un
// champ de saisie + un menu déroulant ouverts pour chaque ingrédient.
let step_editor_linked_edit_index = null;

function render_step_editor_linked_list() {
  const container = document.getElementById('step_editor_linked_list');
  document.getElementById('step_editor_no_ingredients_hint').classList.toggle('hidden', ingredient_pool.length > 0);

  if (step_editor_linked_ingredients.length === 0) {
    container.innerHTML = `<p class="empty-hint">${escape_html(I18N.t('modal.step_editor.no_ingredients_step'))}</p>`;
    refresh_output_product_suggestion();
    return;
  }
  container.innerHTML = step_editor_linked_ingredients.map((ing, i) => {
    const pool_match = ingredient_pool.find(p => p.name === ing.name);
    const emoji = pool_match ? pool_match.emoji : '🍽️';

    if (step_editor_linked_edit_index === i) {
      return `
        <div class="step-linked-ing-row editing" data-index="${i}">
          <span class="step-linked-ing-label">${emoji} ${escape_html(I18N.td('foods', ing.name))}</span>
          <input type="number" class="step_linked_ing_amount" data-index="${i}" placeholder="${escape_attr(I18N.t('common.qty_placeholder'))}" step="any" min="0" value="${escape_attr(ing.amount)}" ${ing.unit === TO_TASTE_UNIT ? 'disabled' : ''}>
          <select class="step_linked_ing_unit" data-index="${i}">
            ${UNIT_OPTIONS.map(u => `<option value="${u.value}" ${ing.unit === u.value ? 'selected' : ''}>${escape_html(I18N.td('units', u.value))}</option>`).join('')}
          </select>
          <button type="button" class="step-linked-ing-done" data-index="${i}"><i class="fa-solid fa-check"></i></button>
          <button type="button" class="step-linked-ing-remove" data-index="${i}"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `;
    }
    const qty_display = ing.unit === TO_TASTE_UNIT
      ? escape_html(I18N.td('units', TO_TASTE_UNIT))
      : (ing.amount ? `${escape_html(String(ing.amount))} ${escape_html(unit_label(ing.unit))}` : `<em>${escape_html(I18N.t('common.qty_unspecified'))}</em>`);
    return `
      <div class="step-linked-ing-row compact" data-index="${i}">
        <span class="step-linked-ing-label">${emoji} ${escape_html(I18N.td('foods', ing.name))}</span>
        <span class="step-linked-ing-qty-display">${qty_display}</span>
        <button type="button" class="step-linked-ing-edit" data-index="${i}"><i class="fa-solid fa-pen"></i></button>
        <button type="button" class="step-linked-ing-remove" data-index="${i}"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.step_linked_ing_amount').forEach(inp => {
    inp.addEventListener('input', () => { step_editor_linked_ingredients[Number(inp.dataset.index)].amount = inp.value; });
  });
  container.querySelectorAll('.step_linked_ing_unit').forEach(sel => {
    sel.addEventListener('change', () => {
      const ing = step_editor_linked_ingredients[Number(sel.dataset.index)];
      ing.unit = sel.value;
      if (ing.unit === TO_TASTE_UNIT) ing.amount = '';
      render_step_editor_linked_list();
    });
  });
  container.querySelectorAll('.step-linked-ing-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      step_editor_linked_edit_index = Number(btn.dataset.index);
      render_step_editor_linked_list();
    });
  });
  container.querySelectorAll('.step-linked-ing-done').forEach(btn => {
    btn.addEventListener('click', () => {
      normalize_ingredient_quantity(step_editor_linked_ingredients[Number(btn.dataset.index)]);
      step_editor_linked_edit_index = null;
      render_step_editor_linked_list();
    });
  });
  container.querySelectorAll('.step-linked-ing-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      step_editor_linked_ingredients.splice(idx, 1);
      if (step_editor_linked_edit_index === idx) step_editor_linked_edit_index = null;
      else if (step_editor_linked_edit_index !== null && step_editor_linked_edit_index > idx) step_editor_linked_edit_index -= 1;
      render_step_editor_linked_list();
    });
  });

  refresh_output_product_suggestion();
}

// ---- Popup (niveau 2) : choix des ingrédients d'une étape + leurs quantités ----
// name -> { amount, unit }, pour les ingrédients en cours de sélection dans cette popup
// (pas encore confirmés / ajoutés à l'étape).
let step_ing_modal_selected = new Map();

function render_step_ing_picker_grid() {
  const search = document.getElementById('step_ing_picker_search').value.trim();
  const grid = document.getElementById('step_ing_picker_grid');
  const already_linked = step_editor_linked_ingredients.map(l => l.name);
  let list = ingredient_pool.filter(p => !already_linked.includes(p.name));

  if (ingredient_pool.length === 0) {
    grid.innerHTML = `<p class="empty-hint">${escape_html(I18N.t('modal.step_editor.no_ingredients_hint'))}</p>`;
    update_step_ing_picker_confirm();
    return;
  }
  if (search) list = list.filter(f => normalize_for_search(f.name).includes(normalize_for_search(search)) || normalize_for_search(I18N.td('foods', f.name)).includes(normalize_for_search(search)));
  if (list.length === 0) {
    grid.innerHTML = `<p class="empty-hint">${escape_html(already_linked.length === ingredient_pool.length ? I18N.t('modal.step_ing_picker.all_already_linked') : I18N.t('common.no_results'))}</p>`;
    update_step_ing_picker_confirm();
    return;
  }
  grid.innerHTML = list.map(f => {
    const is_selected = step_ing_modal_selected.has(f.name);
    return `<button type="button" class="food-tile ${is_selected ? 'selected' : ''}" data-name="${escape_attr(f.name)}">
      <span class="food-tile-emoji">${f.emoji}</span>
      <span class="food-tile-name">${escape_html(I18N.td('foods', f.name))}</span>
      ${is_selected ? '<i class="fa-solid fa-circle-check food-tile-check selected-check"></i>' : ''}
    </button>`;
  }).join('');
  grid.querySelectorAll('.food-tile').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      if (step_ing_modal_selected.has(name)) step_ing_modal_selected.delete(name);
      else step_ing_modal_selected.set(name, { amount: '', unit: guess_default_unit(name) });
      render_step_ing_picker_grid();
      render_step_ing_picker_qty_list();
    });
  });
  update_step_ing_picker_confirm();
}

function render_step_ing_picker_qty_list() {
  const container = document.getElementById('step_ing_picker_qty_list');
  if (step_ing_modal_selected.size === 0) {
    container.innerHTML = `<p class="empty-hint">${escape_html(I18N.t('modal.step_ing_picker.choose_first'))}</p>`;
    return;
  }
  container.innerHTML = [...step_ing_modal_selected.entries()].map(([name, data]) => {
    const pool_match = ingredient_pool.find(p => p.name === name);
    const emoji = pool_match ? pool_match.emoji : '🍽️';
    return `
      <div class="step-linked-ing-row" data-name="${escape_attr(name)}">
        <span class="step-linked-ing-label">${emoji} ${escape_html(I18N.td('foods', name))}</span>
        <input type="number" class="step_linked_ing_amount" data-name="${escape_attr(name)}" placeholder="${escape_attr(I18N.t('common.qty_placeholder'))}" step="any" min="0" value="${escape_attr(data.amount)}" ${data.unit === TO_TASTE_UNIT ? 'disabled' : ''}>
        <select class="step_linked_ing_unit" data-name="${escape_attr(name)}">
          ${UNIT_OPTIONS.map(u => `<option value="${u.value}" ${data.unit === u.value ? 'selected' : ''}>${escape_html(I18N.td('units', u.value))}</option>`).join('')}
        </select>
        <button type="button" class="step-linked-ing-remove" data-name="${escape_attr(name)}"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `;
  }).join('');
  container.querySelectorAll('.step_linked_ing_amount').forEach(inp => {
    inp.addEventListener('input', () => { step_ing_modal_selected.get(inp.dataset.name).amount = inp.value; });
  });
  container.querySelectorAll('.step_linked_ing_unit').forEach(sel => {
    sel.addEventListener('change', () => {
      const data = step_ing_modal_selected.get(sel.dataset.name);
      data.unit = sel.value;
      if (data.unit === TO_TASTE_UNIT) data.amount = '';
      render_step_ing_picker_qty_list();
    });
  });
  container.querySelectorAll('.step-linked-ing-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      step_ing_modal_selected.delete(btn.dataset.name);
      render_step_ing_picker_qty_list();
      render_step_ing_picker_grid();
    });
  });
}

function update_step_ing_picker_confirm() {
  const btn = document.getElementById('step_ing_picker_next_btn');
  const count = step_ing_modal_selected.size;
  btn.disabled = count === 0;
  document.getElementById('step_ing_picker_count').textContent = count;
}

// On ne peut atteindre "2. Quantités" qu'en passant par le bouton "Suivant" : les deux
// indicateurs d'onglet ne sont pas cliquables, ça évite d'ajouter des ingrédients sans
// quantité par accident.
function switch_step_ing_picker_tab(tab) {
  document.querySelectorAll('#step_ingredient_picker_modal .step-picker-tab-indicator').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.getElementById('step_ing_picker_panel_choose').classList.toggle('hidden', tab !== 'choose');
  document.getElementById('step_ing_picker_panel_qty').classList.toggle('hidden', tab !== 'qty');
  document.getElementById('step_ing_picker_footer_choose').classList.toggle('hidden', tab !== 'choose');
  document.getElementById('step_ing_picker_footer_qty').classList.toggle('hidden', tab !== 'qty');
  if (tab === 'qty') render_step_ing_picker_qty_list();
}
document.getElementById('step_ing_picker_search').addEventListener('input', render_step_ing_picker_grid);

document.getElementById('toggle_step_ing_picker_btn').addEventListener('click', () => {
  step_ing_modal_selected = new Map();
  document.getElementById('step_ing_picker_search').value = '';
  switch_step_ing_picker_tab('choose');
  render_step_ing_picker_grid();
  document.getElementById('step_ingredient_picker_modal').classList.remove('hidden');
});
document.getElementById('close_step_ingredient_picker_btn').addEventListener('click', () => {
  document.getElementById('step_ingredient_picker_modal').classList.add('hidden');
});
document.getElementById('step_ing_picker_next_btn').addEventListener('click', () => {
  if (step_ing_modal_selected.size === 0) return;
  switch_step_ing_picker_tab('qty');
});
document.getElementById('step_ing_picker_back_btn').addEventListener('click', () => {
  switch_step_ing_picker_tab('choose');
  render_step_ing_picker_grid();
});
document.getElementById('step_ing_picker_confirm_btn').addEventListener('click', () => {
  if (step_ing_modal_selected.size === 0) return;
  step_ing_modal_selected.forEach((data, name) => {
    normalize_ingredient_quantity(data);
    step_editor_linked_ingredients.push({ name, amount: data.amount, unit: data.unit });
  });
  step_ing_modal_selected = new Map();
  render_step_editor_linked_list();
  document.getElementById('step_ingredient_picker_modal').classList.add('hidden');
});

// Copie de travail des outils liés à l'étape en cours d'édition
let step_editor_tools = [];

function render_step_editor_tools_list() {
  const container = document.getElementById('step_editor_tools_list');
  if (step_editor_tools.length === 0) {
    container.innerHTML = `<p class="empty-hint">${escape_html(I18N.t('modal.step_editor.no_tools_step'))}</p>`;
    return;
  }
  container.innerHTML = step_editor_tools.map((tool, i) => `
    <div class="step-linked-ing-row" data-index="${i}">
      <span class="step-linked-ing-label">${tool.emoji} ${escape_html(I18N.td('tools', tool.name))}</span>
      <button type="button" class="step-linked-ing-remove" data-index="${i}"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `).join('');
  container.querySelectorAll('.step-linked-ing-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      step_editor_tools.splice(Number(btn.dataset.index), 1);
      render_step_editor_tools_list();
    });
  });
}

// ---- Popup (niveau 2) : choix des outils d'une étape (pas de quantité, donc un seul onglet) ----
let step_tool_modal_selected = new Set();

function render_step_tool_picker_grid() {
  const search = document.getElementById('step_tool_picker_search').value.trim();
  const grid = document.getElementById('step_tool_picker_grid');
  const auto_tool_names = Object.values(STEP_TYPE_DEFAULT_TOOL);
  let list = COMMON_TOOLS.filter(t => !step_editor_tools.some(l => l.name === t.name) && !auto_tool_names.includes(t.name));
  if (search) list = list.filter(t => normalize_for_search(t.name).includes(normalize_for_search(search)) || normalize_for_search(I18N.td('tools', t.name)).includes(normalize_for_search(search)));

  if (list.length === 0) {
    grid.innerHTML = `<p class="empty-hint">${escape_html(I18N.t('modal.step_tool_picker.all_added'))}</p>`;
    update_step_tool_picker_confirm();
    return;
  }
  grid.innerHTML = list.map(t => {
    const is_selected = step_tool_modal_selected.has(t.name);
    return `<button type="button" class="food-tile ${is_selected ? 'selected' : ''}" data-name="${escape_attr(t.name)}" data-emoji="${t.emoji}">
      <span class="food-tile-emoji">${t.emoji}</span>
      <span class="food-tile-name">${escape_html(I18N.td('tools', t.name))}</span>
      ${is_selected ? '<i class="fa-solid fa-circle-check food-tile-check selected-check"></i>' : ''}
    </button>`;
  }).join('');
  grid.querySelectorAll('.food-tile').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      if (step_tool_modal_selected.has(name)) step_tool_modal_selected.delete(name);
      else step_tool_modal_selected.add(name);
      render_step_tool_picker_grid();
    });
  });
  update_step_tool_picker_confirm();
}

function update_step_tool_picker_confirm() {
  const btn = document.getElementById('step_tool_picker_confirm_btn');
  const count = step_tool_modal_selected.size;
  btn.disabled = count === 0;
  document.getElementById('step_tool_picker_count').textContent = count;
}

document.getElementById('step_tool_picker_search').addEventListener('input', render_step_tool_picker_grid);

document.getElementById('toggle_step_tool_picker_btn').addEventListener('click', () => {
  step_tool_modal_selected = new Set();
  document.getElementById('step_tool_picker_search').value = '';
  render_step_tool_picker_grid();
  document.getElementById('step_tool_picker_modal').classList.remove('hidden');
});
document.getElementById('close_step_tool_picker_btn').addEventListener('click', () => {
  document.getElementById('step_tool_picker_modal').classList.add('hidden');
});
document.getElementById('step_tool_picker_confirm_btn').addEventListener('click', () => {
  if (step_tool_modal_selected.size === 0) return;
  step_tool_modal_selected.forEach(name => {
    const found = find_tool_by_name(name);
    step_editor_tools.push({ name, emoji: found ? found.emoji : '🔧' });
  });
  step_tool_modal_selected = new Set();
  render_step_editor_tools_list();
  document.getElementById('step_tool_picker_modal').classList.add('hidden');
});

document.getElementById('step_editor_text').addEventListener('input', refresh_output_product_suggestion);
document.getElementById('step_editor_creates_product').addEventListener('change', (e) => {
  // Le champ reste toujours affiché (juste désactivé/grisé si décoché) : la popup ne
  // change jamais de taille selon l'état de cette case.
  document.getElementById('step_editor_output_product').disabled = !e.target.checked;
  if (e.target.checked) refresh_output_product_suggestion();
});

function open_step_editor(index) {
  step_editor_index = index;
  step_editor_image_file = null;
  step_editor_video_file = null;
  const is_editing = index !== null;
  const step = is_editing ? recipe_steps[index] : { type: 'prep', text: '', time_min: '', oven_temp: '', ingredients: [], tools: [], image_url: null, video_url: null, external_url: '', output_product: '' };

  document.getElementById('step_editor_title').innerHTML = is_editing
    ? `<i class="fa-solid fa-list-ol"></i> ${escape_html(I18N.t('modal.step_editor.title_edit_numbered', { n: index + 1 }))}`
    : `<i class="fa-solid fa-list-ol"></i> ${escape_html(I18N.t('modal.step_editor.title_add'))}`;
  document.getElementById('step_editor_text').value = step.text || '';
  document.getElementById('step_editor_time').value = step.time_min || '';
  sync_time_clock_dial('step_editor_time');
  document.getElementById('step_editor_temp').value = step.oven_temp || '';
  document.getElementById('step_editor_external_url').value = step.external_url || '';
  const creates_product_checkbox = document.getElementById('step_editor_creates_product');
  const output_product_input = document.getElementById('step_editor_output_product');
  creates_product_checkbox.checked = step.output_product !== null || !is_editing; // coché par défaut
  output_product_input.disabled = !creates_product_checkbox.checked;
  output_product_input.value = step.output_product || '';
  // Vide ici : un nom déjà enregistré est traité comme "choisi par l'utilisateur" (jamais
  // écrasé automatiquement) ; un champ vide déclenchera une première suggestion normalement.
  output_product_input.dataset.autoSuggested = '';
  document.getElementById('delete_step_editor_btn').classList.toggle('hidden', !is_editing);

  set_step_editor_type(step.type || 'prep');
  step_editor_linked_ingredients = (step.ingredients || []).map(ing => ({ ...ing }));
  step_editor_linked_edit_index = null;
  render_step_editor_linked_list();

  step_editor_tools = (step.tools || []).map(t => ({ ...t }));
  render_step_editor_tools_list();

  document.getElementById('step_editor_image_input').value = '';
  document.getElementById('step_editor_video_input').value = '';
  render_step_editor_media_preview();

  step_editor_modal.classList.remove('hidden');
}

// Affiche un aperçu du média de l'étape : priorité au fichier qu'on vient tout juste de
// choisir (aperçu local instantané), sinon le média déjà enregistré pour cette étape.
function render_step_editor_media_preview() {
  const container = document.getElementById('step_editor_existing_media');
  const step = step_editor_index !== null ? recipe_steps[step_editor_index] : null;

  if (step_editor_image_file) {
    const url = URL.createObjectURL(step_editor_image_file);
    container.innerHTML = `<div class="step_existing_media"><img src="${url}" alt=""><span><i class="fa-solid fa-circle-check"></i> Nouvelle photo sélectionnée</span></div>`;
  } else if (step_editor_video_file) {
    const url = URL.createObjectURL(step_editor_video_file);
    container.innerHTML = `<div class="step_existing_media"><video src="${url}" controls></video><span><i class="fa-solid fa-circle-check"></i> Nouvelle vidéo sélectionnée</span></div>`;
  } else if (step && step.image_url) {
    container.innerHTML = `<div class="step_existing_media"><img src="${escape_attr(step.image_url)}" alt=""><span>Photo actuelle — choisis-en une nouvelle pour la remplacer</span></div>`;
  } else if (step && step.video_url) {
    container.innerHTML = `<div class="step_existing_media"><video src="${escape_attr(step.video_url)}" controls></video><span>Vidéo actuelle — choisis-en une nouvelle pour la remplacer</span></div>`;
  } else {
    container.innerHTML = `<div class="step_existing_media_empty"><i class="fa-solid fa-image"></i> Aucune photo ni vidéo pour cette étape (optionnel)</div>`;
  }
}

document.getElementById('open_step_editor_btn').addEventListener('click', () => open_step_editor(null));
document.getElementById('close_step_editor_btn').addEventListener('click', () => step_editor_modal.classList.add('hidden'));
document.getElementById('step_editor_image_input').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const cropped = await open_image_cropper(file, 16, 9);
  if (!cropped) return;
  step_editor_image_file = cropped;
  step_editor_video_file = null; // une étape n'a qu'un seul média à la fois
  render_step_editor_media_preview();
});
document.getElementById('step_editor_video_input').addEventListener('change', (e) => {
  step_editor_video_file = e.target.files[0] || null;
  if (step_editor_video_file) step_editor_image_file = null;
  render_step_editor_media_preview();
});

document.getElementById('save_step_editor_btn').addEventListener('click', () => {
  const text = document.getElementById('step_editor_text').value.trim();
  if (!text) { show_alert_modal(I18N.t('modal.step_editor.error_description'), { type: 'error' }); return; }

  const creates_product = document.getElementById('step_editor_creates_product').checked;
  const output_product = creates_product ? document.getElementById('step_editor_output_product').value.trim() : '';

  const previous = step_editor_index !== null ? recipe_steps[step_editor_index] : {};
  const step_data = {
    type: step_editor_current_type,
    text,
    time_min: parseInt(document.getElementById('step_editor_time').value) || 0,
    oven_temp: step_editor_current_type === 'oven' ? (parseInt(document.getElementById('step_editor_temp').value) || null) : null,
    ingredients: step_editor_linked_ingredients.map(ing => ({ ...ing })),
    tools: step_editor_tools.map(t => ({ ...t })),
    image_url: previous.image_url || null,
    video_url: previous.video_url || null,
    external_url: document.getElementById('step_editor_external_url').value.trim() || null,
    output_product: output_product || null,
    _image_file: step_editor_image_file,
    _video_file: step_editor_video_file
  };

  if (step_editor_index !== null) recipe_steps[step_editor_index] = step_data;
  else recipe_steps.push(step_data);

  // Le produit obtenu rejoint le pool d'ingrédients, prêt à être lié à une étape suivante
  // (ex : "Frites coupées" à l'étape 1, réutilisé à l'étape 2 pour la friture).
  if (output_product && !ingredient_pool.some(p => p.name.toLowerCase() === output_product.toLowerCase())) {
    add_ingredient_to_pool(output_product, '✨');
    show_toast(`"${output_product}" ajouté aux ingrédients, réutilisable dans les étapes suivantes.`, 'fa-wand-magic-sparkles');
  }

  render_steps_compact_list();
  step_editor_modal.classList.add('hidden');
});

document.getElementById('delete_step_editor_btn').addEventListener('click', () => {
  if (step_editor_index === null) return;
  if (!confirm('Supprimer cette étape ?')) return;
  recipe_steps.splice(step_editor_index, 1);
  render_steps_compact_list();
  step_editor_modal.classList.add('hidden');
});

render_steps_compact_list();

// =====================================================================
// 6ter. PHOTO DE COUVERTURE (obligatoire, étape 1)
// =====================================================================
function render_cover_photo_preview() {
  const dropzone = document.getElementById('cover_photo_dropzone');
  const url = cover_image_preview_url || existing_cover_image_url;
  if (url) {
    dropzone.innerHTML = `<img src="${escape_attr(url)}" alt=""><span class="cover-photo-change-label">${escape_html(I18N.t('publish.change_photo'))}</span>`;
    dropzone.classList.add('has-image');
  } else {
    dropzone.innerHTML = `<i class="fa-solid fa-camera"></i><span>${escape_html(I18N.t('publish.cover_choose'))}</span>`;
    dropzone.classList.remove('has-image');
  }
}
document.getElementById('recipe_cover_input').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const cropped = await open_image_cropper(file, 4, 3);
  if (!cropped) return;
  cover_image_file = cropped;
  cover_image_preview_url = URL.createObjectURL(cropped);
  render_cover_photo_preview();
});

// =====================================================================
// 7. UPLOAD DE PHOTOS (galerie supplémentaire, étape 5)
// =====================================================================
const recipe_images_input = document.getElementById('recipe_images_input');

recipe_images_input.addEventListener('change', () => {
  Array.from(recipe_images_input.files).forEach(file => {
    pending_images.push({ file, previewUrl: URL.createObjectURL(file) });
  });
  recipe_images_input.value = '';
  render_image_thumbs();
  update_image_preview_text();
});

function update_image_preview_text() {
  const label = document.getElementById('recipe_images_preview_text');
  if (!label) return;
  label.textContent = pending_images.length
    ? I18N.t('publish.photos_selected', { count: pending_images.length })
    : I18N.t('publish.no_file_chosen');
}

function render_image_thumbs() {
  const image_thumb_grid = document.getElementById('image_thumb_grid');
  if (!image_thumb_grid) return;

  const existing_html = existing_gallery_urls.map((url, i) => `
    <div class="image-thumb" data-kind="existing" data-index="${i}">
      <img src="${escape_attr(url)}" alt="">
      <button type="button" class="remove-thumb-btn" data-kind="existing" data-index="${i}"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `).join('');
  const pending_html = pending_images.map((img, i) => `
    <div class="image-thumb" data-kind="pending" data-index="${i}">
      <img src="${img.previewUrl}" alt="">
      <button type="button" class="remove-thumb-btn" data-kind="pending" data-index="${i}"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `).join('');

  image_thumb_grid.innerHTML = existing_html + pending_html;
  image_thumb_grid.querySelectorAll('.remove-thumb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      if (btn.dataset.kind === 'existing') existing_gallery_urls.splice(idx, 1);
      else pending_images.splice(idx, 1);
      render_image_thumbs();
      update_image_preview_text();
    });
  });
}

async function upload_pending_images(user_id) {
  const urls = [];
  for (const img of pending_images) {
    const safe_name = img.file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
    const path = `${user_id}/${Date.now()}-${safe_name}`;
    const { error } = await supabase.storage.from('recipe-images').upload(path, img.file);
    if (error) {
      console.error('[Dishful] Échec upload image:', error.message);
      continue; // on ignore cette image mais on continue les autres
    }
    const { data } = supabase.storage.from('recipe-images').getPublicUrl(path);
    if (data && data.publicUrl) urls.push(data.publicUrl);
  }
  return urls;
}

// =====================================================================
// 8. PUBLISH RECIPE
// =====================================================================
const recipe_form = document.getElementById('recipe_form');
const recipe_message_text = document.getElementById('recipe_message_text');

recipe_form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!supabase) { recipe_message_text.className = 'msg error'; recipe_message_text.textContent = I18N.t('profile.supabase_unavailable'); return; }

  if (!current_user) {
    recipe_message_text.className = 'msg error';
    recipe_message_text.textContent = I18N.t('publish.error_login_required');
    auth_modal.classList.remove('hidden');
    return;
  }

  const selected_categories = Array.from(document.querySelectorAll('#category_chips input:checked')).map(i => i.value);
  const selected_tags = Array.from(document.querySelectorAll('#tag_chips input:checked')).map(i => i.value);
  const custom_tags = document.getElementById('custom_tags_input').value
    .split(',').map(t => t.trim()).filter(Boolean);

  const country_code = country_select.value || null;

  if (!cover_image_file && !existing_cover_image_url) {
    recipe_message_text.className = 'msg error';
    recipe_message_text.textContent = I18N.t('publish.error_cover');
    return;
  }

  // --- Ingrédients (pool simple, sans quantité globale) ---
  if (ingredient_pool.length === 0 || recipe_steps.length === 0) {
    recipe_message_text.className = 'msg error';
    recipe_message_text.textContent = I18N.t('publish.error_ingredients_and_steps');
    return;
  }
  const steps_missing_text = recipe_steps.some(s => !s.text || !s.text.trim());
  if (steps_missing_text) {
    recipe_message_text.className = 'msg error';
    recipe_message_text.textContent = I18N.t('publish.error_step_description');
    return;
  }

  recipe_message_text.className = 'msg';
  recipe_message_text.textContent = I18N.t('publish.uploading_media');

  let final_cover_url = existing_cover_image_url || null;
  if (cover_image_file) {
    final_cover_url = await upload_single_file(cover_image_file, current_user.id, 'cover') || final_cover_url;
  }

  const image_urls = pending_images.length ? await upload_pending_images(current_user.id) : [];

  let final_video_url = document.getElementById("recipe_video_url_input").value || null;
  const video_file = document.getElementById("recipe_video_file_input")?.files[0];
  if (video_file) {
    final_video_url = await upload_single_file(video_file, current_user.id, 'video') || final_video_url;
  }

  // Upload des médias par étape (à partir de recipe_steps), puis construction du JSON final
  const steps_final = [];
  for (const step of recipe_steps) {
    let step_image_url = step.image_url || null;
    if (step._image_file) step_image_url = await upload_single_file(step._image_file, current_user.id, 'step_img');

    let step_video_url = step.video_url || null;
    if (step._video_file) step_video_url = await upload_single_file(step._video_file, current_user.id, 'step_vid');

    steps_final.push({
      type: step.type || 'prep',
      text: step.text.trim(),
      time_min: Number(step.time_min) || 0,
      oven_temp: step.type === 'oven' ? (step.oven_temp || null) : null,
      ingredients: step.ingredients || [],
      tools: step.tools || [],
      image_url: step_image_url,
      video_url: step_video_url,
      external_url: step.external_url || null,
      output_product: step.output_product || null
    });
  }

  recipe_message_text.textContent = editing_recipe_id ? I18N.t('profile.updating') : I18N.t('publish.publishing');

  const payload = {
    author_id: current_user.id,
    title: document.getElementById('recipe_title_input').value,
    description: document.getElementById('recipe_description_input')?.value || null,
    video_url: final_video_url,
    categories: selected_categories,
    tags: [...selected_tags, ...custom_tags],
    country: country_code ? country_name_from_code(country_code) : null,
    country_code: country_code,
    ingredients: ingredient_pool,
    tools: compute_all_tools(steps_final),
    steps: steps_final,
    servings: parseInt(document.getElementById("recipe_servings_input").value) || 4,
    difficulty: document.getElementById("recipe_difficulty_select")?.value || 'moyen'
  };
  payload.images = [...existing_gallery_urls, ...image_urls];
  payload.cover_image = final_cover_url;

  const was_editing = !!editing_recipe_id;
  const { data: saved_recipe, error } = was_editing
    ? await supabase.from('recipes').update(payload).eq('id', editing_recipe_id).select().single()
    : await supabase.from('recipes').insert([payload]).select().single();

  if (error) {
    recipe_message_text.className = 'msg error';
    recipe_message_text.textContent = I18N.t('common.error_prefix') + error.message;
    return;
  }

  recipe_message_text.className = 'msg';
  recipe_message_text.textContent = was_editing
    ? I18N.t('publish.updated_success')
    : I18N.t('publish.published_success');
  reset_publish_form();

  const target_recipe_id = editing_recipe_id;
  editing_recipe_id = null;

  await refresh_session();
  await load_recipes();
  if (was_editing) {
    show_recipe_detail_page(target_recipe_id);
  } else if (saved_recipe) {
    switch_tab('feed');
    open_publish_success_modal(saved_recipe);
  } else {
    switch_tab('feed');
  }
});

// =====================================================================
// 6quinquies. POPUP DE PUBLICATION RÉUSSIE + PARTAGE
// =====================================================================
const publish_success_modal = document.getElementById('publish_success_modal');

function recipe_share_url(recipe_id) {
  return `${location.origin}${location.pathname}?recipe=${recipe_id}`;
}

// Popup de partage générique, disponible sur N'IMPORTE QUELLE recette (pas seulement
// celle qu'on vient soi-même de publier — voir open_publish_success_modal ci-dessus
// pour ce cas précis, qui a son propre popup avec le message "+20 XP").
const share_recipe_modal = document.getElementById('share_recipe_modal');
function open_share_recipe_modal(recipe) {
  if (!share_recipe_modal) return;
  const share_url = recipe_share_url(recipe.id);
  const share_text = I18N.t('recipe_detail.share_text', { title: recipe.title });

  document.getElementById('share_recipe_x_btn').onclick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(share_text)}&url=${encodeURIComponent(share_url)}`, '_blank', 'noopener');
  };
  document.getElementById('share_recipe_facebook_btn').onclick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(share_url)}`, '_blank', 'noopener');
  };
  document.getElementById('share_recipe_whatsapp_btn').onclick = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(share_text + ' ' + share_url)}`, '_blank', 'noopener');
  };
  document.getElementById('share_recipe_copy_btn').onclick = async () => {
    const btn = document.getElementById('share_recipe_copy_btn');
    try {
      await navigator.clipboard.writeText(share_url);
      btn.innerHTML = `<i class="fa-solid fa-check"></i> ${escape_html(I18N.t('publish_success.copied'))}`;
      setTimeout(() => { btn.innerHTML = `<i class="fa-solid fa-link"></i> ${escape_html(I18N.t('publish_success.copy_link'))}`; }, 1800);
    } catch {
      window.prompt(I18N.t('publish_success.copy_prompt'), share_url);
    }
  };

  share_recipe_modal.classList.remove('hidden');
}
document.getElementById('close_share_recipe_btn')?.addEventListener('click', () => share_recipe_modal.classList.add('hidden'));

function open_publish_success_modal(recipe) {
  if (!publish_success_modal) return;
  const share_url = recipe_share_url(recipe.id);
  const share_text = I18N.t('publish_success.share_text', { title: recipe.title });

  document.getElementById('publish_success_recipe_card').innerHTML = `
    ${recipe.cover_image
      ? `<img src="${escape_attr(recipe.cover_image)}" alt="">`
      : `<div class="publish-success-recipe-thumb-empty"><i class="fa-solid fa-utensils"></i></div>`}
    <span>${escape_html(recipe.title)}</span>
  `;

  document.getElementById('share_x_btn').onclick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(share_text)}&url=${encodeURIComponent(share_url)}`, '_blank', 'noopener');
  };
  document.getElementById('share_facebook_btn').onclick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(share_url)}`, '_blank', 'noopener');
  };
  document.getElementById('share_whatsapp_btn').onclick = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(share_text + ' ' + share_url)}`, '_blank', 'noopener');
  };
  document.getElementById('share_copy_btn').onclick = async () => {
    const btn = document.getElementById('share_copy_btn');
    try {
      await navigator.clipboard.writeText(share_url);
      btn.innerHTML = `<i class="fa-solid fa-check"></i> ${escape_html(I18N.t('publish_success.copied'))}`;
      setTimeout(() => { btn.innerHTML = `<i class="fa-solid fa-link"></i> ${escape_html(I18N.t('publish_success.copy_link'))}`; }, 1800);
    } catch {
      window.prompt(I18N.t('publish_success.copy_prompt'), share_url);
    }
  };
  document.getElementById('publish_success_view_btn').onclick = () => {
    publish_success_modal.classList.add('hidden');
    show_recipe_detail_page(recipe.id);
  };

  publish_success_modal.classList.remove('hidden');
}

document.getElementById('close_publish_success_btn')?.addEventListener('click', () => publish_success_modal.classList.add('hidden'));
document.getElementById('publish_success_close_btn')?.addEventListener('click', () => publish_success_modal.classList.add('hidden'));

// =====================================================================
// 8bis. DEMANDE DE SUPPRESSION D'UNE RECETTE
// Pas de suppression directe côté client : la demande est enregistrée pour
// l'équipe Dishful, qui la traite (l'envoi d'email au CEO viendra une fois
// un fournisseur d'emails configuré — voir la RPC/table deletion_requests).
// =====================================================================
const deletion_request_modal = document.getElementById('deletion_request_modal');
let deletion_request_recipe_id = null;

function open_deletion_request_modal(recipe_id) {
  if (!deletion_request_modal) return;
  deletion_request_recipe_id = recipe_id;
  document.getElementById('deletion_request_reason').value = '';
  deletion_request_modal.classList.remove('hidden');
}
document.getElementById('close_deletion_request_btn')?.addEventListener('click', () => deletion_request_modal.classList.add('hidden'));
document.getElementById('cancel_deletion_request_btn')?.addEventListener('click', () => deletion_request_modal.classList.add('hidden'));

document.getElementById('confirm_deletion_request_btn')?.addEventListener('click', async () => {
  if (!supabase || !current_user || !deletion_request_recipe_id) return;
  const reason = document.getElementById('deletion_request_reason').value.trim();
  const { error } = await supabase.from('deletion_requests').insert([{
    recipe_id: deletion_request_recipe_id,
    requester_id: current_user.id,
    reason: reason || null
  }]);
  if (error) {
    show_toast(I18N.t('common.error_prefix') + error.message, 'fa-triangle-exclamation');
    return;
  }
  deletion_request_modal.classList.add('hidden');
  show_toast(I18N.t('deletion.sent_msg'), 'fa-paper-plane');
});

function reset_publish_form() {
  recipe_form.reset();
  document.querySelectorAll('.chip.checked').forEach(c => c.classList.remove('checked'));
  ingredient_pool = [];
  recipe_steps = [];
  render_ingredient_pool_chips();
  render_steps_compact_list();
  pending_images = [];
  existing_gallery_urls = [];
  render_image_thumbs();
  update_image_preview_text();
  cover_image_file = null;
  cover_image_preview_url = null;
  existing_cover_image_url = null;
  render_cover_photo_preview();
  switch_wizard_step(1);
  document.getElementById('publish_form_title').textContent = 'Publier une recette';
  document.querySelector('#recipe_form button[type="submit"]').innerHTML = '<i class="fa-solid fa-paper-plane"></i> Publier la recette';
}

// Upload générique d'un seul fichier vers le bucket recipe-images, renvoie l'URL publique (ou null si échec)
async function upload_single_file(file, user_id, prefix) {
  const safe_name = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
  const path = `${user_id}/${prefix}_${Date.now()}_${safe_name}`;
  const { error } = await supabase.storage.from('recipe-images').upload(path, file);
  if (error) {
    console.error(`[Dishful] Échec upload (${prefix}):`, error.message);
    return null;
  }
  const { data } = supabase.storage.from('recipe-images').getPublicUrl(path);
  return data?.publicUrl || null;
}

// =====================================================================
// 9. FEED
// =====================================================================
async function load_recipes() {
  const grid_el = document.getElementById('recipe_grid');
  if (grid_el) grid_el.innerHTML = dishful_loading_html(I18N.t('feed.loading_recipes'));
  const { data, error } = await supabase
    .from('recipes')
    .select('*, profiles ( username, donation_link, avatar_url )')
    .order('created_at', { ascending: false });
  if (error) {
    document.getElementById('recipe_grid').innerHTML = `<p class="empty-state">Erreur de chargement : ${escape_html(error.message)}</p>`;
    return;
  }
  all_recipes = data || [];
  render_recipes();
}

function render_recipes() {
  const grid = document.getElementById('recipe_grid');
  let list = all_recipes.slice();

  if (feed_search_query) {
    const q = feed_search_query;
    list = list.filter(r => {
      const in_title = normalize_for_search(r.title).includes(q);
      const in_description = normalize_for_search(r.description).includes(q);
      const in_author = normalize_for_search(r.profiles?.username).includes(q);
      const in_ingredients = (r.ingredients || []).some(ing => {
        const name = typeof ing === 'string' ? ing : (ing.name || '');
        return normalize_for_search(name).includes(q);
      });
      return in_title || in_description || in_author || in_ingredients;
    });
  }
  if (active_category_filter) list = list.filter(r => (r.categories || []).includes(active_category_filter));
  if (active_tag_filters.size) list = list.filter(r => [...active_tag_filters].every(t => (r.tags || []).includes(t)));
  if (active_country_filter) list = list.filter(r => r.country_code === active_country_filter);
  if (active_difficulty_filter) list = list.filter(r => (r.difficulty || 'moyen') === active_difficulty_filter);
  if (active_time_filter) list = list.filter(r => compute_recipe_total_time(r) <= active_time_filter);

  list.sort((a, b) => {
    if (active_sort === 'popular') return (b.likes_count || 0) - (a.likes_count || 0);
    if (active_sort === 'commented') return (b.comments_count || 0) - (a.comments_count || 0);
    if (active_sort === 'quickest') return compute_recipe_total_time(a) - compute_recipe_total_time(b);
    if (active_sort === 'best_rated') return (b.rating_avg || 0) - (a.rating_avg || 0);
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const count_el = document.getElementById('feed_results_count');
  if (count_el) count_el.textContent = I18N.t('feed.results_count', { count: list.length });

  if (list.length === 0) {
    grid.innerHTML = all_recipes.length === 0
      ? `<p class="empty-state">${escape_html(I18N.t('feed.empty_be_first'))}</p>`
      : `<p class="empty-state">${escape_html(I18N.t('feed.empty_filtered'))}</p>`;
    return;
  }
  grid.innerHTML = list.map(r => recipe_card_html(r)).join('');
  wire_recipe_card_events(grid, list);
}

// Branche les interactions d'une grille de cartes recette (clic → page recette, like,
// traduction, clic sur l'auteur) — utilisé par le feed "Tout" et réutilisé tel quel par
// les onglets "Cette semaine" / "Idées de la semaine" pour ne pas dupliquer cette logique.
// Recherche scopée à `grid_el` (et pas tout le document) : sans ça, deux grilles affichant
// la même recette en même temps se marchaient dessus (le mauvais data-recipe-id trouvé).
function wire_recipe_card_events(grid_el, list) {
  list.forEach((r) => {
    const card = grid_el.querySelector(`[data-recipe-id="${r.id}"]`);
    if (!card) return;
    card.addEventListener("click", (e) => {
      if (e.target.closest(".like-btn, .donate-btn, .translate-btn, .recipe-card-author")) return;
      show_recipe_detail_page(r.id);
    });
    card.querySelector(".like-btn")?.addEventListener("click", () => toggle_like(r.id));
    card.querySelector(".translate-btn")?.addEventListener("click", () => show_translate_stub());
    card.querySelector(".recipe-card-author")?.addEventListener("click", (e) => {
      e.stopPropagation();
      if (r.author_id) open_user_profile(r.author_id);
    });
  });
}

// =====================================================================
// Onglets du feed : "Tout" (existant), "Cette semaine" (tendances calculées à partir
// de l'activité des 7 derniers jours) et "Idées de la semaine" (sélection dîner/après-midi
// qui change chaque semaine, sans backend dédié).
// =====================================================================
function switch_feed_subtab(name) {
  document.querySelectorAll('.feed-subtab-btn').forEach(b => b.classList.toggle('active', b.dataset.feedtab === name));
  document.querySelectorAll('.feed-subtab-panel').forEach(p => p.classList.toggle('hidden', p.id !== `feed_panel_${name}`));
  if (name === 'week') load_feed_week_trending();
  if (name === 'ideas') render_feed_ideas();
}
document.querySelectorAll('.feed-subtab-btn').forEach(btn => {
  btn.addEventListener('click', () => switch_feed_subtab(btn.dataset.feedtab));
});

async function load_feed_week_trending() {
  const grid = document.getElementById('feed_week_grid');
  if (!grid) return;
  if (!supabase) { grid.innerHTML = `<p class="empty-state">${escape_html(I18N.t('profile.supabase_unavailable'))}</p>`; return; }
  grid.innerHTML = dishful_loading_html(I18N.t('feed.loading_week_trends'));

  const since = week_ago_iso();
  const [{ data: likes_week }, { data: views_week }, { data: comments_week }] = await Promise.all([
    supabase.from('likes').select('recipe_id').gte('created_at', since),
    supabase.from('recipe_views').select('recipe_id').gte('created_at', since),
    supabase.from('comments').select('recipe_id').gte('created_at', since),
  ]);

  // Score simple : un like pèse plus qu'une vue, un commentaire (avis) un peu plus qu'un like.
  const score = new Map();
  (likes_week || []).forEach(l => score.set(l.recipe_id, (score.get(l.recipe_id) || 0) + 3));
  (views_week || []).forEach(v => score.set(v.recipe_id, (score.get(v.recipe_id) || 0) + 1));
  (comments_week || []).forEach(c => score.set(c.recipe_id, (score.get(c.recipe_id) || 0) + 4));

  const ranked = [...score.entries()]
    .map(([recipe_id, s]) => ({ recipe: all_recipes.find(r => r.id === recipe_id), score: s }))
    .filter(x => x.recipe)
    .sort((a, b) => b.score - a.score)
    .slice(0, 24)
    .map(x => x.recipe);

  if (!ranked.length) {
    grid.innerHTML = `<p class="empty-state">${escape_html(I18N.t('feed.not_enough_activity'))}</p>`;
    return;
  }
  grid.innerHTML = ranked.map(r => recipe_card_html(r)).join('');
  wire_recipe_card_events(grid, ranked);
}

// Numéro de semaine ISO (année-semaine) : sert de graine pour une sélection qui change
// automatiquement chaque semaine, identique pour tout le monde (calculée côté client à
// partir de la date du jour, sans avoir besoin d'un cron ni d'une table dédiée côté serveur).
function get_iso_week_key(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day_num = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day_num);
  const year_start = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week_num = Math.ceil((((d - year_start) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${week_num}`;
}
function simple_string_hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(h, 31) + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// "Idées de la semaine" : un vrai calendrier (lundi → vendredi, puis un bloc "week-end"
// qui regroupe samedi+dimanche). Pour chaque jour, on choisit un régime (viande / poisson
// / végé / mixte = sans préférence) qui s'applique à tous les créneaux repas de ce jour ;
// un créneau n'apparaît que s'il existe au moins une recette pour ce régime ce jour-là —
// pas de case vide ni de contenu inventé pour "faire joli". Un total nutrition (kcal +
// protéines) est calculé par jour et pour toute la semaine à partir des recettes
// réellement affichées.
const IDEAS_MEAL_SLOTS = [
  { key: 'breakfast', categories: ['Petit-déjeuner'], icon: 'fa-mug-hot' },
  { key: 'lunch', categories: ['Plat', 'Entrée'], icon: 'fa-sun' },
  { key: 'dinner', categories: ['Plat', 'Entrée'], icon: 'fa-moon' },
  { key: 'snack', categories: ['Snack'], icon: 'fa-cookie-bite' },
  { key: 'dessert', categories: ['Dessert'], icon: 'fa-ice-cream' },
];
const IDEAS_VARIANTS = ['vege', 'poisson', 'viande', 'mixte'];
const IDEAS_VARIANT_ICON = { vege: 'fa-leaf', poisson: 'fa-fish', viande: 'fa-drumstick-bite', mixte: 'fa-shuffle' };
// weekday_offset : décalage en jours depuis un lundi de référence, pour dériver le nom du
// jour via Intl (voir ideas_day_label) ; null pour le bloc "week-end" (pas un vrai jour).
const IDEAS_DAYS = [
  { key: 'mon', weekday_offset: 0 },
  { key: 'tue', weekday_offset: 1 },
  { key: 'wed', weekday_offset: 2 },
  { key: 'thu', weekday_offset: 3 },
  { key: 'fri', weekday_offset: 4 },
  { key: 'weekend', weekday_offset: null },
];
// Sous-ensemble de "Viandes & Poissons" (COMMON_FOODS) : sert à deviner le régime d'une
// recette à partir de ses ingrédients — pas de champ "régime" dédié dans les données.
const FISH_INGREDIENT_NAMES = new Set(['Poisson blanc', 'Saumon', 'Thon', 'Cabillaud', 'Truite', 'Sardine', 'Maquereau', 'Anchois', 'Dorade', 'Crevette', 'Calamar', 'Poulpe', 'Moule', 'Huître', 'Crabe', 'Homard']);
const MEAT_INGREDIENT_NAMES = new Set(['Poulet', 'Dinde', 'Canard', 'Lapin', 'Bœuf haché', 'Steak', 'Rôti de bœuf', 'Agneau', 'Porc', 'Bacon', 'Jambon', 'Lardons', 'Saucisse', 'Chorizo', 'Merguez', 'Boudin', 'Foie gras']);
function classify_recipe_diet(recipe) {
  const names = (recipe.ingredients || []).map(i => typeof i === 'string' ? i : i.name);
  if (names.some(n => FISH_INGREDIENT_NAMES.has(n))) return 'poisson';
  if (names.some(n => MEAT_INGREDIENT_NAMES.has(n))) return 'viande';
  return 'vege';
}

// Nom du jour localisé (lundi, mardi...) via Intl, à partir d'un lundi de référence fixe
// (2024-01-01 est un lundi) — évite d'avoir à traduire les noms de jour à la main dans
// chaque langue, l'API Intl s'en charge correctement (y compris zh/hi/ar).
function ideas_day_label(day) {
  if (day.weekday_offset === null) return I18N.t('feed.weekend_label');
  const d = new Date(Date.UTC(2024, 0, 1 + day.weekday_offset));
  const label = d.toLocaleDateString(DATE_LOCALE_BY_LANG[I18N.getLang()] || 'fr-FR', { weekday: 'long' });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

// Bassins de candidats par créneau x régime (y compris "mixte" = tous régimes confondus),
// triés par popularité — calculé une fois par rendu, réutilisé pour chaque jour/variante.
function build_ideas_pools() {
  const pools = {};
  IDEAS_MEAL_SLOTS.forEach(slot => {
    const pool = all_recipes.filter(r => (r.categories || []).some(c => slot.categories.includes(c)));
    if (!pool.length) return;
    const by_variant = { vege: [], poisson: [], viande: [] };
    pool.forEach(r => by_variant[classify_recipe_diet(r)].push(r));
    const sort_liked = arr => arr.slice().sort((a, b) => (b.likes_count || 0) - (a.likes_count || 0));
    pools[slot.key] = { vege: sort_liked(by_variant.vege), poisson: sort_liked(by_variant.poisson), viande: sort_liked(by_variant.viande), mixte: sort_liked(pool) };
  });
  return pools;
}

// Choisit une recette pour un (jour, créneau, régime) donné : rotation hebdomadaire
// déterministe parmi les 5 recettes les plus aimées du régime, pour que les jours de la
// semaine aient de bonnes chances d'afficher des recettes différentes tout en restant
// stables tant qu'on ne change pas de semaine (même principe que "Cette semaine").
function pick_ideas_recipe(pools, day_key, slot_key, variant) {
  const candidates = pools[slot_key] && pools[slot_key][variant];
  if (!candidates || !candidates.length) return null;
  const top = candidates.slice(0, 5);
  const idx = simple_string_hash(day_key + slot_key + variant + get_iso_week_key()) % top.length;
  return top[idx];
}

function ideas_slot_cell_html(slot, recipe) {
  const cover_image = recipe.cover_image || (recipe.images && recipe.images[0]) || '';
  return `
    <div class="ideas-slot-cell">
      <span class="ideas-slot-label"><i class="fa-solid ${slot.icon}"></i> ${escape_html(I18N.t(`feed.slot_${slot.key}`))}</span>
      <div class="mini_recipe_card" data-recipe-id="${recipe.id}">
        <div class="mini_card_img" style="background-image: url('${escape_attr(cover_image)}')"></div>
        <div class="mini_card_info">
          <h4>${escape_html(recipe.title)}</h4>
          <span class="mini_card_meta"><i class="fa-solid fa-heart"></i> ${recipe.likes_count || 0}</span>
        </div>
      </div>
    </div>`;
}

// Régime choisi par l'utilisateur pour chaque jour (par défaut "mixte" = sans préférence) ;
// vit hors de render_feed_ideas pour survivre aux re-rendus.
let ideas_day_variant = {};

function ideas_nutrition_summary_html(recipes) {
  if (!recipes.length) return '';
  let kcal = 0, protein = 0;
  recipes.forEach(r => {
    const totals = compute_recipe_nutrition(r.steps, 1);
    const servings = r.servings || 1;
    kcal += totals.kcal / servings;
    protein += totals.protein / servings;
  });
  return I18N.t('feed.nutrition_summary', { kcal: Math.round(kcal), protein: Math.round(protein) });
}

function render_feed_ideas() {
  const container = document.getElementById('feed_ideas_calendar');
  if (!container) return;
  const pools = build_ideas_pools();

  if (!Object.keys(pools).length) {
    container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('feed.no_recipes_category'))}</p>`;
    return;
  }

  const week_recipes = [];
  const days_html = IDEAS_DAYS.map(day => {
    const variant = ideas_day_variant[day.key] || 'mixte';
    const slot_cells = [];
    const day_recipes = [];
    IDEAS_MEAL_SLOTS.forEach(slot => {
      const recipe = pick_ideas_recipe(pools, day.key, slot.key, variant);
      if (!recipe) return;
      slot_cells.push(ideas_slot_cell_html(slot, recipe));
      day_recipes.push(recipe);
      week_recipes.push(recipe);
    });

    const variant_chips = IDEAS_VARIANTS.map(v => `
      <button type="button" class="ideas-variant-chip variant-${v} ${variant === v ? 'active' : ''}" data-day="${day.key}" data-variant="${v}">
        <i class="fa-solid ${IDEAS_VARIANT_ICON[v]}"></i> ${escape_html(I18N.t(`feed.variant_${v}`))}
      </button>`).join('');

    const day_total = ideas_nutrition_summary_html(day_recipes);

    return `
      <div class="ideas-day-card">
        <div class="ideas-day-header">
          <h4 class="ideas-day-label">${escape_html(ideas_day_label(day))}</h4>
          <div class="ideas-day-variants">${variant_chips}</div>
        </div>
        ${slot_cells.length
          ? `<div class="ideas-day-slots">${slot_cells.join('')}</div>${day_total ? `<div class="ideas-day-total"><i class="fa-solid fa-chart-simple"></i> ${escape_html(I18N.t('feed.day_total_label'))} : ${day_total}</div>` : ''}`
          : `<p class="ideas-day-empty">${escape_html(I18N.t('feed.ideas_no_variant_today', { variant: I18N.t(`feed.variant_${variant}`) }))}</p>`}
      </div>`;
  }).join('');

  const week_total = ideas_nutrition_summary_html(week_recipes);

  container.innerHTML = `
    ${week_total ? `<div class="ideas-week-total"><i class="fa-solid fa-calendar-week"></i> <strong>${escape_html(I18N.t('feed.week_total_label'))}</strong> : ${week_total}</div>` : ''}
    <div class="ideas-days-grid">${days_html}</div>
  `;

  container.querySelectorAll('.ideas-variant-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      ideas_day_variant[btn.dataset.day] = btn.dataset.variant;
      render_feed_ideas();
    });
  });
  container.querySelectorAll('.mini_recipe_card').forEach(card => {
    card.addEventListener('click', () => show_recipe_detail_page(card.dataset.recipeId));
  });
}

// "Recettes fitness" : pas un vrai système de plan de perte de poids (hors scope), juste
// une recommandation utile — les recettes classées par meilleur ratio protéines/calories
// par portion, en excluant celles dont la nutrition n'a pas pu être calculée du tout.
const fitness_plan_modal = document.getElementById('fitness_plan_modal');
function open_fitness_plan_modal() {
  if (!fitness_plan_modal) return;
  const grid = document.getElementById('fitness_plan_grid');

  const scored = all_recipes.map(r => {
    const totals = compute_recipe_nutrition(r.steps, 1);
    const servings = r.servings || 1;
    return { r, kcal: totals.kcal / servings, protein: totals.protein / servings };
  }).filter(x => x.kcal > 0 && x.protein > 0);

  scored.sort((a, b) => (b.protein / b.kcal) - (a.protein / a.kcal));
  const top = scored.slice(0, 12);

  if (!top.length) {
    grid.innerHTML = `<p class="empty-state">${escape_html(I18N.t('feed.fitness_plan_empty'))}</p>`;
  } else {
    const match_ctx = { show_kcal: true, show_protein: true };
    grid.innerHTML = top.map(x => search_result_card_html(x.r, match_ctx, x)).join('');
    wire_recipe_card_events(grid, top.map(x => x.r));
    grid.querySelectorAll('.search-result-card').forEach(card => {
      card.addEventListener('click', () => fitness_plan_modal.classList.add('hidden'));
    });
  }
  fitness_plan_modal.classList.remove('hidden');
}
document.getElementById('open_fitness_plan_btn')?.addEventListener('click', open_fitness_plan_modal);
document.getElementById('close_fitness_plan_btn')?.addEventListener('click', () => fitness_plan_modal.classList.add('hidden'));

// =====================================================================
// Onglet "Recherche" : trouver une recette selon des objectifs nutritionnels
// (calories/protéines par portion), en plus des filtres habituels (catégorie,
// difficulté, pays) et d'une exclusion d'allergènes.
// =====================================================================
let search_category = null;
let search_difficulty = null;
let search_country = null;
const search_excluded_allergens = new Set();

function render_search_category_filters() {
  const container = document.getElementById('search_category_filters');
  if (!container) return;
  container.innerHTML = [['', I18N.t('common.all')], ...CATEGORIES.map(c => [c, I18N.td('categories', c)])].map(([val, label]) =>
    `<button type="button" class="filter-chip ${search_category === (val || null) ? 'active' : ''}" data-cat="${escape_attr(val)}">${escape_html(label)}</button>`
  ).join('');
  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      search_category = btn.dataset.cat || null;
      render_search_category_filters();
    });
  });
}
function render_search_difficulty_filters() {
  const container = document.getElementById('search_difficulty_filters');
  if (!container) return;
  const options = [['', I18N.t('common.all')], ['facile', I18N.t('publish.difficulty_easy')], ['moyen', I18N.t('publish.difficulty_medium')], ['difficile', I18N.t('publish.difficulty_hard')]];
  container.innerHTML = options.map(([val, label]) =>
    `<button type="button" class="filter-chip ${search_difficulty === (val || null) ? 'active' : ''}" data-diff="${val}">${escape_html(label)}</button>`
  ).join('');
  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      search_difficulty = btn.dataset.diff || null;
      render_search_difficulty_filters();
    });
  });
}
function render_search_allergen_filters() {
  const container = document.getElementById('search_allergen_filters');
  if (!container) return;
  container.innerHTML = Object.entries(ALLERGEN_INFO).map(([key, info]) =>
    `<button type="button" class="filter-chip allergen-filter-chip ${search_excluded_allergens.has(key) ? 'active' : ''}" data-allergen="${key}"><i class="fa-solid ${info.icon}"></i> ${escape_html(I18N.td('allergens', info.label))}</button>`
  ).join('');
  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.allergen;
      if (search_excluded_allergens.has(key)) search_excluded_allergens.delete(key); else search_excluded_allergens.add(key);
      render_search_allergen_filters();
    });
  });
}
render_search_category_filters();
render_search_difficulty_filters();
render_search_allergen_filters();

const search_country_select = document.getElementById('search_country_select');
if (search_country_select) {
  populate_country_select(search_country_select);
  search_country_select.addEventListener('change', () => { search_country = search_country_select.value || null; });
}

async function load_recipes_for_search() {
  await load_recipes();
  render_search_prompt_state();
}

function render_search_prompt_state() {
  const grid = document.getElementById('search_results_grid');
  const count_el = document.getElementById('search_results_count');
  if (count_el) count_el.textContent = '';
  if (grid) grid.innerHTML = `<p class="empty-state">${escape_html(I18N.t('search.prompt_hint'))}</p>`;
}

function run_search() {
  const grid = document.getElementById('search_results_grid');
  if (!grid) return;
  const kcal_min = parseFloat(document.getElementById('search_kcal_min').value);
  const kcal_max = parseFloat(document.getElementById('search_kcal_max').value);
  const protein_min = parseFloat(document.getElementById('search_protein_min').value);
  const has_kcal_min = !isNaN(kcal_min), has_kcal_max = !isNaN(kcal_max), has_protein_min = !isNaN(protein_min);

  let results = all_recipes.filter(r => {
    if (search_category && !(r.categories || []).includes(search_category)) return false;
    if (search_difficulty && (r.difficulty || 'moyen') !== search_difficulty) return false;
    if (search_country && r.country_code !== search_country) return false;
    return true;
  });

  // Le calcul nutritionnel (potentiellement coûteux sur beaucoup de recettes) n'est fait
  // que si un critère nutrition/allergène est réellement demandé — et réutilisé pour
  // l'affichage (pas de second calcul) puisqu'on veut aussi montrer ces valeurs sur
  // les cartes de résultat, vu que c'est justement ce qui a été cherché.
  const needs_nutrition = has_kcal_min || has_kcal_max || has_protein_min || search_excluded_allergens.size > 0;
  const nutrition_by_id = new Map();
  if (needs_nutrition) {
    results = results.filter(r => {
      const totals = compute_recipe_nutrition(r.steps, 1);
      const servings = r.servings || 1;
      const per_serving_kcal = totals.kcal / servings;
      const per_serving_protein = totals.protein / servings;
      nutrition_by_id.set(r.id, { kcal: per_serving_kcal, protein: per_serving_protein });
      if (has_kcal_min && per_serving_kcal < kcal_min) return false;
      if (has_kcal_max && per_serving_kcal > kcal_max) return false;
      if (has_protein_min && per_serving_protein < protein_min) return false;
      if (search_excluded_allergens.size && [...totals.allergens].some(a => search_excluded_allergens.has(a))) return false;
      return true;
    });
  }

  const count_el = document.getElementById('search_results_count');
  if (count_el) count_el.textContent = I18N.t('search.results_count', { count: results.length });

  if (!results.length) {
    grid.innerHTML = all_recipes.length === 0
      ? `<p class="empty-state">${escape_html(I18N.t('feed.empty_be_first'))}</p>`
      : `<p class="empty-state">${escape_html(I18N.t('search.empty'))}</p>`;
    return;
  }
  const match_ctx = { show_kcal: has_kcal_min || has_kcal_max, show_protein: has_protein_min };
  grid.innerHTML = results.map(r => search_result_card_html(r, match_ctx, nutrition_by_id.get(r.id))).join('');
  wire_recipe_card_events(grid, results);
}

// Carte de résultat de recherche : volontairement plus légère que la carte du feed (pas
// d'auteur, de likes ni d'actions sociales — on est en train de comparer des recettes, pas
// de parcourir un fil d'actualité), et met en avant les valeurs nutritionnelles précises
// quand elles ont servi de critère de recherche (jusque-là, on savait juste que la recette
// passait le filtre, sans voir la valeur exacte).
function search_result_card_html(r, match_ctx, nutrition) {
  const primary_cat = (r.categories && r.categories[0]) || 'Plat';
  const cover_image = r.cover_image || (r.images && r.images[0]) || null;
  const total_time = compute_recipe_total_time(r);
  const difficulty_label = I18N.td('difficulty', r.difficulty || 'moyen');
  const show_nutrition = (match_ctx.show_kcal || match_ctx.show_protein) && nutrition;
  const nutrition_line = show_nutrition
    ? `<div class="search-match-line">
        ${match_ctx.show_kcal ? `<span class="search-match-value"><i class="fa-solid fa-fire"></i> ${Math.round(nutrition.kcal)} kcal</span>` : ''}
        ${match_ctx.show_protein ? `<span class="search-match-value"><i class="fa-solid fa-dumbbell"></i> ${Math.round(nutrition.protein)} g</span>` : ''}
      </div>`
    : '';

  return `
  <article class="recipe-card search-result-card" data-recipe-id="${r.id}">
    <div class="recipe-card-media">
      ${cover_image
        ? `<img class="recipe-cover" src="${escape_attr(cover_image)}" alt="">`
        : `<div class="recipe-cover recipe-cover-placeholder"><i class="fa-solid fa-utensils"></i></div>`}
      <div class="recipe-card-media-top">
        <span class="stripe-badge cat-${escape_html(primary_cat)}">${escape_html(I18N.td('categories', primary_cat))}</span>
      </div>
    </div>
    <div class="recipe-body">
      <h2 class="recipe-card-title">${escape_html(r.title)}</h2>
      ${nutrition_line}
      <div class="recipe-card-stats-row">
        ${total_time ? `<span class="recipe-card-stat"><i class="fa-solid fa-stopwatch"></i> ${total_time} ${escape_html(I18N.t('common.minutes_short'))}</span>` : ''}
        <span class="recipe-card-stat"><i class="fa-solid fa-gauge"></i> ${escape_html(difficulty_label)}</span>
        ${r.servings ? `<span class="recipe-card-stat"><i class="fa-solid fa-users"></i> ${r.servings} ${escape_html(I18N.t('common.servings'))}</span>` : ''}
      </div>
    </div>
  </article>`;
}
document.getElementById('run_search_btn')?.addEventListener('click', run_search);
document.getElementById('reset_search_btn')?.addEventListener('click', () => {
  search_category = null; search_difficulty = null; search_country = null; search_excluded_allergens.clear();
  document.getElementById('search_kcal_min').value = '';
  document.getElementById('search_kcal_max').value = '';
  document.getElementById('search_protein_min').value = '';
  if (search_country_select) search_country_select.value = '';
  render_search_category_filters();
  render_search_difficulty_filters();
  render_search_allergen_filters();
  render_search_prompt_state();
});

function show_translate_stub() {
  show_alert_modal(I18N.t('common.translate_stub'), { type: 'info' });
}

function recipe_card_html(r) {
  const primary_cat = (r.categories && r.categories[0]) || 'Plat';
  const author_name = r.profiles ? r.profiles.username : I18N.t('common.anonymous');
  const donation_link = r.profiles ? r.profiles.donation_link : null;
  const author_avatar_url = r.profiles ? r.profiles.avatar_url : null;
  const author_initial = (author_name || '?')[0].toUpperCase();
  const is_liked = liked_recipe_ids.has(r.id);
  const tag_chips = [...(r.categories||[]), ...(r.tags||[])]
    .map(t => `<span class="tag-chip">${escape_html(I18N.td(CATEGORIES.includes(t) ? 'categories' : 'tags', t))}</span>`).join('');
  const cover_image = r.cover_image || (r.images && r.images[0]) || null;
  const flag_html = r.country_code ? (country_flag_from_code(r.country_code) || '🌍') : '';
  const total_time = compute_recipe_total_time(r);
  const difficulty_label = I18N.td('difficulty', r.difficulty || 'moyen');

  return `
  <article class="recipe-card" data-recipe-id="${r.id}">
    <div class="recipe-card-media">
      ${cover_image
        ? `<img class="recipe-cover" src="${escape_attr(cover_image)}" alt="">`
        : `<div class="recipe-cover recipe-cover-placeholder"><i class="fa-solid fa-utensils"></i></div>`}
      <div class="recipe-card-media-top">
        <span class="stripe-badge cat-${escape_html(primary_cat)}">${escape_html(I18N.td('categories', primary_cat))}</span>
        ${r.rating_count ? `<span class="recipe-card-rating-badge"><i class="fa-solid fa-star"></i> ${Number(r.rating_avg).toFixed(1)} <em>(${r.rating_count})</em></span>` : ''}
      </div>
    </div>
    <div class="recipe-body">
      <h2 class="recipe-card-title">${escape_html(r.title)}</h2>
      <div class="recipe-card-header">
        <button type="button" class="recipe-card-author" data-author-id="${escape_attr(r.author_id)}">
          <span class="avatar recipe-card-avatar">${author_avatar_url ? `<img src="${escape_attr(author_avatar_url)}" alt="">` : author_initial}</span>
          <span class="recipe-card-author-info">
            <span class="recipe-card-author-name">${escape_html(author_name)}${official_badge_html(r.author_id)}${ceo_badge_html(r.author_id)}</span>
            <span class="recipe-card-author-sub">${r.country ? flag_html + ' ' + escape_html(I18N.td('countries', r.country)) + ' · ' : ''}${format_relative_date(r.created_at)}</span>
          </span>
        </button>
      </div>
      <div class="recipe-card-stats-row">
        ${total_time ? `<span class="recipe-card-stat"><i class="fa-solid fa-stopwatch"></i> ${total_time} ${escape_html(I18N.t('common.minutes_short'))}</span>` : ''}
        <span class="recipe-card-stat"><i class="fa-solid fa-gauge"></i> ${escape_html(difficulty_label)}</span>
        ${r.servings ? `<span class="recipe-card-stat"><i class="fa-solid fa-users"></i> ${r.servings} ${escape_html(I18N.t('common.servings'))}</span>` : ''}
        ${r.views_count ? `<span class="recipe-card-stat"><i class="fa-solid fa-eye"></i> ${r.views_count}</span>` : ''}
      </div>
      <div class="chips-row">${tag_chips}</div>
      <div class="recipe-actions">
        <button class="action-btn like-btn ${is_liked ? 'liked' : ''}" data-recipe-id="${escape_attr(r.id)}"><i class="fa-solid fa-heart"></i> <span class="like-count">${r.likes_count || 0}</span></button>
        <span class="action-btn"><i class="fa-regular fa-comment"></i> ${r.comments_count || 0}</span>
        <button class="translate-btn"><i class="fa-solid fa-language"></i> ${escape_html(I18N.t('common.translate_btn'))}</button>
        ${donation_link ? `<a class="donate-btn" href="${escape_attr(donation_link)}" target="_blank" rel="noopener"><i class="fa-solid fa-hand-holding-heart"></i> ${escape_html(I18N.t('common.donate_btn'))}</a>` : ''}
      </div>
    </div>
  </article>`;
}

function update_like_ui_everywhere(recipe_id, is_liked, likes_count) {
  document.querySelectorAll(`.like-btn[data-recipe-id="${CSS.escape(recipe_id)}"]`).forEach(btn => {
    btn.classList.toggle('liked', is_liked);
    const count_el = btn.querySelector('.like-count');
    if (count_el) count_el.textContent = likes_count;
  });
}

async function toggle_like(recipe_id) {
  if (!current_user) { auth_modal.classList.remove('hidden'); return; }
  const already_liked = liked_recipe_ids.has(recipe_id);
  const recipe = all_recipes.find((r) => r.id === recipe_id);
  const was_count = recipe ? (recipe.likes_count || 0) : 0;
  const next_count = Math.max(0, was_count + (already_liked ? -1 : 1));

  if (already_liked) {
    liked_recipe_ids.delete(recipe_id);
  } else {
    liked_recipe_ids.add(recipe_id);
  }
  if (recipe) recipe.likes_count = next_count;
  update_like_ui_everywhere(recipe_id, !already_liked, next_count);

  try {
    if (already_liked) {
      const { error } = await supabase.from('likes').delete().eq('recipe_id', recipe_id).eq('user_id', current_user.id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from('likes').insert([{ recipe_id, user_id: current_user.id }]);
      if (error) throw error;
    }
  } catch (err) {
    // rollback en cas d'echec reseau/serveur
    if (already_liked) { liked_recipe_ids.add(recipe_id); } else { liked_recipe_ids.delete(recipe_id); }
    if (recipe) recipe.likes_count = was_count;
    update_like_ui_everywhere(recipe_id, already_liked, was_count);
    show_alert_modal(I18N.t('common.generic_error'), { type: 'error' });
    return;
  }

  refresh_session();
}

function escape_html(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}
function escape_attr(str) { return escape_html(str); }

// Date relative façon fil d'actualité ("il y a 2 j") plutôt qu'une date brute.
const DATE_LOCALE_BY_LANG = { fr: 'fr-FR', en: 'en-GB', pt: 'pt-PT', es: 'es-ES', zh: 'zh-CN', hi: 'hi-IN', ar: 'ar-SA' };
function format_relative_date(iso) {
  if (!iso) return '';
  const diff_ms = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff_ms / 60000);
  if (min < 1) return I18N.t('time.just_now');
  if (min < 60) return I18N.t('time.minutes_ago', { count: min });
  const hours = Math.floor(min / 60);
  if (hours < 24) return I18N.t('time.hours_ago', { count: hours });
  const days = Math.floor(hours / 24);
  if (days < 7) return I18N.t('time.days_ago', { count: days });
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return I18N.t('time.weeks_ago', { count: weeks });
  return new Date(iso).toLocaleDateString(DATE_LOCALE_BY_LANG[I18N.getLang()] || 'fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Popup d'alerte/validation réutilisable, à la place de alert() natif (moins lisible,
// pas stylée, bloque le fil d'exécution sans donner de contexte). `type` ∈ 'error' |
// 'success' | 'info' — choisit l'icône/couleur et, si `title` n'est pas fourni, un
// titre par défaut adapté.
const app_alert_modal = document.getElementById('app_alert_modal');
const ALERT_ICON_BY_TYPE = { error: 'fa-triangle-exclamation', success: 'fa-circle-check', info: 'fa-circle-info' };
function show_alert_modal(message, opts) {
  opts = opts || {};
  const type = opts.type || 'info';
  if (!app_alert_modal) { alert(message); return; }
  const icon_el = app_alert_modal.querySelector('.app-alert-icon');
  icon_el.className = `app-alert-icon type-${type}`;
  icon_el.innerHTML = `<i class="fa-solid ${ALERT_ICON_BY_TYPE[type] || ALERT_ICON_BY_TYPE.info}"></i>`;
  document.getElementById('app_alert_title').textContent = opts.title || I18N.t(`common.alert_title_${type}`);
  document.getElementById('app_alert_message').textContent = message;
  document.getElementById('app_alert_ok_btn').textContent = I18N.t('common.alert_ok');
  app_alert_modal.classList.remove('hidden');
}
document.getElementById('close_app_alert_btn')?.addEventListener('click', () => app_alert_modal.classList.add('hidden'));
document.getElementById('app_alert_ok_btn')?.addEventListener('click', () => app_alert_modal.classList.add('hidden'));

// Petite notification flottante réutilisable (confirmation d'ajout, etc.)
let toast_hide_timeout = null;
function show_toast(message, icon) {
  let el = document.getElementById('dishful_toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'dishful_toast';
    el.className = 'dishful-toast';
    document.body.appendChild(el);
  }
  el.innerHTML = `<i class="fa-solid ${icon || 'fa-circle-check'}"></i> ${escape_html(message)}`;
  el.classList.add('visible');
  clearTimeout(toast_hide_timeout);
  toast_hide_timeout = setTimeout(() => el.classList.remove('visible'), 2600);
}

// Sélecteur de temps interactif : boutons -/+ et champ tapable, plutôt que de taper
// un nombre de minutes à la main sans repère. Pilote un <input type="number"> existant,
// donc tout le code qui lit sa valeur ailleurs continue de fonctionner sans changement.
function init_time_pickers() {
  document.querySelectorAll('.time-picker').forEach(picker => {
    const target_id = picker.dataset.target;
    const input = document.getElementById(target_id);
    if (!input) return;
    const adjust = (delta) => {
      const current = parseInt(input.value) || 0;
      input.value = Math.max(0, current + delta);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    };
    picker.querySelector('.time-picker-minus')?.addEventListener('click', () => adjust(-1));
    picker.querySelector('.time-picker-plus')?.addEventListener('click', () => adjust(1));
  });
}
init_time_pickers();

// ---------- Horloge à glisser (réglage principal du temps) ----------
// Toujours affichée. Un tour complet du point autour du cadran = 60 minutes. Se
// règle à la souris (ou au doigt, via Pointer Events) et pilote le même
// <input type="number"> que le stepper -/+ juste en dessous : tout reste
// synchronisé quel que soit le sélecteur utilisé. Tourner au-delà de midi/minuit
// (ex : glisser deux tours complets) monte au-delà de 60 min, utile pour un temps
// de repos long.
const TIME_CLOCK_CX = 110, TIME_CLOCK_CY = 110, TIME_CLOCK_R_HAND = 74;

function sync_time_clock_dial(target_id) {
  const dial = document.querySelector(`.time-clock-dial[data-target="${target_id}"]`);
  const input = document.getElementById(target_id);
  if (!dial || !input) return;
  const min = parseInt(input.value) || 0;
  const angle = ((((min % 60) + 60) % 60) / 60) * 2 * Math.PI - Math.PI / 2;
  const hx = TIME_CLOCK_CX + Math.cos(angle) * TIME_CLOCK_R_HAND;
  const hy = TIME_CLOCK_CY + Math.sin(angle) * TIME_CLOCK_R_HAND;
  dial.querySelector('.time-clock-hand').setAttribute('x2', hx);
  dial.querySelector('.time-clock-hand').setAttribute('y2', hy);
  dial.querySelector('.time-clock-handle').setAttribute('cx', hx);
  dial.querySelector('.time-clock-handle').setAttribute('cy', hy);
}

function init_time_clock_dials() {
  document.querySelectorAll('.time-clock-dial').forEach(dial => {
    const target_id = dial.dataset.target;
    const input = document.getElementById(target_id);
    const svg = dial.querySelector('.time-clock-dial-svg');
    const ticks_group = dial.querySelector('.time-clock-ticks');
    if (!input || !svg || !ticks_group) return;

    // Graduations fixes (0/5/10.../55), dessinées une seule fois à l'init.
    for (let m = 0; m < 60; m += 5) {
      const angle = (m / 60) * 2 * Math.PI - Math.PI / 2;
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', TIME_CLOCK_CX + Math.cos(angle) * 90);
      line.setAttribute('y1', TIME_CLOCK_CY + Math.sin(angle) * 90);
      line.setAttribute('x2', TIME_CLOCK_CX + Math.cos(angle) * 98);
      line.setAttribute('y2', TIME_CLOCK_CY + Math.sin(angle) * 98);
      ticks_group.appendChild(line);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', TIME_CLOCK_CX + Math.cos(angle) * 78);
      text.setAttribute('y', TIME_CLOCK_CY + Math.sin(angle) * 78);
      text.textContent = String(m === 0 ? 60 : m);
      ticks_group.appendChild(text);
    }

    input.addEventListener('input', () => sync_time_clock_dial(target_id));
    sync_time_clock_dial(target_id);

    function angle_to_minutes(client_x, client_y) {
      const rect = svg.getBoundingClientRect();
      const scale = 220 / rect.width;
      const x = (client_x - rect.left) * scale - TIME_CLOCK_CX;
      const y = (client_y - rect.top) * scale - TIME_CLOCK_CY;
      let angle = Math.atan2(y, x) + Math.PI / 2;
      if (angle < 0) angle += 2 * Math.PI;
      const min = Math.round((angle / (2 * Math.PI)) * 60);
      return min === 60 ? 0 : min;
    }

    let dragging = false;
    let current_total = parseInt(input.value) || 0;

    function apply_pointer(client_x, client_y) {
      const raw_min = angle_to_minutes(client_x, client_y);
      const prev_mod = ((current_total % 60) + 60) % 60;
      let delta = raw_min - prev_mod;
      if (delta > 30) delta -= 60;
      if (delta < -30) delta += 60;
      current_total = Math.max(0, current_total + delta);
      input.value = current_total;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    svg.addEventListener('pointerdown', (e) => {
      dragging = true;
      svg.classList.add('dragging');
      svg.setPointerCapture(e.pointerId);
      current_total = parseInt(input.value) || 0;
      apply_pointer(e.clientX, e.clientY);
    });
    svg.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      apply_pointer(e.clientX, e.clientY);
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(evt => {
      svg.addEventListener(evt, () => { dragging = false; svg.classList.remove('dragging'); });
    });
  });
}
init_time_clock_dials();

// ---------- Bulle d'info à la demande (au lieu d'un texte toujours affiché) ----------
// Utilisé pour déplacer des explications hors du flux normal, afin qu'elles n'agrandissent
// jamais la popup qui les contient : elles n'apparaissent qu'au clic sur l'icône (i).
document.querySelectorAll('.info-icon-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const tooltip = btn.closest('.info-tooltip');
    const was_open = tooltip.classList.contains('open');
    document.querySelectorAll('.info-tooltip.open').forEach(t => t.classList.remove('open'));
    if (!was_open) tooltip.classList.add('open');
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.info-tooltip.open').forEach(t => t.classList.remove('open'));
});

// =====================================================================
// 9bis. RECADRAGE D'IMAGE (zoom + déplacement) — réutilisé partout où on
// choisit une photo : avatar, bannière, couverture de recette, photo d'étape.
// =====================================================================
const image_crop_modal = document.getElementById('image_crop_modal');
const crop_viewport = document.getElementById('crop_viewport');
const crop_image_el = document.getElementById('crop_image');
const crop_zoom_range = document.getElementById('crop_zoom_range');

// { natural_w, natural_h, base_scale, scale, offset_x, offset_y, object_url, resolve }
let crop_state = null;

function crop_clamp_offset() {
  const rect = crop_viewport.getBoundingClientRect();
  const scaled_w = crop_state.natural_w * crop_state.scale;
  const scaled_h = crop_state.natural_h * crop_state.scale;
  const min_x = Math.min(0, rect.width - scaled_w);
  const min_y = Math.min(0, rect.height - scaled_h);
  crop_state.offset_x = Math.min(0, Math.max(crop_state.offset_x, min_x));
  crop_state.offset_y = Math.min(0, Math.max(crop_state.offset_y, min_y));
}

function crop_apply_transform() {
  crop_image_el.style.width = `${crop_state.natural_w * crop_state.scale}px`;
  crop_image_el.style.height = `${crop_state.natural_h * crop_state.scale}px`;
  crop_image_el.style.transform = `translate(${crop_state.offset_x}px, ${crop_state.offset_y}px)`;
}

function crop_set_zoom(new_scale, focal_x, focal_y) {
  const rect = crop_viewport.getBoundingClientRect();
  const fx = focal_x ?? rect.width / 2;
  const fy = focal_y ?? rect.height / 2;
  const min_scale = crop_state.base_scale;
  const max_scale = crop_state.base_scale * 3;
  new_scale = Math.min(Math.max(new_scale, min_scale), max_scale);

  // garde le point sous le curseur (ou le centre) fixe pendant le zoom
  const ratio = new_scale / crop_state.scale;
  crop_state.offset_x = fx - (fx - crop_state.offset_x) * ratio;
  crop_state.offset_y = fy - (fy - crop_state.offset_y) * ratio;
  crop_state.scale = new_scale;
  crop_clamp_offset();
  crop_apply_transform();
  crop_zoom_range.value = Math.round((crop_state.scale / crop_state.base_scale) * 100);
}

// Ouvre la popup de recadrage pour `file`, avec le ratio largeur/hauteur voulu
// (1,1 pour un avatar carré ; 3,1 pour une bannière large ; etc). Résout avec le
// fichier recadré (File, JPEG) ou `null` si l'utilisateur annule.
function open_image_cropper(file, aspect_w, aspect_h) {
  return new Promise((resolve) => {
    const object_url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      crop_viewport.style.setProperty('--crop-aspect', `${aspect_w} / ${aspect_h}`);
      crop_image_el.src = object_url;
      image_crop_modal.classList.remove('hidden');

      // attend que la viewport ait ses vraies dimensions (aspect-ratio tout juste appliqué)
      requestAnimationFrame(() => {
        const rect = crop_viewport.getBoundingClientRect();
        const base_scale = Math.max(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
        crop_state = {
          natural_w: img.naturalWidth, natural_h: img.naturalHeight,
          base_scale, scale: base_scale,
          offset_x: (rect.width - img.naturalWidth * base_scale) / 2,
          offset_y: (rect.height - img.naturalHeight * base_scale) / 2,
          object_url, resolve
        };
        crop_zoom_range.value = 100;
        crop_apply_transform();
      });
    };
    img.src = object_url;
  });
}

function crop_close(result) {
  if (crop_state) {
    URL.revokeObjectURL(crop_state.object_url);
    crop_state.resolve(result);
    crop_state = null;
  }
  image_crop_modal.classList.add('hidden');
}

// Glisser pour repositionner (souris + tactile, via Pointer Events)
let crop_drag = null;
crop_viewport.addEventListener('pointerdown', (e) => {
  if (!crop_state) return;
  crop_drag = { start_x: e.clientX, start_y: e.clientY, offset_x: crop_state.offset_x, offset_y: crop_state.offset_y };
  crop_viewport.classList.add('dragging');
  crop_viewport.setPointerCapture(e.pointerId);
});
crop_viewport.addEventListener('pointermove', (e) => {
  if (!crop_drag || !crop_state) return;
  crop_state.offset_x = crop_drag.offset_x + (e.clientX - crop_drag.start_x);
  crop_state.offset_y = crop_drag.offset_y + (e.clientY - crop_drag.start_y);
  crop_clamp_offset();
  crop_apply_transform();
});
['pointerup', 'pointercancel', 'pointerleave'].forEach(evt => {
  crop_viewport.addEventListener(evt, () => { crop_drag = null; crop_viewport.classList.remove('dragging'); });
});
crop_viewport.addEventListener('wheel', (e) => {
  if (!crop_state) return;
  e.preventDefault();
  const rect = crop_viewport.getBoundingClientRect();
  const factor = e.deltaY < 0 ? 1.08 : 0.92;
  crop_set_zoom(crop_state.scale * factor, e.clientX - rect.left, e.clientY - rect.top);
}, { passive: false });

crop_zoom_range.addEventListener('input', () => {
  if (!crop_state) return;
  crop_set_zoom(crop_state.base_scale * (Number(crop_zoom_range.value) / 100));
});

document.getElementById('crop_cancel_btn').addEventListener('click', () => crop_close(null));
document.getElementById('close_crop_modal_btn').addEventListener('click', () => crop_close(null));

document.getElementById('crop_confirm_btn').addEventListener('click', () => {
  if (!crop_state) return crop_close(null);
  const rect = crop_viewport.getBoundingClientRect();
  // Région visible, exprimée en pixels de l'image d'origine (espace "naturel").
  const src_x = -crop_state.offset_x / crop_state.scale;
  const src_y = -crop_state.offset_y / crop_state.scale;
  const src_w = rect.width / crop_state.scale;
  const src_h = rect.height / crop_state.scale;

  const OUTPUT_MAX = 1400;
  const output_w = rect.width >= rect.height ? OUTPUT_MAX : Math.round(OUTPUT_MAX * (rect.width / rect.height));
  const output_h = rect.width >= rect.height ? Math.round(OUTPUT_MAX * (rect.height / rect.width)) : OUTPUT_MAX;

  const canvas = document.createElement('canvas');
  canvas.width = output_w;
  canvas.height = output_h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(crop_image_el, src_x, src_y, src_w, src_h, 0, 0, output_w, output_h);

  canvas.toBlob((blob) => {
    if (!blob) return crop_close(null);
    crop_close(new File([blob], 'crop.jpg', { type: 'image/jpeg' }));
  }, 'image/jpeg', 0.9);
});

// =====================================================================
// 10. PROFILE TAB
// =====================================================================
let current_avatar_url = "";
let current_banner_url = "";

// Chargement des données Supabase dans le profil
async function render_profile_tab() {
  if (!supabase) return;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error || !profile) return;

  // Injection des champs texte
  document.getElementById("profile_username_input").value = profile.username || "";
  document.getElementById("profile_first_name").value = profile.first_name || "";
  document.getElementById("profile_last_name").value = profile.last_name || "";
  document.getElementById("profile_nationality").value = profile.nationality_code || "";
  document.getElementById("profile_bio").value = profile.bio || "";

  // En-tête profil
  const display_name = `${profile.first_name || ""} ${profile.last_name || ""}`.trim();
  document.getElementById("profile_display_name").textContent = display_name || I18N.t('common.unknown_user');
  document.getElementById("profile_username_text").textContent = profile.username ? `@${profile.username}` : "@username";

  // Niveau et XP : niveau N nécessite (N-1)*100 XP, et se termine à N*100 XP.
  // La barre montre la progression DANS le niveau actuel, pas le total brut.
  const user_level = profile.user_level || 1;
  const xp_points = profile.xp_points || 0;
  const xp_for_current_level = (user_level - 1) * 100;
  const xp_in_current_level = xp_points - xp_for_current_level;
  const xp_percentage = Math.min(Math.max((xp_in_current_level / 100) * 100, 0), 100);

  document.getElementById("profile_level").textContent = I18N.t('profile.level_short_display', { n: user_level });
  document.getElementById("profile_xp_text").textContent = I18N.t('profile.level_progress', { xp: xp_in_current_level, level: user_level, total: xp_points });
  document.getElementById("profile_xp_fill").style.width = `${xp_percentage}%`;

  // Email de connexion (vient de auth.users, pas de la table profiles)
  const email_display = document.getElementById("profile_email_display");
  if (email_display) email_display.value = user.email || "";

  // Images
  current_avatar_url = profile.avatar_url || "";
  current_banner_url = profile.banner_url || "";

  const avatar_el = document.getElementById("profile_avatar");
  if (current_avatar_url) {
    avatar_el.style.backgroundImage = `url('${current_avatar_url}')`;
    avatar_el.style.backgroundSize = "cover";
    avatar_el.textContent = "";
  } else {
    avatar_el.style.backgroundImage = "";
    avatar_el.textContent = (profile.first_name ? profile.first_name[0] : profile.username[0] || "U").toUpperCase();
  }

  if (current_banner_url) {
    document.getElementById("profile_banner_preview").style.backgroundImage = `url('${current_banner_url}')`;
  }
  render_badges_tab();
  render_my_recipes_tab()
}

// Enregistrement des modifications
const profile_form = document.getElementById("profile_form");
  if (profile_form) {
    profile_form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!supabase) return;

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return show_alert_modal(I18N.t('common.login_required'), { type: 'info' });

    const nationality_code_val = document.getElementById("profile_nationality").value;
    const nationality_country = country_list.find(c => c.code === nationality_code_val);

    const updated_data = {
      username: document.getElementById("profile_username_input").value,
      first_name: document.getElementById("profile_first_name").value,
      last_name: document.getElementById("profile_last_name").value,
      nationality: nationality_country ? nationality_country.name : null,
      nationality_code: nationality_code_val || null,
      bio: document.getElementById("profile_bio").value,
      donation_link: document.getElementById("profile_donation_input").value,
      avatar_url: current_avatar_url,
      banner_url: current_banner_url
    };

      const { error } = await supabase
        .from("profiles")
        .update(updated_data)
        .eq("id", user.id);

      if (error) {
        show_alert_modal(error.message, { type: 'error', title: I18N.t('common.alert_title_generic_error') });
      } else {
        show_alert_modal(I18N.t('profile.saved_profile_msg'), { type: 'success' });
        await refresh_session();
      }
    });
  }

  


// Téléversement d'image vers le bucket Supabase "avatars"
async function upload_profile_image(file, image_type) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !file) return null;

  const file_ext = file.name.split('.').pop();
  const file_path = `${user.id}/${image_type}_${Date.now()}.${file_ext}`;

  const { error } = await supabase.storage.from("avatars").upload(file_path, file);
  if (error) {
    show_alert_modal(I18N.t('common.error_upload_image') + error.message, { type: 'error', title: I18N.t('common.alert_title_generic_error') });
    return null;
  }

  const { data } = supabase.storage.from("avatars").getPublicUrl(file_path);
  return data.publicUrl;
}

// Événements d'upload
document.getElementById("avatar_upload_input")?.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const cropped = await open_image_cropper(file, 1, 1);
  if (!cropped) return;
  const url = await upload_profile_image(cropped, "avatar");
  if (url) {
    current_avatar_url = url;
    const avatar_el = document.getElementById("profile_avatar");
    avatar_el.style.backgroundImage = `url('${url}')`;
    avatar_el.style.backgroundSize = "cover";
    avatar_el.textContent = "";
  }
});

document.getElementById("banner_upload_input")?.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const cropped = await open_image_cropper(file, 3, 1);
  if (!cropped) return;
  const url = await upload_profile_image(cropped, "banner");
  if (url) {
    current_banner_url = url;
    document.getElementById("profile_banner_preview").style.backgroundImage = `url('${url}')`;
  }
});

async function render_badges_tab() {
  if (!supabase || !current_user) return;

  const { data: user_recipes } = await supabase
    .from("recipes")
    .select("id, likes_count")
    .eq("author_id", current_user.id);

  const total_published = user_recipes ? user_recipes.length : 0;
  const total_likes = user_recipes
    ? user_recipes.reduce((acc, r) => acc + (r.likes_count || 0), 0)
    : 0;
  const user_level = current_profile?.user_level || 1;

  const equipped_badge_id = current_profile?.equipped_badge || null;
  const all_badges = [...recipe_badge_list, ...like_badge_list, ...level_badge_list];
  const active_badge = all_badges.find((b) => b.id === equipped_badge_id);

  const equipped_box = document.getElementById("equipped_badge_box");
  if (active_badge) {
    equipped_box.innerHTML = `
      <div class="badge_icon">${active_badge.icon}</div>
      <div class="badge_name">${escape_html(I18N.td('badges', active_badge.name))}</div>
    `;
    document.getElementById("equipped_badge_display").textContent = `${active_badge.icon} ${I18N.td('badges', active_badge.name)}`;
  } else {
    equipped_box.innerHTML = `<span>${escape_html(I18N.t('profile.no_badge_equipped'))}</span>`;
    document.getElementById("equipped_badge_display").textContent = "";
  }

  render_badge_grid("recipe_badges_grid", recipe_badge_list, total_published, equipped_badge_id, I18N.t('profile.unit_recipes'), true);
  render_badge_grid("like_badges_grid", like_badge_list, total_likes, equipped_badge_id, I18N.t('profile.unit_likes'), true);
  render_badge_grid("level_badges_grid", level_badge_list, user_level, equipped_badge_id, I18N.t('profile.unit_levels'), true);
}

// `interactive` doit rester à false sur un profil PUBLIC (celui de quelqu'un d'autre) :
// on ne doit jamais pouvoir équiper un badge qui n'est pas le sien.
function render_badge_grid(container_id, badges, current_count, equipped_id, label, interactive) {
  const container = document.getElementById(container_id);
  if (!container) return;

  container.innerHTML = badges.map((badge) => {
    const is_unlocked = current_count >= badge.count;
    const is_equipped = badge.id === equipped_id;

    let card_class = "badge_card";
    if (is_equipped) card_class += " equipped";
    else if (is_unlocked) card_class += " unlocked";
    else card_class += " locked";

    let btn_label = I18N.t('common.locked');
    if (is_equipped) btn_label = I18N.t('common.equipped');
    else if (is_unlocked) btn_label = interactive ? I18N.t('common.equip') : I18N.t('common.unlocked');

    return `
      <div class="${card_class}" data-badge-id="${badge.id}" data-unlocked="${is_unlocked}">
        <div class="badge_icon">${badge.icon}</div>
        <div class="badge_name">${escape_html(I18N.td('badges', badge.name))}</div>
        <div class="badge_desc">${badge.count} ${escape_html(label)} (${Math.min(current_count, badge.count)}/${badge.count})</div>
        <button type="button" class="badge_status_btn">${escape_html(btn_label)}</button>
      </div>
    `;
  }).join("");

  if (interactive) {
    container.querySelectorAll(".badge_card.unlocked").forEach((card) => {
      card.addEventListener("click", () => equip_badge(card.dataset.badgeId));
    });
  }
}

async function equip_badge(badge_id) {
  if (!supabase || !current_user) return;

  const new_badge = current_profile?.equipped_badge === badge_id ? null : badge_id;

  const { error } = await supabase
    .from("profiles")
    .update({ equipped_badge: new_badge })
    .eq("id", current_user.id);

  if (!error) {
    await refresh_session();
    render_badges_tab();
  }
}

async function render_my_recipes_tab() {
  if (!supabase || !current_user) return;

  // 1. Recettes publiées par l'utilisateur
  const my_published = all_recipes.filter((r) => r.author_id === current_user.id);
  render_mini_recipes_grid("user_published_recipes", my_published);

  // 2. Recettes sauvegardées (likées)
  const my_saved = all_recipes.filter((r) => liked_recipe_ids.has(r.id));
  
  // Remplir les filtres (pays / tags) de manière dynamique
  populate_saved_filters(my_saved);
  apply_saved_recipes_filter(my_saved);
}

function render_mini_recipes_grid(container_id, recipes) {
  const container = document.getElementById(container_id);
  if (!container) return;

  if (recipes.length === 0) {
    container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('common.no_recipe_found'))}</p>`;
    return;
  }

  container.innerHTML = recipes.map((r) => {
    const cover_image = r.cover_image || (r.images && r.images[0]) || "";
    return `
      <div class="mini_recipe_card" data-recipe-id="${r.id}">
        <div class="mini_card_img" style="background-image: url('${escape_attr(cover_image)}')"></div>
        <div class="mini_card_info">
          <h4>${escape_html(r.title)}</h4>
          <span class="mini_card_meta">${r.country ? escape_html(I18N.td('countries', r.country)) : escape_html(I18N.t('common.recipe'))} · ❤️ ${r.likes_count || 0}</span>
        </div>
      </div>
    `;
  }).join("");

  // Écouteur pour ouvrir la modale au clic
 container.querySelectorAll(".mini_recipe_card").forEach((card) => {
  card.addEventListener("click", () => show_recipe_detail_page(card.dataset.recipeId));
  });
}

function populate_saved_filters(saved_recipes) {
  const country_select = document.getElementById("saved_filter_country");
  const tag_select = document.getElementById("saved_filter_tag");
  if (!country_select || !tag_select) return;

  const countries = [...new Set(saved_recipes.map((r) => r.country).filter(Boolean))];
  const tags = [...new Set(saved_recipes.flatMap((r) => [...(r.categories || []), ...(r.tags || [])]))];

  country_select.innerHTML = `<option value="">${escape_html(I18N.t('common.all_countries'))}</option>` +
    countries.map((c) => `<option value="${escape_attr(c)}">${escape_html(I18N.td('countries', c))}</option>`).join("");

  tag_select.innerHTML = `<option value="">${escape_html(I18N.t('profile.all_tags'))}</option>` +
    tags.map((t) => `<option value="${escape_attr(t)}">${escape_html(I18N.td(CATEGORIES.includes(t) ? 'categories' : 'tags', t))}</option>`).join("");

  const handle_filter_change = () => apply_saved_recipes_filter(saved_recipes);
  country_select.onchange = handle_filter_change;
  tag_select.onchange = handle_filter_change;
}

function apply_saved_recipes_filter(saved_recipes) {
  const country_val = document.getElementById("saved_filter_country")?.value || "";
  const tag_val = document.getElementById("saved_filter_tag")?.value || "";

  const filtered = saved_recipes.filter((r) => {
    const match_country = !country_val || r.country === country_val;
    const recipe_tags = [...(r.categories || []), ...(r.tags || [])];
    const match_tag = !tag_val || recipe_tags.includes(tag_val);
    return match_country && match_tag;
  });

  render_mini_recipes_grid("user_saved_recipes", filtered);
}

function get_visible_tab_name() {
  const tab_ids = ["feed", "publish", "profile", "recipe-detail", "leaderboard", "public-profile", "search"];
  for (const id of tab_ids) {
    const el = document.getElementById("tab-" + id);
    if (el && !el.classList.contains("hidden")) return id;
  }
  return "feed";
}

function switch_tab(tab_name) {
  document.querySelectorAll("nav.tabs button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab_name);
  });

  ["feed", "publish", "profile", "recipe-detail", "leaderboard", "public-profile", "search"].forEach((tab_id) => {
    const page_element = document.getElementById("tab-" + tab_id);
    if (page_element) {
      page_element.classList.toggle("hidden", tab_id !== tab_name);
    }
  });

  if (tab_name === "profile" && typeof render_profile_tab === "function") {
    render_profile_tab();
  }
  if (tab_name === "feed" && supabase) {
    refresh_session();
    load_recipes();
  }
  if (tab_name === "publish" && supabase) {
    refresh_session();
  }
  if (tab_name === "leaderboard" && typeof load_leaderboard === "function") {
    load_leaderboard();
  }
  if (tab_name === "search" && supabase) {
    refresh_session();
    load_recipes_for_search();
  }

  // Le lien direct vers une recette (?recipe=...) n'a de sens que sur cet onglet précis.
  if (tab_name !== "recipe-detail" && location.search) {
    history.replaceState(null, '', location.pathname);
  }
}

// 'all' (classement historique) ou 'week' (uniquement les 7 derniers jours).
let leaderboard_period = 'all';
function week_ago_iso() {
  return new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();
}
// Annuaire {id -> profil} utilisé pour afficher nom/avatar sur les classements calculés
// côté client à partir de likes/vues/recettes bruts (pas de jointure directe vers un auteur).
async function get_profiles_lookup() {
  const { data } = await supabase.from('profiles').select('id, username, avatar_url, first_name, last_name');
  const map = new Map();
  (data || []).forEach(p => map.set(p.id, p));
  return map;
}
async function load_leaderboard() {
  const container = document.getElementById('leaderboard_list');
  if (!container) return;
  if (!supabase) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('profile.supabase_unavailable'))}</p>`; return; }
  container.innerHTML = dishful_loading_html(I18N.t('leaderboard.loading'));

  if (leaderboard_period === 'week') {
    await load_weekly_chefs_ranking(container);
    return;
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, first_name, last_name, avatar_url, xp_points, user_level')
    .order('xp_points', { ascending: false })
    .limit(50);

  if (error) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('common.error_prefix') + error.message)}</p>`; return; }
  if (!data || data.length === 0) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('leaderboard.nobody_yet'))}</p>`; return; }

  container.innerHTML = data.map((p, i) => {
    const xp_in_level = p.xp_points % 100;
    const initials = (p.first_name ? p.first_name[0] : (p.username || '?')[0]).toUpperCase();
    const avatar_html = p.avatar_url ? `<img src="${escape_attr(p.avatar_url)}" alt="">` : initials;
    const rank_class = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const is_me = current_user && current_user.id === p.id;
    const display_name = [p.first_name, p.last_name].filter(Boolean).join(' ') || p.username;
    return `
      <div class="leaderboard-row ${rank_class} ${is_me ? 'is-me' : ''}" data-user-id="${escape_attr(p.id)}">
        <span class="leaderboard-rank">${i + 1}</span>
        <div class="avatar leaderboard-avatar">${avatar_html}</div>
        <div class="leaderboard-identity">
          <span class="leaderboard-name">${escape_html(display_name)}${is_me ? ` <span class="its-me-badge"><i class="fa-solid fa-star"></i> ${escape_html(I18N.t('leaderboard.its_me'))}</span>` : ''}</span>
          <span class="leaderboard-username">@${escape_html(p.username || '')}</span>
        </div>
        <div class="leaderboard-level">
          <div class="leaderboard-level-row">
            <span class="leaderboard-level-badge">${escape_html(I18N.t('profile.level_short_display', { n: p.user_level }))}</span>
            <span class="leaderboard-xp-text">${escape_html(I18N.t('leaderboard.xp_total', { xp: p.xp_points }))}</span>
          </div>
          <div class="xp_bar"><div class="xp_fill" style="width:${xp_in_level}%;"></div></div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.leaderboard-row').forEach(row => {
    row.addEventListener('click', () => open_user_profile(row.dataset.userId));
  });
}

// XP gagné uniquement sur les 7 derniers jours : recettes publiées, likes et vues reçus
// cette semaine, avec la même formule que le calcul d'XP habituel (recipes/likes/vues
// sont horodatés, contrairement à xp_points qui est un compteur cumulatif sans historique).
async function load_weekly_chefs_ranking(container) {
  const since = week_ago_iso();
  const [{ data: recipes_week }, { data: likes_week }, { data: views_week }, profiles_map] = await Promise.all([
    supabase.from('recipes').select('author_id').gte('created_at', since),
    supabase.from('likes').select('recipe_id, recipes(author_id)').gte('created_at', since),
    supabase.from('recipe_views').select('recipe_id, recipes(author_id)').gte('created_at', since),
    get_profiles_lookup()
  ]);

  const totals = new Map(); // author_id -> xp cette semaine
  (recipes_week || []).forEach(r => {
    if (!r.author_id) return;
    totals.set(r.author_id, (totals.get(r.author_id) || 0) + 20);
  });
  (likes_week || []).forEach(l => {
    const author_id = l.recipes?.author_id;
    if (!author_id) return;
    totals.set(author_id, (totals.get(author_id) || 0) + 3);
  });
  const views_by_author = new Map();
  (views_week || []).forEach(v => {
    const author_id = v.recipes?.author_id;
    if (!author_id) return;
    views_by_author.set(author_id, (views_by_author.get(author_id) || 0) + 1);
  });
  views_by_author.forEach((count, author_id) => {
    totals.set(author_id, (totals.get(author_id) || 0) + Math.floor(count / 10));
  });

  const ranked = [...totals.entries()]
    .map(([author_id, xp]) => ({ author_id, xp, profile: profiles_map.get(author_id) }))
    .filter(entry => entry.profile && entry.xp > 0)
    .sort((a, b) => b.xp - a.xp)
    .slice(0, 50);

  if (ranked.length === 0) {
    container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('leaderboard.nobody_xp_week'))}</p>`;
    return;
  }

  container.innerHTML = ranked.map((entry, i) => {
    const p = entry.profile;
    const rank_class = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const is_me = current_user && current_user.id === entry.author_id;
    const display_name = [p.first_name, p.last_name].filter(Boolean).join(' ') || p.username;
    const initials = (p.first_name ? p.first_name[0] : (p.username || '?')[0]).toUpperCase();
    const avatar_html = p.avatar_url ? `<img src="${escape_attr(p.avatar_url)}" alt="">` : initials;
    return `
      <div class="leaderboard-row ${rank_class} ${is_me ? 'is-me' : ''}" data-user-id="${escape_attr(entry.author_id)}">
        <span class="leaderboard-rank">${i + 1}</span>
        <div class="avatar leaderboard-avatar">${avatar_html}</div>
        <div class="leaderboard-identity">
          <span class="leaderboard-name">${escape_html(display_name)}${is_me ? ` <span class="its-me-badge"><i class="fa-solid fa-star"></i> ${escape_html(I18N.t('leaderboard.its_me'))}</span>` : ''}</span>
          <span class="leaderboard-username">@${escape_html(p.username || '')}</span>
        </div>
        <div class="leaderboard-level">
          <span class="leaderboard-xp-text"><i class="fa-solid fa-bolt" style="color:var(--rust);"></i> ${escape_html(I18N.t('leaderboard.xp_week', { xp: entry.xp }))}</span>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.leaderboard-row').forEach(row => {
    row.addEventListener('click', () => open_user_profile(row.dataset.userId));
  });
}

document.getElementById('leaderboard_period_toggle')?.querySelectorAll('.leaderboard-period-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.leaderboard-period-btn').forEach(b => b.classList.toggle('active', b === btn));
    leaderboard_period = btn.dataset.period;

    // Recharge quoi que ce soit qui soit actuellement affiché (bon sous-onglet + bonne échelle).
    const active_main = document.querySelector('.leaderboard-subtab-btn.active')?.dataset.lb || 'chefs';
    if (active_main === 'chefs') { load_leaderboard(); return; }
    const toggle = document.querySelector(`.leaderboard-scope-toggle[data-lb-scope-for="${active_main}"]`);
    const active_scope = toggle?.querySelector('.leaderboard-scope-btn.active')?.dataset.scope || 'recipes';
    if (active_scope === 'chefs') load_user_aggregate_ranking(active_main);
    else load_recipe_ranking(active_main);
  });
});

document.querySelectorAll('.leaderboard-subtab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.leaderboard-subtab-btn').forEach(b => b.classList.toggle('active', b === btn));
    const which = btn.dataset.lb;
    document.getElementById('leaderboard_chefs_panel').classList.toggle('hidden', which !== 'chefs');
    document.getElementById('leaderboard_liked_panel').classList.toggle('hidden', which !== 'liked');
    document.getElementById('leaderboard_rated_panel').classList.toggle('hidden', which !== 'rated');
    // On revient toujours sur la vue "Recettes" par défaut en changeant d'onglet principal.
    document.querySelectorAll('.leaderboard-scope-toggle').forEach(toggle => {
      toggle.querySelectorAll('.leaderboard-scope-btn').forEach(b => b.classList.toggle('active', b.dataset.scope === 'recipes'));
    });
    if (which === 'liked') load_recipe_ranking('liked');
    if (which === 'rated') load_recipe_ranking('rated');
  });
});

document.querySelectorAll('.leaderboard-scope-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const toggle = btn.closest('.leaderboard-scope-toggle');
    const kind = toggle.dataset.lbScopeFor; // 'liked' ou 'rated'
    toggle.querySelectorAll('.leaderboard-scope-btn').forEach(b => b.classList.toggle('active', b === btn));
    const scope = btn.dataset.scope;
    const hint = document.getElementById(`leaderboard_${kind}_hint`);
    if (scope === 'chefs') {
      if (hint) hint.textContent = kind === 'liked'
        ? I18N.t('leaderboard.hearts_chefs_hint')
        : I18N.t('leaderboard.stars_chefs_hint');
      load_user_aggregate_ranking(kind);
    } else {
      if (hint) hint.textContent = kind === 'liked'
        ? I18N.t('leaderboard.liked_hint')
        : I18N.t('leaderboard.rated_hint');
      load_recipe_ranking(kind);
    }
  });
});

// Classement par CHEF (utilisateur) : cumule les cœurs (ou les étoiles) sur toutes ses recettes,
// en plus du classement par recette existant (ex : 2 recettes notées 5 étoiles = 10 étoiles cumulées).
async function load_user_aggregate_ranking(kind) {
  const container = document.getElementById(kind === 'liked' ? 'leaderboard_liked_list' : 'leaderboard_rated_list');
  if (!container) return;
  if (!supabase) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('profile.supabase_unavailable'))}</p>`; return; }
  container.innerHTML = dishful_loading_html(I18N.t('common.loading'));

  if (leaderboard_period === 'week') {
    await load_weekly_user_aggregate_ranking(kind, container);
    return;
  }

  const { data, error } = await supabase
    .from('recipes')
    .select('author_id, likes_count, rating_avg, rating_count, profiles(username, avatar_url, first_name, last_name)');

  if (error) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('common.error_prefix') + error.message)}</p>`; return; }
  if (!data || data.length === 0) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('leaderboard.no_data_yet'))}</p>`; return; }

  const totals = new Map(); // author_id -> { profile, hearts, stars, recipe_count }
  data.forEach(r => {
    if (!r.author_id) return;
    if (!totals.has(r.author_id)) totals.set(r.author_id, { profile: r.profiles, hearts: 0, stars: 0, recipe_count: 0 });
    const entry = totals.get(r.author_id);
    entry.hearts += r.likes_count || 0;
    if (r.rating_count) entry.stars += Number(r.rating_avg) || 0;
    entry.recipe_count += 1;
  });

  const ranked = [...totals.entries()]
    .map(([author_id, entry]) => ({ author_id, ...entry }))
    .filter(entry => kind === 'liked' ? entry.hearts > 0 : entry.stars > 0)
    .sort((a, b) => kind === 'liked' ? b.hearts - a.hearts : b.stars - a.stars)
    .slice(0, 50);

  render_chef_aggregate_rows(container, ranked, kind);
}

// Cœurs/étoiles cumulés par chef, uniquement sur les likes/notes des 7 derniers jours.
async function load_weekly_user_aggregate_ranking(kind, container) {
  const since = week_ago_iso();
  const profiles_map = await get_profiles_lookup();
  const totals = new Map(); // author_id -> { hearts, stars, recipe_count(set of recipe ids touchées) }

  if (kind === 'liked') {
    const { data } = await supabase.from('likes').select('recipe_id, recipes(author_id)').gte('created_at', since);
    (data || []).forEach(l => {
      const author_id = l.recipes?.author_id;
      if (!author_id) return;
      if (!totals.has(author_id)) totals.set(author_id, { hearts: 0, stars: 0, recipe_ids: new Set() });
      const entry = totals.get(author_id);
      entry.hearts += 1;
      entry.recipe_ids.add(l.recipe_id);
    });
  } else {
    const { data } = await supabase.from('comments').select('recipe_id, rating, recipes(author_id)').gte('created_at', since).not('rating', 'is', null);
    (data || []).forEach(c => {
      const author_id = c.recipes?.author_id;
      if (!author_id) return;
      if (!totals.has(author_id)) totals.set(author_id, { hearts: 0, stars: 0, recipe_ids: new Set() });
      const entry = totals.get(author_id);
      entry.stars += Number(c.rating) || 0;
      entry.recipe_ids.add(c.recipe_id);
    });
  }

  const ranked = [...totals.entries()]
    .map(([author_id, entry]) => ({ author_id, hearts: entry.hearts, stars: entry.stars, recipe_count: entry.recipe_ids.size, profile: profiles_map.get(author_id) }))
    .filter(entry => entry.profile && (kind === 'liked' ? entry.hearts > 0 : entry.stars > 0))
    .sort((a, b) => kind === 'liked' ? b.hearts - a.hearts : b.stars - a.stars)
    .slice(0, 50);

  render_chef_aggregate_rows(container, ranked, kind, true);
}

function render_chef_aggregate_rows(container, ranked, kind, is_weekly) {
  if (ranked.length === 0) {
    container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('leaderboard.nobody_ranking_yet'))}</p>`;
    return;
  }

  container.innerHTML = ranked.map((entry, i) => {
    const p = entry.profile || {};
    const rank_class = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const is_me = current_user && current_user.id === entry.author_id;
    const display_name = [p.first_name, p.last_name].filter(Boolean).join(' ') || p.username || I18N.t('common.unknown_user');
    const initials = (p.first_name ? p.first_name[0] : (p.username || '?')[0]).toUpperCase();
    const avatar_html = p.avatar_url ? `<img src="${escape_attr(p.avatar_url)}" alt="">` : initials;
    const recipe_word = I18N.t('leaderboard.recipe_count', { count: entry.recipe_count });
    const period_word = is_weekly ? I18N.t('leaderboard.period_week') : I18N.t('leaderboard.period_cumulative');
    const stat_html = kind === 'liked'
      ? `<span class="leaderboard-xp-text"><i class="fa-solid fa-heart" style="color:var(--rust);"></i> ${escape_html(I18N.t('leaderboard.hearts_stat', { count: entry.hearts, period: period_word, recipes: recipe_word }))}</span>`
      : `<span class="leaderboard-xp-text"><i class="fa-solid fa-star" style="color:#D9A62E;"></i> ${escape_html(I18N.t('leaderboard.stars_stat', { count: Math.round(entry.stars * 10) / 10, period: period_word, recipes: recipe_word }))}</span>`;
    return `
      <div class="leaderboard-row ${rank_class} ${is_me ? 'is-me' : ''}" data-user-id="${escape_attr(entry.author_id)}">
        <span class="leaderboard-rank">${i + 1}</span>
        <div class="avatar leaderboard-avatar">${avatar_html}</div>
        <div class="leaderboard-identity">
          <span class="leaderboard-name">${escape_html(display_name)}${is_me ? ` <span class="its-me-badge"><i class="fa-solid fa-star"></i> ${escape_html(I18N.t('leaderboard.its_me'))}</span>` : ''}</span>
          <span class="leaderboard-username">@${escape_html(p.username || '')}</span>
        </div>
        <div class="leaderboard-level">${stat_html}</div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.leaderboard-row').forEach(row => {
    row.addEventListener('click', () => open_user_profile(row.dataset.userId));
  });
}

function recipe_ranking_row_html(r, rank, kind) {
  const cover = r.cover_image || (r.images && r.images[0]) || null;
  const author = r.profiles ? r.profiles.username : I18N.t('common.anonymous');
  const rank_class = rank === 0 ? 'gold' : rank === 1 ? 'silver' : rank === 2 ? 'bronze' : '';
  const is_me = current_user && r.author_id === current_user.id;
  const stat_html = kind === 'rated'
    ? `<span class="leaderboard-xp-text"><i class="fa-solid fa-star" style="color:#D9A62E;"></i> ${Number(r.rating_avg || 0).toFixed(1)} (${r.rating_count || 0} ${escape_html(I18N.t('recipe_detail.reviews'))})</span>`
    : `<span class="leaderboard-xp-text"><i class="fa-solid fa-heart" style="color:var(--rust);"></i> ${escape_html(I18N.t('leaderboard.hearts_count', { count: r.likes_count || 0 }))}</span>`;
  return `
    <div class="leaderboard-row ${rank_class} ${is_me ? 'is-me' : ''}" data-recipe-id="${escape_attr(r.id)}">
      <span class="leaderboard-rank">${rank + 1}</span>
      ${cover ? `<img class="leaderboard-avatar" style="border-radius:10px;object-fit:cover;" src="${escape_attr(cover)}" alt="">` : `<div class="avatar leaderboard-avatar">🍽️</div>`}
      <div class="leaderboard-identity" style="min-width:160px;">
        <span class="leaderboard-name">${escape_html(r.title)}</span>
        <span class="leaderboard-username">${escape_html(I18N.t('leaderboard.by_author', { author }))}${is_me ? ` <span class="its-me-badge"><i class="fa-solid fa-star"></i> ${escape_html(I18N.t('leaderboard.its_me'))}</span>` : ''}</span>
      </div>
      <div class="leaderboard-level">${stat_html}</div>
    </div>
  `;
}

async function load_recipe_ranking(kind) {
  const container = document.getElementById(kind === 'liked' ? 'leaderboard_liked_list' : 'leaderboard_rated_list');
  if (!container) return;
  if (!supabase) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('profile.supabase_unavailable'))}</p>`; return; }
  container.innerHTML = dishful_loading_html(I18N.t('common.loading'));

  if (leaderboard_period === 'week') {
    await load_weekly_recipe_ranking(kind, container);
    return;
  }

  let query = supabase.from('recipes').select('id, title, author_id, cover_image, images, likes_count, rating_avg, rating_count, profiles(username)');
  query = kind === 'liked'
    ? query.order('likes_count', { ascending: false }).limit(50)
    : query.not('rating_avg', 'is', null).order('rating_avg', { ascending: false }).limit(50);

  const { data, error } = await query;
  if (error) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('common.error_prefix') + error.message)}</p>`; return; }
  if (!data || data.length === 0) {
    container.innerHTML = kind === 'liked'
      ? `<p class="empty-state">${escape_html(I18N.t('leaderboard.no_recipes_yet'))}</p>`
      : `<p class="empty-state">${escape_html(I18N.t('leaderboard.no_rated_recipes_yet'))}</p>`;
    return;
  }
  container.innerHTML = data.map((r, i) => recipe_ranking_row_html(r, i, kind)).join('');
  container.querySelectorAll('.leaderboard-row').forEach(row => {
    row.addEventListener('click', () => show_recipe_detail_page(row.dataset.recipeId));
  });
}

// Classement des recettes sur les 7 derniers jours seulement : on recalcule likes_count/
// rating_avg à partir des lignes brutes (likes/comments horodatés) au lieu des compteurs
// cumulatifs de la recette, puis on réutilise recipe_ranking_row_html sans le dupliquer.
async function load_weekly_recipe_ranking(kind, container) {
  const since = week_ago_iso();
  const weekly_stats = new Map(); // recipe_id -> count (liked) ou {sum,count} (rated)

  if (kind === 'liked') {
    const { data } = await supabase.from('likes').select('recipe_id').gte('created_at', since);
    (data || []).forEach(l => weekly_stats.set(l.recipe_id, (weekly_stats.get(l.recipe_id) || 0) + 1));
  } else {
    const { data } = await supabase.from('comments').select('recipe_id, rating').gte('created_at', since).not('rating', 'is', null);
    (data || []).forEach(c => {
      if (!weekly_stats.has(c.recipe_id)) weekly_stats.set(c.recipe_id, { sum: 0, count: 0 });
      const entry = weekly_stats.get(c.recipe_id);
      entry.sum += Number(c.rating) || 0;
      entry.count += 1;
    });
  }

  const rows = [...weekly_stats.entries()]
    .map(([recipe_id, val]) => {
      const base = all_recipes.find(r => r.id === recipe_id);
      if (!base) return null;
      return kind === 'liked'
        ? { ...base, likes_count: val }
        : { ...base, rating_avg: val.sum / val.count, rating_count: val.count };
    })
    .filter(Boolean)
    .sort((a, b) => kind === 'liked' ? b.likes_count - a.likes_count : b.rating_avg - a.rating_avg)
    .slice(0, 50);

  if (rows.length === 0) {
    container.innerHTML = kind === 'liked'
      ? `<p class="empty-state">${escape_html(I18N.t('leaderboard.no_hearts_week'))}</p>`
      : `<p class="empty-state">${escape_html(I18N.t('leaderboard.no_ratings_week'))}</p>`;
    return;
  }
  container.innerHTML = rows.map((r, i) => recipe_ranking_row_html(r, i, kind)).join('');
  container.querySelectorAll('.leaderboard-row').forEach(row => {
    row.addEventListener('click', () => show_recipe_detail_page(row.dataset.recipeId));
  });
}

// Référence conservée entre deux appels pour pouvoir retirer proprement l'écouteur
// clavier du mode cuisine si on quitte la page recette sans avoir cliqué "Terminé".
let cooking_keydown_handler = null;

async function show_recipe_detail_page(recipe_id) {
  const container = document.getElementById("single_recipe_content");
  if (!container) return;

  if (cooking_keydown_handler) { document.removeEventListener('keydown', cooking_keydown_handler); cooking_keydown_handler = null; }
  editing_comment_id = null;
  current_user_own_comment = null;

  // Mémorise d'où on vient (sauf si on navigue d'une recette à une autre) pour que
  // le bouton "Retour" ramène à la bonne page, et remet le scroll en haut à l'ouverture.
  const origin_tab = get_visible_tab_name();
  if (origin_tab !== 'recipe-detail') {
    recipe_detail_return_tab = origin_tab;
  }

  let recipe = all_recipes.find((r) => r.id === recipe_id);

  if (!recipe) {
    // pas encore en cache (lien direct, etc.) : on l'affiche pendant le chargement
    switch_tab("recipe-detail");
    window.scrollTo(0, 0);
    container.innerHTML = dishful_loading_html(I18N.t('recipe_detail.loading_recipe'));
    if (!supabase) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('profile.supabase_unavailable'))}</p>`; return; }
    const { data, error } = await supabase
      .from('recipes')
      .select('*, profiles ( username, donation_link, avatar_url )')
      .eq('id', recipe_id)
      .single();
    if (error || !data) { container.innerHTML = `<p class="empty-state">${escape_html(I18N.t('recipe_detail.recipe_not_found'))}</p>`; return; }
    recipe = data;
    all_recipes.push(recipe);
  }

  switch_tab("recipe-detail");
  window.scrollTo(0, 0);
  history.replaceState(null, '', '?recipe=' + recipe.id);

  // Vue comptée à chaque ouverture de la page recette (best-effort, ne bloque pas l'affichage).
  if (supabase) {
    supabase.rpc('increment_recipe_views', { p_recipe_id: recipe.id, p_viewer_key: get_viewer_key() })
      .then(({ data: counted_as_new_view, error: rpc_error }) => {
        if (rpc_error) { console.error('[Dishful] Échec incrément vues :', rpc_error.message); return; }
        // Ne met à jour l'affichage que si c'était une vue réellement nouvelle (dédupliquée par visiteur).
        if (counted_as_new_view) {
          recipe.views_count = (recipe.views_count || 0) + 1;
          const views_el = document.getElementById('recipe_views_count_text');
          if (views_el) views_el.textContent = `${recipe.views_count} ${I18N.t('recipe_detail.views')}`;
        }
      });
  }

  let current_servings = recipe.servings || 4;
  const base_servings = recipe.servings || 4;
  let cooking_current_index = 0;
  let cooking_timer_interval = null;
  let cooking_timer_remaining = 0;

  function format_timer(total_seconds) {
    const m = Math.floor(total_seconds / 60);
    const s = total_seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function stop_cooking_timer() {
    if (cooking_timer_interval) { clearInterval(cooking_timer_interval); cooking_timer_interval = null; }
  }

  function start_cooking_timer(total_seconds) {
    stop_cooking_timer();
    cooking_timer_remaining = total_seconds;
    const display = document.getElementById('cooking_timer_display');
    const btn = document.getElementById('cooking_timer_btn');
    if (display) display.classList.remove('cooking_timer_done');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-pause"></i> ${escape_html(I18N.t('recipe_detail.timer_running'))}`;
    cooking_timer_interval = setInterval(() => {
      cooking_timer_remaining--;
      if (display) display.textContent = format_timer(Math.max(cooking_timer_remaining, 0));
      if (cooking_timer_remaining <= 0) {
        stop_cooking_timer();
        if (display) display.classList.add('cooking_timer_done');
        if (btn) btn.innerHTML = `<i class="fa-solid fa-check"></i> ${escape_html(I18N.t('recipe_detail.timer_finished'))}`;
        show_alert_modal(I18N.t('recipe_detail.timer_done'), { type: 'success' });
      }
    }, 1000);
  }

  function render_cooking_progress_dots() {
    const steps = recipe.steps || [];
    const dots = document.getElementById('cooking_progress_dots');
    dots.innerHTML = steps.map((_, i) =>
      `<button type="button" class="cooking_dot ${i === cooking_current_index ? 'active' : ''} ${i < cooking_current_index ? 'done' : ''}" data-index="${i}" aria-label="${escape_attr(I18N.t('recipe_detail.go_to_step', { n: i + 1 }))}"></button>`
    ).join('');
    dots.querySelectorAll('.cooking_dot').forEach(dot => {
      dot.addEventListener('click', () => {
        cooking_current_index = Number(dot.dataset.index);
        render_cooking_step();
      });
    });
  }

  function render_cooking_step() {
    const steps = recipe.steps || [];
    if (steps.length === 0) return;
    const step = steps[cooking_current_index];
    const ratio = current_servings / base_servings;
    const type_key = STEP_TYPES[step.type] ? step.type : 'prep';
    const type_info = STEP_TYPES[type_key];

    const media_html = step.image_url
      ? `<img class="cooking_step_media" src="${escape_attr(step.image_url)}" alt="">`
      : step.video_url
        ? `<video class="cooking_step_media" src="${escape_attr(step.video_url)}" controls></video>`
        : '';

    const ing_html = (step.ingredients || []).map(ing => {
      const scaled = ing.amount !== '' && ing.amount != null ? Math.round(Number(ing.amount) * ratio * 100) / 100 : '';
      return `<span class="tag-chip">${scaled}${escape_html(unit_label(ing.unit))} ${escape_html(I18N.td('foods', ing.name || ''))}</span>`;
    }).join('');
    const tool_html = (step.tools || []).map(t => `<span class="tag-chip tool-tag-chip">${t.emoji || '🔧'} ${escape_html(I18N.td('tools', t.name))}</span>`).join('');

    document.getElementById('cooking_step_card').innerHTML = `
      <div class="cooking_step_type type-${type_key}"><i class="fa-solid ${type_info.icon}"></i> ${escape_html(I18N.td('step_types', type_key))}${step.oven_temp ? ' · ' + step.oven_temp + '°C' : ''}</div>
      ${media_html}
      <p class="cooking_step_text">${escape_html(step.text || '')}</p>
      ${ing_html ? `<div class="cooking_step_section"><h5><i class="fa-solid fa-carrot"></i> ${escape_html(I18N.t('recipe_detail.ingredients_title'))}</h5><div class="step_ing_tags">${ing_html}</div></div>` : ''}
      ${tool_html ? `<div class="cooking_step_section"><h5><i class="fa-solid fa-kitchen-set"></i> ${escape_html(I18N.t('recipe_detail.tools_title'))}</h5><div class="step_ing_tags">${tool_html}</div></div>` : ''}
      ${step_output_product_html(step)}
      ${step.time_min ? `
        <div class="cooking_timer_block">
          <span class="cooking_timer_display" id="cooking_timer_display">${format_timer(step.time_min * 60)}</span>
          <button type="button" id="cooking_timer_btn" class="btn-primary"><i class="fa-solid fa-play"></i> ${escape_html(I18N.t('recipe_detail.start_timer'))}</button>
        </div>` : ''}
    `;

    document.getElementById('cooking_step_counter').textContent = I18N.t('recipe_detail.step_counter', { current: cooking_current_index + 1, total: steps.length });
    document.getElementById('cooking_prev_btn').disabled = cooking_current_index === 0;
    document.getElementById('cooking_next_btn').innerHTML = cooking_current_index === steps.length - 1
      ? `<i class="fa-solid fa-check"></i> ${escape_html(I18N.t('recipe_detail.finished'))}`
      : `${escape_html(I18N.t('publish.next'))} <i class="fa-solid fa-arrow-right"></i>`;

    render_cooking_progress_dots();
    stop_cooking_timer();

    document.getElementById('cooking_timer_btn')?.addEventListener('click', () => start_cooking_timer(step.time_min * 60));
  }

  function render_step_html(step, ratio) {
    if (typeof step === 'string') return `<li><p>${escape_html(step)}</p></li>`;
    const type_key = STEP_TYPES[step.type] ? step.type : 'prep';
    const type_info = STEP_TYPES[type_key];
    const step_media = step.image_url
      ? `<img class="step_media_preview" src="${escape_attr(step.image_url)}" alt="">`
      : step.video_url
        ? `<video class="step_media_preview" src="${escape_attr(step.video_url)}" controls></video>`
        : step.external_url
          ? `<a href="${escape_attr(step.external_url)}" target="_blank" rel="noopener" class="step_external_link"><i class="fa-solid fa-link"></i> ${escape_html(I18N.t('recipe_detail.external_media'))}</a>`
          : '';
    const scaled_ings = (step.ingredients || []).map(ing => {
      const scaled_amount = ing.amount !== '' && ing.amount != null ? Math.round(Number(ing.amount) * ratio * 100) / 100 : '';
      return `<span class="tag-chip">${scaled_amount}${escape_html(unit_label(ing.unit))} ${escape_html(I18N.td('foods', ing.name || ''))}</span>`;
    }).join('');
    const tool_chips = (step.tools || []).map(t => `<span class="tag-chip tool-tag-chip">${t.emoji || '🔧'} ${escape_html(I18N.td('tools', t.name))}</span>`).join('');
    return `<li class="type-${type_key}">
      <span class="step_type_badge type-${type_key}"><i class="fa-solid ${type_info.icon}"></i> ${escape_html(I18N.td('step_types', type_key))}${step.oven_temp ? ' · ' + step.oven_temp + '°C' : ''}</span>
      ${step.time_min ? `<span class="step_time_badge"><i class="fa-solid fa-stopwatch"></i> ${step.time_min} ${escape_html(I18N.t('common.minutes_short'))}</span>` : ''}
      <p>${escape_html(step.text || '')}</p>
      ${step_detail_blocks_html(scaled_ings, tool_chips)}
      ${step_output_product_html(step)}
      ${step_media}
    </li>`;
  }

  const STEPS_PER_PAGE = 3;
  let normal_steps_page = 0;

  // Rangée de pastilles numérotées pour sauter directement à une étape donnée, plutôt
  // que de devoir cliquer plusieurs fois sur "page suivante" pour l'atteindre.
  function render_steps_jump_nav() {
    const steps = recipe.steps || [];
    const nav = document.getElementById('steps_jump_nav');
    if (!nav) return;
    if (steps.length <= STEPS_PER_PAGE) { nav.innerHTML = ''; return; }
    nav.innerHTML = steps.map((step, i) => {
      const page_of_step = Math.floor(i / STEPS_PER_PAGE);
      const type_key = STEP_TYPES[step.type] ? step.type : 'prep';
      return `<button type="button" class="steps_jump_pill ${page_of_step === normal_steps_page ? 'active' : ''}" data-index="${i}" title="${escape_attr(I18N.t('recipe_detail.step_title_tooltip', { n: i + 1, type: I18N.td('step_types', type_key) }))}">${i + 1}</button>`;
    }).join('');
    nav.querySelectorAll('.steps_jump_pill').forEach(btn => {
      btn.addEventListener('click', () => {
        normal_steps_page = Math.floor(Number(btn.dataset.index) / STEPS_PER_PAGE);
        render_steps_page();
        document.getElementById('steps_normal_view').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function render_steps_page() {
    const ratio = current_servings / base_servings;
    const steps = recipe.steps || [];
    const total_pages = Math.max(Math.ceil(steps.length / STEPS_PER_PAGE), 1);
    normal_steps_page = Math.min(Math.max(normal_steps_page, 0), total_pages - 1);

    const page_steps = steps.length > STEPS_PER_PAGE
      ? steps.slice(normal_steps_page * STEPS_PER_PAGE, (normal_steps_page + 1) * STEPS_PER_PAGE)
      : steps;

    document.getElementById("steps_ol").innerHTML = page_steps.map(step => render_step_html(step, ratio)).join("");
    // numérotation correcte même à partir de la page 2
    const list_el = document.getElementById("steps_ol");
    if (list_el) list_el.style.counterReset = `recipe-step ${normal_steps_page * STEPS_PER_PAGE}`;

    const pagination = document.getElementById("steps_pagination");
    if (steps.length > STEPS_PER_PAGE) {
      pagination.classList.remove("hidden");
      document.getElementById("steps_page_counter").textContent = I18N.t('recipe_detail.page_counter', { current: normal_steps_page + 1, total: total_pages });
      document.getElementById("steps_page_prev_btn").disabled = normal_steps_page === 0;
      document.getElementById("steps_page_next_btn").disabled = normal_steps_page === total_pages - 1;
    } else {
      pagination.classList.add("hidden");
    }
    render_steps_jump_nav();
  }

  function update_servings_ui() {
    // Quantités par ingrédient, mises à l'échelle selon les portions choisies, et on
    // n'affiche que les ingrédients réellement utilisés dans au moins une étape
    // (ceux ajoutés au pool mais jamais liés à une étape ne servent à rien à l'affichage).
    const ratio = current_servings / base_servings;
    const steps_total_qty = compute_steps_total_ingredient_quantities(recipe.steps, ratio);
    const used_ingredients = (recipe.ingredients || [])
      .map(ing => typeof ing === 'string' ? { name: ing, emoji: '🍽️' } : ing)
      .filter(ing => steps_total_qty.has(ing.name));
    document.getElementById("ingredients_ul").innerHTML =
      render_product_list_html(used_ingredients, steps_total_qty, I18N.t('recipe_detail.no_ingredients_used'));

    // La numérotation/le texte des étapes est mis à l'échelle séparément
    render_steps_page();
    render_nutrition_section();

    document.getElementById("servings_count_display").innerText = current_servings;
  }

  function render_nutrition_section() {
    const ratio = current_servings / base_servings;
    const totals = compute_recipe_nutrition(recipe.steps, ratio);
    const per_serving = current_servings > 0 ? {
      kcal: totals.kcal / current_servings, protein: totals.protein / current_servings,
      carbs: totals.carbs / current_servings, fat: totals.fat / current_servings
    } : totals;

    document.getElementById('nutrition_stats_grid').innerHTML = `
      <div class="nutrition_stat"><span class="nutrition_stat_value">${Math.round(per_serving.kcal)}</span><span class="nutrition_stat_label">${escape_html(I18N.t('recipe_detail.kcal_per_serving'))}</span></div>
      <div class="nutrition_stat"><span class="nutrition_stat_value">${Math.round(per_serving.protein)} g</span><span class="nutrition_stat_label">${escape_html(I18N.t('recipe_detail.protein'))}</span></div>
      <div class="nutrition_stat"><span class="nutrition_stat_value">${Math.round(per_serving.carbs)} g</span><span class="nutrition_stat_label">${escape_html(I18N.t('recipe_detail.carbs'))}</span></div>
      <div class="nutrition_stat"><span class="nutrition_stat_value">${Math.round(per_serving.fat)} g</span><span class="nutrition_stat_label">${escape_html(I18N.t('recipe_detail.fat'))}</span></div>
    `;

    const allergen_list = [...totals.allergens];
    const allergen_row = document.getElementById('allergen_row');
    if (allergen_list.length) {
      allergen_row.innerHTML = `<span class="allergen_row_label"><i class="fa-solid fa-triangle-exclamation"></i> ${escape_html(I18N.t('recipe_detail.allergens_potential'))}</span>` +
        allergen_list.map(a => {
          const info = ALLERGEN_INFO[a];
          return `<span class="allergen_chip"><i class="fa-solid ${info.icon}"></i> ${escape_html(I18N.td('allergens', info.label))}</span>`;
        }).join('');
    } else {
      allergen_row.innerHTML = `<span class="allergen_row_label allergen_none"><i class="fa-solid fa-circle-check"></i> ${escape_html(I18N.t('recipe_detail.no_allergens_detected'))}</span>`;
    }
  }

  container.innerHTML = `
    <article class="recipe_full_view" id="recipe_article">
      <div class="media_wrapper">
        ${recipe.video_url 
          ? `<video src="${escape_attr(recipe.video_url)}" controls></video>` 
          : `<img src="${escape_attr(recipe.cover_image || recipe.images?.[0] || '')}" alt="">`}
      </div>
      ${(recipe.images && recipe.images.length) ? `
        <div class="recipe_gallery">
          ${recipe.images.map(url => `<img src="${escape_attr(url)}" alt="">`).join('')}
        </div>` : ''}

      <div class="recipe_header">
        <div class="title_row">
          <h2>${escape_html(recipe.title)}</h2>
          <span class="country_badge">${recipe.country_code ? (country_flag_from_code(recipe.country_code) || '🌍') + ' ' : ''}${escape_html(recipe.country ? I18N.td('countries', recipe.country) : I18N.t('recipe_detail.unknown_origin'))}</span>
        </div>
        ${recipe.description ? `<p class="recipe_description">${escape_html(recipe.description)}</p>` : ''}

        <div class="author_row">
          <span>${escape_html(I18N.t('recipe_detail.author_by'))} <a href="#" id="author_profile_link" class="author_link">${escape_html(recipe.profiles?.username || I18N.t('common.anonymous'))}</a>${official_badge_html(recipe.author_id)}${ceo_badge_html(recipe.author_id)}</span>
          <div class="author_row_actions">
            ${current_user && current_user.id === recipe.author_id ? `
              <button id="edit_recipe_btn" class="secondary_btn"><i class="fa-solid fa-pen"></i> ${escape_html(I18N.t('common.edit'))}</button>
              <button id="request_delete_recipe_btn" class="secondary_btn danger"><i class="fa-solid fa-trash-can"></i> ${escape_html(I18N.t('recipe_detail.report_delete'))}</button>
            ` : ''}
            <button id="share_recipe_btn" class="secondary_btn"><i class="fa-solid fa-share-nodes"></i> ${escape_html(I18N.t('recipe_detail.share'))}</button>
            <button id="toggle_cooking_mode_btn" class="secondary_btn"><i class="fa-solid fa-book-open"></i> ${escape_html(I18N.t('recipe_detail.cook_mode'))}</button>
          </div>
        </div>

        <div class="recipe_meta_bar">
          ${recipe.rating_count ? `<div><i class="fa-solid fa-star" style="color:#D9A62E;"></i> ${Number(recipe.rating_avg).toFixed(1)} (${recipe.rating_count} ${escape_html(I18N.t('recipe_detail.reviews'))})</div>` : ''}
          <div><i class="fa-solid fa-eye"></i> <span id="recipe_views_count_text">${recipe.views_count || 0} ${escape_html(I18N.t('recipe_detail.views'))}</span></div>
          <div><i class="fa-regular fa-clock"></i> ${escape_html(I18N.t('publish.total_time'))} ${(recipe.steps || []).reduce((sum, s) => sum + (typeof s === 'object' ? (Number(s.time_min) || 0) : 0), 0)} ${escape_html(I18N.t('common.minutes_short'))}</div>
          <div><i class="fa-solid fa-gauge"></i> ${escape_html(I18N.td('difficulty', recipe.difficulty || 'moyen'))}</div>
          <div class="servings_calculator">
            <i class="fa-solid fa-user-group"></i>
            <button id="btn_minus_servings">-</button>
            <span id="servings_count_display">${current_servings}</span> ${escape_html(I18N.t('common.servings'))}
            <button id="btn_plus_servings">+</button>
          </div>
        </div>
      </div>

      <div class="recipe-info-tabs" id="recipe_info_tabs">
        <button type="button" class="recipe-info-tab-btn active" data-info-tab="ingredients"><i class="fa-solid fa-list-check"></i> ${escape_html(I18N.t('recipe_detail.tab_before_start'))}</button>
        <button type="button" class="recipe-info-tab-btn" data-info-tab="nutrition"><i class="fa-solid fa-chart-simple"></i> ${escape_html(I18N.t('recipe_detail.tab_nutrition'))}</button>
      </div>

      <div class="recipe-info-panel" id="recipe_info_panel_ingredients">
        <div class="prep_before_start">
          <p class="sub-hint prep_before_start_hint">${escape_html(I18N.t('recipe_detail.gather_hint'))}</p>
          <div class="prep_before_start_columns">
            <div class="prep_column">
              <h4><i class="fa-solid fa-carrot"></i> ${escape_html(I18N.t('recipe_detail.ingredients_title'))}</h4>
              <div id="ingredients_ul"></div>
            </div>
            ${(recipe.tools && recipe.tools.length) ? `
              <div class="prep_column">
                <h4><i class="fa-solid fa-kitchen-set"></i> ${escape_html(I18N.t('recipe_detail.tools_title'))}</h4>
                ${render_product_list_html(recipe.tools, null, I18N.t('recipe_detail.no_tools_required'))}
              </div>
            ` : ''}
          </div>
        </div>
      </div>

      <div class="recipe-info-panel hidden" id="recipe_info_panel_nutrition">
        <div class="nutrition_section" id="nutrition_section">
          <p class="sub-hint">${escape_html(I18N.t('recipe_detail.nutrition_estimate_hint'))}</p>
          <div class="nutrition_stats_grid" id="nutrition_stats_grid"></div>
          <div class="allergen_row" id="allergen_row"></div>
        </div>
      </div>

      <h3>${escape_html(I18N.t('recipe_detail.steps_title'))}</h3>

      <div id="steps_normal_view">
        <div class="steps_jump_nav" id="steps_jump_nav"></div>
        <ol id="steps_ol" class="steps_list"></ol>
        <div id="steps_pagination" class="steps_pagination hidden">
          <button id="steps_page_prev_btn" class="btn-secondary" type="button"><i class="fa-solid fa-arrow-left"></i></button>
          <span id="steps_page_counter" class="cooking_step_counter"></span>
          <button id="steps_page_next_btn" class="btn-secondary" type="button"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

      <div id="steps_cooking_view" class="steps_cooking_view hidden">
        <div class="cooking_progress_dots" id="cooking_progress_dots"></div>
        <div id="cooking_step_card"></div>
        <div class="cooking_nav">
          <button id="cooking_prev_btn" class="btn-secondary"><i class="fa-solid fa-arrow-left"></i> ${escape_html(I18N.t('publish.prev'))}</button>
          <span id="cooking_step_counter" class="cooking_step_counter"></span>
          <button id="cooking_next_btn" class="btn-primary cooking_next_btn">${escape_html(I18N.t('publish.next'))} <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

      <div class="recipe_footer_actions">
        <button id="like_recipe_btn" class="action-btn like-btn ${liked_recipe_ids.has(recipe.id) ? 'liked' : ''}" data-recipe-id="${escape_attr(recipe.id)}">
          <i class="fa-solid fa-heart"></i> <span class="like-count">${recipe.likes_count || 0}</span> ${escape_html(I18N.t('recipe_detail.likes'))}
        </button>
        <p class="recipe_footer_actions_hint">${escape_html(I18N.t('recipe_detail.footer_hint'))}</p>
      </div>

      <section class="comments_section">
        <h3>${escape_html(I18N.t('recipe_detail.comments_title'))}</h3>
        <div class="comment_form">
          <div class="comment_rating_picker" id="comment_rating_picker" data-value="0">
            <span class="comment_rating_label">${escape_html(I18N.t('recipe_detail.rating_label'))}</span>
            <span class="comment_rating_stars">
              <i class="fa-regular fa-star" data-star="1"></i>
              <i class="fa-regular fa-star" data-star="2"></i>
              <i class="fa-regular fa-star" data-star="3"></i>
              <i class="fa-regular fa-star" data-star="4"></i>
              <i class="fa-regular fa-star" data-star="5"></i>
            </span>
          </div>
          <textarea id="comment_input_field" placeholder="${escape_attr(I18N.t('recipe_detail.comment_placeholder'))}"></textarea>
          <div class="comment_form_actions">
            <button id="send_comment_btn">${escape_html(I18N.t('recipe_detail.comment_send'))}</button>
            <button type="button" id="cancel_comment_edit_btn" class="text-btn hidden">${escape_html(I18N.t('common.cancel'))}</button>
          </div>
        </div>
        <p class="already_commented_note hidden" id="already_commented_note">
          <i class="fa-solid fa-circle-check"></i> ${escape_html(I18N.t('recipe_detail.already_commented'))}
          <button type="button" id="edit_own_comment_btn" class="text-btn">${escape_html(I18N.t('recipe_detail.edit_comment_btn'))}</button>
        </p>
        <div id="recipe_comments_list">${dishful_loading_html(I18N.t('recipe_detail.loading_comments'))}</div>
      </section>
    </article>
  `;

  // Événements
  document.querySelectorAll('.recipe-info-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.recipe-info-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.recipe-info-panel').forEach(p => p.classList.toggle('hidden', p.id !== `recipe_info_panel_${btn.dataset.infoTab}`));
    });
  });

  document.getElementById("btn_minus_servings").onclick = () => {
    if (current_servings > 1) { current_servings--; update_servings_ui(); }
  };
  document.getElementById("btn_plus_servings").onclick = () => {
    current_servings++; update_servings_ui();
  };

  document.getElementById("steps_page_prev_btn").onclick = () => {
    normal_steps_page--; render_steps_page();
    document.getElementById("steps_normal_view").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  document.getElementById("steps_page_next_btn").onclick = () => {
    normal_steps_page++; render_steps_page();
    document.getElementById("steps_normal_view").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  document.getElementById("toggle_cooking_mode_btn").onclick = () => {
    const article = document.getElementById("recipe_article");
    const entering_cooking_mode = !article.classList.contains("cooking_mode");
    article.classList.toggle("cooking_mode");
    document.getElementById('steps_normal_view').classList.toggle('hidden', entering_cooking_mode);
    document.getElementById('steps_cooking_view').classList.toggle('hidden', !entering_cooking_mode);
    if (entering_cooking_mode) {
      cooking_current_index = 0;
      render_cooking_step();
      document.getElementById('steps_cooking_view').scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Navigation au clavier (flèches ← →), pratique quand on a les mains occupées/sales
      // en cuisinant et qu'on préfère éviter de toucher l'écran/la souris précisément.
      if (cooking_keydown_handler) document.removeEventListener('keydown', cooking_keydown_handler);
      cooking_keydown_handler = (e) => {
        if (e.target.matches('input, textarea')) return;
        if (e.key === 'ArrowRight') document.getElementById('cooking_next_btn')?.click();
        else if (e.key === 'ArrowLeft') document.getElementById('cooking_prev_btn')?.click();
      };
      document.addEventListener('keydown', cooking_keydown_handler);
    } else {
      stop_cooking_timer();
      if (cooking_keydown_handler) { document.removeEventListener('keydown', cooking_keydown_handler); cooking_keydown_handler = null; }
    }
  };

  document.getElementById('cooking_prev_btn').onclick = () => {
    if (cooking_current_index > 0) { cooking_current_index--; render_cooking_step(); }
  };
  document.getElementById('cooking_next_btn').onclick = () => {
    const steps = recipe.steps || [];
    if (cooking_current_index < steps.length - 1) {
      cooking_current_index++;
      render_cooking_step();
    } else {
      document.getElementById("toggle_cooking_mode_btn").click();
    }
  };

  document.getElementById("edit_recipe_btn")?.addEventListener("click", () => {
    load_recipe_into_publish_form(recipe);
  });

  document.getElementById("request_delete_recipe_btn")?.addEventListener("click", () => {
    open_deletion_request_modal(recipe.id);
  });

  document.getElementById("share_recipe_btn").onclick = () => open_share_recipe_modal(recipe);

  document.getElementById("author_profile_link").onclick = (e) => {
    e.preventDefault();
    open_user_profile(recipe.author_id);
  };

  document.getElementById("like_recipe_btn").onclick = () => {
    toggle_like(recipe.id);
  };

  document.getElementById("send_comment_btn").onclick = () => {
    submit_recipe_comment(recipe.id);
  };

  const rating_picker = document.getElementById("comment_rating_picker");
  function render_rating_picker() {
    const current_val = Number(rating_picker.dataset.value) || 0;
    rating_picker.querySelectorAll("i").forEach(star => {
      const star_val = Number(star.dataset.star);
      star.className = star_val <= current_val ? "fa-solid fa-star" : "fa-regular fa-star";
    });
  }
  rating_picker.querySelectorAll("i").forEach(star => {
    star.addEventListener("click", () => {
      const star_val = Number(star.dataset.star);
      const current_val = Number(rating_picker.dataset.value) || 0;
      rating_picker.dataset.value = current_val === star_val ? 0 : star_val;
      render_rating_picker();
    });
  });

  function enter_comment_edit_mode() {
    if (!current_user_own_comment) return;
    editing_comment_id = current_user_own_comment.id;
    document.getElementById('comment_input_field').value = current_user_own_comment.content || '';
    rating_picker.dataset.value = current_user_own_comment.rating || 0;
    render_rating_picker();
    document.getElementById('send_comment_btn').textContent = I18N.t('recipe_detail.comment_update_btn');
    document.getElementById('cancel_comment_edit_btn').classList.remove('hidden');
    set_comment_form_already_commented(false);
    document.getElementById('comment_input_field').focus();
  }

  function exit_comment_edit_mode() {
    editing_comment_id = null;
    document.getElementById('comment_input_field').value = '';
    rating_picker.dataset.value = 0;
    render_rating_picker();
    document.getElementById('send_comment_btn').textContent = I18N.t('recipe_detail.comment_send');
    document.getElementById('cancel_comment_edit_btn').classList.add('hidden');
    set_comment_form_already_commented(!!current_user_own_comment);
  }

  document.getElementById('edit_own_comment_btn')?.addEventListener('click', enter_comment_edit_mode);
  document.getElementById('cancel_comment_edit_btn')?.addEventListener('click', exit_comment_edit_mode);

  // Initialisations
  update_servings_ui();
  load_recipe_comments(recipe.id);
}

function render_stars_html(rating) {
  if (rating === null || rating === undefined) return '';
  let html = '<span class="comment_stars_display">';
  for (let i = 1; i <= 5; i++) {
    html += `<i class="fa-${i <= rating ? 'solid' : 'regular'} fa-star"></i>`;
  }
  return html + '</span>';
}

// Charger les commentaires réels depuis Supabase
// Un seul avis par personne et par recette (imposé aussi côté base par une contrainte
// unique sur recipe_id+user_id) : on masque le formulaire et on affiche un petit
// message dès que l'utilisateur connecté a déjà un commentaire sur cette recette.
function set_comment_form_already_commented(already_commented) {
  const form = document.querySelector('.comment_form');
  const note = document.getElementById('already_commented_note');
  if (form) form.classList.toggle('hidden', already_commented);
  if (note) note.classList.toggle('hidden', !already_commented);
}

async function load_recipe_comments(recipe_id) {
  const container = document.getElementById("recipe_comments_list");
  if (!container) return;
  if (!supabase) { container.innerHTML = `<div class="comment-item">${escape_html(I18N.t('recipe_detail.comments_load_error'))}</div>`; return; }

  const { data: comments, error } = await supabase
    .from("comments")
    .select("id, user_id, content, rating, created_at, edited_at, profiles(username, avatar_url)")
    .eq("recipe_id", recipe_id)
    .order("created_at", { ascending: false });

  current_user_own_comment = (current_user && (comments || []).find(c => c.user_id === current_user.id)) || null;
  set_comment_form_already_commented(!!current_user_own_comment);

  if (error || !comments || comments.length === 0) {
    container.innerHTML = `<p>${escape_html(I18N.t('recipe_detail.no_comments_yet'))}</p>`;
    return;
  }

  container.innerHTML = comments.map((c) => `
    <div class="comment_item">
      <div class="comment_item_header">
        <strong>${escape_html(c.profiles?.username || I18N.t('common.anonymous'))}</strong>
        ${render_stars_html(c.rating)}
        ${c.edited_at ? `<span class="comment_edited_label">${escape_html(I18N.t('recipe_detail.comment_edited_label'))}</span>` : ''}
      </div>
      <p>${escape_html(c.content)}</p>
    </div>
  `).join("");
}

// Envoyer un commentaire (avec étoile optionnelle)
async function submit_recipe_comment(recipe_id) {
  if (!current_user) { auth_modal.classList.remove('hidden'); return; }
  const input = document.getElementById("comment_input_field");
  const content = input?.value?.trim();
  if (!content) return;

  const rating_picker = document.getElementById("comment_rating_picker");
  const rating_value = rating_picker ? Number(rating_picker.dataset.value) || 0 : 0;

  const was_editing = !!editing_comment_id;
  const { error } = was_editing
    ? await supabase
        .from("comments")
        .update({ content: content, rating: rating_value > 0 ? rating_value : null, edited_at: new Date().toISOString() })
        .eq("id", editing_comment_id)
    : await supabase
        .from("comments")
        .insert([{
          recipe_id: recipe_id,
          user_id: current_user.id,
          content: content,
          rating: rating_value > 0 ? rating_value : null
        }]);

  if (!error) {
    input.value = "";
    editing_comment_id = null;
    document.getElementById('send_comment_btn').textContent = I18N.t('recipe_detail.comment_send');
    document.getElementById('cancel_comment_edit_btn')?.classList.add('hidden');
    if (rating_picker) {
      rating_picker.dataset.value = 0;
      rating_picker.querySelectorAll("i").forEach(s => s.className = "fa-regular fa-star");
    }
    load_recipe_comments(recipe_id);
    load_recipes(); // rafraîchit rating_avg / rating_count en cache pour le feed et le classement
  } else if (error.code === '23505') {
    // Filet de sécurité : un doublon peut théoriquement passer le contrôle client (double-clic,
    // deux onglets ouverts...) — la contrainte unique en base le bloque, on l'explique proprement
    // plutôt que de laisser échouer silencieusement.
    set_comment_form_already_commented(true);
    show_alert_modal(I18N.t('recipe_detail.already_commented'), { type: 'info' });
  } else {
    show_alert_modal(error.message, { type: 'error', title: I18N.t('common.alert_title_generic_error') });
  }
}

function load_recipe_into_publish_form(recipe) {
  editing_recipe_id = recipe.id;

  // Repart d'un formulaire vraiment vierge avant de le remplir avec la recette : sans ça,
  // des champs laissés remplis lors d'une session précédente (fichier vidéo choisi mais pas
  // envoyé, case à cocher, etc.) pouvaient se retrouver silencieusement appliqués à CETTE
  // modification — d'où des "modifs" qui semblaient sorties de nulle part.
  recipe_form.reset();
  document.querySelectorAll('#recipe_form .chip.checked').forEach(c => c.classList.remove('checked'));

  document.getElementById('publish_form_title').textContent = I18N.t('publish.title_edit');
  document.querySelector('#recipe_form button[type="submit"]').innerHTML = `<i class="fa-solid fa-floppy-disk"></i> ${escape_html(I18N.t('publish.submit_edit'))}`;

  document.getElementById('recipe_title_input').value = recipe.title || '';
  if (document.getElementById('recipe_description_input')) document.getElementById('recipe_description_input').value = recipe.description || '';
  cover_image_file = null;
  cover_image_preview_url = null;
  existing_cover_image_url = recipe.cover_image || (recipe.images && recipe.images[0]) || null;
  render_cover_photo_preview();
  document.getElementById('recipe_video_url_input').value = recipe.video_url || '';
  document.getElementById('recipe_servings_input').value = recipe.servings || 4;
  if (document.getElementById('recipe_difficulty_select')) document.getElementById('recipe_difficulty_select').value = recipe.difficulty || 'moyen';
  country_select.value = recipe.country_code || '';

  // catégories / tags
  document.querySelectorAll('#category_chips .chip').forEach(chip => {
    const checked = (recipe.categories || []).includes(chip.dataset.value);
    chip.querySelector('input').checked = checked;
    chip.classList.toggle('checked', checked);
  });
  const suggested_tags_used = [];
  document.querySelectorAll('#tag_chips .chip').forEach(chip => {
    const checked = (recipe.tags || []).includes(chip.dataset.value);
    chip.querySelector('input').checked = checked;
    chip.classList.toggle('checked', checked);
    if (checked) suggested_tags_used.push(chip.dataset.value);
  });
  document.getElementById('custom_tags_input').value = (recipe.tags || [])
    .filter(t => !suggested_tags_used.includes(t)).join(', ');

  // photos existantes (la galerie ; le cover_image est toujours le 1er élément)
  existing_gallery_urls = (recipe.images || []).filter(u => u !== existing_cover_image_url);
  pending_images = [];
  render_image_thumbs();
  update_image_preview_text();

  // pool d'ingrédients existant (rétro-compatible avec d'anciennes recettes en tableau de chaînes)
  ingredient_pool = (recipe.ingredients || []).map(ing =>
    typeof ing === 'string' ? { name: ing, emoji: '🍽️' } : { name: ing.name, emoji: ing.emoji || '🍽️' }
  );
  render_ingredient_pool_chips();


  // étapes existantes
  recipe_steps = (recipe.steps || []).map(step => {
    if (typeof step === 'string') {
      return { type: 'prep', text: step, time_min: 0, oven_temp: null, ingredients: [], tools: [], image_url: null, video_url: null, external_url: null, _image_file: null, _video_file: null };
    }
    return {
      type: step.type || 'prep',
      text: step.text || '',
      time_min: step.time_min || 0,
      oven_temp: step.oven_temp || null,
      ingredients: step.ingredients || [],
      tools: step.tools || [],
      image_url: step.image_url || null,
      video_url: step.video_url || null,
      external_url: step.external_url || null,
      output_product: step.output_product || null,
      _image_file: null,
      _video_file: null
    };
  });
  render_steps_compact_list();

  switch_tab('publish');
  switch_wizard_step(1);
}

function open_user_profile(user_id) {
  if (current_user && user_id === current_user.id) {
    switch_tab("profile");
  } else {
    show_public_profile_page(user_id);
  }
}

// =====================================================================
// 12. PROFIL PUBLIC (consultation du profil d'un autre utilisateur)
// =====================================================================
document.querySelectorAll('#tab-public-profile .profile_tabs_nav .tab_btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('#tab-public-profile .profile_tabs_nav .tab_btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('#tab-public-profile .tab_content').forEach((c) => c.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(button.dataset.ptab)?.classList.add('active');
  });
});
document.getElementById('back_to_feed_from_profile_btn')?.addEventListener('click', () => switch_tab('feed'));

document.getElementById('back_to_feed_btn')?.addEventListener('click', () => {
  switch_tab(recipe_detail_return_tab || 'feed');
  window.scrollTo(0, 0);
});

let current_public_profile_user_id = null;
async function show_public_profile_page(user_id) {
  if (!supabase) return;
  current_public_profile_user_id = user_id;
  switch_tab('public-profile');

  document.getElementById('public_profile_display_name').textContent = I18N.t('common.loading');
  document.getElementById('public_profile_username_text').textContent = '';
  document.getElementById('public_profile_bio').textContent = '';
  document.getElementById('public_profile_avatar').textContent = '';
  document.getElementById('public_profile_banner_preview').style.backgroundImage = '';
  document.getElementById('public_published_recipes').innerHTML = dishful_loading_html(I18N.t('profile.loading_profile'));

  const [{ data: profile, error }, { data: user_recipes }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user_id).single(),
    supabase.from('recipes').select('*, profiles ( username, donation_link, avatar_url )').eq('author_id', user_id).order('created_at', { ascending: false })
  ]);

  if (error || !profile) {
    document.getElementById('public_profile_display_name').textContent = I18N.t('common.user_not_found');
    document.getElementById('public_published_recipes').innerHTML = '';
    return;
  }

  const recipes = user_recipes || [];
  const total_published = recipes.length;
  const total_likes = recipes.reduce((acc, r) => acc + (r.likes_count || 0), 0);

  const display_name = [profile.first_name, profile.last_name].filter(Boolean).join(' ') || profile.username || I18N.t('common.unknown_user');
  document.getElementById('public_profile_display_name').textContent = display_name;
  document.getElementById('public_profile_identity_badges').innerHTML = official_badge_html(user_id) + ceo_badge_html(user_id);
  document.getElementById('public_profile_username_text').textContent = profile.username ? `@${profile.username}` : '';
  const bio_el = document.getElementById('public_profile_bio');
  bio_el.textContent = profile.bio || I18N.t('profile.no_bio');
  bio_el.classList.toggle('empty-hint', !profile.bio);

  const avatar_el = document.getElementById('public_profile_avatar');
  avatar_el.innerHTML = profile.avatar_url
    ? `<img src="${escape_attr(profile.avatar_url)}" alt="">`
    : (profile.first_name ? profile.first_name[0] : (profile.username || 'U')[0]).toUpperCase();

  document.getElementById('public_profile_banner_preview').style.backgroundImage = profile.banner_url ? `url('${profile.banner_url}')` : '';

  const user_level = profile.user_level || 1;
  const xp_points = profile.xp_points || 0;
  const xp_for_current_level = (user_level - 1) * 100;
  const xp_in_current_level = xp_points - xp_for_current_level;
  const xp_percentage = Math.min(Math.max((xp_in_current_level / 100) * 100, 0), 100);
  document.getElementById('public_profile_level').textContent = I18N.t('profile.level_short_display', { n: user_level });
  document.getElementById('public_profile_xp_text').textContent = I18N.t('profile.level_progress', { xp: xp_in_current_level, level: user_level, total: xp_points });
  document.getElementById('public_profile_xp_fill').style.width = `${xp_percentage}%`;

  const equipped_badge_id = profile.equipped_badge || null;
  const all_badges = [...recipe_badge_list, ...like_badge_list, ...level_badge_list];
  const active_badge = all_badges.find((b) => b.id === equipped_badge_id);
  const equipped_box = document.getElementById('public_equipped_badge_box');
  if (active_badge) {
    equipped_box.innerHTML = `<div class="badge_icon">${active_badge.icon}</div><div class="badge_name">${escape_html(I18N.td('badges', active_badge.name))}</div>`;
    document.getElementById('public_profile_equipped_badge_display').textContent = `${active_badge.icon} ${I18N.td('badges', active_badge.name)}`;
  } else {
    equipped_box.innerHTML = `<span>${escape_html(I18N.t('profile.no_badge_equipped'))}</span>`;
    document.getElementById('public_profile_equipped_badge_display').textContent = '';
  }

  render_badge_grid('public_recipe_badges_grid', recipe_badge_list, total_published, equipped_badge_id, I18N.t('profile.unit_recipes'), false);
  render_badge_grid('public_like_badges_grid', like_badge_list, total_likes, equipped_badge_id, I18N.t('profile.unit_likes'), false);
  render_badge_grid('public_level_badges_grid', level_badge_list, user_level, equipped_badge_id, I18N.t('profile.unit_levels'), false);

  render_mini_recipes_grid('public_published_recipes', recipes);
}

// Variable de l'étape courante
let current_wizard_step = 1;

// Navigation dans le wizard
function switch_wizard_step(target_step) {
  if (target_step > current_wizard_step && !validate_current_step(current_wizard_step)) {
    return;
  }

  document.querySelectorAll(".wizard-step-panel").forEach((panel) => panel.classList.add("hidden"));
  document.querySelectorAll(".wizard-step-btn").forEach((btn) => btn.classList.remove("active"));

  document.getElementById(`publish_step_${target_step}`).classList.remove("hidden");
  document.querySelector(`.wizard-step-btn[data-step="${target_step}"]`)?.classList.add("active");

  current_wizard_step = target_step;

  if (target_step === 6 && typeof render_recipe_preview === 'function') render_recipe_preview();
}

// Validation par étape
function validate_current_step(step_number) {
  if (step_number === 1) {
    const title_val = document.getElementById("recipe_title_input").value.trim();
    if (!title_val) {
      show_alert_modal(I18N.t('publish.error_title'), { type: 'error' });
      return false;
    }
    if (!cover_image_file && !existing_cover_image_url) {
      show_alert_modal(I18N.t('publish.error_cover'), { type: 'error' });
      return false;
    }
  }

  if (step_number === 2) {
    const checked_cats = document.querySelectorAll("#category_chips input:checked");
    if (checked_cats.length === 0) {
      show_alert_modal(I18N.t('publish.error_category'), { type: 'error' });
      return false;
    }
    if (!country_select.value) {
      show_alert_modal(I18N.t('publish.error_country'), { type: 'error' });
      return false;
    }
  }

  if (step_number === 3) {
    if (ingredient_pool.length === 0) {
      show_alert_modal(I18N.t('publish.error_ingredients'), { type: 'error' });
      return false;
    }
  }

  if (step_number === 4) {
    if (recipe_steps.length === 0) {
      show_alert_modal(I18N.t('publish.error_steps'), { type: 'error' });
      return false;
    }
  }

  return true;
}

// Événements d'initialisation du wizard
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".wizard-step-btn").forEach((btn) => {
    btn.onclick = () => switch_wizard_step(parseInt(btn.dataset.step));
  });

  document.querySelectorAll(".next-step-btn").forEach((btn) => {
    btn.onclick = () => switch_wizard_step(parseInt(btn.dataset.next));
  });

  document.querySelectorAll(".prev-step-btn").forEach((btn) => {
    btn.onclick = () => switch_wizard_step(parseInt(btn.dataset.prev));
  });
});

// Effacer le message au clic sur l'onglet publier
document.querySelector('[data-tab="publish"]').addEventListener("click", () => {
  document.getElementById("recipe_message_text").innerText = "";
});

// =====================================================================
// 11. BOOT
// =====================================================================
// La traduction se charge en parallèle (fetch async) pendant que ce fichier s'exécute :
// tout ce qui est rendu en JS de façon synchrone plus haut (filtres, chips, listes vides...)
// est donc rendu une première fois AVANT que I18N ait fini de charger, avec un simple
// repli sur la clé brute. On corrige ça en relançant ce rendu une fois I18N prêt — pas
// besoin d'attendre I18N avant tout le reste du fichier, juste de rattraper cette poignée
// d'affichages une fois la traduction disponible.
I18N.ready.then(() => {
  render_category_filters();
  render_tag_filters();
  render_difficulty_filters();
  render_time_filters();
  render_ingredient_pool_chips();
  render_steps_compact_list();
  render_search_category_filters();
  render_search_difficulty_filters();
  render_search_allergen_filters();
  populate_nationality_select();
  render_user_zone();
  populate_country_select(country_select);
  populate_country_select(filter_country_select);
  populate_country_select(search_country_select);
});

// =====================================================================
// Changer de langue recharge la page (voir i18n.js) — ce qui, sans précaution,
// ramènerait toujours au feed et effacerait un brouillon de recette en cours
// de rédaction. On sauvegarde donc l'onglet actif (et, sur l'assistant de
// publication, tout le brouillon texte/ingrédients/étapes — pas les fichiers
// image pas encore envoyés, impossibles à sérialiser) juste avant le rechargement,
// puis on la restaure une fois la page repartie dans la nouvelle langue.
window.addEventListener('dishful:before-lang-switch', () => {
  try {
    const active_tab = get_visible_tab_name();
    const state = { tab: active_tab };
    if (active_tab === 'public-profile') {
      state.public_profile_user_id = current_public_profile_user_id;
    }
    if (active_tab === 'publish') {
      state.wizard_step = current_wizard_step;
      state.editing_recipe_id = editing_recipe_id;
      state.title = document.getElementById('recipe_title_input')?.value || '';
      state.description = document.getElementById('recipe_description_input')?.value || '';
      state.servings = document.getElementById('recipe_servings_input')?.value || '';
      state.difficulty = document.getElementById('recipe_difficulty_select')?.value || '';
      state.country_code = country_select?.value || '';
      state.categories = Array.from(document.querySelectorAll('#category_chips input:checked')).map(i => i.value);
      state.tags = Array.from(document.querySelectorAll('#tag_chips input:checked')).map(i => i.value);
      state.custom_tags = document.getElementById('custom_tags_input')?.value || '';
      state.video_url = document.getElementById('recipe_video_url_input')?.value || '';
      state.ingredient_pool = ingredient_pool;
      state.recipe_steps = recipe_steps.map(({ _image_file, _video_file, ...rest }) => rest);
      state.existing_cover_image_url = existing_cover_image_url;
      state.existing_gallery_urls = existing_gallery_urls;
    }
    sessionStorage.setItem('dishful_pending_restore', JSON.stringify(state));
  } catch (err) {
    console.error('[Dishful] Échec sauvegarde avant changement de langue :', err);
  }
});

function restore_pending_state_after_lang_switch() {
  let raw;
  try { raw = sessionStorage.getItem('dishful_pending_restore'); } catch (err) { return; }
  if (!raw) return;
  try { sessionStorage.removeItem('dishful_pending_restore'); } catch (err) {}
  let state;
  try { state = JSON.parse(raw); } catch (err) { return; }
  if (!state || !state.tab || state.tab === 'recipe-detail') return; // recipe-detail se restaure déjà via ?recipe= dans l'URL

  if (state.tab === 'public-profile' && state.public_profile_user_id) {
    show_public_profile_page(state.public_profile_user_id);
    return;
  }

  switch_tab(state.tab);
  if (state.tab !== 'publish') return;

  document.getElementById('recipe_title_input').value = state.title || '';
  if (document.getElementById('recipe_description_input')) document.getElementById('recipe_description_input').value = state.description || '';
  if (state.servings) document.getElementById('recipe_servings_input').value = state.servings;
  if (document.getElementById('recipe_difficulty_select') && state.difficulty) document.getElementById('recipe_difficulty_select').value = state.difficulty;
  if (state.country_code) country_select.value = state.country_code;
  document.querySelectorAll('#category_chips .chip').forEach(chip => {
    const checked = (state.categories || []).includes(chip.dataset.value);
    chip.querySelector('input').checked = checked;
    chip.classList.toggle('checked', checked);
  });
  const suggested_tags_used = [];
  document.querySelectorAll('#tag_chips .chip').forEach(chip => {
    const checked = (state.tags || []).includes(chip.dataset.value);
    chip.querySelector('input').checked = checked;
    chip.classList.toggle('checked', checked);
    if (checked) suggested_tags_used.push(chip.dataset.value);
  });
  if (document.getElementById('custom_tags_input')) document.getElementById('custom_tags_input').value = state.custom_tags || '';
  if (document.getElementById('recipe_video_url_input')) document.getElementById('recipe_video_url_input').value = state.video_url || '';

  editing_recipe_id = state.editing_recipe_id || null;
  existing_cover_image_url = state.existing_cover_image_url || null;
  existing_gallery_urls = state.existing_gallery_urls || [];
  ingredient_pool = state.ingredient_pool || [];
  recipe_steps = state.recipe_steps || [];

  render_cover_photo_preview();
  render_image_thumbs();
  update_image_preview_text();
  render_ingredient_pool_chips();
  render_steps_compact_list();
  if (editing_recipe_id) {
    document.getElementById('publish_form_title').textContent = I18N.t('publish.title_edit');
    document.querySelector('#recipe_form button[type="submit"]').innerHTML = `<i class="fa-solid fa-floppy-disk"></i> ${escape_html(I18N.t('publish.submit_edit'))}`;
  }
  switch_wizard_step(state.wizard_step || 1);
}

(async function boot() {
  if (!supabase) return;
  try {
    await I18N.ready;
    await refresh_session();
    await load_recipes();
    // Lien direct partagé (?recipe=...) : ouvre directement la recette concernée.
    const shared_recipe_id = new URLSearchParams(location.search).get('recipe');
    if (shared_recipe_id) show_recipe_detail_page(shared_recipe_id);
    restore_pending_state_after_lang_switch();
  } catch (err) {
    console.error('[Dishful] Erreur au démarrage :', err);
  }
})();

})(); // fin de l'IIFE qui protège tout le fichier