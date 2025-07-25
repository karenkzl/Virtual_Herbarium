const plants = [
  {
    name: "Ceibo (Erythrina crista-galli)",
    country: "Argentina",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Erythrina_crista-galli_flower.jpg/640px-Erythrina_crista-galli_flower.jpg",
    description: "The national flower of Argentina, known for its striking red flowers."
  },
  {
    name: "Jacarandá (Jacaranda mimosifolia)",
    country: "Argentina",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Jacaranda_mimosifolia_Brisbane.jpg/640px-Jacaranda_mimosifolia_Brisbane.jpg",
    description: "A native tree with beautiful purple-blue blossoms."
  },
  {
    name: "Silver Fir (Abies alba)",
    country: "Germany",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Abies_alba_190308.jpg/640px-Abies_alba_190308.jpg",
    description: "A native fir species common in Germany's mountainous regions."
  },
  {
    name: "European Beech (Fagus sylvatica)",
    country: "Germany",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Fagus_sylvatica_Rax_20050626.jpg/640px-Fagus_sylvatica_Rax_20050626.jpg",
    description: "A dominant forest tree species in Germany, known for its smooth gray bark."
  }
];

const plantsGrid = document.getElementById('plantsGrid');

plants.forEach(plant => {
  const card = document.createElement('div');
  card.className = 'plant-card';

  card.innerHTML = `
    <img src="${plant.image}" alt="${plant.name}">
    <div class="info">
      <h3>${plant.name}</h3>
      <p><strong>Native to:</strong> ${plant.country}</p>
      <p>${plant.description}</p>
    </div>
  `;
  plantsGrid.appendChild(card);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});