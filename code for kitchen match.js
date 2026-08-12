// import React, { useState, useMemo } from "react";

// --- INGREDIENTS DATA ---
const PANTRY_CATEGORIES = {
  Produce: [
    { id: "onion", name: "Onion", local: "pyaz" },
    { id: "garlic", name: "Garlic", local: "lahsun" },
    { id: "tomato", name: "Tomato", local: "tamatar" },
    { id: "spinach", name: "Spinach", local: "palak" },
    { id: "green_chili", name: "Green Chili", local: "hari mirch" },
    { id: "ginger", name: "Ginger", local: "adrak" },
    { id: "potato", name: "Potato", local: "aloo" },
    { id: "bell_pepper", name: "Bell Pepper", local: "shimla mirch" },
    { id: "peas", name: "Peas", local: "matar" },
    { id: "carrot", name: "Carrot", local: "gajar" },
    { id: "cilantro", name: "Cilantro", local: "dhania patta" }
  ],
  Dairy: [
    { id: "butter", name: "Butter", local: "makhan" },
    { id: "ghee", name: "Ghee", local: "ghee" },
    { id: "yogurt", name: "Yogurt", local: "dahi" },
    { id: "paneer", name: "Paneer", local: "paneer" },
    { id: "cream", name: "Cream", local: "malai" },
    { id: "egg", name: "Egg", local: "anda" }
  ],
  Pantry: [
    { id: "chicken", name: "Chicken Breast", local: "murgh" },
    { id: "turmeric", name: "Turmeric", local: "haldi" },
    { id: "cumin", name: "Cumin Seeds", local: "jeera" },
    { id: "garam_masala", name: "Garam Masala", local: "garam masala" },
    { id: "coriander_pow", name: "Coriander Powder", local: "dhania powder" },
    { id: "canned_tomato", name: "Canned Tomatoes", local: "tamatar purée" },
    { id: "oats", name: "Rolled Oats", local: "oats" }
  ]
};

// --- EXPANDED RECIPE DATABASE ---
const INITIAL_RECIPES = [
  {
    id: "r1",
    name: "Butter Chicken",
    localName: "Murgh Makhani",
    cuisine: "Indian",
    diet: "Non-Veg",
    time: 40,
    baseServings: 2,
    meal: "Dinner",
    icon: "🍛",
    ingredients: [
      { id: "chicken", amount: 1.5, unit: "lb", display: "Chicken Breast" },
      { id: "butter", amount: 4, unit: "tbsp", display: "Butter" },
      { id: "canned_tomato", amount: 1, unit: "can", display: "Canned Tomatoes" },
      { id: "cream", amount: 0.5, unit: "cup", display: "Cream" },
      { id: "garlic", amount: 4, unit: "cloves", display: "Garlic" },
      { id: "ginger", amount: 1, unit: "tbsp", display: "Ginger" },
      { id: "garam_masala", amount: 2, unit: "tsp", display: "Garam Masala" }
    ],
    steps: [
      "Sear cubed chicken in butter until browned on all sides.",
      "Add minced ginger, garlic, and canned tomatoes; simmer 10 mins.",
      "Stir in garam masala and cream. Simmer until sauce thickens."
    ]
  },
  {
    id: "r2",
    name: "Paneer Bhurji",
    localName: "Spiced Scrambled Paneer",
    cuisine: "Indian",
    diet: "Vegetarian",
    time: 20,
    baseServings: 2,
    meal: "Dinner",
    icon: "🧀",
    ingredients: [
      { id: "paneer", amount: 250, unit: "g", display: "Paneer" },
      { id: "onion", amount: 1, unit: "medium", display: "Onion" },
      { id: "tomato", amount: 1, unit: "large", display: "Tomato" },
      { id: "butter", amount: 1.5, unit: "tbsp", display: "Butter" },
      { id: "turmeric", amount: 0.5, unit: "tsp", display: "Turmeric" },
      { id: "garam_masala", amount: 1, unit: "tsp", display: "Garam Masala" }
    ],
    steps: [
      "Sauté diced onions in melted butter until translucent.",
      "Add diced tomatoes, turmeric, and garam masala; cook until soft.",
      "Fold in crumbled paneer and toss well for 3–4 minutes."
    ]
  },
  {
    id: "r3",
    name: "Jeera Aloo",
    localName: "Cumin Tossed Potatoes",
    cuisine: "Indian",
    diet: "Vegan",
    time: 15,
    baseServings: 2,
    meal: "Lunch",
    icon: "🥔",
    ingredients: [
      { id: "potato", amount: 3, unit: "medium", display: "Potato" },
      { id: "cumin", amount: 1.5, unit: "tsp", display: "Cumin Seeds" },
      { id: "turmeric", amount: 0.5, unit: "tsp", display: "Turmeric" },
      { id: "green_chili", amount: 2, unit: "chopped", display: "Green Chili" },
      { id: "cilantro", amount: 2, unit: "tbsp", display: "Cilantro" }
    ],
    steps: [
      "Sizzle cumin seeds and chilies in heated oil until fragrant.",
      "Add boiled potato cubes, turmeric, and salt.",
      "Toss on medium-high heat for 5 minutes until crispy."
    ]
  },
  {
    id: "r4",
    name: "Savory Masala Oats",
    localName: "Quick Breakfast Oats",
    cuisine: "Fusion",
    diet: "Vegan",
    time: 10,
    baseServings: 1,
    meal: "Breakfast",
    icon: "🥣",
    ingredients: [
      { id: "oats", amount: 1, unit: "cup", display: "Rolled Oats" },
      { id: "peas", amount: 0.25, unit: "cup", display: "Peas" },
      { id: "carrot", amount: 0.5, unit: "diced", display: "Carrot" },
      { id: "onion", amount: 0.5, unit: "diced", display: "Onion" },
      { id: "turmeric", amount: 0.25, unit: "tsp", display: "Turmeric" },
      { id: "cumin", amount: 0.5, unit: "tsp", display: "Cumin Seeds" }
    ],
    steps: [
      "Sauté cumin, onion, carrot, and green peas for 2 minutes.",
      "Add oats, turmeric, salt, and 2 cups of water.",
      "Simmer for 4 minutes until thick and creamy."
    ]
  },
  {
    id: "r5",
    name: "Kadai Chicken",
    localName: "Spiced Bell Pepper Chicken",
    cuisine: "Indian",
    diet: "Non-Veg",
    time: 35,
    baseServings: 3,
    meal: "Dinner",
    icon: "🥘",
    ingredients: [
      { id: "chicken", amount: 1.5, unit: "lb", display: "Chicken Breast" },
      { id: "bell_pepper", amount: 1, unit: "large", display: "Bell Pepper" },
      { id: "onion", amount: 1, unit: "large", display: "Onion" },
      { id: "tomato", amount: 2, unit: "medium", display: "Tomato" },
      { id: "garam_masala", amount: 1.5, unit: "tsp", display: "Garam Masala" },
      { id: "ghee", amount: 2, unit: "tbsp", display: "Ghee" }
    ],
    steps: [
      "Sauté diced onions and chicken cubes in ghee.",
      "Add tomatoes, garam masala, and cubed bell peppers.",
      "Cover and simmer for 15 minutes until tender."
    ]
  },
  {
    id: "r6",
    name: "Egg Bhurji",
    localName: "Indian Scrambled Eggs",
    cuisine: "Indian",
    diet: "Non-Veg",
    time: 12,
    baseServings: 1,
    meal: "Breakfast",
    icon: "🍳",
    ingredients: [
      { id: "egg", amount: 3, unit: "large", display: "Egg" },
      { id: "onion", amount: 0.5, unit: "diced", display: "Onion" },
      { id: "tomato", amount: 0.5, unit: "diced", display: "Tomato" },
      { id: "green_chili", amount: 1, unit: "chopped", display: "Green Chili" },
      { id: "butter", amount: 1, unit: "tbsp", display: "Butter" },
      { id: "turmeric", amount: 0.25, unit: "tsp", display: "Turmeric" }
    ],
    steps: [
      "Sauté onion, green chili, and tomato in melted butter.",
      "Whisk eggs with turmeric and pour into the pan.",
      "Scramble gently over medium heat until soft."
    ]
  }
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function App() {
  const [pantry, setPantry] = useState(new Set(["onion", "garlic", "tomato", "butter", "turmeric", "cumin"]));
  const [activeTab, setActiveTab] = useState("browse"); // "browse" | "plan" | "shopping"
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [servingsMap, setServingsMap] = useState({});
  const [weeklyPlan, setWeeklyPlan] = useState({});
  const [maxTimeFilter, setMaxTimeFilter] = useState(45);
  const [dietFilter, setDietFilter] = useState("All");

  // Toggle Pantry Ingredient
  const toggleIngredient = (id) => {
    setPantry((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Get dynamic servings for a recipe
  const getServings = (recipe) => servingsMap[recipe.id] || recipe.baseServings;

  const handleServingChange = (recipeId, baseServings, delta) => {
    setServingsMap((prev) => {
      const current = prev[recipeId] || baseServings;
      const updated = Math.max(1, current + delta);
      return { ...prev, [recipeId]: updated };
    });
  };

  // Recipe Matching Logic
  const scoredRecipes = useMemo(() => {
    return INITIAL_RECIPES.map((recipe) => {
      const total = recipe.ingredients.length;
      const matchedCount = recipe.ingredients.filter((i) => pantry.has(i.id)).length;
      const matchRatio = matchedCount / total;
      return { ...recipe, matchedCount, total, matchRatio };
    }).sort((a, b) => b.matchRatio - a.matchRatio);
  }, [pantry]);

  // Filtered Recipes
  const filteredRecipes = useMemo(() => {
    return scoredRecipes.filter((r) => {
      const timeMatch = r.time <= maxTimeFilter;
      const dietMatch = dietFilter === "All" || r.diet === dietFilter;
      return timeMatch && dietMatch;
    });
  }, [scoredRecipes, maxTimeFilter, dietFilter]);

  // Calculate Shopping List Requirements
  const shoppingList = useMemo(() => {
    const list = {};
    Object.entries(weeklyPlan).forEach(([day, recipe]) => {
      if (!recipe) return;
      const activeServings = servingsMap[recipe.id] || recipe.baseServings;
      const scale = activeServings / recipe.baseServings;

      recipe.ingredients.forEach((ing) => {
        if (!pantry.has(ing.id)) {
          const scaledQty = ing.amount * scale;
          if (!list[ing.id]) {
            list[ing.id] = {
              name: ing.display,
              unit: ing.unit,
              amount: scaledQty,
              checked: false
            };
          } else {
            list[ing.id].amount += scaledQty;
          }
        }
      });
    });
    return list;
  }, [weeklyPlan, servingsMap, pantry]);

  return (
    <div style={styles.appContainer}>
      {/* Animated Background */}
      <div style={styles.bgBlob1} />
      <div style={styles.bgBlob2} />

      <div style={styles.contentWrapper}>
        {/* Header */}
        <header style={styles.header}>
          <span style={styles.tagline}>what's in the kitchen</span>
          <h1 style={styles.title}>Kitchen Match</h1>
          <p style={styles.subtitle}>Select your ingredients. Find matched recipes. Plan your week.</p>

          <nav style={styles.navTabs}>
            <button
              onClick={() => setActiveTab("browse")}
              style={{ ...styles.navBtn, ...(activeTab === "browse" ? styles.navBtnActive : {}) }}
            >
              📖 Browse Recipes
            </button>
            <button
              onClick={() => setActiveTab("plan")}
              style={{ ...styles.navBtn, ...(activeTab === "plan" ? styles.navBtnActive : {}) }}
            >
              📅 Weekly Plan
            </button>
            <button
              onClick={() => setActiveTab("shopping")}
              style={{ ...styles.navBtn, ...(activeTab === "shopping" ? styles.navBtnActive : {}) }}
            >
              🛒 Shopping List ({Object.keys(shoppingList).length})
            </button>
          </nav>
        </header>

        {/* BROWSE TAB */}
        {activeTab === "browse" && (
          <main>
            {/* Pantry Picker */}
            <section style={styles.card}>
              <h2 style={styles.cardHeader}>1. Tap ingredients in your pantry</h2>
              {Object.entries(PANTRY_CATEGORIES).map(([cat, items]) => (
                <div key={cat} style={{ marginBottom: 16 }}>
                  <div style={styles.categoryTitle}>{cat}</div>
                  <div style={styles.chipContainer}>
                    {items.map((item) => {
                      const active = pantry.has(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => toggleIngredient(item.id)}
                          style={{
                            ...styles.pantryChip,
                            ...(active ? styles.pantryChipActive : {})
                          }}
                        >
                          {item.name} <span style={styles.localLabel}>({item.local})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>

            {/* Filter Bar */}
            <section style={styles.filterBar}>
              <div>
                <label style={styles.filterLabel}>Diet: </label>
                <select value={dietFilter} onChange={(e) => setDietFilter(e.target.value)} style={styles.select}>
                  <option value="All">All Diets</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
              </div>
              <div>
                <label style={styles.filterLabel}>Max Time: {maxTimeFilter} mins </label>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={maxTimeFilter}
                  onChange={(e) => setMaxTimeFilter(Number(e.target.value))}
                />
              </div>
            </section>

            {/* Recipe Grid */}
            <section style={styles.recipeGrid}>
              {filteredRecipes.map((recipe) => {
                const servings = getServings(recipe);
                const percent = Math.round(recipe.matchRatio * 100);

                return (
                  <div key={recipe.id} style={styles.recipeCard}>
                    <div style={styles.recipeCardHeader}>
                      <span style={{ fontSize: 32 }}>{recipe.icon}</span>
                      <span
                        style={{
                          ...styles.matchBadge,
                          background: percent === 100 ? "#3E6B56" : percent > 50 ? "#E3A72C" : "#555"
                        }}
                      >
                        {percent}% Match ({recipe.matchedCount}/{recipe.total})
                      </span>
                    </div>

                    <h3 style={styles.recipeTitle}>{recipe.name}</h3>
                    <div style={styles.recipeSub}>{recipe.localName}</div>
                    <div style={styles.recipeMeta}>
                      <span>⏱️ {recipe.time} min</span> · <span>{recipe.diet}</span>
                    </div>

                    {/* Portion Control */}
                    <div style={styles.portionControl}>
                      <span style={{ fontSize: 13, color: "#ccc" }}>Servings:</span>
                      <div style={styles.btnGroup}>
                        <button
                          onClick={() => handleServingChange(recipe.id, recipe.baseServings, -1)}
                          style={styles.stepBtn}
                        >
                          -
                        </button>
                        <span style={styles.servingNum}>{servings}</span>
                        <button
                          onClick={() => handleServingChange(recipe.id, recipe.baseServings, 1)}
                          style={styles.stepBtn}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button onClick={() => setSelectedRecipe(recipe)} style={styles.primaryBtn}>
                      View Instructions & Ingredients
                    </button>
                  </div>
                );
              })}
            </section>
          </main>
        )}

        {/* PLANNER TAB */}
        {activeTab === "plan" && (
          <section style={styles.card}>
            <h2 style={styles.cardHeader}>Weekly Meal Plan</h2>
            <div style={styles.plannerGrid}>
              {DAYS.map((day) => (
                <div key={day} style={styles.daySlot}>
                  <strong style={{ display: "block", color: "#E3A72C", marginBottom: 8 }}>{day}</strong>
                  {weeklyPlan[day] ? (
                    <div>
                      <div style={{ fontWeight: 600 }}>{weeklyPlan[day].name}</div>
                      <div style={{ fontSize: 12, color: "#aaa" }}>
                        Servings: {servingsMap[weeklyPlan[day].id] || weeklyPlan[day].baseServings}
                      </div>
                      <button
                        onClick={() => setWeeklyPlan((p) => ({ ...p, [day]: null }))}
                        style={styles.removeBtn}
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <select
                      onChange={(e) => {
                        const rec = INITIAL_RECIPES.find((r) => r.id === e.target.value);
                        setWeeklyPlan((p) => ({ ...p, [day]: rec }));
                      }}
                      defaultValue=""
                      style={styles.select}
                    >
                      <option value="" disabled>
                        + Assign Recipe
                      </option>
                      {INITIAL_RECIPES.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SHOPPING LIST TAB */}
        {activeTab === "shopping" && (
          <section style={styles.card}>
            <h2 style={styles.cardHeader}>Auto-Generated Missing Ingredients</h2>
            {Object.keys(shoppingList).length === 0 ? (
              <p style={{ color: "#aaa" }}>
                No missing ingredients! Add recipes to your Weekly Plan or select ingredients in your pantry.
              </p>
            ) : (
              <ul style={{ listStyle: "none", padding: 0 }}>
                {Object.entries(shoppingList).map(([id, item]) => (
                  <li key={id} style={styles.shoppingItem}>
                    <input type="checkbox" style={{ marginRight: 12 }} />
                    <span>
                      <strong>{item.name}</strong> — {item.amount.toFixed(1)} {item.unit}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* RECIPE DETAIL MODAL */}
        {selectedRecipe && (
          <div style={styles.modalOverlay} onClick={() => setSelectedRecipe(null)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2>
                {selectedRecipe.icon} {selectedRecipe.name}
              </h2>
              <p style={{ fontStyle: "italic", color: "#aaa" }}>{selectedRecipe.localName}</p>

              <h3>Scaled Ingredients ({getServings(selectedRecipe)} Servings)</h3>
              <ul>
                {selectedRecipe.ingredients.map((ing) => {
                  const scale = getServings(selectedRecipe) / selectedRecipe.baseServings;
                  const qty = (ing.amount * scale).toFixed(1);
                  const inPantry = pantry.has(ing.id);
                  return (
                    <li
                      key={ing.id}
                      style={{
                        color: inPantry ? "#64C592" : "#E87C7C",
                        marginBottom: 6
                      }}
                    >
                      {inPantry ? "✓" : "✗"} {qty} {ing.unit} {ing.display}
                    </li>
                  );
                })}
              </ul>

              <h3>Instructions</h3>
              <ol style={{ paddingLeft: 20 }}>
                {selectedRecipe.steps.map((step, idx) => (
                  <li key={idx} style={{ marginBottom: 8, lineHeight: 1.5 }}>
                    {step}
                  </li>
                ))}
              </ol>

              <button onClick={() => setSelectedRecipe(null)} style={{ ...styles.primaryBtn, marginTop: 16 }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- CSS-IN-JS STYLES ---
const styles = {
  appContainer: {
    backgroundColor: "#223028",
    color: "#FAF6EC",
    minHeight: "100vh",
    fontFamily: "system-ui, -apple-system, sans-serif",
    position: "relative",
    overflow: "hidden",
    padding: "24px 16px"
  },
  bgBlob1: {
    position: "absolute",
    top: "-10%",
    left: "-10%",
    width: "40vw",
    height: "40vw",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(227,167,44,0.15) 0%, rgba(0,0,0,0) 70%)",
    filter: "blur(60px)",
    pointerEvents: "none"
  },
  bgBlob2: {
    position: "absolute",
    bottom: "-10%",
    right: "-10%",
    width: "50vw",
    height: "50vw",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(193,82,45,0.15) 0%, rgba(0,0,0,0) 70%)",
    filter: "blur(80px)",
    pointerEvents: "none"
  },
  contentWrapper: {
    maxWidth: 1000,
    margin: "0 auto",
    position: "relative",
    zIndex: 1
  },
  header: {
    textAlign: "center",
    marginBottom: 32
  },
  tagline: {
    color: "#E3A72C",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 2
  },
  title: {
    fontSize: 38,
    margin: "4px 0 8px 0"
  },
  subtitle: {
    color: "#a0aab0",
    fontSize: 14
  },
  navTabs: {
    display: "flex",
    justifyCenter: "center",
    gap: 8,
    marginTop: 20
  },
  navBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#FAF6EC",
    padding: "8px 16px",
    borderRadius: 20,
    cursor: "pointer"
  },
  navBtnActive: {
    background: "#E3A72C",
    color: "#223028",
    fontWeight: "bold"
  },
  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: 16,
    padding: 24,
    marginBottom: 24
  },
  cardHeader: {
    margin: "0 0 16px 0",
    fontSize: 18,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    paddingBottom: 8
  },
  categoryTitle: {
    fontSize: 12,
    color: "#E3A72C",
    textTransform: "uppercase",
    marginBottom: 8
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  },
  pantryChip: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#FAF6EC",
    padding: "6px 12px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 13
  },
  pantryChipActive: {
    background: "#E3A72C",
    color: "#223028",
    fontWeight: "600",
    transform: "rotate(-1deg)"
  },
  localLabel: {
    opacity: 0.7,
    fontSize: 11
  },
  filterBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    background: "rgba(0,0,0,0.2)",
    padding: "12px 20px",
    borderRadius: 12
  },
  filterLabel: {
    fontSize: 14,
    marginRight: 8
  },
  select: {
    background: "#223028",
    color: "#FAF6EC",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "6px 10px",
    borderRadius: 6
  },
  recipeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 16
  },
  recipeCard: {
    background: "#FAF6EC",
    color: "#223028",
    borderRadius: 12,
    padding: 2
  
