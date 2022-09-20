/*You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.*/

let input = [
  { type: 'rotten apples', material: 'organic' },
  {
    type: 'out of date yogurt',
    material: 'organic',
    secondMaterial: 'plastic',
  },
  { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
  { type: 'amazon box', material: 'paper' },
  { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
];



function recycle(objects) {
  const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];
  return recyclerMaterials.map((m) =>
    objects
      .filter((o) => o.material == m || o.secondMaterial == m)
      .map((o) => o.type)
  );
}

console.log(recycle(input));
