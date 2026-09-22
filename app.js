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

  nationality_select.innerHTML = '<option value="">Sélectionner un pays</option>';
  country_list.forEach((country) => {
    const country_option = document.createElement("option");
    country_option.value = country.code;
    country_option.textContent = `${country.flag} ${country.name}`;
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
    if (!supabase) { msg.className = "msg error"; msg.textContent = "Supabase indisponible."; return; }
    msg.className = "msg";
    msg.textContent = "Envoi de la confirmation...";
    const { error } = await supabase.auth.updateUser({ email: new_email });
    if (error) {
      msg.className = "msg error";
      msg.textContent = "Erreur : " + error.message;
      return;
    }
    msg.className = "msg";
    msg.textContent = "Un email de confirmation a été envoyé à l'ancienne ET à la nouvelle adresse. Clique sur les deux liens pour valider le changement.";
    document.getElementById("change_email_form").classList.add("hidden");
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
const SUGGESTED_TAGS = ['Étudiant / pas cher','Rendez-vous','Rapide','Healthy','Fête','Confort food'];

let current_user = null;
let current_profile = null;
let all_recipes = [];
let liked_recipe_ids = new Set();
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

function dishful_loading_html(label) {
  return `<div class="dishful-loading"><i class="fa-solid fa-utensils dishful-loading-icon"></i><span>${escape_html(label || 'Chargement...')}</span></div>`;
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
  if (!supabase) { message_text.className = 'msg error'; message_text.textContent = 'Supabase indisponible.'; return; }
  message_text.className = 'msg';
  message_text.textContent = 'Connexion...';
  const { error } = await supabase.auth.signInWithPassword({
    email: document.getElementById('login_email_input').value,
    password: document.getElementById('login_password_input').value
  });
  if (error) {
    message_text.className = 'msg error';
    message_text.textContent = 'Erreur : ' + error.message;
    return;
  }
  message_text.textContent = 'Connecté !';
  setTimeout(() => auth_modal.classList.add('hidden'), 500);
});

signup_form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!supabase) { message_text.className = 'msg error'; message_text.textContent = 'Supabase indisponible.'; return; }
  message_text.className = 'msg';
  message_text.textContent = 'Création du compte...';

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
    message_text.textContent = 'Erreur : ' + auth_error.message;
    return;
  }

  // Le profil (username généré, prénom/nom/nationalité) est créé automatiquement
  // côté base de données par un trigger sur auth.users — pas besoin de l'insérer ici.
  message_text.className = 'msg';
  message_text.textContent = auth_data.session
    ? 'Compte créé ! Tu peux publier une recette.'
    : 'Compte créé ! Vérifie ta boîte mail pour confirmer ton adresse, puis connecte-toi.';
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
      <div class="xp-pill"><i class="fa-solid fa-fire"></i> <span class="lvl">Niv. ${current_profile.user_level}</span> · ${current_profile.xp_points} XP</div>
      <button id="open_profile_btn" class="avatar avatar-header" title="Mon profil">${avatar_html}</button>
    `;
    document.getElementById('open_profile_btn').addEventListener('click', () => switch_tab('profile'));
  } else {
    // si on était sur l'onglet profil en se déconnectant, on revient au feed
    if (!document.getElementById('tab-profile').classList.contains('hidden')) {
      switch_tab('feed');
    }
    zone.innerHTML = `<button id="open_auth_btn" class="text-btn"><i class="fa-solid fa-right-to-bracket"></i> Se connecter</button>`;
    document.getElementById('open_auth_btn').addEventListener('click', () => auth_modal.classList.remove('hidden'));
  }
}

// =====================================================================
// 4. CATEGORY / TAG CHIPS
// =====================================================================
function build_chip_group(container, values, name) {
  container.innerHTML = values.map((v) => `
    <label class="chip" data-value="${v}">
      <input type="checkbox" name="${name}" value="${v}">${v}
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
build_chip_group(document.getElementById('category_chips'), CATEGORIES, 'cat');
build_chip_group(document.getElementById('tag_chips'), SUGGESTED_TAGS, 'tag');

let feed_search_query = '';
let active_country_filter = null;
let active_difficulty_filter = null;
let active_time_filter = null; // minutes max, ou null
let active_tag_filters = new Set();
let active_sort = 'newest';

function render_category_filters() {
  const container = document.getElementById('category_filters');
  container.innerHTML = `<button class="filter-chip ${!active_category_filter ? 'active' : ''}" data-cat="">Tout</button>` +
    CATEGORIES.map(c => `<button class="filter-chip ${active_category_filter===c?'active':''}" data-cat="${c}">${c}</button>`).join('');
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
    `<button class="filter-chip ${active_tag_filters.has(t) ? 'active' : ''}" data-tag="${escape_attr(t)}">${escape_html(t)}</button>`
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
  const options = [['', 'Toutes'], ['facile', 'Facile'], ['moyen', 'Moyen'], ['difficile', 'Difficile']];
  const container = document.getElementById('difficulty_filters');
  container.innerHTML = options.map(([val, label]) =>
    `<button class="filter-chip ${active_difficulty_filter === (val || null) ? 'active' : ''}" data-diff="${val}">${label}</button>`
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
  const options = [[null, 'Tout'], [15, '≤ 15 min'], [30, '≤ 30 min'], [60, '≤ 1h'], [120, '≤ 2h']];
  const container = document.getElementById('time_filters');
  container.innerHTML = options.map(([val, label]) =>
    `<button class="filter-chip ${active_time_filter === val ? 'active' : ''}" data-time="${val ?? ''}">${label}</button>`
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
country_list.slice().sort((a, b) => a.name.localeCompare(b.name, 'fr')).forEach(c => {
  const opt = document.createElement('option');
  opt.value = c.code;
  opt.textContent = `${c.flag} ${c.name}`;
  filter_country_select.appendChild(opt);
});
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

country_list
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name, 'fr'))
  .forEach((country) => {
    const opt = document.createElement('option');
    opt.value = country.code;
    opt.textContent = `${country.flag} ${country.name}`;
    country_select.appendChild(opt);
  });

function country_name_from_code(code) {
  const found = country_list.find(c => c.code === code);
  return found ? found.name : code;
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
    container.innerHTML = `<p class="empty-hint">Aucun ingrédient ajouté pour l'instant.</p>`;
    return;
  }
  container.innerHTML = ingredient_pool.map((ing, i) => `
    <span class="pool-chip" data-index="${i}">
      <span class="pool-chip-emoji">${ing.emoji}</span> ${escape_html(ing.name)}
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
  container.innerHTML = `<button type="button" class="food-cat-tab ${!active_food_category ? 'active' : ''}" data-cat="">Tout</button>` +
    FOOD_CATEGORIES.map(c => `<button type="button" class="food-cat-tab ${active_food_category === c ? 'active' : ''}" data-cat="${escape_attr(c)}">${escape_html(c)}</button>`).join('');
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
  if (search) list = list.filter(f => normalize_for_search(f.name).includes(normalize_for_search(search)));

  if (list.length === 0) {
    grid.innerHTML = `<p class="empty-hint">Aucun résultat. Ajoute-le manuellement ci-dessous.</p>`;
    update_confirm_add_button();
    return;
  }
  grid.innerHTML = list.map(f => {
    const already_added = ingredient_pool.some(p => p.name === f.name);
    const is_selected = food_picker_selected.has(f.name);
    return `<button type="button" class="food-tile ${already_added ? 'added' : ''} ${is_selected ? 'selected' : ''}" data-name="${escape_attr(f.name)}" data-emoji="${f.emoji}" ${already_added ? 'disabled' : ''}>
      <span class="food-tile-emoji">${f.emoji}</span>
      <span class="food-tile-name">${escape_html(f.name)}</span>
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
    cloud.innerHTML = `<p class="cloud-empty-hint">Clique sur des aliments pour les voir apparaître ici.</p>`;
    return;
  }
  cloud.innerHTML = [...food_picker_selected].map(name => {
    const found = COMMON_FOODS.find(f => f.name === name);
    const emoji = found ? found.emoji : '🍽️';
    return `<button type="button" class="cloud-bubble" data-name="${escape_attr(name)}">
      <span>${emoji} ${escape_html(name)}</span>
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
  show_toast(added_names.length > 1 ? `${added_names.length} ingrédients ajoutés` : `"${added_names[0]}" ajouté à la recette`);
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
  show_toast(`"${name}" ajouté à la liste — clique sur "Ajouter" pour le confirmer.`, 'fa-circle-plus');
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
  const title = document.getElementById('recipe_title_input').value.trim() || '(Sans titre)';
  const description = document.getElementById('recipe_description_input')?.value.trim() || '';
  const categories = Array.from(document.querySelectorAll('#category_chips input:checked')).map(i => i.value);
  const tags = Array.from(document.querySelectorAll('#tag_chips input:checked')).map(i => i.value);
  const custom_tags = document.getElementById('custom_tags_input').value.split(',').map(t => t.trim()).filter(Boolean);
  const country_code_val = country_select.value;
  const country_display = country_code_val ? country_name_from_code(country_code_val) : null;
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
          : `<div class="preview-cover-empty"><i class="fa-solid fa-image"></i> Pas encore de photo de couverture</div>`}
      </div>
      ${gallery_urls.length ? `<div class="recipe_gallery">${gallery_urls.map(u => `<img src="${escape_attr(u)}" alt="">`).join('')}</div>` : ''}

      <div class="leaderboard-subtabs preview-subtab-nav">
        <button type="button" class="leaderboard-subtab-btn preview-subtab-btn active" data-ptab="info"><i class="fa-solid fa-circle-info"></i> Infos</button>
        <button type="button" class="leaderboard-subtab-btn preview-subtab-btn" data-ptab="ingredients"><i class="fa-solid fa-carrot"></i> Ingrédients & Ustensiles</button>
        <button type="button" class="leaderboard-subtab-btn preview-subtab-btn" data-ptab="steps"><i class="fa-solid fa-list-ol"></i> Étapes${recipe_steps.length ? ` (${recipe_steps.length})` : ''}</button>
      </div>

      <div class="preview-subtab-panel" data-ptab-panel="info">
        <div class="recipe_header">
          <div class="title_row">
            <h2>${escape_html(title)}</h2>
            ${country_display
              ? `<span class="country_badge">${country_flag_from_code(country_code_val) || '🌍'} ${escape_html(country_display)}</span>`
              : `<span class="country_badge preview-meta-missing"><i class="fa-solid fa-triangle-exclamation"></i> Pays manquant</span>`}
          </div>
          ${description ? `<p class="recipe_description">${escape_html(description)}</p>` : '<p class="empty-hint">Pas de description</p>'}

          <div class="recipe_meta_bar">
            <div><i class="fa-solid fa-users"></i> ${escape_html(String(servings))} pers.</div>
            <div><i class="fa-solid fa-gauge"></i> ${escape_html(difficulty.charAt(0).toUpperCase() + difficulty.slice(1))}</div>
            <div><i class="fa-regular fa-clock"></i> Temps total : ${total_time} min</div>
          </div>

          <div class="chips-row" style="margin-top:14px;">
            ${[...categories, ...tags, ...custom_tags].map(t => `<span class="tag-chip">${escape_html(t)}</span>`).join('') || '<span class="empty-hint">Aucune catégorie/tag choisi</span>'}
          </div>
        </div>
      </div>

      <div class="preview-subtab-panel hidden" data-ptab-panel="ingredients">
        <div class="prep_before_start">
          <h3 class="prep_before_start_title"><i class="fa-solid fa-list-check"></i> Ce qu'il faut rassembler</h3>
          <div class="prep_before_start_columns">
            <div class="prep_column">
              <h4><i class="fa-solid fa-carrot"></i> Ingrédients</h4>
              ${render_product_list_html(ingredient_pool.filter(i => total_qty.has(i.name)), total_qty, 'Aucun ingrédient utilisé dans les étapes')}
            </div>
            <div class="prep_column">
              <h4><i class="fa-solid fa-kitchen-set"></i> Ustensiles</h4>
              ${render_product_list_html(all_tools, null, 'Aucun outil requis')}
            </div>
          </div>
        </div>
      </div>

      <div class="preview-subtab-panel hidden" data-ptab-panel="steps">
        <h3><i class="fa-solid fa-list-ol"></i> Préparation</h3>
        ${recipe_steps.length ? `
          <ol class="steps_list">
            ${recipe_steps.map((s) => {
              const type_info = STEP_TYPES[s.type] || STEP_TYPES.prep;
              const ing_tags = (s.ingredients || []).map(ing => `<span class="tag-chip">${ing.amount || ''}${escape_html(ing.unit || '')} ${escape_html(ing.name)}</span>`).join('');
              const tool_tags = (s.tools || []).map(t => `<span class="tag-chip tool-tag-chip">${t.emoji || '🔧'} ${escape_html(t.name)}</span>`).join('');
              const media = step_preview_media(s);
              const media_html = media
                ? (media.type === 'image'
                    ? `<img class="step_media_preview" src="${escape_attr(media.url)}" alt="">`
                    : `<video class="step_media_preview" src="${escape_attr(media.url)}" controls></video>`)
                : (s.external_url ? `<a href="${escape_attr(s.external_url)}" target="_blank" rel="noopener" class="step_external_link"><i class="fa-solid fa-link"></i> Média externe</a>` : '');
              return `<li>
                <span class="step_type_badge"><i class="fa-solid ${type_info.icon}"></i> ${type_info.label}${s.oven_temp ? ' · ' + s.oven_temp + '°C' : ''}</span>
                ${s.time_min ? `<span class="step_time_badge"><i class="fa-solid fa-stopwatch"></i> ${s.time_min} min</span>` : ''}
                <p>${escape_html(s.text || '')}</p>
                ${step_detail_blocks_html(ing_tags, tool_tags)}
                ${media_html}
              </li>`;
            }).join('')}
          </ol>
        ` : '<p class="empty-hint" style="margin:0 24px;">Aucune étape ajoutée</p>'}
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
  return `<div class="product-list">${items.map(item => {
    const entry = total_qty ? total_qty.get(item.name) : null;
    const parts = entry ? [...entry.units.entries()].map(([unit, sum]) => {
      const unit_label = (UNIT_OPTIONS.find(u => u.value === unit) || {}).label || unit;
      const formatted = Number.isInteger(sum) ? sum : Math.round(sum * 100) / 100;
      return `${formatted} ${unit_label}`;
    }) : [];
    if (entry && entry.to_taste) parts.push('Au goût');
    const qty_html = parts.length
      ? `<span class="product-list-qty">${escape_html(parts.join(' + '))}</span>`
      : (entry && entry.unspecified ? `<span class="product-list-qty unspecified">qté libre</span>` : '');
    return `
      <div class="product-list-item">
        <span class="product-list-icon">${item.emoji || '🍽️'}</span>
        <span class="product-list-name">${escape_html(item.name)}</span>
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
  if (ing_tags) html += `<div class="step_detail_block"><span class="step_detail_label"><i class="fa-solid fa-carrot"></i> Ingrédients</span><div class="step_ing_tags">${ing_tags}</div></div>`;
  if (tool_tags) html += `<div class="step_detail_block"><span class="step_detail_label"><i class="fa-solid fa-kitchen-set"></i> Outils</span><div class="step_ing_tags">${tool_tags}</div></div>`;
  return html;
}

function render_steps_compact_list() {
  const container = document.getElementById('steps_compact_list');
  if (recipe_steps.length === 0) {
    container.innerHTML = `<p class="empty-hint">Aucune étape ajoutée pour l'instant.</p>`;
  } else {
    container.innerHTML = recipe_steps.map((step, i) => {
      const type_info = STEP_TYPES[step.type] || STEP_TYPES.prep;
      const preview_source = step.text || '';
      const preview_text = preview_source.slice(0, 70) + (preview_source.length > 70 ? '…' : '');
      return `
        <div class="step-compact-card" data-index="${i}">
          <div class="step-compact-icon"><i class="fa-solid ${type_info.icon}"></i></div>
          <div class="step-compact-body">
            <div class="step-compact-title">Étape ${i + 1} · ${type_info.label}${step.oven_temp ? ' · ' + step.oven_temp + '°C' : ''}</div>
            <div class="step-compact-text">${preview_text ? escape_html(preview_text) : '<em>Pas encore de description</em>'}</div>
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
  const type_info = STEP_TYPES[type] || STEP_TYPES.prep;
  document.getElementById('step_editor_time_label').textContent = type_info.time_label;
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
}
document.querySelectorAll('.step-type-btn').forEach(btn => {
  btn.addEventListener('click', () => set_step_editor_type(btn.dataset.type, true, step_editor_current_type));
});

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
    container.innerHTML = `<p class="empty-hint">Aucun ingrédient ajouté à cette étape.</p>`;
    return;
  }
  container.innerHTML = step_editor_linked_ingredients.map((ing, i) => {
    const pool_match = ingredient_pool.find(p => p.name === ing.name);
    const emoji = pool_match ? pool_match.emoji : '🍽️';

    if (step_editor_linked_edit_index === i) {
      return `
        <div class="step-linked-ing-row editing" data-index="${i}">
          <span class="step-linked-ing-label">${emoji} ${escape_html(ing.name)}</span>
          <input type="number" class="step_linked_ing_amount" data-index="${i}" placeholder="Qté" step="any" min="0" value="${escape_attr(ing.amount)}" ${ing.unit === TO_TASTE_UNIT ? 'disabled' : ''}>
          <select class="step_linked_ing_unit" data-index="${i}">
            ${UNIT_OPTIONS.map(u => `<option value="${u.value}" ${ing.unit === u.value ? 'selected' : ''}>${u.label}</option>`).join('')}
          </select>
          <button type="button" class="step-linked-ing-done" data-index="${i}"><i class="fa-solid fa-check"></i></button>
          <button type="button" class="step-linked-ing-remove" data-index="${i}"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `;
    }
    const unit_label = (UNIT_OPTIONS.find(u => u.value === ing.unit) || {}).label || ing.unit || '';
    const qty_display = ing.unit === TO_TASTE_UNIT
      ? 'Au goût'
      : (ing.amount ? `${escape_html(String(ing.amount))} ${escape_html(unit_label)}` : `<em>Qté non précisée</em>`);
    return `
      <div class="step-linked-ing-row compact" data-index="${i}">
        <span class="step-linked-ing-label">${emoji} ${escape_html(ing.name)}</span>
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
    grid.innerHTML = `<p class="empty-hint">Ajoute d'abord des ingrédients à l'étape 3 du formulaire.</p>`;
    update_step_ing_picker_confirm();
    return;
  }
  if (search) list = list.filter(f => normalize_for_search(f.name).includes(normalize_for_search(search)));
  if (list.length === 0) {
    grid.innerHTML = `<p class="empty-hint">${already_linked.length === ingredient_pool.length ? 'Tous les ingrédients de la recette sont déjà ajoutés à cette étape.' : 'Aucun résultat.'}</p>`;
    update_step_ing_picker_confirm();
    return;
  }
  grid.innerHTML = list.map(f => {
    const is_selected = step_ing_modal_selected.has(f.name);
    return `<button type="button" class="food-tile ${is_selected ? 'selected' : ''}" data-name="${escape_attr(f.name)}">
      <span class="food-tile-emoji">${f.emoji}</span>
      <span class="food-tile-name">${escape_html(f.name)}</span>
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
    container.innerHTML = `<p class="empty-hint">Choisis d'abord des ingrédients dans l'onglet « 1. Choisir ».</p>`;
    return;
  }
  container.innerHTML = [...step_ing_modal_selected.entries()].map(([name, data]) => {
    const pool_match = ingredient_pool.find(p => p.name === name);
    const emoji = pool_match ? pool_match.emoji : '🍽️';
    return `
      <div class="step-linked-ing-row" data-name="${escape_attr(name)}">
        <span class="step-linked-ing-label">${emoji} ${escape_html(name)}</span>
        <input type="number" class="step_linked_ing_amount" data-name="${escape_attr(name)}" placeholder="Qté" step="any" min="0" value="${escape_attr(data.amount)}" ${data.unit === TO_TASTE_UNIT ? 'disabled' : ''}>
        <select class="step_linked_ing_unit" data-name="${escape_attr(name)}">
          ${UNIT_OPTIONS.map(u => `<option value="${u.value}" ${data.unit === u.value ? 'selected' : ''}>${u.label}</option>`).join('')}
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
    container.innerHTML = `<p class="empty-hint">Aucun outil ajouté à cette étape.</p>`;
    return;
  }
  container.innerHTML = step_editor_tools.map((tool, i) => `
    <div class="step-linked-ing-row" data-index="${i}">
      <span class="step-linked-ing-label">${tool.emoji} ${escape_html(tool.name)}</span>
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
  if (search) list = list.filter(t => normalize_for_search(t.name).includes(normalize_for_search(search)));

  if (list.length === 0) {
    grid.innerHTML = `<p class="empty-hint">Tous les outils courants sont déjà ajoutés.</p>`;
    update_step_tool_picker_confirm();
    return;
  }
  grid.innerHTML = list.map(t => {
    const is_selected = step_tool_modal_selected.has(t.name);
    return `<button type="button" class="food-tile ${is_selected ? 'selected' : ''}" data-name="${escape_attr(t.name)}" data-emoji="${t.emoji}">
      <span class="food-tile-emoji">${t.emoji}</span>
      <span class="food-tile-name">${escape_html(t.name)}</span>
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

function open_step_editor(index) {
  step_editor_index = index;
  step_editor_image_file = null;
  step_editor_video_file = null;
  const is_editing = index !== null;
  const step = is_editing ? recipe_steps[index] : { type: 'prep', text: '', time_min: '', oven_temp: '', ingredients: [], tools: [], image_url: null, video_url: null, external_url: '', output_product: '' };

  document.getElementById('step_editor_title').innerHTML = is_editing
    ? `<i class="fa-solid fa-list-ol"></i> Modifier l'étape ${index + 1}`
    : `<i class="fa-solid fa-list-ol"></i> Ajouter une étape`;
  document.getElementById('step_editor_text').value = step.text || '';
  document.getElementById('step_editor_time').value = step.time_min || '';
  sync_time_picker_presets('step_editor_time');
  document.getElementById('step_editor_temp').value = step.oven_temp || '';
  document.getElementById('step_editor_external_url').value = step.external_url || '';
  document.getElementById('step_editor_output_product').value = step.output_product || '';
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
    container.innerHTML = '';
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
  if (!text) { alert('Ajoute une description pour cette étape.'); return; }

  const output_product = document.getElementById('step_editor_output_product').value.trim();

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
    dropzone.innerHTML = `<img src="${escape_attr(url)}" alt="">`;
    dropzone.classList.add('has-image');
  } else {
    dropzone.innerHTML = `<i class="fa-solid fa-camera"></i><span>Choisir une photo</span>`;
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
    ? `${pending_images.length} photo${pending_images.length > 1 ? 's' : ''} sélectionnée${pending_images.length > 1 ? 's' : ''}`
    : 'Aucun fichier choisi';
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

  if (!supabase) { recipe_message_text.className = 'msg error'; recipe_message_text.textContent = 'Supabase indisponible.'; return; }

  if (!current_user) {
    recipe_message_text.className = 'msg error';
    recipe_message_text.textContent = 'Tu dois être connecté pour publier une recette.';
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
    recipe_message_text.textContent = 'Ajoute une photo de couverture pour ta recette.';
    return;
  }

  // --- Ingrédients (pool simple, sans quantité globale) ---
  if (ingredient_pool.length === 0 || recipe_steps.length === 0) {
    recipe_message_text.className = 'msg error';
    recipe_message_text.textContent = 'Ajoute au moins un ingrédient et une étape.';
    return;
  }
  const steps_missing_text = recipe_steps.some(s => !s.text || !s.text.trim());
  if (steps_missing_text) {
    recipe_message_text.className = 'msg error';
    recipe_message_text.textContent = 'Chaque étape doit avoir une description.';
    return;
  }

  recipe_message_text.className = 'msg';
  recipe_message_text.textContent = 'Envoi des photos et vidéos...';

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

  recipe_message_text.textContent = editing_recipe_id ? 'Mise à jour...' : 'Publication...';

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
    recipe_message_text.textContent = 'Erreur : ' + error.message;
    return;
  }

  recipe_message_text.className = 'msg';
  recipe_message_text.textContent = was_editing
    ? 'Recette mise à jour !'
    : 'Recette publiée ! +20 XP gagnés.';
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

function open_publish_success_modal(recipe) {
  if (!publish_success_modal) return;
  const share_url = recipe_share_url(recipe.id);
  const share_text = `J'ai publié "${recipe.title}" sur Dishful 🍽️ Viens voir et partage tes propres recettes !`;

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
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copié !';
      setTimeout(() => { btn.innerHTML = '<i class="fa-solid fa-link"></i> Copier le lien'; }, 1800);
    } catch {
      window.prompt('Copie ce lien :', share_url);
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
  if (grid_el) grid_el.innerHTML = dishful_loading_html('Chargement des recettes...');
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
  if (count_el) count_el.textContent = `${list.length} recette${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    grid.innerHTML = all_recipes.length === 0
      ? `<p class="empty-state">Aucune recette pour l'instant. Sois le·la premier·ère à publier !</p>`
      : `<p class="empty-state">Aucune recette ne correspond à ta recherche/tes filtres.</p>`;
    return;
  }
  grid.innerHTML = list.map(r => recipe_card_html(r)).join('');

  list.forEach((r) => {
    const card = document.querySelector(`[data-recipe-id="${r.id}"]`);
    card.addEventListener("click", (e) => {
      // Éviter de déclencher la navigation si on clique sur un bouton d'action de la carte
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

function show_translate_stub() {
  alert("Traduction automatique : fonctionnalité prête côté interface, mais elle nécessite de connecter une clé API de traduction (DeepL ou Google Cloud Translation) côté serveur. Dis-moi si tu veux qu'on la branche.");
}

function recipe_card_html(r) {
  const primary_cat = (r.categories && r.categories[0]) || 'Plat';
  const author_name = r.profiles ? r.profiles.username : 'Anonyme';
  const donation_link = r.profiles ? r.profiles.donation_link : null;
  const author_avatar_url = r.profiles ? r.profiles.avatar_url : null;
  const author_initial = (author_name || '?')[0].toUpperCase();
  const is_liked = liked_recipe_ids.has(r.id);
  const tag_chips = [...(r.categories||[]), ...(r.tags||[])]
    .map(t => `<span class="tag-chip">${escape_html(t)}</span>`).join('');
  const cover_image = r.cover_image || (r.images && r.images[0]) || null;
  const flag_html = r.country_code ? (country_flag_from_code(r.country_code) || '🌍') : '';
  const total_time = compute_recipe_total_time(r);
  const difficulty_label = (r.difficulty || 'moyen');

  return `
  <article class="recipe-card" data-recipe-id="${r.id}">
    <div class="recipe-card-header">
      <button type="button" class="recipe-card-author" data-author-id="${escape_attr(r.author_id)}">
        <span class="avatar recipe-card-avatar">${author_avatar_url ? `<img src="${escape_attr(author_avatar_url)}" alt="">` : author_initial}</span>
        <span class="recipe-card-author-info">
          <span class="recipe-card-author-name">${escape_html(author_name)}</span>
          <span class="recipe-card-author-sub">${r.country ? flag_html + ' ' + escape_html(r.country) + ' · ' : ''}${format_relative_date(r.created_at)}</span>
        </span>
      </button>
      <span class="stripe-badge cat-${escape_html(primary_cat)}">${escape_html(primary_cat)}</span>
    </div>

    <div class="recipe-card-media">
      ${cover_image
        ? `<img class="recipe-cover" src="${escape_attr(cover_image)}" alt="">`
        : `<div class="recipe-cover recipe-cover-placeholder"><i class="fa-solid fa-utensils"></i></div>`}
      <div class="recipe-card-media-scrim"></div>
      ${r.rating_count ? `
        <div class="recipe-card-media-top">
          <span class="recipe-card-rating-badge"><i class="fa-solid fa-star"></i> ${Number(r.rating_avg).toFixed(1)} <em>(${r.rating_count})</em></span>
        </div>
      ` : ''}
      <h2 class="recipe-card-media-title">${escape_html(r.title)}</h2>
    </div>
    <div class="recipe-body">
      <div class="recipe-card-stats-row">
        ${total_time ? `<span class="recipe-card-stat"><i class="fa-solid fa-stopwatch"></i> ${total_time} min</span>` : ''}
        <span class="recipe-card-stat"><i class="fa-solid fa-gauge"></i> ${escape_html(difficulty_label)}</span>
        ${r.servings ? `<span class="recipe-card-stat"><i class="fa-solid fa-users"></i> ${r.servings} pers.</span>` : ''}
        ${r.views_count ? `<span class="recipe-card-stat"><i class="fa-solid fa-eye"></i> ${r.views_count}</span>` : ''}
      </div>
      <div class="chips-row">${tag_chips}</div>
      <div class="recipe-actions">
        <button class="action-btn like-btn ${is_liked ? 'liked' : ''}"><i class="fa-solid fa-heart"></i> <span class="like-count">${r.likes_count || 0}</span></button>
        <span class="action-btn"><i class="fa-regular fa-comment"></i> ${r.comments_count || 0}</span>
        <button class="translate-btn"><i class="fa-solid fa-language"></i> Traduire</button>
        ${donation_link ? `<a class="donate-btn" href="${escape_attr(donation_link)}" target="_blank" rel="noopener"><i class="fa-solid fa-hand-holding-heart"></i> Faire un don</a>` : ''}
      </div>
    </div>
  </article>`;
}

async function toggle_like(recipe_id) {
  if (!current_user) { auth_modal.classList.remove('hidden'); return; }
  const already_liked = liked_recipe_ids.has(recipe_id);

  if (already_liked) {
    await supabase.from('likes').delete().eq('recipe_id', recipe_id).eq('user_id', current_user.id);
    liked_recipe_ids.delete(recipe_id);
  } else {
    await supabase.from('likes').insert([{ recipe_id, user_id: current_user.id }]);
    liked_recipe_ids.add(recipe_id);
  }

  await load_recipes();
  await refresh_session();
}

function escape_html(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}
function escape_attr(str) { return escape_html(str); }

// Date relative façon fil d'actualité ("il y a 2 j") plutôt qu'une date brute.
function format_relative_date(iso) {
  if (!iso) return '';
  const diff_ms = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff_ms / 60000);
  if (min < 1) return "à l'instant";
  if (min < 60) return `il y a ${min} min`;
  const hours = Math.floor(min / 60);
  if (hours < 24) return `il y a ${hours} h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `il y a ${days} j`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `il y a ${weeks} sem.`;
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}

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

// Sélecteur de temps interactif : boutons -/+ et raccourcis (1, 5, 10, 15...) plutôt que
// de taper un nombre de minutes à la main. Pilote un <input type="number"> existant, donc
// tout le code qui lit sa valeur ailleurs continue de fonctionner sans changement.
function sync_time_picker_presets(target_id) {
  const presets = document.querySelector(`.time-picker-presets[data-target="${target_id}"]`);
  const input = document.getElementById(target_id);
  if (!presets || !input) return;
  const current = String(parseInt(input.value) || 0);
  presets.querySelectorAll('button[data-min]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.min === current);
  });
}
function init_time_pickers() {
  document.querySelectorAll('.time-picker').forEach(picker => {
    const target_id = picker.dataset.target;
    const input = document.getElementById(target_id);
    if (!input) return;
    const adjust = (delta) => {
      const current = parseInt(input.value) || 0;
      input.value = Math.max(0, current + delta);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      sync_time_picker_presets(target_id);
    };
    picker.querySelector('.time-picker-minus')?.addEventListener('click', () => adjust(-5));
    picker.querySelector('.time-picker-plus')?.addEventListener('click', () => adjust(5));
  });
  document.querySelectorAll('.time-picker-presets').forEach(presets => {
    const target_id = presets.dataset.target;
    const input = document.getElementById(target_id);
    if (!input) return;
    presets.querySelectorAll('button[data-min]').forEach(btn => {
      btn.addEventListener('click', () => {
        input.value = btn.dataset.min;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        sync_time_picker_presets(target_id);
      });
    });
    input.addEventListener('input', () => sync_time_picker_presets(target_id));
  });
}
init_time_pickers();

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
  document.getElementById("profile_display_name").textContent = display_name || "Utilisateur";
  document.getElementById("profile_username_text").textContent = profile.username ? `@${profile.username}` : "@username";

  // Niveau et XP : niveau N nécessite (N-1)*100 XP, et se termine à N*100 XP.
  // La barre montre la progression DANS le niveau actuel, pas le total brut.
  const user_level = profile.user_level || 1;
  const xp_points = profile.xp_points || 0;
  const xp_for_current_level = (user_level - 1) * 100;
  const xp_in_current_level = xp_points - xp_for_current_level;
  const xp_percentage = Math.min(Math.max((xp_in_current_level / 100) * 100, 0), 100);

  document.getElementById("profile_level").textContent = `Niv. ${user_level}`;
  document.getElementById("profile_xp_text").textContent = `${xp_in_current_level} / 100 XP (niveau ${user_level}) · ${xp_points} XP au total`;
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
      if (!user) return alert("Veuillez vous connecter.");

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
        alert("Erreur : " + error.message);
      } else {
        alert("Profil mis à jour !");
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
    alert("Erreur envoi image : " + error.message);
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
      <div class="badge_name">${active_badge.name}</div>
    `;
    document.getElementById("equipped_badge_display").textContent = `${active_badge.icon} ${active_badge.name}`;
  } else {
    equipped_box.innerHTML = `<span>Aucun badge équipé</span>`;
    document.getElementById("equipped_badge_display").textContent = "";
  }

  render_badge_grid("recipe_badges_grid", recipe_badge_list, total_published, equipped_badge_id, "recettes", true);
  render_badge_grid("like_badges_grid", like_badge_list, total_likes, equipped_badge_id, "likes", true);
  render_badge_grid("level_badges_grid", level_badge_list, user_level, equipped_badge_id, "niveaux", true);
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

    let btn_label = "Verrouillé";
    if (is_equipped) btn_label = "Équipé";
    else if (is_unlocked) btn_label = interactive ? "Équiper" : "Débloqué";

    return `
      <div class="${card_class}" data-badge-id="${badge.id}" data-unlocked="${is_unlocked}">
        <div class="badge_icon">${badge.icon}</div>
        <div class="badge_name">${badge.name}</div>
        <div class="badge_desc">${badge.count} ${label} (${Math.min(current_count, badge.count)}/${badge.count})</div>
        <button type="button" class="badge_status_btn">${btn_label}</button>
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
    container.innerHTML = `<p class="empty-state">Aucune recette trouvée.</p>`;
    return;
  }

  container.innerHTML = recipes.map((r) => {
    const cover_image = r.cover_image || (r.images && r.images[0]) || "";
    return `
      <div class="mini_recipe_card" data-recipe-id="${r.id}">
        <div class="mini_card_img" style="background-image: url('${escape_attr(cover_image)}')"></div>
        <div class="mini_card_info">
          <h4>${escape_html(r.title)}</h4>
          <span class="mini_card_meta">${r.country ? r.country : "Recette"} · ❤️ ${r.likes_count || 0}</span>
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

  country_select.innerHTML = `<option value="">Tous les pays</option>` +
    countries.map((c) => `<option value="${escape_attr(c)}">${escape_html(c)}</option>`).join("");

  tag_select.innerHTML = `<option value="">Tous les tags</option>` +
    tags.map((t) => `<option value="${escape_attr(t)}">${escape_html(t)}</option>`).join("");

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

function switch_tab(tab_name) {
  document.querySelectorAll("nav.tabs button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab_name);
  });

  ["feed", "publish", "profile", "recipe-detail", "leaderboard", "public-profile"].forEach((tab_id) => {
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
  if (!supabase) { container.innerHTML = `<p class="empty-state">Supabase indisponible.</p>`; return; }
  container.innerHTML = dishful_loading_html('Chargement du classement...');

  if (leaderboard_period === 'week') {
    await load_weekly_chefs_ranking(container);
    return;
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, first_name, last_name, avatar_url, xp_points, user_level')
    .order('xp_points', { ascending: false })
    .limit(50);

  if (error) { container.innerHTML = `<p class="empty-state">Erreur : ${escape_html(error.message)}</p>`; return; }
  if (!data || data.length === 0) { container.innerHTML = `<p class="empty-state">Personne dans le classement pour l'instant.</p>`; return; }

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
          <span class="leaderboard-name">${escape_html(display_name)}${is_me ? ' <span class="its-me-badge"><i class="fa-solid fa-star"></i> C\'est moi</span>' : ''}</span>
          <span class="leaderboard-username">@${escape_html(p.username || '')}</span>
        </div>
        <div class="leaderboard-level">
          <div class="leaderboard-level-row">
            <span class="leaderboard-level-badge">Niv. ${p.user_level}</span>
            <span class="leaderboard-xp-text">${p.xp_points} XP au total</span>
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
    container.innerHTML = `<p class="empty-state">Personne n'a gagné d'XP cette semaine pour l'instant.</p>`;
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
          <span class="leaderboard-name">${escape_html(display_name)}${is_me ? ' <span class="its-me-badge"><i class="fa-solid fa-star"></i> C\'est moi</span>' : ''}</span>
          <span class="leaderboard-username">@${escape_html(p.username || '')}</span>
        </div>
        <div class="leaderboard-level">
          <span class="leaderboard-xp-text"><i class="fa-solid fa-bolt" style="color:var(--rust);"></i> +${entry.xp} XP cette semaine</span>
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
        ? "Les chefs qui cumulent le plus de cœurs sur l'ensemble de leurs recettes."
        : "Les chefs qui cumulent le plus d'étoiles sur l'ensemble de leurs recettes.";
      load_user_aggregate_ranking(kind);
    } else {
      if (hint) hint.textContent = kind === 'liked'
        ? 'Les recettes qui récoltent le plus de cœurs.'
        : 'Les recettes les mieux notées par la communauté.';
      load_recipe_ranking(kind);
    }
  });
});

// Classement par CHEF (utilisateur) : cumule les cœurs (ou les étoiles) sur toutes ses recettes,
// en plus du classement par recette existant (ex : 2 recettes notées 5 étoiles = 10 étoiles cumulées).
async function load_user_aggregate_ranking(kind) {
  const container = document.getElementById(kind === 'liked' ? 'leaderboard_liked_list' : 'leaderboard_rated_list');
  if (!container) return;
  if (!supabase) { container.innerHTML = `<p class="empty-state">Supabase indisponible.</p>`; return; }
  container.innerHTML = dishful_loading_html('Chargement...');

  if (leaderboard_period === 'week') {
    await load_weekly_user_aggregate_ranking(kind, container);
    return;
  }

  const { data, error } = await supabase
    .from('recipes')
    .select('author_id, likes_count, rating_avg, rating_count, profiles(username, avatar_url, first_name, last_name)');

  if (error) { container.innerHTML = `<p class="empty-state">Erreur : ${escape_html(error.message)}</p>`; return; }
  if (!data || data.length === 0) { container.innerHTML = `<p class="empty-state">Aucune donnée pour l'instant.</p>`; return; }

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
    container.innerHTML = `<p class="empty-state">Personne dans ce classement pour l'instant.</p>`;
    return;
  }

  container.innerHTML = ranked.map((entry, i) => {
    const p = entry.profile || {};
    const rank_class = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const is_me = current_user && current_user.id === entry.author_id;
    const display_name = [p.first_name, p.last_name].filter(Boolean).join(' ') || p.username || 'Utilisateur';
    const initials = (p.first_name ? p.first_name[0] : (p.username || '?')[0]).toUpperCase();
    const avatar_html = p.avatar_url ? `<img src="${escape_attr(p.avatar_url)}" alt="">` : initials;
    const recipe_word = `${entry.recipe_count} recette${entry.recipe_count > 1 ? 's' : ''}`;
    const period_word = is_weekly ? ' cette semaine' : ' cumulés';
    const stat_html = kind === 'liked'
      ? `<span class="leaderboard-xp-text"><i class="fa-solid fa-heart" style="color:var(--rust);"></i> ${entry.hearts} cœurs${period_word} sur ${recipe_word}</span>`
      : `<span class="leaderboard-xp-text"><i class="fa-solid fa-star" style="color:#D9A62E;"></i> ${Math.round(entry.stars * 10) / 10} étoiles${period_word} sur ${recipe_word}</span>`;
    return `
      <div class="leaderboard-row ${rank_class} ${is_me ? 'is-me' : ''}" data-user-id="${escape_attr(entry.author_id)}">
        <span class="leaderboard-rank">${i + 1}</span>
        <div class="avatar leaderboard-avatar">${avatar_html}</div>
        <div class="leaderboard-identity">
          <span class="leaderboard-name">${escape_html(display_name)}${is_me ? ' <span class="its-me-badge"><i class="fa-solid fa-star"></i> C\'est moi</span>' : ''}</span>
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
  const author = r.profiles ? r.profiles.username : 'Anonyme';
  const rank_class = rank === 0 ? 'gold' : rank === 1 ? 'silver' : rank === 2 ? 'bronze' : '';
  const is_me = current_user && r.author_id === current_user.id;
  const stat_html = kind === 'rated'
    ? `<span class="leaderboard-xp-text"><i class="fa-solid fa-star" style="color:#D9A62E;"></i> ${Number(r.rating_avg || 0).toFixed(1)} (${r.rating_count || 0} avis)</span>`
    : `<span class="leaderboard-xp-text"><i class="fa-solid fa-heart" style="color:var(--rust);"></i> ${r.likes_count || 0} cœurs</span>`;
  return `
    <div class="leaderboard-row ${rank_class} ${is_me ? 'is-me' : ''}" data-recipe-id="${escape_attr(r.id)}">
      <span class="leaderboard-rank">${rank + 1}</span>
      ${cover ? `<img class="leaderboard-avatar" style="border-radius:10px;object-fit:cover;" src="${escape_attr(cover)}" alt="">` : `<div class="avatar leaderboard-avatar">🍽️</div>`}
      <div class="leaderboard-identity" style="min-width:160px;">
        <span class="leaderboard-name">${escape_html(r.title)}</span>
        <span class="leaderboard-username">par @${escape_html(author)}${is_me ? ' <span class="its-me-badge"><i class="fa-solid fa-star"></i> C\'est moi</span>' : ''}</span>
      </div>
      <div class="leaderboard-level">${stat_html}</div>
    </div>
  `;
}

async function load_recipe_ranking(kind) {
  const container = document.getElementById(kind === 'liked' ? 'leaderboard_liked_list' : 'leaderboard_rated_list');
  if (!container) return;
  if (!supabase) { container.innerHTML = `<p class="empty-state">Supabase indisponible.</p>`; return; }
  container.innerHTML = dishful_loading_html('Chargement...');

  if (leaderboard_period === 'week') {
    await load_weekly_recipe_ranking(kind, container);
    return;
  }

  let query = supabase.from('recipes').select('id, title, author_id, cover_image, images, likes_count, rating_avg, rating_count, profiles(username)');
  query = kind === 'liked'
    ? query.order('likes_count', { ascending: false }).limit(50)
    : query.not('rating_avg', 'is', null).order('rating_avg', { ascending: false }).limit(50);

  const { data, error } = await query;
  if (error) { container.innerHTML = `<p class="empty-state">Erreur : ${escape_html(error.message)}</p>`; return; }
  if (!data || data.length === 0) {
    container.innerHTML = kind === 'liked'
      ? `<p class="empty-state">Aucune recette pour l'instant.</p>`
      : `<p class="empty-state">Aucune recette notée pour l'instant.</p>`;
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
      ? `<p class="empty-state">Aucun cœur cette semaine pour l'instant.</p>`
      : `<p class="empty-state">Aucune note cette semaine pour l'instant.</p>`;
    return;
  }
  container.innerHTML = rows.map((r, i) => recipe_ranking_row_html(r, i, kind)).join('');
  container.querySelectorAll('.leaderboard-row').forEach(row => {
    row.addEventListener('click', () => show_recipe_detail_page(row.dataset.recipeId));
  });
}

async function show_recipe_detail_page(recipe_id) {
  const container = document.getElementById("single_recipe_content");
  if (!container) return;

  let recipe = all_recipes.find((r) => r.id === recipe_id);

  if (!recipe) {
    // pas encore en cache (lien direct, etc.) : on l'affiche pendant le chargement
    switch_tab("recipe-detail");
    container.innerHTML = dishful_loading_html('Chargement de la recette...');
    if (!supabase) { container.innerHTML = `<p class="empty-state">Supabase indisponible.</p>`; return; }
    const { data, error } = await supabase
      .from('recipes')
      .select('*, profiles ( username, donation_link, avatar_url )')
      .eq('id', recipe_id)
      .single();
    if (error || !data) { container.innerHTML = `<p class="empty-state">Recette introuvable.</p>`; return; }
    recipe = data;
    all_recipes.push(recipe);
  }

  switch_tab("recipe-detail");
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
          if (views_el) views_el.textContent = `${recipe.views_count} vue${recipe.views_count > 1 ? 's' : ''}`;
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
    if (btn) btn.innerHTML = '<i class="fa-solid fa-pause"></i> En cours...';
    cooking_timer_interval = setInterval(() => {
      cooking_timer_remaining--;
      if (display) display.textContent = format_timer(Math.max(cooking_timer_remaining, 0));
      if (cooking_timer_remaining <= 0) {
        stop_cooking_timer();
        if (display) display.classList.add('cooking_timer_done');
        if (btn) btn.innerHTML = '<i class="fa-solid fa-check"></i> Terminé !';
        alert('Minuteur terminé !');
      }
    }, 1000);
  }

  function render_cooking_progress_dots() {
    const steps = recipe.steps || [];
    document.getElementById('cooking_progress_dots').innerHTML = steps.map((_, i) =>
      `<span class="cooking_dot ${i === cooking_current_index ? 'active' : ''} ${i < cooking_current_index ? 'done' : ''}"></span>`
    ).join('');
  }

  function render_cooking_step() {
    const steps = recipe.steps || [];
    if (steps.length === 0) return;
    const step = steps[cooking_current_index];
    const ratio = current_servings / base_servings;
    const type_info = STEP_TYPES[step.type] || STEP_TYPES.prep;

    const media_html = step.image_url
      ? `<img class="cooking_step_media" src="${escape_attr(step.image_url)}" alt="">`
      : step.video_url
        ? `<video class="cooking_step_media" src="${escape_attr(step.video_url)}" controls></video>`
        : '';

    const ing_html = (step.ingredients || []).map(ing => {
      const scaled = ing.amount !== '' && ing.amount != null ? Math.round(Number(ing.amount) * ratio * 100) / 100 : '';
      return `<span class="tag-chip">${scaled}${escape_html(ing.unit || '')} ${escape_html(ing.name || '')}</span>`;
    }).join('');
    const tool_html = (step.tools || []).map(t => `<span class="tag-chip tool-tag-chip">${t.emoji || '🔧'} ${escape_html(t.name)}</span>`).join('');

    document.getElementById('cooking_step_card').innerHTML = `
      <div class="cooking_step_type"><i class="fa-solid ${type_info.icon}"></i> ${type_info.label}${step.oven_temp ? ' · ' + step.oven_temp + '°C' : ''}</div>
      ${media_html}
      <p class="cooking_step_text">${escape_html(step.text || '')}</p>
      ${ing_html ? `<div class="cooking_step_section"><h5><i class="fa-solid fa-carrot"></i> Ingrédients</h5><div class="step_ing_tags">${ing_html}</div></div>` : ''}
      ${tool_html ? `<div class="cooking_step_section"><h5><i class="fa-solid fa-kitchen-set"></i> Outils</h5><div class="step_ing_tags">${tool_html}</div></div>` : ''}
      ${step.time_min ? `
        <div class="cooking_timer_block">
          <span class="cooking_timer_display" id="cooking_timer_display">${format_timer(step.time_min * 60)}</span>
          <button type="button" id="cooking_timer_btn" class="btn-secondary"><i class="fa-solid fa-play"></i> Démarrer le minuteur</button>
        </div>` : ''}
    `;

    document.getElementById('cooking_step_counter').textContent = `Étape ${cooking_current_index + 1} / ${steps.length}`;
    document.getElementById('cooking_prev_btn').disabled = cooking_current_index === 0;
    document.getElementById('cooking_next_btn').innerHTML = cooking_current_index === steps.length - 1
      ? '<i class="fa-solid fa-check"></i> Terminé'
      : 'Suivant <i class="fa-solid fa-arrow-right"></i>';

    render_cooking_progress_dots();
    stop_cooking_timer();

    document.getElementById('cooking_timer_btn')?.addEventListener('click', () => start_cooking_timer(step.time_min * 60));
  }

  function render_step_html(step, ratio) {
    if (typeof step === 'string') return `<li><p>${escape_html(step)}</p></li>`;
    const type_info = STEP_TYPES[step.type] || STEP_TYPES.prep;
    const step_media = step.image_url
      ? `<img class="step_media_preview" src="${escape_attr(step.image_url)}" alt="">`
      : step.video_url
        ? `<video class="step_media_preview" src="${escape_attr(step.video_url)}" controls></video>`
        : step.external_url
          ? `<a href="${escape_attr(step.external_url)}" target="_blank" rel="noopener" class="step_external_link"><i class="fa-solid fa-link"></i> Média externe</a>`
          : '';
    const scaled_ings = (step.ingredients || []).map(ing => {
      const scaled_amount = ing.amount !== '' && ing.amount != null ? Math.round(Number(ing.amount) * ratio * 100) / 100 : '';
      return `<span class="tag-chip">${scaled_amount}${escape_html(ing.unit || '')} ${escape_html(ing.name || '')}</span>`;
    }).join('');
    const tool_chips = (step.tools || []).map(t => `<span class="tag-chip tool-tag-chip">${t.emoji || '🔧'} ${escape_html(t.name)}</span>`).join('');
    return `<li>
      <span class="step_type_badge"><i class="fa-solid ${type_info.icon}"></i> ${type_info.label}${step.oven_temp ? ' · ' + step.oven_temp + '°C' : ''}</span>
      ${step.time_min ? `<span class="step_time_badge"><i class="fa-solid fa-stopwatch"></i> ${step.time_min} min</span>` : ''}
      <p>${escape_html(step.text || '')}</p>
      ${step_detail_blocks_html(scaled_ings, tool_chips)}
      ${step_media}
    </li>`;
  }

  const STEPS_PER_PAGE = 3;
  let normal_steps_page = 0;

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
      document.getElementById("steps_page_counter").textContent = `Page ${normal_steps_page + 1} / ${total_pages}`;
      document.getElementById("steps_page_prev_btn").disabled = normal_steps_page === 0;
      document.getElementById("steps_page_next_btn").disabled = normal_steps_page === total_pages - 1;
    } else {
      pagination.classList.add("hidden");
    }
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
      render_product_list_html(used_ingredients, steps_total_qty, 'Aucun ingrédient utilisé dans les étapes');

    // La numérotation/le texte des étapes est mis à l'échelle séparément
    render_steps_page();

    document.getElementById("servings_count_display").innerText = current_servings;
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
          <span class="country_badge">${recipe.country_code ? (country_flag_from_code(recipe.country_code) || '🌍') + ' ' : ''}${escape_html(recipe.country || 'Origine inconnue')}</span>
        </div>
        ${recipe.description ? `<p class="recipe_description">${escape_html(recipe.description)}</p>` : ''}

        <div class="author_row">
          <span>Par <a href="#" id="author_profile_link" class="author_link">${escape_html(recipe.profiles?.username || 'Anonyme')}</a></span>
          <div class="author_row_actions">
            ${current_user && current_user.id === recipe.author_id ? `<button id="edit_recipe_btn" class="secondary_btn"><i class="fa-solid fa-pen"></i> Modifier</button>` : ''}
            <button id="toggle_cooking_mode_btn" class="secondary_btn"><i class="fa-solid fa-book-open"></i> Mode Cuisine</button>
          </div>
        </div>

        <div class="recipe_meta_bar">
          ${recipe.rating_count ? `<div><i class="fa-solid fa-star" style="color:#D9A62E;"></i> ${Number(recipe.rating_avg).toFixed(1)} (${recipe.rating_count} avis)</div>` : ''}
          <div><i class="fa-solid fa-eye"></i> <span id="recipe_views_count_text">${recipe.views_count || 0} vue${(recipe.views_count || 0) > 1 ? 's' : ''}</span></div>
          <div><i class="fa-regular fa-clock"></i> Temps total : ${(recipe.steps || []).reduce((sum, s) => sum + (typeof s === 'object' ? (Number(s.time_min) || 0) : 0), 0)} min</div>
          <div><i class="fa-solid fa-gauge"></i> ${escape_html((recipe.difficulty || 'moyen').charAt(0).toUpperCase() + (recipe.difficulty || 'moyen').slice(1))}</div>
          <div class="servings_calculator">
            <i class="fa-solid fa-user-group"></i> 
            <button id="btn_minus_servings">-</button>
            <span id="servings_count_display">${current_servings}</span> pers.
            <button id="btn_plus_servings">+</button>
          </div>
        </div>
      </div>

      <div class="prep_before_start">
        <h3 class="prep_before_start_title"><i class="fa-solid fa-list-check"></i> Avant de commencer</h3>
        <p class="sub-hint prep_before_start_hint">Ce qu'il te faut rassembler (ingrédients à acheter, matériel à sortir) avant de te lancer.</p>
        <div class="prep_before_start_columns">
          <div class="prep_column">
            <h4><i class="fa-solid fa-carrot"></i> Ingrédients</h4>
            <div id="ingredients_ul"></div>
          </div>
          ${(recipe.tools && recipe.tools.length) ? `
            <div class="prep_column">
              <h4><i class="fa-solid fa-kitchen-set"></i> Ustensiles</h4>
              ${render_product_list_html(recipe.tools, null, 'Aucun outil requis')}
            </div>
          ` : ''}
        </div>
      </div>

      <h3>Préparation</h3>

      <div id="steps_normal_view">
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
          <button id="cooking_prev_btn" class="btn-secondary"><i class="fa-solid fa-arrow-left"></i> Précédent</button>
          <span id="cooking_step_counter" class="cooking_step_counter"></span>
          <button id="cooking_next_btn" class="btn-secondary">Suivant <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

      <div class="recipe_footer_actions">
        <button id="like_recipe_btn" class="action-btn like-btn ${liked_recipe_ids.has(recipe.id) ? 'liked' : ''}">
          <i class="fa-solid fa-heart"></i> ${recipe.likes_count || 0} Likes
        </button>
      </div>

      <section class="comments_section">
        <h3>Commentaires</h3>
        <div class="comment_form">
          <div class="comment_rating_picker" id="comment_rating_picker" data-value="0">
            <span class="comment_rating_label">Ta note (optionnel) :</span>
            <span class="comment_rating_stars">
              <i class="fa-regular fa-star" data-star="1"></i>
              <i class="fa-regular fa-star" data-star="2"></i>
              <i class="fa-regular fa-star" data-star="3"></i>
              <i class="fa-regular fa-star" data-star="4"></i>
              <i class="fa-regular fa-star" data-star="5"></i>
            </span>
          </div>
          <textarea id="comment_input_field" placeholder="Laissez vos impressions..."></textarea>
          <button id="send_comment_btn">Publier</button>
        </div>
        <div id="recipe_comments_list">${dishful_loading_html('Chargement des commentaires...')}</div>
      </section>
    </article>
  `;

  // Événements
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
    } else {
      stop_cooking_timer();
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
async function load_recipe_comments(recipe_id) {
  const container = document.getElementById("recipe_comments_list");
  if (!container) return;
  if (!supabase) { container.innerHTML = '<div class="comment-item">Impossible de charger les commentaires (Supabase indisponible).</div>'; return; }

  const { data: comments, error } = await supabase
    .from("comments")
    .select("id, content, rating, created_at, profiles(username, avatar_url)")
    .eq("recipe_id", recipe_id)
    .order("created_at", { ascending: false });

  if (error || !comments || comments.length === 0) {
    container.innerHTML = "<p>Aucun commentaire pour l'instant. Soyez le premier !</p>";
    return;
  }

  container.innerHTML = comments.map((c) => `
    <div class="comment_item">
      <div class="comment_item_header">
        <strong>${escape_html(c.profiles?.username || "Anonyme")}</strong>
        ${render_stars_html(c.rating)}
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

  const { error } = await supabase
    .from("comments")
    .insert([{
      recipe_id: recipe_id,
      user_id: current_user.id,
      content: content,
      rating: rating_value > 0 ? rating_value : null
    }]);

  if (!error) {
    input.value = "";
    if (rating_picker) {
      rating_picker.dataset.value = 0;
      rating_picker.querySelectorAll("i").forEach(s => s.className = "fa-regular fa-star");
    }
    load_recipe_comments(recipe_id);
    load_recipes(); // rafraîchit rating_avg / rating_count en cache pour le feed et le classement
  }
}

function load_recipe_into_publish_form(recipe) {
  editing_recipe_id = recipe.id;

  document.getElementById('publish_form_title').textContent = 'Modifier la recette';
  document.querySelector('#recipe_form button[type="submit"]').innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Enregistrer les modifications';

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

async function show_public_profile_page(user_id) {
  if (!supabase) return;
  switch_tab('public-profile');

  document.getElementById('public_profile_display_name').textContent = 'Chargement...';
  document.getElementById('public_profile_username_text').textContent = '';
  document.getElementById('public_profile_bio').textContent = '';
  document.getElementById('public_profile_avatar').textContent = '';
  document.getElementById('public_profile_banner_preview').style.backgroundImage = '';
  document.getElementById('public_published_recipes').innerHTML = dishful_loading_html('Chargement du profil...');

  const [{ data: profile, error }, { data: user_recipes }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user_id).single(),
    supabase.from('recipes').select('*, profiles ( username, donation_link, avatar_url )').eq('author_id', user_id).order('created_at', { ascending: false })
  ]);

  if (error || !profile) {
    document.getElementById('public_profile_display_name').textContent = 'Utilisateur introuvable';
    document.getElementById('public_published_recipes').innerHTML = '';
    return;
  }

  const recipes = user_recipes || [];
  const total_published = recipes.length;
  const total_likes = recipes.reduce((acc, r) => acc + (r.likes_count || 0), 0);

  const display_name = [profile.first_name, profile.last_name].filter(Boolean).join(' ') || profile.username || 'Utilisateur';
  document.getElementById('public_profile_display_name').textContent = display_name;
  document.getElementById('public_profile_username_text').textContent = profile.username ? `@${profile.username}` : '';
  const bio_el = document.getElementById('public_profile_bio');
  bio_el.textContent = profile.bio || 'Pas de description.';
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
  document.getElementById('public_profile_level').textContent = `Niv. ${user_level}`;
  document.getElementById('public_profile_xp_text').textContent = `${xp_in_current_level} / 100 XP · ${xp_points} XP au total`;
  document.getElementById('public_profile_xp_fill').style.width = `${xp_percentage}%`;

  const equipped_badge_id = profile.equipped_badge || null;
  const all_badges = [...recipe_badge_list, ...like_badge_list, ...level_badge_list];
  const active_badge = all_badges.find((b) => b.id === equipped_badge_id);
  const equipped_box = document.getElementById('public_equipped_badge_box');
  if (active_badge) {
    equipped_box.innerHTML = `<div class="badge_icon">${active_badge.icon}</div><div class="badge_name">${active_badge.name}</div>`;
    document.getElementById('public_profile_equipped_badge_display').textContent = `${active_badge.icon} ${active_badge.name}`;
  } else {
    equipped_box.innerHTML = `<span>Aucun badge équipé</span>`;
    document.getElementById('public_profile_equipped_badge_display').textContent = '';
  }

  render_badge_grid('public_recipe_badges_grid', recipe_badge_list, total_published, equipped_badge_id, 'recettes', false);
  render_badge_grid('public_like_badges_grid', like_badge_list, total_likes, equipped_badge_id, 'likes', false);
  render_badge_grid('public_level_badges_grid', level_badge_list, user_level, equipped_badge_id, 'niveaux', false);

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
      alert("Veuillez saisir un titre pour la recette.");
      return false;
    }
    if (!cover_image_file && !existing_cover_image_url) {
      alert("Ajoute une photo de couverture pour ta recette.");
      return false;
    }
  }

  if (step_number === 2) {
    const checked_cats = document.querySelectorAll("#category_chips input:checked");
    if (checked_cats.length === 0) {
      alert("Veuillez sélectionner au moins une catégorie.");
      return false;
    }
    if (!country_select.value) {
      alert("Veuillez sélectionner un pays d'origine.");
      return false;
    }
  }

  if (step_number === 3) {
    if (ingredient_pool.length === 0) {
      alert("Ajoute au moins un ingrédient.");
      return false;
    }
  }

  if (step_number === 4) {
    if (recipe_steps.length === 0) {
      alert("Ajoute au moins une étape.");
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
(async function boot() {
  if (!supabase) return;
  try {
    await refresh_session();
    await load_recipes();
    // Lien direct partagé (?recipe=...) : ouvre directement la recette concernée.
    const shared_recipe_id = new URLSearchParams(location.search).get('recipe');
    if (shared_recipe_id) show_recipe_detail_page(shared_recipe_id);
  } catch (err) {
    console.error('[Dishful] Erreur au démarrage :', err);
  }
})();

})(); // fin de l'IIFE qui protège tout le fichier